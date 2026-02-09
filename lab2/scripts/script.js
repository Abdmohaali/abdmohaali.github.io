console.log("running");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let correctNumber = getRandomInt(0,101);

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");




guessButton.addEventListener("click", function () {

    let guessInput = document.querySelector("#guessInput");
    console.log(guessInput.value);

    if (correctNumber == guessInput.value) {
        guessResult.textContent = "Congratulations!";
        guessResult.style.color = "purple";
    } else if(correctNumber < guessInput.value){
        guessResult.textContent = "Guess is too high";
        guessResult.style.color = "orange";
    } else if(correctNumber > guessInput.value){
        guessResult.textContent = "Guess is too low";
        guessResult.style.color = "black";
    }
});