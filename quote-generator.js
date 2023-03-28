let quotes = [
    ["Codez comme si la personne qui finit par maintenir votre code est un psychopathe violent qui sait où vous vivez.", "Jeff Atwood"],
    ["N’importe quel idiot peut écrire du code qu'un ordinateur peut comprendre. Les bons programmeurs écrivent du code que les humains peuvent comprendre.", "Martin Fowler"],
    ["Ajouter des personnes à un projet en retard accroît son retard", "Frederick Brooks"],
    ["N'importe quel code que vous avez écrit depuis 6 mois ou plus sans y regarder pourrait tout aussi bien avoir été écrit par quelqu'un d'autre", "Alan Eagleson"],
];

const quote = document.getElementById("quote")
const author = document.getElementById("author")
const generate = document.getElementById("generate")

let last = 0

function getRandomInt(max) {
    if (isNaN(max) || max < 0) {
        return 1
    } else {
        return Math.floor(Math.random() * (Math.floor(max) + 1));
    }
}

generate.addEventListener("click", newQuote)

function newQuote() {
    let randomNumber = 0
    let quotesLength = quotes.length
    if (quotesLength > 1) {
      do {
        randomNumber = getRandomInt(quotesLength)
      } 
      while (randomNumber === last)
    }
    last = randomNumber
    if (quotesLength > 0) {
      quote.textContent = quotes[last][0]
      author.textContent = quotes[last][1]
    } else {
      quote.textContent = ""
      author.textContent = ""
    }
  }