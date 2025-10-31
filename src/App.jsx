import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Zenith from "./Pages/Zenith";
import XList from "./Pages/XListFolder/XList";
import YouTube from "./Pages/YouTubePageFolder/YouTubeDirectoryPage";
const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/*" element={<Zenith />} />
          <Route path="/" element={<Zenith />} />
          <Route path="/Youtube" element={<YouTube />} />
          <Route path="/XList" element={<XList />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
