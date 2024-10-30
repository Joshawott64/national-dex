const FormSelection = ({
  pokemonData,
  setBannerImage,
  setGiph,
  setGiphShiny,
  setGiphFemale,
  setGiphFemaleShiny,
  pokemonNameSimple,
  setPokemonNameSimple,
}) => {
  const forms = pokemonData.pokemons.map((form) => (
    <div
      key={form.pokemonId}
      onClick={() => {
        setBannerImage(form.officialArtwork);
        setGiph(form.giph);
        setGiphShiny(form.giphShiny);
        setGiphFemale(form.giphFemale);
        setGiphFemaleShiny(form.giphFemaleShiny);
        setPokemonNameSimple(form.name);
      }}
      className={`flex justify-center place-items-center h-10 w-10 bg-accent-gray-light border-2 border-accent-gray-dark rounded-lg drop-shadow-lg ${
        form.name === pokemonNameSimple ? "border-[3px] border-primary" : ""
      }`}
    >
      <img
        className="drop-shadow-lg"
        src={form.legacyIcon ?? form.latestIcon}
        alt={form.name}
      />
    </div>
  ));

  return (
    <div className="flex justify-center place-items-center gap-x-2">
      {forms}
    </div>
  );
};

export default FormSelection;
