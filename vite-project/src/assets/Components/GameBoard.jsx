import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Result from "./Result";

export default function GameBoard () {
    const [searchParams, setSearchParams] = useSearchParams();
    const mode = searchParams.get("mode");

   const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
   const [count, setCount] = useState(0);
   const [lock, setLock] = useState(false);
   const [winner, setWinner] = useState(null);
   const navigate = useNavigate();

   useEffect (() => {
    if (mode === "1" && count %2 !==0 && !lock){
        const timer = setTimeout(() => {
            makeComputerMove();
        }, 500);

        return () => clearTimeout(timer);
    }
   }, [count, mode, lock]);

   const makeComputerMove = () => {
    let availableIndexes = data
    .map((value, index) => (value === "" ? index : null))
    .filter((value) => value !== null);

    if(availableIndexes.length === 0) return;

    let randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

    let newData = [...data];
    newData[randomIndex] = "O";

    setData(newData);
    setCount(count + 1);
    checkWin(newData);

   };

   const toggle = (num) => {
        if(lock || data[num] !== "") return;
        
        let newData = [...data];
        newData[num] = count % 2 === 0 ? "X" : "O";
        setData(newData);
        setCount(count + 1);
        checkWin(newData);
   }

   const checkWin = (board) => {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let hasWinner = false;
    
    winPatterns.forEach((pattern) => {
        const [a, b, c] = pattern;

        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            setLock(true);
           setWinner(board[a]);
           hasWinner = true;
        }
    });

    if(!hasWinner && board.every(cell => cell !== "")) {
        setLock(true);
        setWinner("Draw");
    }
   };

   const handlePlayAgain = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    setWinner(null);
   };

   const handleExit = () => {
    navigate("/");
   };

    return(
        <div className="container">
            <h1 className="title">GAME</h1>
            <div className="board">
                {data.map((value, index) => (
                    <div key={index} className="boxes" onClick={() => toggle(index)}> {value} </div>
                ))}
            </div>

            {winner && (
                <Result 
                    winner={winner}
                    onPlayAgain={handlePlayAgain}
                    onExit={handleExit}
                />
            )}

        </div>
    );
}