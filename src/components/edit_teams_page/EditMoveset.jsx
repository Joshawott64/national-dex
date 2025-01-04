import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosBackspace } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";

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
    // console.log("pokemonId:", pokemonId);
    const moveset = await axios.post("/api/pokemon/moveset", { id: pokemonId });
    // console.log("moveset.data:", moveset.data);
    setMovesetData(moveset.data);
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
          onClick={() => setNewMove(move.move)}
          className="flex justify-start place-items-center gap-x-1 sm:gap-x-4 md:gap-x-7 lg:gap-x-14 xl:gap-x-24 w-full px-2 py-1 text-xs lg:text-sm text-center bg-white rounded-lg drop-shadow-lg cursor-pointer"
        >
          <div
            className={`flex-1 flex justify-center place-items-center bg-${move.move.type.name}-primary w-16 lg:w-36 rounded-full drop-shadow-lg`}
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
    <div className="fixed flex flex-col justify-center place-items-center gap-y-2 w-full h-full bg-white px-10 pt-5 pb-28 z-50 animate-slideIn">
      <div className="flex flex-col justify-center place-items-center gap-y-2 w-fit h-full">
        <div className="flex flex-col justify-center place-items-center w-full">
          <IoIosBackspace
            onClick={() => setShowMoveset(false)}
            className="absolute place-self-start text-2xl cursor-pointer hover:text-accent-gray-dark transition-colors duration-300 ease-in-out"
          />
          <p className="font-semibold text-lg lg:text-xl">Move Selection</p>
        </div>
        <div className="flex flex-col place-items-center gap-y-2 min-w-96 w-fit h-full p-2 z-50 bg-accent-gray-light rounded-lg overflow-y-scroll">
          {movesetData.length === 0 && (
            <VscLoading className="text-2xl animate-spin" />
          )}
          {moveset}
        </div>
      </div>
    </div>
  );
};

export default EditMoveset;
