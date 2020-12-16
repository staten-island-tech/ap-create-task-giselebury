import {words, word} from "./words";

const DOMSelectors = {
    score: document.querySelector(".hangman-score"),
    words: document.querySelector(".hangman-words")
}

const indexNumber = function getNumber() {
    return Math.floor(Math.random() * 2);
}

function getWord() {
   const randomWord = words.forEach((words) => 
    DOMSelectors.words.insertAdjacentHTML("beforeend",
    `<p>${word[indexNumber()]}</p>`
    )
    );
}

getWord(); 

console.log(words[indexNumber()])




