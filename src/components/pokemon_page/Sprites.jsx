const Sprites = ({
  giph,
  giphShiny,
  giphFemale,
  giphFemaleShiny,
  showFemaleSprite,
}) => {
  return (
    <div className="flex justify-center place-items-center gap-x-4 h-40 w-full text-xs text-center">
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5 ${
          giph.endsWith(".png") ? "w-24" : ""
        }`}
      >
        {!showFemaleSprite && <img src={giph} alt="giph" />}
        {showFemaleSprite && <img src={giphFemale} alt="giph" />}
        <p className="text-text-dark drop-shadow-lg">Normal</p>
      </div>
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5 ${
          giph.endsWith(".png") ? "w-24" : ""
        }`}
      >
        {!showFemaleSprite && <img src={giphShiny} alt="giphShiny" />}
        {showFemaleSprite && <img src={giphFemaleShiny} alt="giphShiny" />}
        <p className="text-primary drop-shadow-lg">Shiny</p>
      </div>
    </div>
  );
};

export default Sprites;
