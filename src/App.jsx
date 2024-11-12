import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./components/navbar/Navbar.jsx";
import "./App.css";

function App() {
  const sessionCheck = async () => {
    const res = await axios.get("/api/session-check");

    if (res.data.success) {
      console.log("sessionCheck: SUCCESS");
      dispatch({
        type: "USER_AUTH",
        payload: res.data.userId,
      });
    } else {
      console.log("sessionCheck: FAILURE");
    }
  };

  useEffect(() => {
    sessionCheck();
  }, []);

  return (
    <div className="h-svh">
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="h-full w-full pt-36 pb-28">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
