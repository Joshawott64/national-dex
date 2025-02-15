import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IoIosAddCircle,
  IoMdMale,
  IoMdFemale,
  IoMdSwap,
  IoIosAdd,
} from "react-icons/io";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi2";

const EditPokemonAndMoves = ({
  teamToEditData,
  setTeamToEditData,
  userPokemon,
  setUserPokemon,
  pokemonIsShiny,
  pokemonIsFemale,
  setPokemonIsShiny,
  setPokemonIsFemale,
  moveToFill,
  setMoveToFill,
  setShowMoveset,
  setShowAbilities,
  setShowSelectablePokemon,
  slotToFill,
  setSlotToFill,
  slotNum,
  newMove,
  newAbility,
  newPokemon,
}) => {
  // state values
  const [userPokemonMove1, setUserPokemonMove1] = useState(userPokemon.move1);
  const [userPokemonMove2, setUserPokemonMove2] = useState(userPokemon.move2);
  const [userPokemonMove3, setUserPokemonMove3] = useState(userPokemon.move3);
  const [userPokemonMove4, setUserPokemonMove4] = useState(userPokemon.move4);
  const [userPokemonAbility, setUserPokemonAbility] = useState(
    userPokemon.ability
  );

  // fires whenever newMove state value is changed in EditMoveset.jsx
  useEffect(() => {
    // copy teamToEditData
    const copy = teamToEditData;

    if (slotToFill !== slotNum) {
      return;
    }

    switch (slotToFill) {
      case 1:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon1.move1 = newMove;
          copy.userPokemon1.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon1.move2 = newMove;
          copy.userPokemon1.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon1.move3 = newMove;
          copy.userPokemon1.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon1.move4 = newMove;
          copy.userPokemon1.move4Id = newMove.moveId;
        }
        break;
      case 2:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon2.move1 = newMove;
          copy.userPokemon2.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon2.move2 = newMove;
          copy.userPokemon2.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon2.move3 = newMove;
          copy.userPokemon2.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon2.move4 = newMove;
          copy.userPokemon2.move4Id = newMove.moveId;
        }
        break;
      case 3:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon3.move1 = newMove;
          copy.userPokemon3.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon3.move2 = newMove;
          copy.userPokemon3.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon3.move3 = newMove;
          copy.userPokemon3.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon3.move4 = newMove;
          copy.userPokemon3.move4Id = newMove.moveId;
        }
        break;
      case 4:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon4.move1 = newMove;
          copy.userPokemon4.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon4.move2 = newMove;
          copy.userPokemon4.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon4.move3 = newMove;
          copy.userPokemon4.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon4.move4 = newMove;
          copy.userPokemon4.move4Id = newMove.moveId;
        }
        break;
      case 5:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon5.move1 = newMove;
          copy.userPokemon5.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon5.move2 = newMove;
          copy.userPokemon5.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon5.move3 = newMove;
          copy.userPokemon5.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon5.move4 = newMove;
          copy.userPokemon5.move4Id = newMove.moveId;
        }
        break;
      case 6:
        if (moveToFill === 1) {
          setUserPokemonMove1(newMove);
          copy.userPokemon6.move1 = newMove;
          copy.userPokemon6.move1Id = newMove.moveId;
        } else if (moveToFill === 2) {
          setUserPokemonMove2(newMove);
          copy.userPokemon6.move2 = newMove;
          copy.userPokemon6.move2Id = newMove.moveId;
        } else if (moveToFill === 3) {
          setUserPokemonMove3(newMove);
          copy.userPokemon6.move3 = newMove;
          copy.userPokemon6.move3Id = newMove.moveId;
        } else {
          setUserPokemonMove4(newMove);
          copy.userPokemon6.move4 = newMove;
          copy.userPokemon6.move4Id = newMove.moveId;
        }
        break;
      default:
        break;
    }
    setTeamToEditData(copy);
    setShowMoveset(false);
  }, [newMove]);

  // fires whenever newMove state value is changed in EditMoveset.jsx
  useEffect(() => {
    // copy teamToEditData
    const copy = teamToEditData;

    if (slotToFill !== slotNum) {
      return;
    }

    switch (slotToFill) {
      case 1:
        setUserPokemonAbility(newAbility);
        copy.userPokemon1.ability = newAbility;
        copy.userPokemon1.abilityId = newAbility.abilityId;
        break;
      case 2:
        setUserPokemonAbility(newAbility);
        copy.userPokemon2.ability = newAbility;
        copy.userPokemon2.abilityId = newAbility.abilityId;
        break;
      case 3:
        setUserPokemonAbility(newAbility);
        copy.userPokemon3.ability = newAbility;
        copy.userPokemon3.abilityId = newAbility.abilityId;
        break;
      case 4:
        setUserPokemonAbility(newAbility);
        copy.userPokemon4.ability = newAbility;
        copy.userPokemon4.abilityId = newAbility.abilityId;
        break;
      case 5:
        setUserPokemonAbility(newAbility);
        copy.userPokemon5.ability = newAbility;
        copy.userPokemon5.abilityId = newAbility.abilityId;
        break;
      case 6:
        setUserPokemonAbility(newAbility);
        copy.userPokemon6.ability = newAbility;
        copy.userPokemon6.abilityId = newAbility.abilityId;
        break;
      default:
        break;
    }
    setTeamToEditData(copy);
    setShowAbilities(false);
  }, [newAbility]);

  // fires whenever newPokemon state value is changed in EditSelectablePokemon.jsx
  useEffect(() => {
    // copy teamToEditData
    const copy = teamToEditData;

    if (slotToFill !== slotNum) {
      return;
    }

    switch (slotToFill) {
      case 1:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon1.pokemon = newPokemon;
        copy.userPokemon1.pokemonId = newPokemon.pokemonId;
        copy.userPokemon1.ability = null;
        copy.userPokemon1.abilityId = null;
        copy.userPokemon1.isFemale = false;
        copy.userPokemon1.isShiny = false;
        copy.userPokemon1.move1 = null;
        copy.userPokemon1.move1Id = null;
        copy.userPokemon1.move2 = null;
        copy.userPokemon1.move2Id = null;
        copy.userPokemon1.move3 = null;
        copy.userPokemon1.move3Id = null;
        copy.userPokemon1.move4 = null;
        copy.userPokemon1.move4Id = null;
        break;
      case 2:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon2.pokemon = newPokemon;
        copy.userPokemon2.pokemonId = newPokemon.pokemonId;
        copy.userPokemon2.ability = null;
        copy.userPokemon2.abilityId = null;
        copy.userPokemon2.isFemale = false;
        copy.userPokemon2.isShiny = false;
        copy.userPokemon2.move1 = null;
        copy.userPokemon2.move1Id = null;
        copy.userPokemon2.move2 = null;
        copy.userPokemon2.move2Id = null;
        copy.userPokemon2.move3 = null;
        copy.userPokemon2.move3Id = null;
        copy.userPokemon2.move4 = null;
        copy.userPokemon2.move4Id = null;
        break;
      case 3:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon3.pokemon = newPokemon;
        copy.userPokemon3.pokemonId = newPokemon.pokemonId;
        copy.userPokemon3.ability = null;
        copy.userPokemon3.abilityId = null;
        copy.userPokemon3.isFemale = false;
        copy.userPokemon3.isShiny = false;
        copy.userPokemon3.move1 = null;
        copy.userPokemon3.move1Id = null;
        copy.userPokemon3.move2 = null;
        copy.userPokemon3.move2Id = null;
        copy.userPokemon3.move3 = null;
        copy.userPokemon3.move3Id = null;
        copy.userPokemon3.move4 = null;
        copy.userPokemon3.move4Id = null;
        break;
      case 4:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon4.pokemon = newPokemon;
        copy.userPokemon4.pokemonId = newPokemon.pokemonId;
        copy.userPokemon4.ability = null;
        copy.userPokemon4.abilityId = null;
        copy.userPokemon4.isFemale = false;
        copy.userPokemon4.isShiny = false;
        copy.userPokemon4.move1 = null;
        copy.userPokemon4.move1Id = null;
        copy.userPokemon4.move2 = null;
        copy.userPokemon4.move2Id = null;
        copy.userPokemon4.move3 = null;
        copy.userPokemon4.move3Id = null;
        copy.userPokemon4.move4 = null;
        copy.userPokemon4.move4Id = null;
        break;
      case 5:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon5.pokemon = newPokemon;
        copy.userPokemon5.pokemonId = newPokemon.pokemonId;
        copy.userPokemon5.ability = null;
        copy.userPokemon5.abilityId = null;
        copy.userPokemon5.isFemale = false;
        copy.userPokemon5.isShiny = false;
        copy.userPokemon5.move1 = null;
        copy.userPokemon5.move1Id = null;
        copy.userPokemon5.move2 = null;
        copy.userPokemon5.move2Id = null;
        copy.userPokemon5.move3 = null;
        copy.userPokemon5.move3Id = null;
        copy.userPokemon5.move4 = null;
        copy.userPokemon5.move4Id = null;
        break;
      case 6:
        setUserPokemon({
          ability: null,
          abilityId: null,
          createdAt: userPokemon.createdAt,
          isFemale: false,
          isShiny: false,
          move1: null,
          move1Id: null,
          move2: null,
          move2Id: null,
          move3: null,
          move3Id: null,
          move4: null,
          move4Id: null,
          pokemon: newPokemon,
          pokemonId: newPokemon.pokemonId,
          userId: userPokemon.userId,
          userPokemonId: userPokemon.userPokemonId,
        });
        setUserPokemonMove1(null);
        setUserPokemonMove2(null);
        setUserPokemonMove3(null);
        setUserPokemonMove4(null);
        setUserPokemonAbility(null);
        setPokemonIsFemale(false);
        setPokemonIsShiny(false);
        copy.userPokemon6.pokemon = newPokemon;
        copy.userPokemon6.pokemonId = newPokemon.pokemonId;
        copy.userPokemon6.ability = null;
        copy.userPokemon6.abilityId = null;
        copy.userPokemon6.isFemale = false;
        copy.userPokemon6.isShiny = false;
        copy.userPokemon6.move1 = null;
        copy.userPokemon6.move1Id = null;
        copy.userPokemon6.move2 = null;
        copy.userPokemon6.move2Id = null;
        copy.userPokemon6.move3 = null;
        copy.userPokemon6.move3Id = null;
        copy.userPokemon6.move4 = null;
        copy.userPokemon6.move4Id = null;
        break;
      default:
        break;
    }
    setTeamToEditData(copy);
    setShowSelectablePokemon(false);
    // console.log("copy:", copy);
    // console.log("teamToEditData:", teamToEditData);
  }, [newPokemon]);

  // handler functions
  const handleShinyToggle = () => {
    // copy teamToEditData
    const copy = teamToEditData;

    // determine which pokemon to edit and toggle isShiny boolean
    switch (slotNum) {
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
    switch (slotNum) {
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
        <div className="flex flex-col md:text-lg">
          <div
            onClick={() => {
              setSlotToFill(slotNum);
              setShowSelectablePokemon(true);
            }}
            className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
          >
            <IoIosAddCircle className="text-lg drop-shadow-lg" />
            <p className="drop-shadow-lg">Add Pokemon</p>
          </div>
        </div>
      )}

      {userPokemon.pokemonId && (
        <div className="flex flex-col gap-y-2 md:text-lg">
          <div className="flex justify-start place-items-center w-full h-16 gap-x-0.5 sm:gap-x-8 lg:gap-x-0.5 2xl:gap-x-4 3xl:gap-x-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg">
            <div
              onClick={() => {
                setSlotToFill(slotNum);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-center place-items-center w-14 sm:w-16 md:w-24 lg:w-16 xl:w-24 2xl:w-28 3xl:w-36 cursor-pointer"
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
              <IoMdSwap className="rotate-90 drop-shadow-lg" />
            </div>
            <div className="flex justify-center place-items-center w-24 sm:w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-36 3xl:w-44 text-center">
              <p className="drop-shadow-lg">
                {userPokemon.pokemon.species.name}
              </p>
            </div>
            <div className="flex justify-center place-items-center gap-x-1 w-32 sm:w-36 md:w-40 lg:w-36 xl:w-40 2xl:w-44 3xl:w-52 text-text-light">
              <div
                className={`flex justify-center place-items-center bg-${userPokemon.pokemon.type1.name}-primary w-14 sm:w-16 rounded-full drop-shadow-lg`}
              >
                <p className="text-xs md:text-sm drop-shadow-lg">
                  {userPokemon.pokemon.type1.name.toUpperCase()}
                </p>
              </div>
              {userPokemon.pokemon.type2 !== null && (
                <div
                  className={`flex justify-center place-items-center bg-${userPokemon.pokemon.type2.name}-primary w-14 sm:w-16 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs md:text-sm drop-shadow-lg">
                    {userPokemon.pokemon.type2.name.toUpperCase()}
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-center place-items-center w-10 sm:w-14 md:w-20 lg:w-14 xl:w-20 2xl:w-24 3xl:w-32 text-center">
              {pokemonIsShiny && (
                <HiSparkles
                  className="text-lg drop-shadow-lg cursor-pointer"
                  onClick={() => {
                    // setSlotToFill(slotNum);
                    handleShinyToggle();
                  }}
                />
              )}
              {!pokemonIsShiny && (
                <HiOutlineSparkles
                  className="text-lg drop-shadow-lg cursor-pointer"
                  onClick={() => {
                    // setSlotToFill(slotNum);
                    handleShinyToggle();
                  }}
                />
              )}
            </div>
            {userPokemon.pokemon.species.hasGenderDifferences && (
              <div className="flex flex-row justify-center place-items-center w-16 sm:w-20 md:w-24 lg:w-20 xl:w-24 2xl:w-28 3xl:w-36 text-text-light rounded-lg drop-shadow-lg">
                <div
                  className={`flex justify-center place-items-center w-full p-1 border sm:border-2 border-blue-600 rounded-l-lg drop-shadow-lg ${
                    pokemonIsFemale
                      ? "bg-transparent text-blue-600 cursor-pointer"
                      : "bg-blue-600"
                  }`}
                  onClick={() => setPokemonIsFemale(false)}
                >
                  <IoMdMale className="text-xs md:text-sm drop-shadow-lg" />
                </div>
                <div
                  className={`flex justify-center place-items-center w-full p-1 border sm:border-2 border-red-600 rounded-r-lg drop-shadow-lg ${
                    pokemonIsFemale
                      ? "bg-red-600"
                      : "bg-transparent text-red-600 cursor-pointer"
                  }`}
                  onClick={() => setPokemonIsFemale(true)}
                >
                  <IoMdFemale className="text-xs md:text-sm drop-shadow-lg" />
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-x-2 gap-y-2 px-1">
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(1);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!userPokemonMove1 && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {userPokemonMove1 && (
                <div
                  className={`flex justify-center place-items-center bg-${userPokemonMove1.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {userPokemonMove1.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {userPokemonMove1 ? `${userPokemonMove1.name}` : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(2);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!userPokemonMove2 && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {userPokemonMove2 && (
                <div
                  className={`flex justify-center place-items-center bg-${userPokemonMove2.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {userPokemonMove2.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {userPokemonMove2 ? `${userPokemonMove2.name}` : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(3);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!userPokemonMove3 && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {userPokemonMove3 && (
                <div
                  className={`flex justify-center place-items-center bg-${userPokemonMove3.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {userPokemonMove3.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {userPokemonMove3 ? `${userPokemonMove3.name}` : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(4);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!userPokemonMove4 && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {userPokemonMove4 && (
                <div
                  className={`flex justify-center place-items-center bg-${userPokemonMove4.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {userPokemonMove4.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {userPokemonMove4 ? `${userPokemonMove4.name}` : "New Move"}
              </p>
            </div>
            {/* {!userPokemonAbility && (
              <p
                onClick={() => {
                  setSlotToFill(slotNum);
                  setShowAbilities(true);
                }}
              >
                Ability
              </p>
            )}
            {userPokemonAbility && (
              <p
                onClick={() => {
                  setSlotToFill(slotNum);
                  setShowAbilities(true);
                }}
              >
                {userPokemonAbility.name}
              </p>
            )} */}
            <div
              onClick={() => {
                setSlotToFill(slotNum);
                setShowAbilities(true);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!userPokemonAbility && (
                <>
                  <IoIosAddCircle className="drop-shadow-lg" />
                  <p className="drop-shadow-lg">Ability</p>
                </>
              )}
              {userPokemonAbility && (
                <>
                  <p className="drop-shadow-lg">
                    Ability -{" "}
                    {userPokemonAbility.name
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditPokemonAndMoves;
