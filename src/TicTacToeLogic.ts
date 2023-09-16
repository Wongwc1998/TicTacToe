import {
  cellStateType,
  gameStateType,
  gameType,
  turnType,
} from "@/TicTacToeTypes";
import { MouseEventHandler } from "react";

const isLineWin = (
  cell1: cellStateType,
  cell2: cellStateType,
  cell3: cellStateType
): cellStateType | null => {
  if (cell1 !== "Empty" && cell1 === cell2 && cell2 === cell3) {
    return cell1;
  }
  return null;
};

const checkRows = (cells: cellStateType[][]): cellStateType | null => {
  for (let i = 0; i < 3; i++) {
    const result = isLineWin(cells[i][0], cells[i][1], cells[i][2]);
    if (result) return result;
  }
  return null;
};

const checkColumns = (cells: cellStateType[][]): cellStateType | null => {
  for (let i = 0; i < 3; i++) {
    const result = isLineWin(cells[0][i], cells[1][i], cells[2][i]);
    if (result) return result;
  }
  return null;
};

const checkDiagonals = (cells: cellStateType[][]): cellStateType | null => {
  const diagonal1 = isLineWin(cells[0][0], cells[1][1], cells[2][2]);
  const diagonal2 = isLineWin(cells[0][2], cells[1][1], cells[2][0]);

  return diagonal1 ?? diagonal2;
};

const isDraw = (cells: cellStateType[][]): boolean => {
  for (let i = 0; i < 3; i++) {
    if (cells[i].includes("Empty")) {
      return false;
    }
  }
  return true;
};

const checkWin = (cells: cellStateType[][]): gameStateType => {
  const winner =
    checkRows(cells) ?? checkColumns(cells) ?? checkDiagonals(cells);

  if (winner === "P1") return "P1 Win";
  if (winner === "P2") return "P2 Win";
  if (isDraw(cells)) return "Draw";

  return "In Progress";
};

const setCell = (
  game: gameType,
  row: number,
  col: number,
  value: cellStateType
): void => {
  game.cells[row][col] = value;
  console.log(game);
};

const setCellHandler = (
  cells: cellStateType[][],
  row: number,
  col: number,
  value: cellStateType
): MouseEventHandler<HTMLButtonElement> => {
  return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    cells[row][col] = value;
    console.log(cells);
  };
};

const TurnLogic = (
  game: gameType,
  row: number,
  col: number,
  newCell: cellStateType
): gameType => {
  game.cells[row][col] = newCell;
  const winner = checkWin(game.cells);
  return {
    cells: game.cells,
    gameState: winner,
    turn: winner === "In Progress" ? (newCell === "P1" ? "P2" : "P1") : "P1",
  };
};

const ResetGame = (): gameType => {
  const freshCells: cellStateType[][] = [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
  ];

  return {
    cells: freshCells,
    gameState: "In Progress",
    turn: "P1",
  };
};

export { checkWin, TurnLogic, ResetGame, setCell };
