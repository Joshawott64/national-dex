import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const HamburgerMenu = () => {
  // invoke useNavigate
  const navigate = useNavigate();

  // state values
  const [randomPokemonData, setRandomPokemonData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    axios.get("/api/pokemon/random").then((res) => {
      // console.log("random pokemon:", res.data);
      setRandomPokemonData(res.data);
    });
  }, [isMenuOpen]);

  return (
    <div
      className={`absolute flex text-text-light pt-10 z-50 transition-transform duration-300 ease-in-out drop-shadow-lg ${
        isMenuOpen ? "translate-x-0" : "-translate-x-48"
      }`}
    >
      <div className="flex flex-col justify-start place-items-center gap-y-6 w-48 h-64 p-3 bg-primary rounded-br-lg drop-shadow-lg">
        <div
          onClick={() => navigate(`/pokemon/${randomPokemonData.speciesId}`)}
          className="flex justify-center place-items-center w-32 h-32 bg-white border-4 border-accent-gray-dark rounded-full drop-shadow-lg"
        >
          <img
            className="w-24 h-24"
            src={randomPokemonData.officialArtwork}
            alt="Official Artwork"
          />
        </div>
        <div className="flex flex-col gap-y-4 place-self-start text-sm">
          <p className="drop-shadow-lg">Your teams</p>
          <p className="drop-shadow-lg">Login/Log out</p>
        </div>
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex justify-center place-items-center h-14 bg-primary rounded-r-lg"
      >
        <IoIosMenu className="text-xl rotate-90" />
      </div>
    </div>
  );
};

export default HamburgerMenu;
