import GameContextProvider from "./TicTacToeContext";
import TicTacToeCell from "./TicTacToeCell";

export default function TicTacToeGame() {
  return (
    <div>
      <GameContextProvider>
        <div className="board">
          <TicTacToeCell row={0} col={0} />
          <TicTacToeCell row={0} col={1} />
          <TicTacToeCell row={0} col={2} />
          <TicTacToeCell row={1} col={0} />
          <TicTacToeCell row={1} col={1} />
          <TicTacToeCell row={1} col={2} />
          <TicTacToeCell row={2} col={0} />
          <TicTacToeCell row={2} col={1} />
          <TicTacToeCell row={2} col={2} />
        </div>
      </GameContextProvider>
    </div>
  );
}
