import Styles from "./Tictactoe.module.scss";

export default function Logs({ turns }) {
  let turnNumber = 0;
  return (
    <div className={Styles.logs}>
      <p>Play history</p>
      <ol>
        {turns.map((turn) => (
          <li key={turnNumber++}>
            {turn.player.name} played {turn.player.symbol} at {turn.play.row},{" "}
            {turn.play.col}
          </li>
        ))}
      </ol>
    </div>
  );
}
