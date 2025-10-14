//  Challenge 1 : makeAllCaps & sortWords
// Fonction makeAllCaps()
function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    // Vérifier que tous les éléments sont des strings
    if (words.every(word => typeof word === "string")) {
      const uppercased = words.map(word => word.toUpperCase());
      resolve(uppercased);
    } else {
      reject("❌ Erreur : tous les éléments doivent être des chaînes de caractères !");
    }
  });
}

// Fonction sortWords()
function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      const sorted = words.sort();
      resolve(sorted);
    } else {
      reject("❌ Erreur : le tableau doit contenir plus de 4 mots !");
    }
  });
}

//  Tests
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Résultat :", result))
  .catch(error => console.log(error));
// tous les éléments doivent être des chaînes de caractères !

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Résultat :", result))
  .catch(error => console.log(error));
// le tableau doit contenir plus de 4 mots !

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log("✅ Résultat final :", result))
  .catch(error => console.log(error));
// ["APPLE","BANANA","KIWI","MELON","PEAR"]

// 🌟 Challenge 2 : Morse Code Promises

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;


//toJs() → Convertit le JSON string en objet JS
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);

    if (Object.keys(morseJS).length === 0) {
      reject("❌ Erreur : l’objet Morse est vide !");
    } else {
      resolve(morseJS);
    }
  });
}


//toMorse() Demande une phrase et traduit chaque caractère
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Entre un mot ou une phrase à traduire en Morse :")
      .toLowerCase();

    const translation = [];

    for (const char of userInput) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`❌ Caractère "${char}" non trouvé dans le code Morse.`);
        return;
      }
    }

    resolve(translation);
  });
}


//joinWords() Affiche le résultat sur la page (DOM)
function joinWords(morseTranslation) {
  const container = document.createElement("div");
  container.style.whiteSpace = "pre-line"; // permet le saut de ligne
  container.textContent = morseTranslation.join("\n");
  document.body.appendChild(container);
}


toJs()
  .then(result => toMorse(result))
  .then(translation => joinWords(translation))
  .catch(err => console.log(err));
