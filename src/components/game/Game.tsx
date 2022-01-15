import React, { useState } from "react";
import Board from "../board/Board";
import styled from "styled-components";

const Game: React.FC = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    const tempHistory = history.slice(0, stepNumber + 1);
    const current = tempHistory[tempHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(
      tempHistory.concat([
        {
          squares: squares,
        },
      ])
    );

    setStepNumber(tempHistory.length);

    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares: any[]) {
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
        return squares[a];
      }
    }
    return null;
  }

  function jumpTo(step: number) {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <MoveButton onClick={() => jumpTo(move)}>{desc}</MoveButton>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (stepNumber === 9) {
    status = "It's a draw.";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <GameDiv>
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <GameInfoDiv>
        <div>{status}</div>
        <ol>{moves}</ol>
      </GameInfoDiv>
    </GameDiv>
  );
};

const GameDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameInfoDiv = styled.div`
  margin-left: 20px;
`;

const MoveButton = styled.button`
  padding: 5px;
  margin-bottom: 5px;
`;

export default Game;
