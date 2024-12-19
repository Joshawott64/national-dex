import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosBackspace } from "react-icons/io";

const Moveset = ({
  moveToFill,
  slotToFill,
  setShowMoveset,
  pokemon1Data,
  setPokemon1Move1,
  setPokemon1Move2,
  setPokemon1Move3,
  setPokemon1Move4,
  pokemon2Data,
  setPokemon2Move1,
  setPokemon2Move2,
  setPokemon2Move3,
  setPokemon2Move4,
  pokemon3Data,
  setPokemon3Move1,
  setPokemon3Move2,
  setPokemon3Move3,
  setPokemon3Move4,
  pokemon4Data,
  setPokemon4Move1,
  setPokemon4Move2,
  setPokemon4Move3,
  setPokemon4Move4,
  pokemon5Data,
  setPokemon5Move1,
  setPokemon5Move2,
  setPokemon5Move3,
  setPokemon5Move4,
  pokemon6Data,
  setPokemon6Move1,
  setPokemon6Move2,
  setPokemon6Move3,
  setPokemon6Move4,
}) => {
  // state values
  const [movesetData, setMovesetData] = useState([]);

  useEffect(() => {
    // determine which pokemonId to use in POST
    switch (slotToFill) {
      case 1:
        // POST request
        handleServerRequest(pokemon1Data.pokemonId);
        break;
      case 2:
        // POST request
        handleServerRequest(pokemon2Data.pokemonId);
        break;
      case 3:
        // POST request
        handleServerRequest(pokemon3Data.pokemonId);
        break;
      case 4:
        // POST request
        handleServerRequest(pokemon4Data.pokemonId);
        break;
      case 5:
        // POST request
        handleServerRequest(pokemon5Data.pokemonId);
        break;
      case 6:
        // POST request
        handleServerRequest(pokemon6Data.pokemonId);
        break;
      default:
        break;
    }
  }, []);

  // handler functions
  const handleServerRequest = async (pokemonId) => {
    const moveset = await axios.post("/api/pokemon/moveset", { id: pokemonId });
    setMovesetData(moveset.data);
    // console.log("moveset.data:", moveset.data);
  };

  const handleMoveSelection = (move) => {
    switch (slotToFill) {
      case 1:
        if (moveToFill === 1) {
          setPokemon1Move1(move);
        } else if (moveToFill === 2) {
          setPokemon1Move2(move);
        } else if (moveToFill === 3) {
          setPokemon1Move3(move);
        } else {
          setPokemon1Move4(move);
        }
        break;
      case 2:
        if (moveToFill === 1) {
          setPokemon2Move1(move);
        } else if (moveToFill === 2) {
          setPokemon2Move2(move);
        } else if (moveToFill === 3) {
          setPokemon2Move3(move);
        } else {
          setPokemon2Move4(move);
        }
        break;
      case 3:
        if (moveToFill === 1) {
          setPokemon3Move1(move);
        } else if (moveToFill === 2) {
          setPokemon3Move2(move);
        } else if (moveToFill === 3) {
          setPokemon3Move3(move);
        } else {
          setPokemon3Move4(move);
        }
        break;
      case 4:
        if (moveToFill === 1) {
          setPokemon4Move1(move);
        } else if (moveToFill === 2) {
          setPokemon4Move2(move);
        } else if (moveToFill === 3) {
          setPokemon4Move3(move);
        } else {
          setPokemon4Move4(move);
        }
        break;
      case 5:
        if (moveToFill === 1) {
          setPokemon5Move1(move);
        } else if (moveToFill === 2) {
          setPokemon5Move2(move);
        } else if (moveToFill === 3) {
          setPokemon5Move3(move);
        } else {
          setPokemon5Move4(move);
        }
        break;
      case 6:
        if (moveToFill === 1) {
          setPokemon6Move1(move);
        } else if (moveToFill === 2) {
          setPokemon6Move2(move);
        } else if (moveToFill === 3) {
          setPokemon6Move3(move);
        } else {
          setPokemon6Move4(move);
        }
        break;
      default:
        break;
    }
    setShowMoveset(false);
  };

  // filtered movesetData
  const filteredMovesetData = [];

  // map over movesetData
  const moveset = movesetData.map((move) => {
    // check if move already exists
    if (!filteredMovesetData.some((el) => el.name === move.move.name)) {
      filteredMovesetData.push(move.move);
      return (
        <div
          key={move.moveId}
          onClick={() => handleMoveSelection(move)}
          className="flex justify-start place-items-center gap-x-1 w-full h-10 px-2 text-xs text-center bg-white rounded-lg drop-shadow-lg"
        >
          <div
            className={`flex-1 flex justify-center place-items-center bg-${move.move.type.name}-primary w-16 rounded-full drop-shadow-lg`}
          >
            <p className="text-text-light drop-shadow-lg">
              {move.move.type.name.toUpperCase()}
            </p>
          </div>
          <p className="flex-1 flex justify-center place-items-center h-10 text-center drop-shadow-lg">
            {move.move.name}
          </p>
          <p className="flex-1 flex justify-center place-items-center h-10 text-center drop-shadow-lg">
            {move.move.damageClass}
          </p>
          <div className="flex-1 flex flex-col justify-center place-items-center h-10 text-center">
            <p className="drop-shadow-lg">Power:</p>
            <p className="drop-shadow-lg">{move.move.power ?? "N/A"}</p>
          </div>
          <div className="flex-1 flex flex-col justify-center place-items-center h-10 text-center">
            <p className="drop-shadow-lg">PP:</p>
            <p className="drop-shadow-lg">{move.move.pp}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="fixed flex flex-col justify-center place-items-center gap-y-2 w-full h-full bg-white px-5 pt-5 pb-28 z-50 animate-slideIn">
      <div className="flex flex-col justify-center place-items-center w-full">
        <IoIosBackspace
          onClick={() => setShowMoveset(false)}
          className="absolute place-self-start text-2xl drop-shadow-lg"
        />
        <p className="font-semibold text-lg drop-shadow-lg">Move Selection</p>
      </div>
      <div className="flex flex-col gap-y-2 w-full h-full p-2 z-50 bg-accent-gray-light rounded-lg overflow-y-scroll">
        {moveset}
      </div>
    </div>
  );
};

export default Moveset;
