let players = ["Player 1", "Player 2"];
let currentPlayer = 0;
let marvelCharacters = []; // Keep track of named characters
let timer;
let timeLeft = 20;

const characterInput = document.getElementById('character-input');
const submitButton = document.getElementById('submit-button');
const currentTurn = document.getElementById('current-turn');
const timeDisplay = document.getElementById('time');
const gameResult = document.getElementById('game-result');

function startTimer() {
    clearInterval(timer);
    timeLeft = 20;
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameResult.textContent = players[currentPlayer] + " loses! Time ran out!";
            submitButton.disabled = true;
        }
    }, 1000);
}

submitButton.addEventListener('click', () => {
    const character = characterInput.value.trim().toLowerCase();
    if (character && !marvelCharacters.includes(character)) {
        marvelCharacters.push(character);
        characterInput.value = '';
        currentPlayer = (currentPlayer + 1) % 2;
        currentTurn.textContent = players[currentPlayer] + "'s turn to name a character";
        startTimer();
    } else if (marvelCharacters.includes(character)) {
        gameResult.textContent = "That character has already been named!";
    }
});

startTimer();
