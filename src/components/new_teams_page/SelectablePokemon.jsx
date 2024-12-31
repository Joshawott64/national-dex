import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosBackspace } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";

const SelectablePokemon = ({
  setPokemon1Data,
  setPokemon1IsShiny,
  setPokemon1IsFemale,
  setPokemon1Move1,
  setPokemon1Move2,
  setPokemon1Move3,
  setPokemon1Move4,
  setPokemon1Ability,
  setPokemon2Data,
  setPokemon2IsShiny,
  setPokemon2IsFemale,
  setPokemon2Move1,
  setPokemon2Move2,
  setPokemon2Move3,
  setPokemon2Move4,
  setPokemon2Ability,
  setPokemon3Data,
  setPokemon3IsShiny,
  setPokemon3IsFemale,
  setPokemon3Move1,
  setPokemon3Move2,
  setPokemon3Move3,
  setPokemon3Move4,
  setPokemon3Ability,
  setPokemon4Data,
  setPokemon4IsShiny,
  setPokemon4IsFemale,
  setPokemon4Move1,
  setPokemon4Move2,
  setPokemon4Move3,
  setPokemon4Move4,
  setPokemon4Ability,
  setPokemon5Data,
  setPokemon5IsShiny,
  setPokemon5IsFemale,
  setPokemon5Move1,
  setPokemon5Move2,
  setPokemon5Move3,
  setPokemon5Move4,
  setPokemon5Ability,
  setPokemon6Data,
  setPokemon6IsShiny,
  setPokemon6IsFemale,
  setPokemon6Move1,
  setPokemon6Move2,
  setPokemon6Move3,
  setPokemon6Move4,
  setPokemon6Ability,
  slotToFill,
  showSelectablePokemon,
  setShowSelectablePokemon,
}) => {
  // state values
  const [selectablePokemonData, setSelectablePokemonData] = useState([]);

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
        setPokemon1Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon1Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon1Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon1Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon1Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon1IsShiny(false);
        setPokemon1IsFemale(false);
        setShowSelectablePokemon(false);
        break;
      case 2:
        setPokemon2Data(pokemon);
        setPokemon2Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon2Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon2Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon2Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon2Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon2IsShiny(false);
        setPokemon2IsFemale(false);
        setShowSelectablePokemon(false);
        break;
      case 3:
        setPokemon3Data(pokemon);
        setPokemon3Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon3Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon3Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon3Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon3Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon3IsShiny(false);
        setPokemon3IsFemale(false);
        setShowSelectablePokemon(false);
        break;
      case 4:
        setPokemon4Data(pokemon);
        setPokemon4Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon4Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon4Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon4Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon4Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon4IsShiny(false);
        setPokemon4IsFemale(false);
        setShowSelectablePokemon(false);
        break;
      case 5:
        setPokemon5Data(pokemon);
        setPokemon5Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon5Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon5Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon5Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon5Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon5IsShiny(false);
        setPokemon5IsFemale(false);
        setShowSelectablePokemon(false);
        break;
      case 6:
        setPokemon6Data(pokemon);
        setPokemon6Move1({
          move: { name: "Move 1", moveId: null },
        });
        setPokemon6Move2({
          move: { name: "Move 2", moveId: null },
        });
        setPokemon6Move3({
          move: { name: "Move 3", moveId: null },
        });
        setPokemon6Move4({
          move: { name: "Move 4", moveId: null },
        });
        setPokemon6Ability({
          name: "Ability",
          abilityId: null,
        });
        setPokemon6IsShiny(false);
        setPokemon6IsFemale(false);
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
      <p className="w-20 drop-shadow-lg">{pokemon.species.name}</p>
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
      <div className="fixed flex flex-col justify-center place-items-center gap-y-2 w-full h-svh bg-white px-10 pt-5 pb-28 z-50 animate-slideIn">
        <div className="flex flex-col justify-center place-items-center w-full">
          <IoIosBackspace
            onClick={() => setShowSelectablePokemon(false)}
            className="absolute place-self-start text-2xl"
          />
          <p className="font-semibold text-lg">Pokemon Selection</p>
        </div>
        <div className="flex flex-col place-items-center gap-y-2 w-full h-full p-2 bg-accent-gray-light rounded-lg overflow-y-scroll">
          {selectablePokemonData.length === 0 && (
            <VscLoading className="text-2xl animate-spin" />
          )}
          {pokemonCards}
        </div>
      </div>
    </>
  );
};

export default SelectablePokemon;
