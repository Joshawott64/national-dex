const Sprites = ({ giph, giphShiny, giphFemale, giphFemaleShiny }) => {
  return (
    <div className="flex justify-center place-items-center gap-x-4 text-xs text-center">
      <div className="flex flex-col justify-center place-items-center gap-y-0.5">
        <img src={giph} alt="giph" />
        <p className="text-text-dark drop-shadow-lg">Normal</p>
      </div>
      <div className="flex flex-col justify-center place-items-center">
        <img src={giphShiny} alt="giphShiny" />
        <p className="text-primary drop-shadow-lg">Shiny</p>
      </div>
    </div>
  );
};

export default Sprites;
