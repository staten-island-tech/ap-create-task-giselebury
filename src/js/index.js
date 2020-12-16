import {words} from "./words";

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
    `<p>${words[indexNumber()]}</p>`
    )
    );
}

getWord(); 

console.log(words[1])




