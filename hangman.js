class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.gessedLetters = [];
    this.status = "Playing";
  }

  get puzzle () {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.gessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    if (this.status === "Playing") {
      guess = guess.toLowerCase();
      const isUnique = !this.gessedLetters.includes(guess);
      const isBadGuess = !this.word.includes(guess);

      if (isUnique) {
        this.gessedLetters.push(guess);
      }
      if (isUnique && isBadGuess) {
        this.remainingGuesses--;
        console.log(`The ${guess} character is not contained. Try again...`);
      }
      this.statusMessage;
    }
  }

  get statusMessage() {
    const finished = this.word.every((letter) => this.gessedLetters.includes(letter) || letter === ' ');

    if (this.remainingGuesses === 0) {
      this.status = "Failed";
      message.textContent = `Nice Try! The word was "${this.word.join("")}"`;
    } else if (finished) {
      this.status = "Finished";
      message.textContent = `Great work! You guessed the word!`;
    }
    return this.status;
  }
}


