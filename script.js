
const cells = document.querySelectorAll('.cell');
const resultDiv = document.querySelector('.result');
const resetBtn = document.querySelector('.reset-btn');
let currentPlayer = 'X';
let moves = 0;
let gameWon = false;

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[b].textContent === cells[c].textContent) {
            cells[a].style.backgroundColor = 'lightgreen';
            cells[b].style.backgroundColor = 'lightgreen';
            cells[c].style.backgroundColor = 'lightgreen';
            resultDiv.textContent = `Player ${currentPlayer} wins!`;
            gameWon = true;
            break;
        }
    }

    if (!gameWon && moves === 9) {
        resultDiv.textContent = 'It\'s a draw!';
    }
}

function handleClick(cell) {
    if (!gameWon && !cell.textContent) {
        cell.textContent = currentPlayer;
        cell.classList.add(`player${currentPlayer}`);
        moves++;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = '';
        cell.classList.remove('playerX', 'playerO');
    });
    resultDiv.textContent = '';
    currentPlayer = 'X';
    moves = 0;
    gameWon = false;
}
