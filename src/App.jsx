import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";
import Zenith from "./Pages/Zenith";
import XList from "./Pages/XListFolder/XList";
 
const App = () => {
  return (
    <main className="">
      <Router>
        <Routes>
          <Route path="/*" element={<Zenith />} />
          <Route path="/" element={<Zenith />} />
           
          {/* <Route path="/XList" element={<XList />} /> */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
