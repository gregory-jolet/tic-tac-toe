import { useState } from "react";

export default function Game() {
  /* Add X or O */
  const [xTurn, setXTurn]: boolean = useState(true);
  const [boardData, setBoardData] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: ""
  });

  const updateBoardData = (index) => {
    if (!boardData[index]) {
      // Check if index of boardData is empty
      let value = xTurn ? "X" : "O";
      console.warn('value ', value, ' xTurn ', xTurn)
      setBoardData({ ...boardData, [index]: value })
      setXTurn(!xTurn);
    }
  }

  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="max-w-23 mx-auto p-2 d-flex justify-center items-center">
        <div className="text-center text-2xl tracking-normal">
          <p className="mb-2">Player : {xTurn ? "X " : "O "}</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[...Array(9)].map((value, index) => {
            return (
              <div key={index} onClick={() => {
                updateBoardData(index)
              }} className="bg-square rounded-lg shadow-square text-center text-6xl leading-loose w-28 h-28 cursor-pointer">
                {boardData[index]}
              </div>);
          })}
        </div>
      </div>
    </>
  );
}
