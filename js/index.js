const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy"
];

let lastIndex = -1;

function displayRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    const quoteBox = document.getElementById("quoteBox");
    quoteBox.textContent = quotes[randomIndex];
    lastIndex = randomIndex;


    quoteBox.classList.add("quote-box-border");

}