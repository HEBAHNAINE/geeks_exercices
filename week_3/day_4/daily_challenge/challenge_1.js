const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const storyTemplates = [
  (noun, adj, person, verb, place) => 
    `One day, ${person} took a ${adj} ${noun} and decided to ${verb} at ${place}.`,
  (noun, adj, person, verb, place) => 
    `${person} found a ${adj} ${noun} while trying to ${verb} near ${place}.`,
  (noun, adj, person, verb, place) => 
    `In ${place}, ${person} couldn't stop ${verb} with a ${adj} ${noun}.`
];

function generateStory(values) {
  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  return storyTemplates[randomIndex](...values);
}
form.addEventListener("submit", function(e) {
  e.preventDefault(); 

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Veuillez remplir tous les champs !");
    return;
  }
  const story = generateStory([noun, adjective, person, verb, place]);
  storySpan.textContent = story;
});

// BONUS
const shuffleBtn = document.createElement("button");
shuffleBtn.textContent = "Shuffle Story";
document.body.appendChild(shuffleBtn);

shuffleBtn.addEventListener("click", () => {
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Remplissez d'abord le formulaire !");
    return;
  }
  const story = generateStory([noun, adjective, person, verb, place]);
  storySpan.textContent = story;
});
