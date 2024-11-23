import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdCreate, IoMdTrash } from "react-icons/io";

const TeamCard = ({ team, setShowConfirmDelete, setTeamToDelete }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  // console.log("team:", team);

  return (
    <div className="bg-accent-gray-light text-text-light rounded-lg drop-shadow-lg">
      <div className="flex flex-row">
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon1.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon1.pokemon.legacyIcon ??
                team.userPokemon1.pokemon.latestIcon
              }
              alt="pokemon1"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon2.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon2.pokemon.legacyIcon ??
                team.userPokemon2.pokemon.latestIcon
              }
              alt="pokemon2"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon3.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon3.pokemon.legacyIcon ??
                team.userPokemon3.pokemon.latestIcon
              }
              alt="pokemon3"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon4.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon4.pokemon.legacyIcon ??
                team.userPokemon4.pokemon.latestIcon
              }
              alt="pokemon4"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon5.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon5.pokemon.legacyIcon ??
                team.userPokemon5.pokemon.latestIcon
              }
              alt="pokemon5"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center h-10 w-10">
          {team.userPokemon6.pokemonId && (
            <img
              className="drop-shadow-lg"
              src={
                team.userPokemon6.pokemon.legacyIcon ??
                team.userPokemon6.pokemon.latestIcon
              }
              alt="pokemon6"
            ></img>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-center bg-accent-gray-dark">
          <IoMdCreate
            onClick={() => navigate(`/teams/edit/${team.teamId}`)}
            className="drop-shadow-lg"
          />
        </div>
        <div
          onClick={() => {
            setTeamToDelete(team);
            setShowConfirmDelete(true);
          }}
          className="flex-1 flex justify-center place-items-center bg-red-600 rounded-r-lg"
        >
          <IoMdTrash className="drop-shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
