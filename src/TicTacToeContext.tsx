import React from "react";
import { GameContextType, gameType } from "./TicTacToeTypes";

const defaultGame = {
  game: {
    cells: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "X",
    gameState: "In Progress",
  },
  setGame: (game: gameType) => {
    console.log(game);
  },
} as GameContextType;
//Context for game
export const ThisGameContext = React.createContext(defaultGame);

type GameContextProviderProps = {
  children: React.ReactNode;
};

export default function GameContextProvider({
  children,
}: GameContextProviderProps) {
  const [game, setGame] = React.useState<gameType>({
    cells: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "X",
    gameState: "In Progress",
  });

  return (
    <ThisGameContext.Provider value={{ game, setGame }}>
      {children}
    </ThisGameContext.Provider>
  );
}
