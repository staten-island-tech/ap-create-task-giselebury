import {words, alphabet} from "./words";

const DOMSelectors = {
    game: document.querySelector(".hangman-game"),
    score: document.querySelector(".hangman-score"),
    words: document.querySelector(".hangman-words"),
    playBtn: document.querySelector(".play-btn"),
    hangman: document.querySelector(".hangman"),
    guess: document.querySelector('.hangman-guess'),
    guessBtn: document.querySelector(".guess-btn")
}


let answer;
let guesses = [];

//get random word and display dashes
function randomWord(){
    answer = words[Math.floor(Math.random() * 10)]
    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
        DOMSelectors.words.innerHTML += "_ "
    }
}

//start the game
function start(){
    DOMSelectors.playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        DOMSelectors.playBtn.style.display = "none";
        randomWord()
        alphabet.forEach((letter) => DOMSelectors.guess.insertAdjacentHTML("beforeend", 
        `<button class="guess-btn" id = "${letter}">${letter}</button>`
        ))
    })

}

//check if letter clicked is a letter in word
function checkLetter() {
    DOMSelectors.guessBtn.addEventListener("click", (e) => {
        guess = e.target.value;
        console.log(guess)
    })
}



start();
checkLetter();









