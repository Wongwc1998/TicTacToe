import GameContextProvider, { ThisGameContext } from "./TicTacToeContext";
import TicTacToeCell from "./TicTacToeCell";
import { ResetGame } from "./TicTacToeLogic";
import React from "react";

export default function TicTacToeGame() {
  return (
    <GameContextProvider>
      <ThisGameContent />
    </GameContextProvider>
  );
}

function ThisGameContent() {
  const { game, setGame } = React.useContext(ThisGameContext);

  return (
    <div>
      <header className="text-4xl font-bold text-center">
        <div>Tic Tac Toe</div>
        <div className="text-2xl font-normal h-8">
          {game.gameState !== "In Progress" && <h2>{game.gameState}</h2>}
        </div>
      </header>
      <div className="grid grid-rows-3 divide-y-8">
        <div className="flex flex-row divide-x-8">
          <TicTacToeCell row={0} col={0} />
          <TicTacToeCell row={0} col={1} />
          <TicTacToeCell row={0} col={2} />
        </div>
        <div className="flex flex-row divide-x-8">
          <TicTacToeCell row={1} col={0} />
          <TicTacToeCell row={1} col={1} />
          <TicTacToeCell row={1} col={2} />
        </div>
        <div className="flex flex-row divide-x-8">
          <TicTacToeCell row={2} col={0} />
          <TicTacToeCell row={2} col={1} />
          <TicTacToeCell row={2} col={2} />
        </div>
      </div>
      <footer>
        {game.gameState !== "In Progress" && (
          <div>
            <button onClick={() => setGame(ResetGame())}>Reset Game</button>
          </div>
        )}
      </footer>
    </div>
  );
}
