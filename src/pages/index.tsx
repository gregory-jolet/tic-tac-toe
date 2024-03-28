import { useState, useEffect } from "react";

/* Winning combination */
const WINNING_COMBO = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export default function Game() {
  /* Add X or O */
  const [xTurn, setXTurn] = useState(true);
  /* Winner */
  const [won, steWon] = useState(false);
  const [winner, setWinner] = useState("");

  /* Draw */
  const [isDraw, setIsDraw] = useState(false);

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
  const player = xTurn ? "X " : "O ";

  useEffect(() => {
    checkWinner();
    checkDraw()
  }, [boardData])

  const updateBoardData = (index) => {
    if (!boardData[index]) {
      // Check if index of boardData is empty
      let value = xTurn ? "X" : "O";
      setBoardData({ ...boardData, [index]: value })
      setXTurn(!xTurn);
    }
  }

  const checkWinner = () => {
    WINNING_COMBO.map((tab) => {
      const [a, b, c] = tab;

      if (
        boardData[a] &&
        boardData[a] === boardData[b] &&
        boardData[a] === boardData[c]
      ) {
        steWon(true);
        setWinner(xTurn ? "O" : "X")
      }
    });
  };

  const checkDraw = () => {
    let check = Object.keys(boardData).every((v) => boardData[v]);;
    if (check) setIsDraw(check);
  };

  let head;
  if (won) {
    head = <p>{`Winner: ${winner}`}</p>;
  } else if (isDraw) {
    head = <p>{`Games Draw`}</p>;
  }


  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="max-w-23 mx-auto p-2 d-flex justify-center items-center">
        <div className="text-center text-2xl tracking-normal">
          {!won && <p className="mb-2">Player : {player}</p>}
          { head }
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
