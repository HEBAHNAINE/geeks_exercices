//  Exercise 1 : Promise.all()
// =============================

// Déclaration des 3 promesses
const promise1 = Promise.resolve(3);
const promise2 = 42; // une simple valeur est considérée comme une promesse déjà résolue
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

// Utilisation de Promise.all()
Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); //  [3, 42, "foo"]
  })
  .catch(error => {
    console.log('Une promesse a été rejetée:', error);
  });

/*
Promise.all() prend un tableau de promesses (ou de valeurs).
promise1 se résout immédiatement avec 3
promise2  est déjà une valeur (42)
promise3  se résout après 3 secondes avec "foo"
Donc la sortie finale après 3 secondes : [3, 42, "foo"]
*/



//  Exercise 2 : Analyse Promise.all()
// =====================================

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];

// On transforme chaque élément en promesse
const promiseArr = arr.map(timesTwoAsync);

// On exécute toutes les promesses en parallèle
Promise.all(promiseArr)
  .then(result => {
    console.log(result); // [2, 4, 6]
  });

/*
  arr = [1, 2, 3], map(timesTwoAsync) cree [Promise(2), Promise(4), Promise(6)], Promise.all() attend que toutes les promesses soient résolues, Résultat final : [2, 4, 6]
*/
