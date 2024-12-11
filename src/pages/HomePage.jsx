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

  // state values for filtering
  const [searchString, setSearchString] = useState("");
  const [useFilters, setUseFilters] = useState(false);
  const [typeFilters, setTypeFilters] = useState([]);
  const [generationFilters, setGenerationFilters] = useState([]);
  const [legendaryFilter, setLegendaryFilter] = useState(false);
  const [mythicalFilter, setMythicalFilter] = useState(false);

  // destructure prop from Outlet
  const [setShowLogin] = useOutletContext();

  useEffect(() => {
    axios.get("/api/pokemon/details/all").then((res) => {
      console.log("res.data:", res.data);
      setPokemonData(res.data);
    });
  }, []);

  // fires whenever filtering state values are updated
  useEffect(() => {
    if (
      typeFilters.length > 0 ||
      generationFilters.length > 0 ||
      legendaryFilter ||
      mythicalFilter
    ) {
      setUseFilters(true);
    } else {
      setUseFilters(false);
    }
  }, [typeFilters, generationFilters, legendaryFilter, mythicalFilter]);

  return (
    <>
      <HamburgerMenu setShowLogin={setShowLogin} />
      <Filters
        useFilters={useFilters}
        typeFilters={typeFilters}
        generationFilters={generationFilters}
        legendaryFilter={legendaryFilter}
        mythicalFilter={mythicalFilter}
        setUseFilters={setUseFilters}
        setTypeFilters={setTypeFilters}
        setGenerationFilters={setGenerationFilters}
        setLegendaryFilter={setLegendaryFilter}
        setMythicalFilter={setMythicalFilter}
      />
      <div className="flex flex-col justify-start place-items-center h-full px-10 pt-7">
        <SearchBar setSearchString={setSearchString} />
        <PokemonList
          pokemonData={pokemonData}
          searchString={searchString}
          useFilters={useFilters}
          typeFilters={typeFilters}
          generationFilters={generationFilters}
          legendaryFilter={legendaryFilter}
          mythicalFilter={mythicalFilter}
        />
      </div>
    </>
  );
};

export default HomePage;
