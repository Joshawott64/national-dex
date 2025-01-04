import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosCloseCircle } from "react-icons/io";

const DeleteUser = ({ toast, showDeleteUser, setShowDeleteUser }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  // invoke useDispatch
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userId);

  // state values for authentication
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  // handler functions
  const handleAccountDeletion = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.delete(
        `/api/user/delete/${userId}/${username}/${password}`
      );

      if (res.data.success) {
        dispatch({
          type: "LOGOUT",
        });
        setUsername("");
        setPassword("");
        setShowDeleteUser(false);
        navigate("/");
        toast.success("Account deletion successful!");
      }
    } catch (err) {
      console.error("error:", err);
      setErrorText(err.response.data.message);
    }
  };

  return (
    <>
      <form action="submit">
        <div className="fixed flex flex-col justify-center place-items-center w-full h-full px-10 bg-black bg-opacity-60 z-50 animate-fadeIn">
          <div className="flex flex-col justify-center place-items-center gap-y-8 w-80 3xl:w-96 h-fit p-4 pb-8 bg-accent-gray-light rounded-lg drop-shadow-lg">
            <div className="place-self-start">
              <IoIosCloseCircle
                className="text-text-dark text-2xl 3xl:text-3xl drop-shadow-lg cursor-pointer hover:text-accent-gray-dark transition-colors duration-300"
                onClick={() => setShowDeleteUser(false)}
              />
            </div>
            <h3 className="text-text-dark text-3xl 3xl:text-4xl drop-shadow-lg">
              Delete Account?
            </h3>
            <p className="flex justify-center font-normal text-center text-base text-warning drop-shadow-lg">
              Account deletion cannot be undone. If you wish to continue, enter
              your account details below.
            </p>
            <div className="w-full">
              <div className="flex place-items-center">
                <p className="flex-1 text-text-dark drop-shadow-lg">Username</p>
                <p className="flex-1 text-orange-500 text-xs drop-shadow-lg">
                  {errorText}
                </p>
              </div>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-1 rounded-md drop-shadow-lg border-2 border-white focus:outline-none focus:border-accent-gray-dark transition-colors duration-300 ease-in-out"
              />
            </div>
            <div className="w-full">
              <p className="text-text-dark drop-shadow-lg">Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-1 rounded-md drop-shadow-lg border-2 border-white focus:outline-none focus:border-accent-gray-dark transition-colors duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center place-items-center w-full drop-shadow-lg">
              <button
                type="submit"
                onClick={handleAccountDeletion}
                className="w-full bg-primary p-1 rounded-md hover:bg-primary-darkened transition-all duration-300"
              >
                <p className="text-text-light text-lg 3xl:text-xl drop-shadow-lg">
                  Submit
                </p>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DeleteUser;
