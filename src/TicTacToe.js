import { useState } from "react";

function Square({ value, onSquareClick, setBgClr }) {
  return (
    <>
      <button onClick={onSquareClick} className="square" style={setBgClr ? {backgroundColor: "red"} : {backgroundColor: "white"}}>
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let status;

  const hadleClick = (i) => {
    const nextSquares = squares.slice();
    if (nextSquares[i] || calculateWinner(squares)[0]) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
      setXIsNext(false);
    } else {
      nextSquares[i] = "O";
      setXIsNext(true);
    }
    setSquares(nextSquares);

  };

  console.log("I'm here!")
  const [winner, winnerArr] = calculateWinner(squares);
  if (winner) {
    status = "Winner: " + winner;
  } else if(!squares.includes(null)){
    status = "Draw";
  } else  {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], lines[i]];
      }
    }
    return [null, null];
  }

  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => hadleClick(0)} setBgClr={winnerArr? (winnerArr.includes(0) ? true : false) : false}/>
        <Square value={squares[1]} onSquareClick={() => hadleClick(1)} setBgClr={winnerArr? (winnerArr.includes(1) ? true : false) : false}/>
        <Square value={squares[2]} onSquareClick={() => hadleClick(2)} setBgClr={winnerArr? (winnerArr.includes(2) ? true : false) : false}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => hadleClick(3)} setBgClr={winnerArr? (winnerArr.includes(3) ? true : false) : false}/>
        <Square value={squares[4]} onSquareClick={() => hadleClick(4)} setBgClr={winnerArr? (winnerArr.includes(4) ? true : false) : false}/>
        <Square value={squares[5]} onSquareClick={() => hadleClick(5)} setBgClr={winnerArr? (winnerArr.includes(5) ? true : false) : false}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => hadleClick(6)} setBgClr={winnerArr? (winnerArr.includes(6) ? true : false) : false}/>
        <Square value={squares[7]} onSquareClick={() => hadleClick(7)} setBgClr={winnerArr? (winnerArr.includes(7) ? true : false) : false}/>
        <Square value={squares[8]} onSquareClick={() => hadleClick(8)} setBgClr={winnerArr? (winnerArr.includes(8) ? true : false) : false}/>
      </div>
    </>
  );
}
