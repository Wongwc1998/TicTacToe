import React from 'react';
import { GameContextType, gameType } from './TicTacToeTypes';

const defaultGame = {
    game: {
        cells: [
            ["Empty", "Empty", "Empty"],
            ["Empty", "Empty", "Empty"],
            ["Empty", "Empty", "Empty"],
        ],
        turn: "P1",
        gameState: "In Progress",
    },
  setGame: (game: gameType) => {},
} as GameContextType
//Context for game
export const thisGameContext = React.createContext(defaultGame);

type GameContextProviderProps = {
    children: React.ReactNode;
};

export default function GameContextProvider({ children }: GameContextProviderProps) {
    const [game, setGame] = React.useState<gameType>({
        cells: [
            ["Empty", "Empty", "Empty"],
            ["Empty", "Empty", "Empty"],
            ["Empty", "Empty", "Empty"],
        ],
        turn: "P1",
        gameState: "In Progress",
    });

    return (
        <thisGameContext.Provider value={{game, setGame}}>
            {children}
        </thisGameContext.Provider>
    );
};