let rollDiceButton = document.getElementById('rollDice');
        let resultDiv = document.getElementById('result');

        rollDiceButton.addEventListener('click', () => {
            let getDiceResult = () => Math.floor(Math.random() * 6) + 1;

            let player1Value = getDiceResult();
            let player2Value = getDiceResult();

            let diceImages = ["dice1.jpg", "dice2.jpg", "dice3.jpg", "dice4.jpg", "dice5.jpg", "dice6.jpg"];

            let diceImage = (playerValue) => `<img src="images/${diceImages[playerValue - 1]}" alt="Player" class="dice-img">`;

            resultDiv.innerHTML = `Player 1 ${diceImage(player1Value)} ${diceImage(player2Value)} Player 2`;

            if (player1Value > player2Value) {
                resultDiv.innerHTML += `<br>Player 1 wins!`;
            } else if (player2Value > player1Value) {
                resultDiv.innerHTML += `<br>Player 2 wins!`;
            } else {
                resultDiv.innerHTML += `<br>It's a Tie! No Winner!`;
            }
        });