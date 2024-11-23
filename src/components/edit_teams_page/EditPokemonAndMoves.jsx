import React, { useState } from "react";
import { IoIosAddCircle, IoMdMale, IoMdFemale } from "react-icons/io";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi2";

const EditPokemonAndMoves = ({
  teamToEditData,
  userPokemon,
  setTeamToEditData,
  pokemonIsShiny,
  pokemonIsFemale,
  setPokemonIsShiny,
  setPokemonIsFemale,
  slotToFill,
}) => {
  // state values
  const [moveToFill, setMoveToFill] = useState(1);
  const [userPokemonMove1, setUserPokemonMove1] = useState(userPokemon.move1);
  const [userPokemonMove2, setUserPokemonMove2] = useState(userPokemon.move2);
  const [userPokemonMove3, setUserPokemonMove3] = useState(userPokemon.move3);
  const [userPokemonMove4, setUserPokemonMove4] = useState(userPokemon.move4);
  const [userPokemonAbility, setUserPokemonAbility] = useState(
    userPokemon.ability
  );

  //   console.log("userPokemon:", userPokemon);

  // handler functions
  const handleShinyToggle = () => {
    // copy teamToEditData
    const copy = teamToEditData;

    // determine which pokemon to edit and toggle isShiny boolean
    switch (slotToFill) {
      case 1:
        copy.userPokemon1.isShiny = !copy.userPokemon1.isShiny;
        break;
      case 2:
        copy.userPokemon2.isShiny = !copy.userPokemon2.isShiny;

        break;
      case 3:
        copy.userPokemon3.isShiny = !copy.userPokemon3.isShiny;
        break;
      case 4:
        copy.userPokemon4.isShiny = !copy.userPokemon4.isShiny;
        break;
      case 5:
        copy.userPokemon5.isShiny = !copy.userPokemon5.isShiny;
        break;
      case 6:
        copy.userPokemon6.isShiny = !copy.userPokemon6.isShiny;
        break;
      default:
        break;
    }

    // save edits to teamToEditData state value
    setTeamToEditData(copy);

    // toggle boolean state value to trigger a component re-render
    setPokemonIsShiny(!pokemonIsShiny);
  };

  const handleGenderToggle = () => {
    // copy teamToEditData
    const copy = teamToEditData;

    // determine which pokemon to edit and toggle isFemale boolean
    switch (slotToFill) {
      case 1:
        copy.userPokemon1.isFemale = !copy.userPokemon1.isFemale;
        break;
      case 2:
        copy.userPokemon2.isFemale = !copy.userPokemon2.isFemale;

        break;
      case 3:
        copy.userPokemon3.isFemale = !copy.userPokemon3.isFemale;
        break;
      case 4:
        copy.userPokemon4.isFemale = !copy.userPokemon4.isFemale;
        break;
      case 5:
        copy.userPokemon5.isFemale = !copy.userPokemon5.isFemale;
        break;
      case 6:
        copy.userPokemon6.isFemale = !copy.userPokemon6.isFemale;
        break;
      default:
        break;
    }

    // save edits to teamToEditData state value
    setTeamToEditData(copy);

    // toggle boolean state value to trigger a component re-render
    setPokemonIsFemale(!pokemonIsFemale);
  };

  return (
    <>
      {!userPokemon.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}

      {userPokemon.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              // onClick={() => {
              //   setSlotToFill(1);
              //   setShowSelectablePokemon(true);
              // }}
              className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <div className="flex justify-center place-items-center h-10 w-10">
                <img
                  className="drop-shadow-lg"
                  src={
                    userPokemon.pokemon.legacyIcon ??
                    userPokemon.pokemon.latestIcon
                  }
                  alt={userPokemon.pokemon.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{userPokemon.pokemon.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${userPokemon.pokemon.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {userPokemon.pokemon.type1.name.toUpperCase()}
                  </p>
                </div>
                {userPokemon.pokemon.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${userPokemon.pokemon.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {userPokemon.pokemon.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemonIsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={handleShinyToggle}
                  />
                )}
                {!pokemonIsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={handleShinyToggle}
                  />
                )}
              </div>
              {userPokemon.pokemon.species.hasGenderDifferences && (
                <div
                  onClick={handleGenderToggle}
                  className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg"
                >
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    // onClick={() => setPokemon1IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    // onClick={() => setPokemon1IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              {userPokemon.move1 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(1);
                //   setSlotToFill(1);
                // }}
                >
                  {userPokemon.move1.name}
                </p>
              )}
              {!userPokemon.move1 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(1);
                //   setSlotToFill(1);
                // }}
                >
                  Move 1
                </p>
              )}
              {userPokemon.move2 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(2);
                //   setSlotToFill(1);
                // }}
                >
                  {userPokemon.move2.name}
                </p>
              )}
              {!userPokemon.move2 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(2);
                //   setSlotToFill(1);
                // }}
                >
                  Move 2
                </p>
              )}
              {userPokemon.move3 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(3);
                //   setSlotToFill(1);
                // }}
                >
                  {userPokemon.move3.name}
                </p>
              )}
              {!userPokemon.move3 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(3);
                //   setSlotToFill(1);
                // }}
                >
                  Move 3
                </p>
              )}
              {userPokemon.move4 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(4);
                //   setSlotToFill(1);
                // }}
                >
                  {userPokemon.move4.name}
                </p>
              )}
              {!userPokemon.move4 && (
                <p
                // onClick={() => {
                //   setShowMoveset(true);
                //   setMoveToFill(4);
                //   setSlotToFill(1);
                // }}
                >
                  Move 4
                </p>
              )}
              {userPokemon.ability && (
                <p
                // onClick={() => {
                //   setSlotToFill(1);
                //   setShowAbilities(true);
                // }}
                >
                  {userPokemon.ability.name}
                </p>
              )}
              {!userPokemon.ability && (
                <p
                // onClick={() => {
                //   setSlotToFill(1);
                //   setShowAbilities(true);
                // }}
                >
                  Ability
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPokemonAndMoves;
