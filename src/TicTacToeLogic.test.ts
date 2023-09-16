import { checkWin, setCell, TurnLogic } from "./TicTacToeLogic";
import { describe, expect, it, beforeEach } from "vitest";
import { gameType } from "@/TicTacToeTypes";

let thisGame: gameType = {
  cells: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  turn: "X",
  gameState: "In Progress",
};

describe("TicTacToeLogic", () => {
  // Reset the game state before each test
  beforeEach(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        setCell(thisGame, i, j, "");
      }
    }
  });

  it("should declare X as the winner if X has three in a row horizontally", () => {
    setCell(thisGame, 0, 0, "X");
    setCell(thisGame, 0, 1, "X");
    setCell(thisGame, 0, 2, "X");

    expect(checkWin(thisGame.cells)).toBe("X Win");
  });

  it("should declare O as the winner if O has three in a row vertically", () => {
    setCell(thisGame, 0, 0, "O");
    setCell(thisGame, 1, 0, "O");
    setCell(thisGame, 2, 0, "O");

    expect(checkWin(thisGame.cells)).toBe("O Win");
  });

  it("should declare X as the winner if X has three in a row diagonally", () => {
    setCell(thisGame, 0, 0, "X");
    setCell(thisGame, 1, 1, "X");
    setCell(thisGame, 2, 2, "X");

    expect(checkWin(thisGame.cells)).toBe("X Win");
  });

  it("should declare game as draw if all cells are filled and no one has won", () => {
    setCell(thisGame, 0, 0, "X");
    setCell(thisGame, 0, 1, "O");
    setCell(thisGame, 0, 2, "X");
    setCell(thisGame, 1, 0, "X");
    setCell(thisGame, 1, 1, "X");
    setCell(thisGame, 1, 2, "O");
    setCell(thisGame, 2, 0, "O");
    setCell(thisGame, 2, 1, "X");
    setCell(thisGame, 2, 2, "O");

    expect(checkWin(thisGame.cells)).toBe("Draw");
  });

  it("should declare game as in progress if not all cells are filled and no one has won", () => {
    setCell(thisGame, 0, 0, "X");
    setCell(thisGame, 0, 1, "X");

    expect(checkWin(thisGame.cells)).toBe("In Progress");
  });
});

describe("TurnLogic", () => {
  // Reset the game state before each test
  beforeEach(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        setCell(thisGame, i, j, "");
      }
    }
  });

  it("should switch turns between X and O when game is in progress", () => {
    let game = TurnLogic(thisGame, 0, 0, "X");
    expect(game.turn).toBe("O");
    expect(game.gameState).toBe("In Progress");

    game = TurnLogic(thisGame, 1, 0, "O");
    expect(game.turn).toBe("X");
    expect(game.gameState).toBe("In Progress");
  });

  it("should declare X as the winner if X has three in a row", () => {
    TurnLogic(thisGame, 0, 0, "X");
    TurnLogic(thisGame, 1, 0, "O");
    TurnLogic(thisGame, 0, 1, "X");
    TurnLogic(thisGame, 1, 1, "O");
    const game = TurnLogic(thisGame, 0, 2, "X");

    expect(game.gameState).toBe("X Win");
  });

  it("should declare game as draw if all cells are filled and no one has won", () => {
    TurnLogic(thisGame, 0, 0, "X");
    TurnLogic(thisGame, 0, 1, "O");
    TurnLogic(thisGame, 0, 2, "X");
    TurnLogic(thisGame, 2, 0, "O");
    TurnLogic(thisGame, 1, 1, "X");
    TurnLogic(thisGame, 1, 2, "O");
    TurnLogic(thisGame, 1, 0, "X");
    TurnLogic(thisGame, 2, 2, "O");
    const game = TurnLogic(thisGame, 2, 1, "X");

    expect(game.gameState).toBe("Draw");
    expect(game.turn).toBe("X");
  });

  // ... add more tests as necessary
});
