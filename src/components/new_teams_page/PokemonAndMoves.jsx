import { IoIosAddCircle, IoMdMale, IoMdFemale } from "react-icons/io";
import { HiSparkles, HiOutlineSparkles } from "react-icons/hi2";

const PokemonAndMoves = ({
  pokemon1Data,
  pokemon1IsShiny,
  pokemon1IsFemale,
  pokemon1Move1,
  pokemon1Move2,
  pokemon1Move3,
  pokemon1Move4,
  pokemon1Ability,
  setPokemon1IsShiny,
  setPokemon1IsFemale,
  setPokemon1Move1,
  setPokemon1Move2,
  setPokemon1Move3,
  setPokemon1Move4,
  setPokemon1Ability,
  pokemon2Data,
  pokemon2IsShiny,
  pokemon2IsFemale,
  pokemon2Move1,
  pokemon2Move2,
  pokemon2Move3,
  pokemon2Move4,
  pokemon2Ability,
  setPokemon2IsShiny,
  setPokemon2IsFemale,
  setPokemon2Move1,
  setPokemon2Move2,
  setPokemon2Move3,
  setPokemon2Move4,
  setPokemon2Ability,
  pokemon3Data,
  pokemon3IsShiny,
  pokemon3IsFemale,
  pokemon3Move1,
  pokemon3Move2,
  pokemon3Move3,
  pokemon3Move4,
  pokemon3Ability,
  setPokemon3IsShiny,
  setPokemon3IsFemale,
  setPokemon3Move1,
  setPokemon3Move2,
  setPokemon3Move3,
  setPokemon3Move4,
  setPokemon3Ability,
  pokemon4Data,
  pokemon4IsShiny,
  pokemon4IsFemale,
  pokemon4Move1,
  pokemon4Move2,
  pokemon4Move3,
  pokemon4Move4,
  pokemon4Ability,
  setPokemon4IsShiny,
  setPokemon4IsFemale,
  setPokemon4Move1,
  setPokemon4Move2,
  setPokemon4Move3,
  setPokemon4Move4,
  setPokemon4Ability,
  pokemon5Data,
  pokemon5IsShiny,
  pokemon5IsFemale,
  pokemon5Move1,
  pokemon5Move2,
  pokemon5Move3,
  pokemon5Move4,
  pokemon5Ability,
  setPokemon5IsShiny,
  setPokemon5IsFemale,
  setPokemon5Move1,
  setPokemon5Move2,
  setPokemon5Move3,
  setPokemon5Move4,
  setPokemon5Ability,
  pokemon6Data,
  pokemon6IsShiny,
  pokemon6IsFemale,
  pokemon6Move1,
  pokemon6Move2,
  pokemon6Move3,
  pokemon6Move4,
  pokemon6Ability,
  setPokemon6IsShiny,
  setPokemon6IsFemale,
  setPokemon6Move1,
  setPokemon6Move2,
  setPokemon6Move3,
  setPokemon6Move4,
  setPokemon6Ability,
  setSlotToFill,
  setShowSelectablePokemon,
  setShowMoveset,
  setShowAbilities,
  setMoveToFill,
}) => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  return (
    <div className="flex flex-col gap-y-3 w-full h-full px-2 overflow-y-scroll">
      {!pokemon1Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(1);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon1Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(1);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon1Data.legacyIcon ?? pokemon1Data.latestIcon}
                  alt={pokemon1Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon1Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon1Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon1Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon1Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon1Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon1Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon1IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon1IsShiny(false)}
                  />
                )}
                {!pokemon1IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon1IsShiny(true)}
                  />
                )}
              </div>
              {pokemon1Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon1IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon1IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(1);
                }}
              >
                {pokemon1Move1.move.name}
              </p>

              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(1);
                }}
              >
                {pokemon1Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(1);
                }}
              >
                {pokemon1Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(1);
                }}
              >
                {pokemon1Move4.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(1);
                  setShowAbilities(true);
                }}
              >
                {pokemon1Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
      {!pokemon2Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(2);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon2Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(2);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon2Data.legacyIcon ?? pokemon2Data.latestIcon}
                  alt={pokemon2Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon2Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon2Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon2Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon2Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon2Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon2Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon2IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon2IsShiny(false)}
                  />
                )}
                {!pokemon2IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon2IsShiny(true)}
                  />
                )}
              </div>
              {pokemon2Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon2IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon2IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(2);
                }}
              >
                {pokemon2Move1.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(2);
                }}
              >
                {pokemon2Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(2);
                }}
              >
                {pokemon2Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(2);
                }}
              >
                {pokemon2Move4.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(2);
                  setShowAbilities(true);
                }}
              >
                {pokemon2Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
      {!pokemon3Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(3);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon3Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(3);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon3Data.legacyIcon ?? pokemon3Data.latestIcon}
                  alt={pokemon3Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon3Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon3Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon3Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon3Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon3Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon3Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon3IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon3IsShiny(false)}
                  />
                )}
                {!pokemon3IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon3IsShiny(true)}
                  />
                )}
              </div>
              {pokemon3Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon3IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon3IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(3);
                }}
              >
                {pokemon3Move1.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(3);
                }}
              >
                {pokemon3Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(3);
                }}
              >
                {pokemon3Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(3);
                }}
              >
                {pokemon3Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(3);
                  setShowAbilities(true);
                }}
              >
                {pokemon3Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
      {!pokemon4Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(4);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon4Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(4);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon4Data.legacyIcon ?? pokemon4Data.latestIcon}
                  alt={pokemon4Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon4Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon4Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon4Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon4Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon4Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon4Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon4IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon4IsShiny(false)}
                  />
                )}
                {!pokemon4IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon4IsShiny(true)}
                  />
                )}
              </div>
              {pokemon4Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon4IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon4IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(4);
                }}
              >
                {pokemon4Move1.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(4);
                }}
              >
                {pokemon4Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(4);
                }}
              >
                {pokemon4Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(4);
                }}
              >
                {pokemon4Move4.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(4);
                  setShowAbilities(true);
                }}
              >
                {pokemon4Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
      {!pokemon5Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(5);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon5Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(5);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon5Data.legacyIcon ?? pokemon5Data.latestIcon}
                  alt={pokemon5Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon5Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon5Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon5Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon5Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon5Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon5Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon5IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon5IsShiny(false)}
                  />
                )}
                {!pokemon5IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon5IsShiny(true)}
                  />
                )}
              </div>
              {pokemon5Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon5IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon5IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(5);
                }}
              >
                {pokemon5Move1.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(5);
                }}
              >
                {pokemon5Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(5);
                }}
              >
                {pokemon5Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(5);
                }}
              >
                {pokemon5Move4.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(5);
                  setShowAbilities(true);
                }}
              >
                {pokemon5Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
      {!pokemon6Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div
              onClick={() => {
                setSlotToFill(6);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <IoIosAddCircle className="text-lg drop-shadow-lg" />
              <p className="drop-shadow-lg">Add Pokemon</p>
            </div>
          </div>
        </div>
      )}
      {pokemon6Data.pokemonId && (
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col">
            <div className="flex justify-start place-items-center w-full h-16 gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg">
              <div
                onClick={() => {
                  setSlotToFill(6);
                  setShowSelectablePokemon(true);
                }}
                className="flex justify-center place-items-center h-10 w-10"
              >
                <img
                  className="drop-shadow-lg"
                  src={pokemon6Data.legacyIcon ?? pokemon6Data.latestIcon}
                  alt={pokemon6Data.name}
                ></img>
              </div>
              <div className="flex justify-center place-items-center w-24 text-center">
                <p className="drop-shadow-lg">{pokemon6Data.name}</p>
              </div>
              <div className="flex justify-center place-items-center gap-x-1 w-32 text-text-light">
                <div
                  className={`flex justify-center place-items-center bg-${pokemon6Data.type1.name}-primary w-14 rounded-full drop-shadow-lg`}
                >
                  <p className="text-xs drop-shadow-lg">
                    {pokemon6Data.type1.name.toUpperCase()}
                  </p>
                </div>
                {pokemon6Data.type2 !== null && (
                  <div
                    className={`flex justify-center place-items-center bg-${pokemon6Data.type2.name}-primary w-14 rounded-full drop-shadow-lg`}
                  >
                    <p className="text-xs drop-shadow-lg">
                      {pokemon6Data.type2.name.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
              <div className="flex justify-center place-items-center w-10 text-center">
                {pokemon6IsShiny && (
                  <HiSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon6IsShiny(false)}
                  />
                )}
                {!pokemon6IsShiny && (
                  <HiOutlineSparkles
                    className="text-lg drop-shadow-lg"
                    onClick={() => setPokemon6IsShiny(true)}
                  />
                )}
              </div>
              {pokemon6Data.species.hasGenderDifferences && (
                <div className="flex flex-row justify-center place-items-center w-16 text-text-light rounded-lg drop-shadow-lg">
                  <div
                    className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
                    onClick={() => setPokemon6IsFemale(false)}
                  >
                    <IoMdMale className="text-xs drop-shadow-lg" />
                  </div>
                  <div
                    className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
                    onClick={() => setPokemon6IsFemale(true)}
                  >
                    <IoMdFemale className="text-xs drop-shadow-lg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(1);
                  setSlotToFill(6);
                }}
              >
                {pokemon6Move1.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(2);
                  setSlotToFill(6);
                }}
              >
                {pokemon6Move2.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(3);
                  setSlotToFill(6);
                }}
              >
                {pokemon6Move3.move.name}
              </p>
              <p
                onClick={() => {
                  setShowMoveset(true);
                  setMoveToFill(4);
                  setSlotToFill(6);
                }}
              >
                {pokemon6Move4.move.name}
              </p>
              <p
                onClick={() => {
                  setSlotToFill(6);
                  setShowAbilities(true);
                }}
              >
                {pokemon6Ability.name}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonAndMoves;
