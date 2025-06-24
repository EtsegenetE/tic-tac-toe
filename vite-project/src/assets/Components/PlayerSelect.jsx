
import { useNavigate } from "react-router-dom"

export default function PlayerSelect() {
   

    const navigate = useNavigate();

    function handleClick (mode) {
        navigate(`/game?mode=${mode}`);
    }


    return (
        <div className="btn-container">
            <button className="btn" onClick={() => handleClick("1")}>Player 1</button>
            <button className="btn"  onClick={() => handleClick("2")}>Player 2</button>
        </div>
    );
}