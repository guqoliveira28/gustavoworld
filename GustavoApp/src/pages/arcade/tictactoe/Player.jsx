import React, { useState } from "react";

export default function Player({ name, playerSymbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    let playerNameText = (<span className="player-name">{playerName}</span>);

    function handleEditing() {
        setIsEditing((editing) => !editing);
    }

    function handleSave(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        playerNameText = (<input type="text" required value={playerName} onChange={handleSave} />)
    }

    return (
        <li>
            {playerNameText}
            <span className="player-symbol">{playerSymbol}</span>
            <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}