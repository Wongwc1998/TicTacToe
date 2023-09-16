import { Dispatch, SetStateAction } from "react";

type gameStateType = "P1 Win" | "P2 Win" | "Draw" | "In Progress";
type cellStateType = "Empty" | "P1" | "P2";
type turnType = "P1" | "P2";

type gameType = {
    cells: cellStateType[][]; // the state of the board
    turn: turnType; // whose turn it is
    gameState: gameStateType; // the current state of the game
}

type GameContextType = {
    game: gameType;
    setGame: Dispatch<SetStateAction<gameType>>;
}

export type { gameStateType, cellStateType, turnType, gameType, GameContextType };