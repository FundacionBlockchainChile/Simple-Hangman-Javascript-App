// Selectors
const puzzleEl = document.querySelector("#word");
const guessesEl = document.querySelector("#remain-guesses");
const message = document.querySelector("#message");
let game01

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game01.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.textContent = game01.puzzle;
  guessesEl.textContent = game01.statusMessage;
  message.textContent = "";
}

const starGame = async () => {
  const puzzle = await getPuzzle('2')
  game01 = new Hangman(puzzle, 5);
  render()
}

document.querySelector("#reset").addEventListener("click", starGame);
starGame()

// getPuzzle("8").then((puzzle) => {
//     console.log(puzzle);
//   }).catch((err) => {
//     console.log(`Error: ${err}`)
//   })

// getCountry("US")
//   .then((country) => {
//     console.log(country);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getIPInfo().then((IpInfo) => {
//     console.log(IpInfo.country);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCountryDetails('CL').then((country) => {
//   console.log(country)
// }, (err) => {
//   console.log(`Error: ${err}`)
// })

// fetch("http://puzzle.mead.io/puzzle", {}).then((response) => {
//   if (response.status === 200) {
//     return response.json()
//   } else {
//     throw new Error('Unable to fetch the puzzle')
//   }
// }).then((data) => {
//   console.log(data.puzzle)
// }).catch((error) => {
//   console.log(error)
// })
