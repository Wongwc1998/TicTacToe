import { useState } from "react";
import "./App.css";
import { setCell } from "./TicTacToeLogic";

function App() {
  return (
    <>
      <div className="grid grid-rows-3 divide-y-2">
        <div className="grid grid-cols-3 divide-x-2">
          <button className="" onClick={setCell(0, 0, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(0, 1, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(0, 2, "P1")}>
            Text{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 divide-x-2">
          <button className="" onClick={setCell(1, 0, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(1, 1, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(1, 2, "P1")}>
            Text{" "}
          </button>
        </div>
        <div className="grid grid-cols-3 divide-x-2">
          <button className="" onClick={setCell(2, 0, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(2, 1, "P1")}>
            Text{" "}
          </button>
          <button className="" onClick={setCell(2, 2, "P1")}>
            Text{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
