import imageList from "./imageList.js";

document.addEventListener("DOMContentLoaded", () => {
    const playerPickElement = document.getElementById("playerPick");
    const magicianPickElement = document.getElementById("magicianPick");

    window.pickACard = function () {
        // At the start of pickACard, hide the button
        document.querySelector("button").style.display = "none";
        // Ensure there are images to pick from
        if (!imageList || imageList.length === 0) {
            console.error("No images available");
            return;
        }

        // Randomly pick a player's card
        const playerCardIndex = Math.floor(Math.random() * imageList.length);
        const playerCard = imageList[playerCardIndex];
        playerPickElement.innerHTML = `<img src="${playerCard}" alt="Player's Card">`;

        // Display the message "Let me read your mind"
        magicianPickElement.textContent =
            "Let me read your mind\nPlease wait...";

        // Delay 1: Simulate the magician taking time to make their pick
        setTimeout(() => {
            // Prepare an array for the magician's pick: player's card x3 + 1 random card
            let magicianOptions = [
                playerCard,
                playerCard,
                playerCard,
                imageList[Math.floor(Math.random() * imageList.length)], // This could be the same as playerCard
            ];

            // Randomly pick one card from the magician's options
            const magicianCard =
                magicianOptions[
                    Math.floor(Math.random() * magicianOptions.length)
                ];

            // Delay 2: Show the magician's card after the message
            setTimeout(() => {
                // Hide the magician's message before showing the card
                magicianPickElement.textContent = "";

                magicianPickElement.innerHTML = `<img src="${magicianCard}" alt="Magician's Card">`;

                // Delay 3: Show button again after the magician's pick is revealed
                setTimeout(() => {
                    document.querySelector("button").style.display = "block"; // Show button again
                }, 2000); // Adjust to match the timeout used for the magician's guess
            }, 2000); // Delay 2: Time for the magician to make their pick
        }, 1000); // Delay 1: Time before the magician starts picking
    };
});
