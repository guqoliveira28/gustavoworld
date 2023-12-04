import React, { useState } from "react";
import Styles from "./Tictactoe.module.scss";

export default function Player({
  name,
  playerSymbol,
  active,
  nameChange,
  index,
}) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  let playerNameText = <span className={Styles.playerName}>{playerName}</span>;

  function handleEditing() {
    if (isEditing) {
      nameChange(index, { name: playerName, symbol: playerSymbol });
    }
    setIsEditing((editing) => !editing);
  }

  function handleSave(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    playerNameText = (
      <input type="text" required value={playerName} onChange={handleSave} />
    );
  }

  return (
    <li className={active ? Styles.active : undefined}>
      {playerNameText}
      <span className={Styles.playerSymbol}>{playerSymbol}</span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
