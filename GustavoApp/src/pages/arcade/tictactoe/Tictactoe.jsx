import React from 'react';
import Styles from './Tictactoe.module.scss';
import Player from './Player';
import GameBoard from './GameBoard';

export default function Tictactoe() {


    return (
        <>
            <h1>TicTacToe</h1>
            <main className={Styles.tictactoe}>
                <ol className={Styles.players}>
                    <Player name={'Player 1'} playerSymbol={'X'} />
                    <Player name={'Player 2'} playerSymbol={'O'} />
                </ol>
                <GameBoard />
            </main>
        </>
    );
}