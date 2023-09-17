import { Dispatch, SetStateAction } from "react";

type gameStateType = "X Win" | "O Win" | "Draw" | "In Progress";
type cellStateType = "" | "X" | "O";
type turnType = "X" | "O";

type gameType = {
  cells: cellStateType[][]; // the state of the board
  turn: turnType; // whose turn it is
  gameState: gameStateType; // the current state of the game
};

type GameContextType = {
  game: gameType;
  setGame: Dispatch<SetStateAction<gameType>>;
};

export type {
  gameStateType,
  cellStateType,
  turnType,
  gameType,
  GameContextType,
};
