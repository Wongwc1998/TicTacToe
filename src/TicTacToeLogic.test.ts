import { checkWin, setCell, TurnLogic } from "./TicTacToeLogic";
import { describe, expect, it, beforeEach } from "vitest";
import { gameType } from "@/TicTacToeTypes";

let thisGame: gameType = {
  cells: [
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
    ["Empty", "Empty", "Empty"],
  ],
  turn: "P1",
  gameState: "In Progress",
};

describe("TicTacToeLogic", () => {
  // Reset the game state before each test
  beforeEach(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        setCell(thisGame, i, j, "Empty");
      }
    }
  });

  it("should declare P1 as the winner if P1 has three in a row horizontally", () => {
    setCell(thisGame, 0, 0, "P1");
    setCell(thisGame, 0, 1, "P1");
    setCell(thisGame, 0, 2, "P1");

    expect(checkWin(thisGame.cells)).toBe("P1 Win");
  });

  it("should declare P2 as the winner if P2 has three in a row vertically", () => {
    setCell(thisGame, 0, 0, "P2");
    setCell(thisGame, 1, 0, "P2");
    setCell(thisGame, 2, 0, "P2");

    expect(checkWin(thisGame.cells)).toBe("P2 Win");
  });

  it("should declare P1 as the winner if P1 has three in a row diagonally", () => {
    setCell(thisGame, 0, 0, "P1");
    setCell(thisGame, 1, 1, "P1");
    setCell(thisGame, 2, 2, "P1");

    expect(checkWin(thisGame.cells)).toBe("P1 Win");
  });

  it("should declare game as draw if all cells are filled and no one has won", () => {
    setCell(thisGame, 0, 0, "P1");
    setCell(thisGame, 0, 1, "P2");
    setCell(thisGame, 0, 2, "P1");
    setCell(thisGame, 1, 0, "P1");
    setCell(thisGame, 1, 1, "P1");
    setCell(thisGame, 1, 2, "P2");
    setCell(thisGame, 2, 0, "P2");
    setCell(thisGame, 2, 1, "P1");
    setCell(thisGame, 2, 2, "P2");

    expect(checkWin(thisGame.cells)).toBe("Draw");
  });

  it("should declare game as in progress if not all cells are filled and no one has won", () => {
    setCell(thisGame, 0, 0, "P1");
    setCell(thisGame, 0, 1, "P1");

    expect(checkWin(thisGame.cells)).toBe("In Progress");
  });
});

describe("TurnLogic", () => {
  // Reset the game state before each test
  beforeEach(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        setCell(thisGame, i, j, "Empty");
      }
    }
  });

  it("should switch turns between P1 and P2 when game is in progress", () => {
    let game = TurnLogic(thisGame, 0, 0, "P1");
    expect(game.turn).toBe("P2");
    expect(game.gameState).toBe("In Progress");

    game = TurnLogic(thisGame, 1, 0, "P2");
    expect(game.turn).toBe("P1");
    expect(game.gameState).toBe("In Progress");
  });

  it("should declare P1 as the winner if P1 has three in a row", () => {
    TurnLogic(thisGame, 0, 0, "P1");
    TurnLogic(thisGame, 1, 0, "P2");
    TurnLogic(thisGame, 0, 1, "P1");
    TurnLogic(thisGame, 1, 1, "P2");
    const game = TurnLogic(thisGame, 0, 2, "P1");

    expect(game.gameState).toBe("P1 Win");
  });

  it("should declare game as draw if all cells are filled and no one has won", () => {
    TurnLogic(thisGame, 0, 0, "P1");
    TurnLogic(thisGame, 0, 1, "P2");
    TurnLogic(thisGame, 0, 2, "P1");
    TurnLogic(thisGame, 2, 0, "P2");
    TurnLogic(thisGame, 1, 1, "P1");
    TurnLogic(thisGame, 1, 2, "P2");
    TurnLogic(thisGame, 1, 0, "P1");
    TurnLogic(thisGame, 2, 2, "P2");
    const game = TurnLogic(thisGame, 2, 1, "P1");

    expect(game.gameState).toBe("Draw");
    expect(game.turn).toBe("P1");
  });

  // ... add more tests as necessary
});
