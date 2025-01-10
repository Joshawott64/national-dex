import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar.jsx";
import LoginPopup from "./components/home_page/LoginPopup.jsx";
import RegisterPopup from "./components/home_page/RegisterPopup.jsx";
import DeleteUser from "./components/delete_user/DeleteUser.jsx";
import "./App.css";

function App() {
  // invoke useDispatch
  const dispatch = useDispatch();

  // state values
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);

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
    <div className="h-svh select-none">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      {showRegister && (
        <RegisterPopup
          toast={toast}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
      {showLogin && (
        <LoginPopup
          toast={toast}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
      {showDeleteUser && (
        <DeleteUser
          toast={toast}
          showDeleteUser={showDeleteUser}
          setShowDeleteUser={setShowDeleteUser}
        />
      )}
      <div className="fixed z-50 w-full">
        <Navbar />
      </div>
      <div className="flex flex-col justify-start h-full w-full pt-24 pb-20">
        <Outlet context={[setShowLogin, setShowDeleteUser]} />
        <div className="flex justify-center place-items-center w-full">
          <p className="p-6 drop-shadow-lg">
            Want to support NationalDex?{" "}
            <a
              href="https://buymeacoffee.com/joshuagrayu"
              target="_blank"
              className="text-primary-darkened underline-offset-2 hover:text-primary hover:underline transition-colors duration-200"
            >
              BuyMeACoffee
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
