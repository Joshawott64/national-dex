import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import Filters from "../components/home_page/Filters.jsx";
import HamburgerMenu from "../components/home_page/HamburgerMenu.jsx";
import PokemonList from "../components/home_page/PokemonList.jsx";
import SearchBar from "../components/home_page/SearchBar.jsx";

const HomePage = () => {
  // state values
  const [pokemonData, setPokemonData] = useState([]);
  const [searchString, setSearchString] = useState("");

  // destructure prop from Outlet
  const [setShowLogin] = useOutletContext();

  useEffect(() => {
    axios.get("/api/pokemon/details/all").then((res) => {
      console.log("res.data:", res.data);
      setPokemonData(res.data);
    });
  }, []);

  return (
    <>
      <HamburgerMenu setShowLogin={setShowLogin} />
      <div className="h-full px-10">
        <Filters />
        <SearchBar setSearchString={setSearchString} />
        <PokemonList pokemonData={pokemonData} searchString={searchString} />
      </div>
    </>
  );
};

export default HomePage;
