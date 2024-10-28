import React, { useState } from "react";

const PokemonList = ({ pokemonData, searchString }) => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  // map over pokemonData
  const pokemonCards = pokemonData.map((pokemon) => (
    <React.Fragment key={pokemon.speciesId}>
      {pokemon.name.toLowerCase().includes(searchString) && (
        <div className="flex justify-start place-items-center gap-x-1 w-full px-2 text-xs text-center bg-white rounded-lg drop-shadow-lg">
          <p className="w-9 drop-shadow-lg">#{pokemon.dexNumber}</p>
          <div className="flex justify-center place-items-center h-10 w-10">
            <img
              className="drop-shadow-lg"
              src={
                pokemon.pokemons[0].legacyIcon ?? pokemon.pokemons[0].latestIcon
              }
              alt={pokemon.name}
            ></img>
          </div>
          <p className="w-20 drop-shadow-lg">{pokemon.name}</p>
          <div className="flex justify-center place-items-center gap-x-1 w-36 text-text-light">
            <div
              className={`flex justify-center place-items-center bg-${pokemon.pokemons[0].type1.name}-primary w-16 rounded-full drop-shadow-lg`}
            >
              <p className="drop-shadow-lg">
                {pokemon.pokemons[0].type1.name.toUpperCase()}
              </p>
            </div>
            {pokemon.pokemons[0].type2 !== null && (
              <div
                className={`flex justify-center place-items-center bg-${pokemon.pokemons[0].type2.name}-primary w-16 rounded-full drop-shadow-lg`}
              >
                <p className="drop-shadow-lg">
                  {pokemon.pokemons[0].type2.name.toUpperCase()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  ));

  return (
    <div className="flex flex-col gap-y-2 h-full w-full bg-accent-gray-light rounded-lg p-2 overflow-y-scroll">
      {pokemonCards}
    </div>
  );
};

export default PokemonList;
