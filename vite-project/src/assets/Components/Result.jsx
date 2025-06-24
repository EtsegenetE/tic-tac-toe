export default function Result ({winner, onPlayAgain, onExit}) {
    return (
        <div className="result-overlay">
            <div className="result-model">
                <h2>{winner === "Draw" ? "It's a Draw! 🤝":  `🎉 Player ${winner} wins! 🎉`}</h2>
                <div className="result-btn">
                    <button className="btn" onClick={onPlayAgain}>Play Again</button>
                    <button className="btn" onClick={onExit}>Exit</button>
                </div>
            </div>
        </div>
    );
}