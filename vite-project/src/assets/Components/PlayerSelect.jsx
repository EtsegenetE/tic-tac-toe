
import { useNavigate } from "react-router-dom"

export default function PlayerSelect() {
   

    const navigate = useNavigate();

    function handleClick (mode) {
        navigate(`/game?mode=${mode}`);
    }


    return (
        <div className="btn-container">
            <button className="btn" onClick={() => handleClick("1")}>Play with Bot</button>
            <button className="btn"  onClick={() => handleClick("2")}>Play with Friend</button>
        </div>
    );
}