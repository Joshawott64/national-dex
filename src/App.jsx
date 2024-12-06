import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Navbar from "./components/navbar/Navbar.jsx";
import LoginPopup from "./components/home_page/LoginPopup.jsx";
import RegisterPopup from "./components/home_page/RegisterPopup.jsx";
import "./App.css";

function App() {
  // invoke useDispatch
  const dispatch = useDispatch();

  // state values
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

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
      {showRegister && (
        <RegisterPopup
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
      {showLogin && (
        <LoginPopup
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="h-full w-full pt-36 pb-28">
        <Outlet context={[setShowLogin]} />
      </div>
    </div>
  );
}

export default App;
