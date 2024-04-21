let maximum = parseInt(prompt("To start, enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! Or type 'q' to quit")
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess == 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess");
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt("Too low! Enter a new guess");
        attempts++;
    } else {
        guess = prompt("Invalid guess. Enter a number or type 'q' to quit");
    }
}

if (guess === 'q') {
    console.log("You quit :(")
} else {
    console.log("YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}