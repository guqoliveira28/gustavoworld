import Styles from "./Tictactoe.module.scss";

export default function GameOver({ winner, reset }) {
  return (
    <div className={Styles.gameover}>
      <h2>Game Over!</h2>
      {winner && <p>{winner.name.toUpperCase()} has won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <div className={Styles.reset}>
        <button onClick={() => reset()}>Restart</button>
      </div>
    </div>
  );
}
