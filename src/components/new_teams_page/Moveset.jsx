import { useState, useEffect } from "react";
import axios from "axios";

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

  // map over movesetData
  const moveset = movesetData.map((move) => (
    <div>
      <p onClick={() => handleMoveSelection(move)}>{move.move.name}</p>
    </div>
  ));

  return (
    <div className="absolute flex flex-col gap-y-2 w-full h-full bg-accent-gray-light p-2 z-50 rounded-lg overflow-y-scroll">
      {moveset}
    </div>
  );
};

export default Moveset;
