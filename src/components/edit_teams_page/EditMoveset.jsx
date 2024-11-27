import { useState, useEffect } from "react";
import axios from "axios";

const EditMoveset = ({
  teamToEditData,
  setShowMoveset,
  moveToFill,
  slotToFill,
  setNewMove,
}) => {
  // state values
  const [movesetData, setMovesetData] = useState([]);

  useEffect(() => {
    // determine which pokemonId to use in POST
    switch (slotToFill) {
      case 1:
        // POST request
        handleServerRequest(teamToEditData.userPokemon1.pokemonId);
        break;
      case 2:
        // POST request
        handleServerRequest(teamToEditData.userPokemon2.pokemonId);
        break;
      case 3:
        // POST request
        handleServerRequest(teamToEditData.userPokemon3.pokemonId);
        break;
      case 4:
        // POST request
        handleServerRequest(teamToEditData.userPokemon4.pokemonId);
        break;
      case 5:
        // POST request
        handleServerRequest(teamToEditData.userPokemon5.pokemonId);
        break;
      case 6:
        // POST request
        handleServerRequest(teamToEditData.userPokemon6.pokemonId);
        break;
      default:
        break;
    }
  }, []);

  // handler functions
  const handleServerRequest = async (pokemonId) => {
    console.log("pokemonId:", pokemonId);
    const moveset = await axios.post("/api/pokemon/moveset", { id: pokemonId });
    console.log("moveset.data:", moveset.data);
    setMovesetData(moveset.data);
  };

  // map over movesetData
  const moveset = movesetData.map((move) => (
    <div>
      <p onClick={() => setNewMove(move.move)}>{move.move.name}</p>
    </div>
  ));

  return (
    <div className="absolute flex flex-col gap-y-2 w-full h-full bg-accent-gray-light p-2 z-50 rounded-lg overflow-y-scroll">
      {moveset}
    </div>
  );
};

export default EditMoveset;
