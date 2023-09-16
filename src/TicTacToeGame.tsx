import GameContextProvider, { ThisGameContext } from "./TicTacToeContext";
import TicTacToeCell from "./TicTacToeCell";
import { ResetGame } from "./TicTacToeLogic";
import React from "react";

export default function TicTacToeGame() {
  return (
    <div>
      <GameContextProvider>
        <div className="grid grid-rows-3 divide-y-2">
          <div className="grid grid-cols-3 divide-x-2">
            <TicTacToeCell row={0} col={0} />
            <TicTacToeCell row={0} col={1} />
            <TicTacToeCell row={0} col={2} />
          </div>
          <div className="grid grid-cols-3 divide-x-2">
            <TicTacToeCell row={1} col={0} />
            <TicTacToeCell row={1} col={1} />
            <TicTacToeCell row={1} col={2} />
          </div>
          <div className="grid grid-cols-3 divide-x-2">
            <TicTacToeCell row={2} col={0} />
            <TicTacToeCell row={2} col={1} />
            <TicTacToeCell row={2} col={2} />
          </div>
        </div>
        {game.gameState !== "In Progress" && (
          <div>
            <button onClick={() => setGame(ResetGame(game))}>Reset Game</button>
          </div>
        )}
      </GameContextProvider>
    </div>
  );
}
