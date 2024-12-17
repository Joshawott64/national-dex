const Sprites = ({
  giph,
  giphShiny,
  giphFemale,
  giphFemaleShiny,
  showFemaleSprite,
}) => {
  return (
    <div className="flex justify-center place-items-center gap-x-4 md:gap-x-8 w-full h-fit text-xs md:text-sm text-center">
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5`}
      >
        {/* {!showFemaleSprite && ( */}
        <img
          src={giph}
          alt="giph"
          className={`${giph.endsWith(".png") ? "w-24" : ""} ${
            showFemaleSprite ? "hidden" : "block"
          }`}
        />
        {/* )} */}
        {giphFemale && (
          <img
            src={giphFemale ?? ""}
            alt="giph"
            className={`${giphFemale.endsWith(".png") ? "w-24" : ""} ${
              showFemaleSprite ? "block" : "hidden"
            }`}
          />
        )}
        <p className="text-text-dark drop-shadow-lg">Normal</p>
      </div>
      <div
        className={`flex flex-col justify-center place-items-center gap-y-0.5`}
      >
        {/* {!showFemaleSprite && ( */}
        <img
          src={giphShiny}
          alt="giphShiny"
          className={`${giph.endsWith(".png") ? "w-24" : ""} ${
            showFemaleSprite ? "hidden" : "block"
          }`}
        />
        {/* )} */}
        {giphFemaleShiny && (
          <img
            src={giphFemaleShiny ?? ""}
            alt="giphShiny"
            className={`${giphFemaleShiny.endsWith(".png") ? "w-24" : ""} ${
              showFemaleSprite ? "block" : "hidden"
            }`}
          />
        )}
        <p className="text-primary drop-shadow-lg">Shiny</p>
      </div>
    </div>
  );
};

export default Sprites;
