import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "./recipesUI/Favorites.jsx";
import Home from "./recipesUI/Home";
import SideBar from "./recipesUI/Sidebar.jsx"
 
function App() {
  return (
    <div className="flex">
      <BrowserRouter>
      <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
