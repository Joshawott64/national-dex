const EvolutionChain = ({ evolutionChainData }) => {
  // map over evolutionChainData
  const evolutionList = evolutionChainData.map((evolution) => (
    <div
      key={evolution.evolutionId}
      className="flex flex-col justify-center place-items-center w-24 h-24 bg-accent-gray-light rounded-lg drop-shadow-lg"
    >
      <img
        src={evolution.species.pokemons[0].officialArtwork}
        alt={evolution.species.name}
        className="flex-1 w-16"
      />
      <div className="flex-1 w-full bg-primary rounded-b-lg"></div>
    </div>
  ));

  return (
    <div className="flex justify-center place-items-center w-full gap-x-4">
      {evolutionList}
    </div>
  );
};

export default EvolutionChain;
