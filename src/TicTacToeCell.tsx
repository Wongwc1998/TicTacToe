import { TurnLogic } from "./TicTacToeLogic";
import React from "react";
import { thisGameContext as ThisGameContext } from "./TicTacToeContext";

type TicTacToeCellProps = {
  row: number;
  col: number;
};

export default function TicTacToeCell({ row, col }: TicTacToeCellProps) {
  const { game, setGame } = React.useContext(ThisGameContext);
  const OnClickHandler = ({ row, col }: TicTacToeCellProps) => {
    const newGame = TurnLogic(game, row, col, game.turn);
    setGame(newGame);
    console.log(newGame);
  };

  const disableButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.currentTarget.disabled = true;
  };
  return (
    <button
      onClick={(e) => {
        OnClickHandler({ row, col });
        disableButton(e);
      }}
    >
      Click
    </button>
  );
}
