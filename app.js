// Selectors
const word = document.querySelector("#word");
const remainGuesses = document.querySelector("#remain-guesses");
const message = document.querySelector('#message')

const game01 = new Hangman("Car Parts", 2);
const game02 = new Hangman("New Jersey", 5);

word.textContent = game01.puzzle;
remainGuesses.textContent = game01.remainingGuesses;
message.textContent= ''

game01.statusMessage;

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game01.makeGuess(guess);
  word.textContent = game01.puzzle;
  remainGuesses.textContent = game01.remainingGuesses;
});


