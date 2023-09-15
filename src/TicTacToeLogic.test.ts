import { checkWin, setCell, TurnLogic } from "./TicTacToeLogic";
import { describe, expect, it, beforeEach } from "vitest";

describe("TicTacToeLogic", () => {
  // Reset the game state before each test
  beforeEach(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        setCell(i, j, "Empty");
      }
    }
  });

  it("should declare P1 as the winner if P1 has three in a row horizontally", () => {
    setCell(0, 0, "P1");
    setCell(0, 1, "P1");
    setCell(0, 2, "P1");

    expect(checkWin()).toBe("P1 Win");
  });

  it("should declare P2 as the winner if P2 has three in a row vertically", () => {
    setCell(0, 0, "P2");
    setCell(1, 0, "P2");
    setCell(2, 0, "P2");

    expect(checkWin()).toBe("P2 Win");
  });

  it("should declare P1 as the winner if P1 has three in a row diagonally", () => {
    setCell(0, 0, "P1");
    setCell(1, 1, "P1");
    setCell(2, 2, "P1");

    expect(checkWin()).toBe("P1 Win");
  });

  it("should declare game as draw if all cells are filled and no one has won", () => {
    setCell(0, 0, "P1");
    setCell(0, 1, "P2");
    setCell(0, 2, "P1");
    setCell(1, 0, "P1");
    setCell(1, 1, "P1");
    setCell(1, 2, "P2");
    setCell(2, 0, "P2");
    setCell(2, 1, "P1");
    setCell(2, 2, "P2");

    expect(checkWin()).toBe("Draw");
  });

  it("should declare game as in progress if not all cells are filled and no one has won", () => {
    setCell(0, 0, "P1");
    setCell(0, 1, "P1");

    expect(checkWin()).toBe("In Progress");
  });
});

describe('TurnLogic', () => {
    // Reset the game state before each test
    beforeEach(() => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                setCell(i, j, "Empty");
            }
        }
    });

    it('should switch turns between P1 and P2 when game is in progress', () => {
        let [nextPlayer, gameState] = TurnLogic(0, 0, "P1");
        expect(nextPlayer).toBe("P2");
        expect(gameState).toBe("In Progress");

        [nextPlayer, gameState] = TurnLogic(1, 0, "P2");
        expect(nextPlayer).toBe("P1");
        expect(gameState).toBe("In Progress");
    });

    it('should declare P1 as the winner if P1 has three in a row', () => {
        TurnLogic(0, 0, "P1");
        TurnLogic(1, 0, "P2");
        TurnLogic(0, 1, "P1");
        TurnLogic(1, 1, "P2");
        const [nextPlayer, gameState] = TurnLogic(0, 2, "P1");

        expect(gameState).toBe("P1 Win");
    });

    it('should declare game as draw if all cells are filled and no one has won', () => {
        TurnLogic(0, 0, "P1");
        TurnLogic(0, 1, "P2");
        TurnLogic(0, 2, "P1");
        TurnLogic(2, 0, "P2");
        TurnLogic(1, 1, "P1");
        TurnLogic(1, 2, "P2");
        TurnLogic(1, 0, "P1");
        TurnLogic(2, 2, "P2");
        const [nextPlayer, gameState] = TurnLogic(2, 1, "P1");

        expect(gameState).toBe("Draw");
        expect(nextPlayer).toBe("P1");
    });

    // ... add more tests as necessary
});