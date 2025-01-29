const quotes = [
    "quotes 1",
    "quotes 2",
    "quotes 3",
    "quotes 4",
    "quotes 5", 
]

// set data structure for store uniques values
const usedIndexes = new Set()
const quoteElem = document.getElementById("quote")

function generateQuote(){
    const randomIdx = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIdx]
    quoteElem.innerHTML = quote;
}