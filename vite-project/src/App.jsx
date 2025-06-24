
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameBoard from './assets/Components/GameBoard'
import PlayerSelect from './assets/Components/PlayerSelect'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PlayerSelect />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
