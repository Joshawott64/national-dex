import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { IoIosMenu } from "react-icons/io";

const HamburgerMenu = ({ setShowLogin }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  // invoke useDispatch
  const dispatch = useDispatch();

  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // state values
  const [randomPokemonData, setRandomPokemonData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/pokemon/random").then((res) => {
      // console.log("random pokemon:", res.data);
      setRandomPokemonData(res.data);
    });
  }, [isMenuOpen]);

  // handler functions
  const handleLogout = async () => {
    const res = await axios.post("/api/logout");

    if (res.data.success) {
      dispatch({
        type: "LOGOUT",
      });
    }
  };

  return (
    <div
      className={`absolute flex text-text-light pt-10 z-40 transition-transform duration-300 ease-in-out drop-shadow-lg lg:hidden ${
        isMenuOpen ? "translate-x-0" : "-translate-x-48"
      }`}
    >
      <div className="flex flex-col justify-start place-items-center gap-y-6 w-48 h-64 p-3 bg-primary rounded-br-lg drop-shadow-lg">
        <div
          onClick={() => navigate(`/pokemon/${randomPokemonData.speciesId}`)}
          className="flex justify-center place-items-center w-32 h-32 bg-white rounded-full drop-shadow-lg"
        >
          <img
            className="w-24 h-24"
            src={randomPokemonData.officialArtwork}
            alt="Official Artwork"
          />
        </div>
        <div className="flex flex-col gap-y-2 place-self-start text-sm">
          {userId === null && (
            <p className="drop-shadow-lg">Login to build your teams</p>
          )}
          {userId && (
            <p onClick={() => navigate("teams")} className="drop-shadow-lg">
              Your teams
            </p>
          )}
          <p onClick={() => navigate("/about")} className="drop-shadow-lg">
            About
          </p>
          {userId === null && (
            <p
              onClick={() => {
                setIsMenuOpen(false);
                setShowLogin(true);
              }}
              className="drop-shadow-lg"
            >
              Login
            </p>
          )}
          {userId && (
            <p onClick={handleLogout} className="drop-shadow-lg">
              Log out
            </p>
          )}
        </div>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex justify-center place-items-center h-14 bg-primary-darkened rounded-r-lg"
      >
        <IoIosMenu className="text-xl rotate-90" />
      </div>
    </div>
  );
};

export const LargeScreenMenu = ({ setShowLogin }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  // invoke useDispatch
  const dispatch = useDispatch();

  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // state values
  const [randomPokemonData, setRandomPokemonData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/pokemon/random").then((res) => {
      // console.log("random pokemon:", res.data);
      setRandomPokemonData(res.data);
    });
  }, [isMenuOpen]);

  // handler functions
  const handleLogout = async () => {
    const res = await axios.post("/api/logout");

    if (res.data.success) {
      dispatch({
        type: "LOGOUT",
      });
    }
    toast.success("Log out successful!");
  };

  return (
    <div className="justify-center place-items-center w-5/6 h-full text-text-light drop-shadow-lg hidden lg:block">
      <div className="flex flex-col justify-start place-items-center gap-y-6 w-52 xl:w-56 h-72 p-3 bg-primary rounded-lg drop-shadow-lg">
        <div
          onClick={() => navigate(`/pokemon/${randomPokemonData.speciesId}`)}
          className="flex justify-center place-items-center w-36 h-36 bg-white rounded-full drop-shadow-lg cursor-pointer"
        >
          <img
            className="w-28 h-28"
            src={randomPokemonData.officialArtwork}
            alt="Official Artwork"
          />
        </div>
        <div className="flex flex-col gap-y-2 place-self-start">
          {userId === null && (
            <p className="drop-shadow-lg">Login to build your teams</p>
          )}
          {userId && (
            <p
              onClick={() => navigate("teams")}
              className="drop-shadow-lg cursor-pointer hover:underline underline-offset-2"
            >
              Your teams
            </p>
          )}
          <p
            onClick={() => navigate("/about")}
            className="drop-shadow-lg cursor-pointer hover:underline underline-offset-2"
          >
            About
          </p>
          {userId === null && (
            <p
              onClick={() => {
                setIsMenuOpen(false);
                setShowLogin(true);
              }}
              className="drop-shadow-lg cursor-pointer hover:underline underline-offset-2"
            >
              Login
            </p>
          )}
          {userId && (
            <p
              onClick={handleLogout}
              className="drop-shadow-lg cursor-pointer hover:underline underline-offset-2"
            >
              Log out
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
