import { IoIosAddCircle, IoMdMale, IoMdFemale, IoIosAdd } from "react-icons/io";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi2";
import { IoMdSwap } from "react-icons/io";

const PokemonAndMoves = ({
  pokemonData,
  pokemonIsShiny,
  pokemonIsFemale,
  pokemonMove1,
  pokemonMove2,
  pokemonMove3,
  pokemonMove4,
  pokemonAbility,
  setPokemonIsShiny,
  setPokemonIsFemale,
  setShowSelectablePokemon,
  setShowMoveset,
  setShowAbilities,
  setSlotToFill,
  setMoveToFill,
  slotNum,
}) => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  return (
    <>
      {!pokemonData.pokemonId && (
        <div className="flex flex-col md:text-lg">
          <div
            onClick={() => {
              setSlotToFill(slotNum);
              setShowSelectablePokemon(true);
            }}
            className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
          >
            <IoIosAddCircle className="text-lg drop-shadow-lg" />
            <p className="drop-shadow-lg">Add Pokemon</p>
          </div>
        </div>
      )}
      {pokemonData.pokemonId && (
        <div className="flex flex-col gap-y-2 md:text-lg">
          <div className="flex justify-start place-items-center w-full h-16 gap-x-0.5 sm:gap-x-8 lg:gap-x-0.5 2xl:gap-x-4 3xl:gap-x-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg">
            <div
              onClick={() => {
                setSlotToFill(slotNum);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-center place-items-center w-14 sm:w-16 md:w-24 lg:w-16 xl:w-24 2xl:w-28 3xl:w-36 cursor-pointer"
            >
              <div className="flex justify-center place-items-center h-10 w-10">
                <img
                  className="drop-shadow-lg"
                  src={pokemonData.legacyIcon ?? pokemonData.latestIcon}
                  alt={pokemonData.name}
                ></img>
              </div>
              <IoMdSwap className="rotate-90 drop-shadow-lg" />
            </div>
            <div className="flex justify-center place-items-center w-24 sm:w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-36 3xl:w-44 text-center">
              <p className="drop-shadow-lg">{pokemonData.species.name}</p>
            </div>
            <div className="flex justify-center place-items-center gap-x-1 w-32 sm:w-36 md:w-40 lg:w-36 xl:w-40 2xl:w-44 3xl:w-52 text-text-light">
              <div
                className={`flex justify-center place-items-center bg-${pokemonData.type1.name}-primary w-14 sm:w-16 rounded-full drop-shadow-lg`}
              >
                <p className="text-xs md:text-sm drop-shadow-lg">
                  {pokemonData.type1.name.toUpperCase()}
                </p>
              </div>
              {pokemonData.type2 !== null && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemonData.type2.name}-primary w-14 sm:w-16 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs md:text-sm drop-shadow-lg">
                    {pokemonData.type2.name.toUpperCase()}
                  </p>
                </div>
              )}
            </div>
            <div className="flex justify-center place-items-center w-10 sm:w-14 md:w-20 lg:w-14 xl:w-20 2xl:w-24 3xl:w-32 text-center">
              {pokemonIsShiny && (
                <HiSparkles
                  className="text-lg drop-shadow-lg cursor-pointer"
                  onClick={() => setPokemonIsShiny(false)}
                />
              )}
              {!pokemonIsShiny && (
                <HiOutlineSparkles
                  className="text-lg drop-shadow-lg cursor-pointer"
                  onClick={() => setPokemonIsShiny(true)}
                />
              )}
            </div>
            {pokemonData.species.hasGenderDifferences && (
              <div className="flex flex-row justify-center place-items-center w-16 sm:w-20 md:w-24 lg:w-20 xl:w-24 2xl:w-28 3xl:w-36 text-text-light rounded-lg drop-shadow-lg">
                <div
                  className={`flex justify-center place-items-center w-full p-1 border sm:border-2 border-blue-600 rounded-l-lg drop-shadow-lg ${
                    pokemonIsFemale
                      ? "bg-transparent text-blue-600 cursor-pointer"
                      : "bg-blue-600"
                  }`}
                  onClick={() => setPokemonIsFemale(false)}
                >
                  <IoMdMale className="text-xs md:text-sm drop-shadow-lg" />
                </div>
                <div
                  className={`flex justify-center place-items-center w-full p-1 border sm:border-2 border-red-600 rounded-r-lg drop-shadow-lg ${
                    pokemonIsFemale
                      ? "bg-red-600"
                      : "bg-transparent text-red-600 cursor-pointer"
                  }`}
                  onClick={() => setPokemonIsFemale(true)}
                >
                  <IoMdFemale className="text-xs md:text-sm drop-shadow-lg" />
                </div>
              </div>
            )}
          </div>
          <div className="w-full h-full grid grid-cols-2 gap-x-2 gap-y-2 px-1">
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(1);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!pokemonMove1.move.moveId && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {pokemonMove1.move.moveId && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemonMove1.move.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {pokemonMove1.move.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {pokemonMove1.move.moveId
                  ? `${pokemonMove1.move.name}`
                  : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(2);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!pokemonMove2.move.moveId && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {pokemonMove2.move.moveId && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemonMove2.move.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {pokemonMove2.move.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {pokemonMove2.move.moveId
                  ? `${pokemonMove2.move.name}`
                  : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(3);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!pokemonMove3.move.moveId && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {pokemonMove3.move.moveId && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemonMove3.move.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {pokemonMove3.move.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {pokemonMove3.move.moveId
                  ? `${pokemonMove3.move.name}`
                  : "New Move"}
              </p>
            </div>
            <div
              onClick={() => {
                setShowMoveset(true);
                setMoveToFill(4);
                setSlotToFill(slotNum);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!pokemonMove4.move.moveId && (
                <IoIosAddCircle className="drop-shadow-lg" />
              )}
              {pokemonMove4.move.moveId && (
                <div
                  className={`flex justify-center place-items-center bg-${pokemonMove4.move.type.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs text-text-light drop-shadow-lg">
                    {pokemonMove4.move.type.name.toUpperCase()}
                  </p>
                </div>
              )}
              <p className="drop-shadow-lg">
                {pokemonMove4.move.moveId
                  ? `${pokemonMove4.move.name}`
                  : "New Move"}
              </p>
            </div>

            <div
              onClick={() => {
                setSlotToFill(slotNum);
                setShowAbilities(true);
              }}
              className="flex justify-start place-items-center gap-x-4 h-10 p-2 bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer hover:text-accent-gray-dark hover:border-accent-gray-dark transition-colors duration-300 ease-in-out"
            >
              {!pokemonAbility.abilityId && (
                <>
                  <IoIosAddCircle className="drop-shadow-lg" />
                  <p className="drop-shadow-lg">Ability</p>
                </>
              )}
              {pokemonAbility.abilityId && (
                <>
                  <p className="drop-shadow-lg">
                    Ability -{" "}
                    {pokemonAbility.name
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonAndMoves;
