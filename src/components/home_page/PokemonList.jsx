import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonList = ({
  pokemonData,
  searchString,
  useFilters,
  typeFilters,
  generationFilters,
  legendaryFilter,
  mythicalFilter,
}) => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  // invoke useNavigate
  const navigate = useNavigate();

  // state values
  const [matchesFilters, setMatchesFilters] = useState(true);

  // map over pokemonData
  const pokemonCards = pokemonData.map((pokemon) => (
    <React.Fragment key={pokemon.speciesId}>
      {pokemon.name.toLowerCase().includes(searchString) &&
        (useFilters
          ? (legendaryFilter
              ? pokemon.isLegendary === legendaryFilter
              : pokemon.speciesId) &&
            (mythicalFilter
              ? pokemon.isMythical === mythicalFilter
              : pokemon.speciesId) &&
            (generationFilters.length > 0
              ? generationFilters.includes(pokemon.generationId)
              : pokemon.speciesId) &&
            (typeFilters.length > 0
              ? typeFilters.includes(pokemon.pokemons[0].typeId) ||
                typeFilters.includes(pokemon.pokemons[0].type2Id)
              : pokemon.speciesId)
          : pokemon.speciesId) && (
          <div
            onClick={() => navigate(`/pokemon/${pokemon.speciesId}`)}
            className="flex justify-center place-items-center gap-x-1 w-full px-2 text-xs lg:text-sm xl:text-base text-center bg-white rounded-lg drop-shadow-lg cursor-pointer"
          >
            <p className="w-9 xl:w-14 2xl:w-20 3xl:w-28 drop-shadow-lg">
              #{pokemon.dexNumber}
            </p>
            <div className="flex justify-center place-items-center h-10 w-10 xl:w-14 2xl:w-20 3xl:w-28">
              <img
                className="max-h-10 max-w-10 drop-shadow-lg"
                src={
                  pokemon.pokemons[0].legacyIcon ??
                  pokemon.pokemons[0].latestIcon
                }
                alt={pokemon.name}
              ></img>
            </div>
            <p className="w-20 xl:w-24 2xl:w-32 3xl:w-40 drop-shadow-lg">
              {pokemon.name}
            </p>
            <div className="flex justify-center place-items-center gap-x-1 w-36 xl:w-40 2xl:w-48 3xl:w-56 text-text-light">
              <div
                className={`flex justify-center place-items-center bg-${pokemon.pokemons[0].type1.name}-primary w-16 lg:w-20 rounded-full drop-shadow-lg`}
              >
                <p className="drop-shadow-lg">
                  {pokemon.pokemons[0].type1.name.toUpperCase()}
                </p>
              </div>
              {pokemon.pokemons[0].type2 !== null && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemon.pokemons[0].type2.name}-primary w-16 lg:w-20 rounded-full drop-shadow-lg`}
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
    <div className="flex flex-col gap-y-2 w-full h-svh bg-accent-gray-light rounded-lg p-2 overflow-y-scroll">
      {pokemonCards}
    </div>
  );
};

export default PokemonList;
