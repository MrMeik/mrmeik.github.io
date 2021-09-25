import './App.css';
import Landing from './pages/Landing';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100vw" }}>
      <Router>
        <Routes>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/speedrun">
            <div>
              <h2>Test</h2>
            </div>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
