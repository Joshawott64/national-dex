import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="h-svh">
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div className="h-full w-full pt-36">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
