import React, { useState } from "react";
import Styles from "./Tictactoe.module.scss";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Logs from "./Logs";
import GameOver from "./GameOver";

const playerArray = [
  {
    name: "Player 1",
    symbol: "X",
  },
  {
    name: "Player 2",
    symbol: "O",
  },
];

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

function deriveActivePlayer(gameTurns) {
  let currentPlayer = playerArray[0];

  if (
    gameTurns.length > 0 &&
    shallowEqual(gameTurns[0].player, currentPlayer)
  ) {
    currentPlayer = playerArray[1];
  }
  return currentPlayer;
}

function checkWin(gameTurns, player) {
  const playerPlays = gameTurns.filter((turn) =>
    shallowEqual(turn.player, player)
  );
  const rowColCount = {
    rows: [0, 0, 0],
    cols: [0, 0, 0],
    diagL: 0,
    diagR: 0,
  };
  for (const turn of playerPlays) {
    rowColCount.rows[turn.play.row]++;
    rowColCount.cols[turn.play.col]++;
    if (turn.play.row === turn.play.col) {
      rowColCount.diagL++;
      if (turn.play.row === 1) {
        rowColCount.diagR++;
      }
    } else if (
      (turn.play.row === 0 && turn.play.col === 2) ||
      (turn.play.row === 2 && turn.play.col === 0)
    ) {
      rowColCount.diagR++;
    }
  }
  if (
    rowColCount.rows.find((r) => r === 3) ||
    rowColCount.cols.find((c) => c === 3) ||
    rowColCount.diagL === 3 ||
    rowColCount.diagR === 3
  ) {
    return true;
  }
  return false;
}

export default function Tictactoe() {
  const [players, setPlayers] = useState(playerArray);
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);

  let win = false;
  let draw = false;

  function handleGameTurns(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(gameTurns);
      const updatedTurns = [
        { play: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  if (gameTurns.length === 9) {
    draw = true;
  } else if (gameTurns.length >= 5) {
    let prevPlayer = players[0];
    if (shallowEqual(activePlayer, prevPlayer)) {
      prevPlayer = players[1];
    }
    win = checkWin(gameTurns, prevPlayer);
    if (win) {
      activePlayer = prevPlayer;
    }
  }

  function handleReset() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerIndex, player) {
    setPlayers((prevPlayers) => {
      let newPlayers = prevPlayers;
      newPlayers[playerIndex] = player;
      return newPlayers;
    });
  }

  return (
    <>
      <h1 className={Styles.tictactoeTitle}>TicTacToe</h1>
      <main className={Styles.tictactoe}>
        <ol className={Styles.players}>
          {players.map(({ name, symbol }, index) => (
            <Player
              key={index}
              index={index}
              name={name}
              playerSymbol={symbol}
              active={!win && !draw && symbol === activePlayer.symbol}
              nameChange={(index, player) =>
                handlePlayerNameChange(index, player)
              }
            />
          ))}
        </ol>
        {(win || draw) && (
          <GameOver
            winner={!draw && activePlayer}
            reset={() => handleReset()}
          />
        )}
        <GameBoard turns={gameTurns} onPlay={handleGameTurns} isWin={win} />
      </main>
      <Logs turns={gameTurns} />
    </>
  );
}
