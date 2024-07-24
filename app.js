let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let userScoreDisplay = document.querySelector("#userscore");
let compScoreDisplay = document.querySelector("#compscore");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawgame = () => {
    console.log("Game is draw");
    message.innerText = "The game is a draw, play again";
    message.style.backgroundColor = "black";
};

const showwinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        console.log("You won");
        message.innerText = `You win! Lucky head. Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
        userScore++;
        userScoreDisplay.innerText = userScore;
    } else {
        console.log("You lost");
        message.innerText = `You lost, Noob. ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
        compScore++;
        compScoreDisplay.innerText = compScore;
    }
};

const playgame = (choiceId) => {
    console.log("UserChoice was =", choiceId);
    const compChoice = genCompChoice();
    console.log("CompChoice =", compChoice);

    if (choiceId === compChoice) {
        drawgame();
    } else {
        let userwin = true;
        if (choiceId === "rock") {
            userwin = compChoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userwin = compChoice === "scissors" ? false : true;
        } else {
            userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, choiceId, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playgame(choiceId);
    });
});
