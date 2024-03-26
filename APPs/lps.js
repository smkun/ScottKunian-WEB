// Play game and display results
function playGame(playerChoice) {
    const choices = ["lapis", "papyrus", "scalpellus"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let resultMessage = "";

    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);

    // Update the Anubis choice message
    document.getElementById(
        "anubisChoiceMessage"
    ).innerText = `Anubis has chosen ${computerChoice}`;

    // Display the image for Anubis's choice
    const choiceImageMap = {
        lapis: "../Images/lapis.png",
        papyrus: "../Images/papyrus.png",
        scalpellus: "../Images/scalpellus.png",
    };
    document.getElementById(
        "anubisChoiceImage"
    ).innerHTML = `<img src="${choiceImageMap[computerChoice]}" alt="${computerChoice}" class="computer-choice-image">`;

    // Who wins with result images and text
    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
    } else if (
        (playerChoice === "lapis" && computerChoice === "scalpellus") ||
        (playerChoice === "papyrus" && computerChoice === "lapis") ||
        (playerChoice === "scalpellus" && computerChoice === "papyrus")
    ) {
        resultMessage = "You win!";
    } else {
        resultMessage = "Anubis wins!";
    }
    let outcomeImageFile = "";
    if (resultMessage === "You win!") {
        outcomeImageFile = "../Images/AnubisAngry.png";
        outcomeText = "Anubis ANGRY!!";
    } else if (resultMessage === "It's a tie!") {
        outcomeImageFile = "../Images/AnubisSad.png";
        outcomeText = "Anubis sad.";
    } else if (resultMessage === "Anubis wins!") {
        outcomeImageFile = "../Images/AnubisHappy.png";
        outcomeText = "Anubis HAPPY!!";
    }

    // Display result message on the webpage
    document.getElementById("result").innerText = resultMessage;
    document.getElementById(
        "outcomeImage"
    ).innerHTML = `<img src="${outcomeImageFile}" alt="Outcome Image" class="anubis-outcome-image">`;
    document.getElementById("outcomeText").innerText = outcomeText;
}

// Add event listeners to the buttons
document.getElementById("lapis").addEventListener("click", function () {
    playGame("lapis");
});

document.getElementById("papyrus").addEventListener("click", function () {
    playGame("papyrus");
});

document.getElementById("scalpellus").addEventListener("click", function () {
    playGame("scalpellus");
});
