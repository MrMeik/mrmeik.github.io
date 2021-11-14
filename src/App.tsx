import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Navbar />

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
