import Head from "next/head";
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
  const [won, setWon] = useState(false);
  const [wonCombo, setWonCombo] = useState([]);
  const [winner, setWinner] = useState('');

  /* Points */
  let [xPoint, setXPoint] = useState(0);
  let [oPoint, setOPoint] = useState(0);

  /* Modal */
  const [modalTitle, setModalTitle] = useState('');

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
        setWon(true);
        setWonCombo([a, b, c]);
        setWinner(xTurn ? "O" : "X");
        winPoint(xTurn ? "O" : "X");
        setModalTitle(`Player ${!xTurn ? "X" : "O"} won !`);
      }

    });
  };

  const winPoint = (win) => {
    if (win === "X") {
      setXPoint(xPoint + 1);
      console.log('Le joueur X a gangné !');
    } else if (win === "O") {
      setOPoint(oPoint + 1);
      console.log('Le joueur O a gangné !');
    }
  }

  const checkDraw = () => {
    let check = Object.keys(boardData).every((v) => boardData[v]);;
    if (check) {
      setIsDraw(check);
      setModalTitle(`Round draw !`);
    }
  };

  let head;
  if (won) {
    head = <p className="mb-2">{`Winner: ${winner}`}</p>;
  } else if (isDraw) {
    head = <p className="mb-2">{`Games Draw`}</p>;
  }

  const reset = () => {
    setBoardData({
      0: "", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "",
    });
    setXTurn(true);
    setWon(false);
    setWonCombo([]);
    setIsDraw(false);
    setModalTitle("");
  };

  return (
    <>
      <Head>
        <title>Tic-Tac-Toe</title>
      </Head>
      <h1 className="text-center text-xl mt-10">Tic Tac Toe</h1>
      <div className={modalTitle ? "overlay" : ""}>
        <div className={`${modalTitle ? "show" : ""} modal w-64 rounded-2xl shadow-lg bg-white d-flex flex-col align-items-center p-6 top-1/2`}>
          <div className="mb-4">{modalTitle}</div>
          <button className="w-100 h-9 text-5xl" onClick={reset}>New Game</button>
        </div>
      </div>
      <div className="max-w-23 mx-auto p-2 d-flex justify-center items-center">
        <p className="text-2xl mb-2">Player: {xTurn === true ? "X" : "O"}</p>
        <div className="grid grid-cols-3 gap-5">
          {[...Array(9)].map((value, index) => {
            return (
              <div key={index} onClick={() => {
                updateBoardData(index)
              }} className={`${wonCombo.includes(index) ? "highlight" : ""} text-square bg-square rounded-lg shadow-square text-center text-6xl leading-loose w-28 h-28 cursor-pointer`}>
                {boardData[index]}
              </div>);
          })}
        </div>
      </div>
      <div className="text-center mt-3">
        <p className="text-2xl">Player X: {xPoint}</p>
        <p className="text-2xl">Player O: {oPoint}</p>
      </div>

    </>
  );
}
