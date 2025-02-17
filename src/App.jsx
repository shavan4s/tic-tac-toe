/* eslint-disable react/prop-types */
<<<<<<< HEAD
import { useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./App.css";
=======
import { useState } from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css'
>>>>>>> origin/master
function Square({ value, onSquareClick }) {

  return (
<<<<<<< HEAD
    <button
      className={`square ${
        value === "X" || value === "O" ? "activeSquare" : ""
      }`}
      onClick={onSquareClick}
    >
      {" "}
      {value}
=======
<button className={`square ${value === 'X' || value === 'O' ? 'activeSquare' : ''}`} onClick={onSquareClick}>      {value}
>>>>>>> origin/master
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
<<<<<<< HEAD
    if (calculateWinner(squares) || squares[i] !== "s") {
=======
    if (calculateWinner(squares) ||  squares[i] !== 's') {
>>>>>>> origin/master
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
<<<<<<< HEAD
  const [history, setHistory] = useState([Array(9).fill("s")]);
=======
  const [history, setHistory] = useState([Array(9).fill('s')]);
>>>>>>> origin/master
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Move #" + move;
    } else {
      description = "Game start";
    }
    return (
      <li key={move}>
        <button
          className={`move-button ${
            move === currentMove ? "current-move" : ""
          }`}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<<<<<<< HEAD
    <div className={`game ${isDarkMode ? "darkMode" : ""}`}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button className="light-button" onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
=======
    <div className={`game ${isDarkMode ? 'darkMode' : ''}`}>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button className="light-button" onClick={toggleDarkMode} ><FontAwesomeIcon icon={isDarkMode ? faSun : faMoon } /></button>
>>>>>>> origin/master
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
<<<<<<< HEAD
    if (
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a] != "s"
    ) {
=======
    if ( squares[a] === squares[b] && squares[a] === squares[c] && squares[a] != 's') {
>>>>>>> origin/master
      return squares[a];
    }
  }
  return null;
}
