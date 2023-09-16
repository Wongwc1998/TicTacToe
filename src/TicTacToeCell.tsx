import { checkWin, setCell, TurnLogic } from "./TicTacToeLogic";
import { gameType } from "@/TicTacToeTypes";

type TicTacToeCellProps = {
  row: number;
  col: number;
};

export default function TicTacToeCell({ row, col }: TicTacToeCellProps) {
  return (
    <button onClick={() => setCell(row, col)} className="cell" />
  )
}
