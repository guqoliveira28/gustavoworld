import Styles from "./Tictactoe.module.scss";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ turns, onPlay }) {
  let gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])];

  for (const turn of turns) {
    const { play, player } = turn;
    gameBoard[play.row][play.col] = player.symbol;
  }

  /* function handlePlay(rowIndex, colIndex) {
        if (!gameBoard[rowIndex][colIndex]) {
            setGameBoard((prevGameBoard) => {
                const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
                newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
                return newGameBoard;
            });
            onPlay();
        }
    } */

  return (
    <ol id={Styles.gameBoard}>
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onPlay(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
