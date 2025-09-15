// ====== Daily Challenge 1
let sentence = "This dinner is not so bad! You cook well";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(newSentence);
  } else {
    console.log(sentence);
  }
// ====== Daily Challenge 2

// ====== Daily Challenge 3
