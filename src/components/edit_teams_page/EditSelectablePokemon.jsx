import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosBackspace } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";

const EditSelectablePokemon = ({
  teamToEditData,
  setTeamToEditData,
  setNewPokemon,
  showSelectablePokemon,
  setShowSelectablePokemon,
  slotToFill,
}) => {
  // state values
  const [selectablePokemonData, setSelectablePokemonData] = useState([]);

  useEffect(() => {
    axios.get("/api/team/pokemon/all").then((res) => {
      // console.log("res.data:", res.data);
      setSelectablePokemonData(res.data);
    });
  }, []);

  // handler functions
  const handlePokemonSelection = (pokemon) => {
    setNewPokemon(pokemon);
    setShowSelectablePokemon(false);
  };

  // map over selectablePokemonData
  const pokemonCards = selectablePokemonData.map((pokemon) => (
    <div
      key={pokemon.pokemonId}
      onClick={() => {
        handlePokemonSelection(pokemon);
      }}
      className="flex justify-start place-items-center gap-x-1 sm:gap-x-4 md:gap-x-7 lg:gap-x-14 xl:gap-x-24 2xl:gap-x-32 w-full px-2 text-xs lg:text-sm text-center bg-white rounded-lg drop-shadow-lg cursor-pointer"
    >
      <p className="w-9 drop-shadow-lg">#{pokemon.species.dexNumber}</p>
      <div className="flex justify-center place-items-center h-10 w-10">
        <img
          className="drop-shadow-lg"
          src={pokemon.legacyIcon ?? pokemon.latestIcon}
          alt={pokemon.name}
        ></img>
      </div>
      <p className="w-20 drop-shadow-lg">{pokemon.species.name}</p>
      <div className="flex justify-center place-items-center gap-x-1 w-36 text-text-light">
        <div
          className={`flex justify-center place-items-center bg-${pokemon.type1.name}-primary w-16 lg:w-20 rounded-full drop-shadow-lg`}
        >
          <p className="drop-shadow-lg">{pokemon.type1.name.toUpperCase()}</p>
        </div>
        {pokemon.type2 !== null && (
          <div
            className={`flex justify-center place-items-center bg-${pokemon.type2.name}-primary w-16 lg:w-20 rounded-full drop-shadow-lg`}
          >
            <p className="drop-shadow-lg">{pokemon.type2.name.toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  ));

  return (
    <>
      <div className="fixed flex flex-col justify-center place-items-center gap-y-2 w-full h-svh bg-white px-10 pt-5 pb-28 z-50 animate-slideIn">
        <div className="flex flex-col justify-center place-items-center gap-y-2 w-fit h-full">
          <div className="flex flex-col justify-center place-items-center w-full">
            <IoIosBackspace
              onClick={() => setShowSelectablePokemon(false)}
              className="absolute place-self-start text-2xl cursor-pointer hover:text-accent-gray-dark transition-colors duration-300 ease-in-out"
            />
            <p className="font-semibold text-lg lg:text-xl">
              Pokemon Selection
            </p>
          </div>
          <div className="flex flex-col place-items-center gap-y-2 min-w-96 w-fit h-full p-2 bg-accent-gray-light rounded-lg overflow-y-scroll">
            {selectablePokemonData.length === 0 && (
              <VscLoading className="text-2xl animate-spin" />
            )}
            {pokemonCards}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSelectablePokemon;
