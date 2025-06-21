import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Zenith from "./Pages/Zenith";

const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/" element={<Zenith />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
