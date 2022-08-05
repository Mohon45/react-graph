import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Graph from "./component/Graph/Graph";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Graph />} />
      </Routes>
    </div>
  );
}

export default App;
