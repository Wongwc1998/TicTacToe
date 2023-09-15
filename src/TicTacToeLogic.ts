import { cellState, gameState } from "@/TicTacToeTypes";
import { MouseEventHandler } from "react";
import { H } from "vitest/dist/reporters-cb94c88b.js";

const cells: cellState[][] = [
  ["Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty"],
  ["Empty", "Empty", "Empty"],
];

const isLineWin = (
  cell1: cellState,
  cell2: cellState,
  cell3: cellState
): cellState | null => {
  if (cell1 !== "Empty" && cell1 === cell2 && cell2 === cell3) {
    return cell1;
  }
  return null;
};

const checkRows = (): cellState | null => {
  for (let i = 0; i < 3; i++) {
    const result = isLineWin(cells[i][0], cells[i][1], cells[i][2]);
    if (result) return result;
  }
  return null;
};

const checkColumns = (): cellState | null => {
  for (let i = 0; i < 3; i++) {
    const result = isLineWin(cells[0][i], cells[1][i], cells[2][i]);
    if (result) return result;
  }
  return null;
};

const checkDiagonals = (): cellState | null => {
  const diagonal1 = isLineWin(cells[0][0], cells[1][1], cells[2][2]);
  const diagonal2 = isLineWin(cells[0][2], cells[1][1], cells[2][0]);

  return diagonal1 ?? diagonal2;
};

const isDraw = (): boolean => {
  for (let i = 0; i < 3; i++) {
    if (cells[i].includes("Empty")) {
      return false;
    }
  }
  return true;
};

const checkWin = (): gameState => {
  const winner = checkRows() ?? checkColumns() ?? checkDiagonals();

  if (winner === "P1") return "P1 Win";
  if (winner === "P2") return "P2 Win";
  if (isDraw()) return "Draw";

  return "In Progress";
};

const setCell = (row: number, col: number, value: cellState): void => {
    cells[row][col] = value;
    console.log(cells);
};

const setCellHandler = (row: number, col: number, value: cellState): MouseEventHandler<HTMLButtonElement> => {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    cells[row][col] = value;
    console.log(cells);
  };
};


const TurnLogic = (row: number, col: number, playerTurn: cellState): [cellState, gameState] => {
  setCell(row, col, playerTurn);
  const winner = checkWin();
  if (winner === "In Progress") {
    return [playerTurn === "P1" ? "P2" : "P1", winner];
  }
  else {
    return [playerTurn, winner];
  }
};


export { checkWin, setCell, TurnLogic };
