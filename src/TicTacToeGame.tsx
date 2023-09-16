import GameContextProvider, { ThisGameContext } from "./TicTacToeContext";
import TicTacToeCell from "./TicTacToeCell";
import { ResetGame } from "./TicTacToeLogic";
import React from "react";

export default function TicTacToeGame() {
  const { game, setGame } = React.useContext(ThisGameContext);
  return (
    <div>
      <GameContextProvider>
        <header className="text-4xl font-bold text-center">
          <div>Tic Tac Toe</div>
          <div>
            {game.gameState !== "In Progress" && <h2>{game.gameState}</h2>}
          </div>
        </header>
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
        <footer>
          {game.gameState !== "In Progress" && (
            <div>
              <button onClick={() => setGame(ResetGame(game))}>
                Reset Game
              </button>
            </div>
          )}
        </footer>
      </GameContextProvider>
    </div>
  );
}
