import {words, alphabet} from "./words";

const DOMSelectors = {
    game: document.querySelector(".hangman-game"),
    score: document.querySelector(".hangman-score"),
    words: document.querySelector(".hangman-words"),
    playBtn: document.querySelector(".play-btn"),
    hangman: document.querySelector(".hangman"),
    guess: document.querySelector('.hangman-guess')
}


let answer;

function randomWord() {
    answer = words[Math.floor(Math.random() * 10)]
    console.log(answer);
}


function start(){
    DOMSelectors.playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        DOMSelectors.playBtn.style.display = "none";
        randomWord()
        alphabet.forEach((letter) => DOMSelectors.guess.insertAdjacentHTML("beforeend", 
        `<button class="guess-btn"></button>`
        ))
    })
}




start();
userInput();

//check input








