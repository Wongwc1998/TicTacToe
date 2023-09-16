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
    <div className="bg-sky-100 h-screen">
      <header className="text-4xl font-bold text-center">
        <div>Tic Tac Toe</div>
        <div className="text-2xl font-bold h-8 m-4">
          {game.gameState !== "In Progress" && <h2>{game.gameState}</h2>}
        </div>
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col divide-y-4 divide-gray-500">
          <div className="flex flex-row divide-x-4 divide-gray-500">
            <TicTacToeCell row={0} col={0} />
            <TicTacToeCell row={0} col={1} />
            <TicTacToeCell row={0} col={2} />
          </div>
          <div className="flex flex-row divide-x-4 divide-gray-500">
            <TicTacToeCell row={1} col={0} />
            <TicTacToeCell row={1} col={1} />
            <TicTacToeCell row={1} col={2} />
          </div>
          <div className="flex flex-row divide-x-4 divide-gray-500">
            <TicTacToeCell row={2} col={0} />
            <TicTacToeCell row={2} col={1} />
            <TicTacToeCell row={2} col={2} />
          </div>
        </div>
      </div>
      <footer>
        {game.gameState !== "In Progress" && (
          <div className="m-4">
            <button
              className="bg-sky-500 rounded-lg text-white font-bold py-2 px-4"
              onClick={() => setGame(ResetGame())}
            >
              Reset Game
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}
