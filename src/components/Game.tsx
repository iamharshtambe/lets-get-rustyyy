import React, { useState } from 'react';
import { Board } from './Board';
import '../index.css';

interface WinnerInfo {
  winner: string;
  line: number[];
}

export const Game: React.FC = () => {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  const calculateWinner = (squares: (string | null)[]): WinnerInfo | null => {
    const lines: number[][] = [
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
        return { winner: squares[a]!, line: lines[i] };
      }
    }
    return null;
  };

  const handleClick = (i: number): void => {
    const historyUpToNow = history.slice(0, stepNumber + 1);
    const current = historyUpToNow[historyUpToNow.length - 1];
    const squares = current.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(historyUpToNow.concat([squares]));
    setStepNumber(historyUpToNow.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number): void => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winnerInfo = calculateWinner(current);
  const winner = winnerInfo ? winnerInfo.winner : null;
  const winningLine = winnerInfo ? winnerInfo.line : null;

  let status: string;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (stepNumber === 9) {
    status = "It's a Draw!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        <button
          className={`history-button ${move === stepNumber ? 'current' : ''}`}
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-header">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="game-container">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board
            squares={current}
            onClick={handleClick}
            winningLine={winningLine}
          />
          <button
            className="reset-button"
            onClick={() => {
              setHistory([Array(9).fill(null)]);
              setStepNumber(0);
              setXIsNext(true);
            }}
          >
            New Game
          </button>
        </div>
        <div className="game-info">
          <h3>The Game History</h3>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default Game;
