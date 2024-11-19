import { IoIosAddCircle } from "react-icons/io";

const PokemonAndMoves = ({
  pokemon1Data,
  pokemon1IsShiny,
  pokemon1IsFemale,
  pokemon1Move1,
  pokemon1Move2,
  pokemon1Move3,
  pokemon1Move4,
  pokemon1Ability,
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
  setPokemon6Move1,
  setPokemon6Move2,
  setPokemon6Move3,
  setPokemon6Move4,
  setPokemon6Ability,
  setSlotToFill,
  setShowSelectablePokemon,
}) => {
  return (
    <div className="flex flex-col gap-y-3 w-full h-full px-10 overflow-y-scroll">
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
            <div
              onClick={() => {
                setSlotToFill(1);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon1Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
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
            <div
              onClick={() => {
                setSlotToFill(2);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon2Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
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
            <div
              onClick={() => {
                setSlotToFill(3);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon3Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
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
            <div
              onClick={() => {
                setSlotToFill(4);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon4Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
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
            <div
              onClick={() => {
                setSlotToFill(5);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon5Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
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
            <div
              onClick={() => {
                setSlotToFill(6);
                setShowSelectablePokemon(true);
              }}
              className="flex justify-start place-items-center gap-x-2 p-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
            >
              <p className="drop-shadow-lg">{pokemon6Data.name}</p>
            </div>
            <div>
              <p>Move 1</p>
              <p>Move 2</p>
              <p>Move 3</p>
              <p>Move 4</p>
              <p>Ability</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonAndMoves;
