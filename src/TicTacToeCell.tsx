import { TurnLogic } from "./TicTacToeLogic";
import React from "react";
import { ThisGameContext } from "./TicTacToeContext";

type TicTacToeCellProps = {
  row: number;
  col: number;
};

export default function TicTacToeCell({ row, col }: TicTacToeCellProps) {
  const { game, setGame } = React.useContext(ThisGameContext);
  const OnClickHandler = ({ row, col }: TicTacToeCellProps) => {
    if (game.gameState === "In Progress") {
      const newGame = TurnLogic(game, row, col, game.turn);
      setGame(newGame);
      console.log(newGame);
    }
  };

  return (
    <button
      onClick={() => {
        OnClickHandler({ row, col });
      }}
      disabled={game.cells[row][col] !== "" || game.gameState !== "In Progress"} // Disable if the cell is not empty or if the game is over
      className="w-24 h-24 text-4xl font-bold text-center bg-sky-200"
    >
      {game.cells[row][col]}
    </button>
  );
}
