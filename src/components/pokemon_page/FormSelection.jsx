const FormSelection = ({
  pokemonData,
  setBannerImage,
  setGiph,
  setGiphShiny,
  setGiphFemale,
  setGiphFemaleShiny,
  pokemonNameSimple,
  setPokemonNameSimple,
  setPokemonType1,
  setPokemonType2,
  setBaseAttack,
  setBaseDefense,
  setBaseHp,
  setBaseSpecialAttack,
  setBaseSpecialDefense,
  setBaseSpeed,
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
        setPokemonType1(form.type1.name);
        setPokemonType2(form.type2 ? form.type2.name : null);
        setBaseAttack(form.baseAttack);
        setBaseDefense(form.baseDefense);
        setBaseHp(form.baseHp);
        setBaseSpecialAttack(form.baseSpecialAttack);
        setBaseSpecialDefense(form.baseSpecialDefense);
        setBaseSpeed(form.baseSpeed);
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
