import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParentMenu from "./components/parent-menu/ParentMenu";
import ChildMenu from "./components/child-menu/ChildMenu";

import "./App.css";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ParentMenu />} />
          <Route path="/child" element={<ChildMenu />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
