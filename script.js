// let data = [
//     'jafar',
//     'abdulaziz',
//     'kamron',
//     'yahiyo'
// ]

// console.log(data);



let words = ['non', 'banan', 'mashina', 'asal', 'olma', 'aziza', 'Gul'];

let wordsWithN = [];
let wordsWithoutN = [];

for (let word of words) {
  if (word.includes('poka')) {
    wordsWithN.push(word);
  } else {
    wordsWithoutN.push(word);
  }
}

console.log(wordsWithN, "'n' harfi ishtirok etgan so'zlar");
console.log(wordsWithoutN, "'n' harfi ishtirok etmagan so'zlar");

