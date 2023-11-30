import React, { useState } from "react";
import Styles from "./Tictactoe.module.scss";
import Player from "./Player";
import GameBoard from "./GameBoard";
import Logs from "./Logs";

const players = [
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
  let currentPlayer = players[0];

  if (
    gameTurns.length > 0 &&
    shallowEqual(gameTurns[0].player, currentPlayer)
  ) {
    currentPlayer = players[1];
  }
  return currentPlayer;
}

export default function Tictactoe() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

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

  return (
    <>
      <h1 className={Styles.tictactoeTitle}>TicTacToe</h1>
      <main className={Styles.tictactoe}>
        <ol className={Styles.players}>
          {players.map(({ name, symbol }) => (
            <Player
              key={symbol}
              name={name}
              playerSymbol={symbol}
              active={symbol === activePlayer.symbol}
            />
          ))}
        </ol>
        <GameBoard turns={gameTurns} onPlay={handleGameTurns} />
      </main>
      <Logs turns={gameTurns} />
    </>
  );
}
