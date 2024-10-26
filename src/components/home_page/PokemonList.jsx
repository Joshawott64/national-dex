const PokemonList = ({ pokemonData }) => {
  const pokemonCards = pokemonData.map((pokemon) => (
    <div
      key={pokemon.speciesId}
      className="flex w-full bg-white rounded-lg drop-shadow-lg"
    >
      <p>#{pokemon.dexNumber}</p>
      <img
        src={pokemon.pokemons[0].legacyIcon ?? pokemon.pokemons[0].latestIcon}
        alt={pokemon.name}
      ></img>
      <p>{pokemon.name}</p>
    </div>
  ));

  return (
    <div className="flex flex-col gap-y-2 h-full w-full bg-accent-gray-light rounded-lg p-2 overflow-scroll">
      {pokemonCards}
    </div>
  );
};

export default PokemonList;
