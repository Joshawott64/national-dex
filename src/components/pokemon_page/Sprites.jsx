const Sprites = ({ giph, giphShiny, giphFemale, giphFemaleShiny }) => {
  return (
    <div className="flex justify-center place-items-center gap-x-4 h-40 w-full text-xs text-center">
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5 ${
          giph.endsWith(".png") ? "w-24" : ""
        }`}
      >
        <img src={giph} alt="giph" />
        <p className="text-text-dark drop-shadow-lg">Normal</p>
      </div>
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5 ${
          giph.endsWith(".png") ? "w-24" : ""
        }`}
      >
        <img src={giphShiny} alt="giphShiny" />
        <p className="text-primary drop-shadow-lg">Shiny</p>
      </div>
    </div>
  );
};

export default Sprites;
