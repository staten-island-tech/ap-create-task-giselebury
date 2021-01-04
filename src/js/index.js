import {words} from "./words";

const DOMSelectors = {
    game: document.querySelector(".hangman-game"),
    playBtn: document.querySelector(".play-btn"),
    hangman: document.querySelector(".hangman"),
    words: document.querySelector(".hangman-words"),
    letter: document.querySelector(".hangman-letters"),
    guess: document.getElementById('guesses')

}


let answer;
let guessed = [];
let num = 10;

//get random word and display dashes
function randomWord(){
    answer = words[Math.floor(Math.random() * 10)]
    console.log(answer);
    for (let i = 0; i < answer.length; i++) {
        let button = document.createElement('button');
        button.classList.add('guess-btn');
        button.innerHTML += '_';
        DOMSelectors.words.append(button);
        guessed.push('_');
    } 
}


//start the game
function start(){
    DOMSelectors.playBtn.addEventListener("click", (e) => {
        e.preventDefault();
        DOMSelectors.playBtn.style.display = "none";
        randomWord();
        createButton();

    })
}


const createButton = () => {
    let start = 'a'
    let end = 'z'
    for (let i = start.charCodeAt(); i<= end.charCodeAt(); i++) {
        //console.log(String.fromCharCode(i));
        let newBtn = document.createElement('button');
        newBtn.classList.add('letter-btn');
        newBtn.innerHTML = String.fromCharCode(i);
        newBtn.onclick = guessLetter;
        DOMSelectors.letter.append(newBtn);
    }
}

//check if letter clicked is a letter in word
const guessLetter = (e) => {
    console.log(e.target.textContent);
    e.target.classList.add('btn-click');
    let currentGuess = e.target.textContent; //here
    for (let i = 0; i < answer.length; i++){
        if(currentGuess === answer[i]){
            let correctEle = DOMSelectors.words.children[i];
            correctEle.innerHTML = currentGuess;
            guessed[i] = currentGuess;
        }
    }
    num--;
    DOMSelectors.guess.innerHTML = num;

    console.log(guessed);
    if (checkWin()){
        alert('You win!');
        endGame();
    } else if (num === 0) {
        alert('Game Over')
        endGame();
    }
}

// check win
const checkWin = () => {
    let win = false
    if (!guessed.includes('_')){
        win = true
    }
    return win
}

const endGame = () => {
    let btn = document.createElement('button');
    btn.classList.add('play-btn');
    btn.innerHTML = 'Play Again'
    btn.onclick = function () {
        window.location.reload();
    }
    DOMSelectors.game.append(btn);
}

start();










