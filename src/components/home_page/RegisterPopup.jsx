import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";

const RegisterPopup = ({ setShowLogin, setShowRegister }) => {
  // invoke useDispatch
  const dispatch = useDispatch();

  // state values for registration
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  // handler functions
  const handleRegister = async (e) => {
    e.preventDefault();

    const bodyObj = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post("/api/register", bodyObj);

      if (res.data.userId) {
        dispatch({
          type: "USER_AUTH",
          payload: res.data.userId,
        });
        setUsername("");
        setPassword("");
        setShowLogin(false);
      }
    } catch (err) {
      setErrorText(err.response.data.message);
    }
  };

  return (
    <form action="submit">
      <div className="fixed flex flex-col justify-center place-items-center w-full h-full px-10 bg-black bg-opacity-60 z-50 animate-fadeIn">
        <div className="flex flex-col justify-center place-items-center gap-y-8 w-full h-fit p-4 pb-8 mx-4 my-10 mb-32 bg-accent-gray-light rounded-lg drop-shadow-lg">
          <div className="place-self-start">
            <IoIosCloseCircle
              className="text-text-dark text-2xl drop-shadow-lg"
              onClick={() => setShowRegister(false)}
            />
          </div>
          <h3 className="text-text-dark text-3xl drop-shadow-lg">Register</h3>
          <div className="w-full">
            <div className="flex">
              <p className="flex-1 text-text-dark drop-shadow-lg">Username</p>
              <p className="flex-1 text-text-dark drop-shadow-lg">
                {errorText}
              </p>
            </div>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-1 rounded-md drop-shadow-lg"
            />
          </div>
          <div className="w-full">
            <p className="text-text-dark drop-shadow-lg">Password</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-1 rounded-md drop-shadow-lg"
            />
          </div>
          <div className="flex justify-center place-items-center w-full drop-shadow-lg">
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full bg-primary p-1 rounded-md"
            >
              <p className="text-text-light text-lg drop-shadow-lg">Submit</p>
            </button>
          </div>
          <div className="flex flex-row justify-center place-items-center gap-x-2">
            <p>Already registered?</p>
            <p
              onClick={() => {
                setShowRegister(false);
                setShowLogin(true);
              }}
            >
              Login here
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPopup;
