let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false; // Flag to indicate if the game is over

function checkWinner() {
  if (
    (arr[0] != null && arr[0] === arr[1] && arr[1] === arr[2]) || // Row 1
    (arr[3] != null && arr[3] === arr[4] && arr[4] === arr[5]) || // Row 2
    (arr[6] != null && arr[6] === arr[7] && arr[7] === arr[8]) || // Row 3
    (arr[0] != null && arr[0] === arr[3] && arr[3] === arr[6]) || // Column 1
    (arr[1] != null && arr[1] === arr[4] && arr[4] === arr[7]) || // Column 2
    (arr[2] != null && arr[2] === arr[5] && arr[5] === arr[8]) || // Column 3
    (arr[0] != null && arr[0] === arr[4] && arr[4] === arr[8]) || // Diagonal 1
    (arr[2] != null && arr[2] === arr[4] && arr[4] === arr[6]) // Diagonal 2
  ) {
    // Add the winner message back
    document.body.innerHTML += `<p>Winner is ${currentPlayer}</p>`;
    gameOver =true;// Set the game over flag to true

    showNewGameButton();
    return;
  }

  if (!arr.some((e) => e === null)) {
    document.body.innerHTML += `<p>It's a DRAW !!!! </p>`;
    gameOver =true;// Set the game over flag to true
    showNewGameButton();
    return;
  }
}

function showNewGameButton() {
  // remove already existing button
  const existingBtn = document.getElementById("startButton");
  if (existingBtn) {
    existingBtn.remove();
  }
  const startButtonElement = document.createElement("button");
  startButtonElement.innerText = "Start new Game";

  // Assign an ID to the button
  startButtonElement.id = "startButton";

  // Pass the reference to the clearBoard function, not its result
  startButtonElement.onclick = clearBoard;

  document.body.appendChild(startButtonElement);
}

function clearBoard() {
  // Get all elements with the class "col"
  const cells = document.querySelectorAll(".col");

  // Loop through each cell and clear the text
  cells.forEach((cell) => {
    cell.innerText = ""; // Clears the text inside the cell
  });

  // Optionally, reset the game state array
  arr = Array(9).fill(null); // Resets the game state array
  currentPlayer = "X"; // Resets the player
  gameOver = false; // Reset the game over flag

  // Remove any text related to winner or draw
  document.querySelectorAll("p").forEach((p) => p.remove());

  // Remove the button after resetting
  document.querySelector("button").remove();
}

function handleClick(el) {
  const id = Number(el.id);

   // Prevent clicks if the game is over
   if (gameOver) return;

  if (arr[id] == null) {
    arr[id] = currentPlayer;

    el.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log(arr);
  }
}
