import React, { useState, useEffect } from "react";
import axios from "axios";

const SelectablePokemon = ({
  setPokemon1Data,
  setPokemon1IsShiny,
  setPokemon1IsFemale,
  setPokemon2Data,
  setPokemon2IsShiny,
  setPokemon2IsFemale,
  setPokemon3Data,
  setPokemon3IsShiny,
  setPokemon3IsFemale,
  setPokemon4Data,
  setPokemon4IsShiny,
  setPokemon4IsFemale,
  setPokemon5Data,
  setPokemon5IsShiny,
  setPokemon5IsFemale,
  setPokemon6Data,
  setPokemon6IsShiny,
  setPokemon6IsFemale,
  slotToFill,
  showSelectablePokemon,
  setShowSelectablePokemon,
}) => {
  // state values
  const [selectablePokemonData, setSelectablePokemonData] = useState([]);
  const [popupPokemonData, setPopupPokemonData] = useState([]);
  const [showPokemonPopup, setShowPokemonPopup] = useState(false);

  useEffect(() => {
    axios.get("/api/team/pokemon/all").then((res) => {
      console.log("res.data:", res.data);
      setSelectablePokemonData(res.data);
    });
  }, []);

  // handler functions
  const handlePokemonSelection = (pokemon) => {
    switch (slotToFill) {
      case 1:
        setPokemon1Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      case 2:
        setPokemon2Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      case 3:
        setPokemon3Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      case 4:
        setPokemon4Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      case 5:
        setPokemon5Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      case 6:
        setPokemon6Data(pokemon);
        setShowSelectablePokemon(false);
        break;
      default:
        setShowSelectablePokemon(false);
    }
  };

  // map over selectablePokemonData
  const pokemonCards = selectablePokemonData.map((pokemon) => (
    <div
      key={pokemon.pokemonId}
      onClick={() => {
        handlePokemonSelection(pokemon);
      }}
      className="flex justify-start place-items-center gap-x-1 w-full px-2 text-xs text-center bg-white rounded-lg drop-shadow-lg"
    >
      <p className="w-9 drop-shadow-lg">#{pokemon.species.dexNumber}</p>
      <div className="flex justify-center place-items-center h-10 w-10">
        <img
          className="drop-shadow-lg"
          src={pokemon.legacyIcon ?? pokemon.latestIcon}
          alt={pokemon.name}
        ></img>
      </div>
      <p className="w-20 drop-shadow-lg">{pokemon.name}</p>
      <div className="flex justify-center place-items-center gap-x-1 w-36 text-text-light">
        <div
          className={`flex justify-center place-items-center bg-${pokemon.type1.name}-primary w-16 rounded-full drop-shadow-lg`}
        >
          <p className="drop-shadow-lg">{pokemon.type1.name.toUpperCase()}</p>
        </div>
        {pokemon.type2 !== null && (
          <div
            className={`flex justify-center place-items-center bg-${pokemon.type2.name}-primary w-16 rounded-full drop-shadow-lg`}
          >
            <p className="drop-shadow-lg">{pokemon.type2.name.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <div
        className={`absolute w-full h-full bg-white pb-48 px-10 z-50 overscroll-y-none ${
          showSelectablePokemon ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full gap-y-2 p-2 bg-accent-gray-light rounded-lg overflow-y-scroll">
          {pokemonCards}
        </div>
      </div>
    </>
  );
};

export default SelectablePokemon;
