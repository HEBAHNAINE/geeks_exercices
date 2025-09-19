let input = prompt("Enter some words separated by commas:");
let words = input.split(",").map(w => w.trim());
let maxLength = 0;
for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}
let border = "*".repeat(maxLength + 4);
console.log(border);
for (let word of words) {
  let spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
}
console.log(border);
