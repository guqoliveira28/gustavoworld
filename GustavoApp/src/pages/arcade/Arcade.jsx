import React, { useState } from 'react';
import SelectionBlock from '../../components/SelectionBlock';
import Tictactoe from './tictactoe/Tictactoe';
import BackArrow from '../../components/BackArrow';

export default function Arcade() {
    const [ selectedGame, setSelectedGame ] = useState();

    const game = {
        image: undefined,
        imageAlt: "TicTacToe game",
        title: "TicTacToe",
        id: "tictactoe"
    }

    let arcade;

    function handleSelectedGame(game) {
        setSelectedGame(game);
    }

    if (!selectedGame) {
        arcade = (
            <SelectionBlock image={game.image} imageAlt={game.imageAlt} title={game.title} onClick={() => handleSelectedGame(game.id)} />
        );
    } else {
        arcade = (
            <>
                <BackArrow clickEvent={() => setSelectedGame()} />
                <Tictactoe />
            </>
        );
    }

    return arcade;
}