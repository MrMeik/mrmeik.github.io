import './App.css';
import Landing from './pages/Landing';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <button>Bit</button>

      <Routes>
        <Route path="/" element={
          <>
            Landing
            <Landing />
          </>
        } />
        <Route path="/speedrun" element={
          <div>
            <h2>Spedrun</h2>
          </div>} />
      </Routes>
    </div>
  );
}

export default App;
