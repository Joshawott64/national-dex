import { useState } from "react";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

const TeamCard = ({ team }) => {
  // state values
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();
  const [pokemon3, setPokemon3] = useState();
  const [pokemon4, setPokemon4] = useState();
  const [pokemon5, setPokemon5] = useState();
  const [pokemon6, setPokemon6] = useState();

  console.log("team:", team);

  return (
    <div className="bg-accent-gray-light text-text-light rounded-lg drop-shadow-lg">
      <div className="flex flex-row">
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon1.pokemon.legacyIcon ??
              team.userPokemon1.pokemon.latestIcon
            }
            alt={team.userPokemon1.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon2.pokemon.legacyIcon ??
              team.userPokemon2.pokemon.latestIcon
            }
            alt={team.userPokemon2.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon3.pokemon.legacyIcon ??
              team.userPokemon3.pokemon.latestIcon
            }
            alt={team.userPokemon3.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon4.pokemon.legacyIcon ??
              team.userPokemon4.pokemon.latestIcon
            }
            alt={team.userPokemon4.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon5.pokemon.legacyIcon ??
              team.userPokemon5.pokemon.latestIcon
            }
            alt={team.userPokemon5.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          <img
            className="drop-shadow-lg"
            src={
              team.userPokemon6.pokemon.legacyIcon ??
              team.userPokemon6.pokemon.latestIcon
            }
            alt={team.userPokemon6.nickname}
          ></img>
        </div>
        <div className="flex-1 flex justify-center place-items-center bg-accent-gray-dark">
          <IoMdCreate className="drop-shadow-lg" />
        </div>
        <div className="flex-1 flex justify-center place-items-center bg-red-600 rounded-r-lg">
          <IoMdTrash className="drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
