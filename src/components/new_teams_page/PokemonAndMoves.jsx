import { IoIosAddCircle } from "react-icons/io";

const PokemonAndMoves = ({
  pokemon1Data,
  pokemon1IsShiny,
  pokemon1IsFemale,
  pokemon1Move1Id,
  pokemon1Move2Id,
  pokemon1Move3Id,
  pokemon1Move4Id,
  pokemon1AbilityId,
  setPokemon1Move1Id,
  setPokemon1Move2Id,
  setPokemon1Move3Id,
  setPokemon1Move4Id,
  setPokemon1AbilityId,
  pokemon2Data,
  pokemon2IsShiny,
  pokemon2IsFemale,
  pokemon2Move1Id,
  pokemon2Move2Id,
  pokemon2Move3Id,
  pokemon2Move4Id,
  pokemon2AbilityId,
  setPokemon2Move1Id,
  setPokemon2Move2Id,
  setPokemon2Move3Id,
  setPokemon2Move4Id,
  setPokemon2AbilityId,
  pokemon3Data,
  pokemon3IsShiny,
  pokemon3IsFemale,
  pokemon3Move1Id,
  pokemon3Move2Id,
  pokemon3Move3Id,
  pokemon3Move4Id,
  pokemon3AbilityId,
  setPokemon3Move1Id,
  setPokemon3Move2Id,
  setPokemon3Move3Id,
  setPokemon3Move4Id,
  setPokemon3AbilityId,
  pokemon4Data,
  pokemon4IsShiny,
  pokemon4IsFemale,
  pokemon4Move1Id,
  pokemon4Move2Id,
  pokemon4Move3Id,
  pokemon4Move4Id,
  pokemon4AbilityId,
  setPokemon4Move1Id,
  setPokemon4Move2Id,
  setPokemon4Move3Id,
  setPokemon4Move4Id,
  setPokemon4AbilityId,
  pokemon5Data,
  pokemon5IsShiny,
  pokemon5IsFemale,
  pokemon5Move1Id,
  pokemon5Move2Id,
  pokemon5Move3Id,
  pokemon5Move4Id,
  pokemon5AbilityId,
  setPokemon5Move1Id,
  setPokemon5Move2Id,
  setPokemon5Move3Id,
  setPokemon5Move4Id,
  setPokemon5AbilityId,
  pokemon6Data,
  pokemon6IsShiny,
  pokemon6IsFemale,
  pokemon6Move1Id,
  pokemon6Move2Id,
  pokemon6Move3Id,
  pokemon6Move4Id,
  pokemon6AbilityId,
  setPokemon6Move1Id,
  setPokemon6Move2Id,
  setPokemon6Move3Id,
  setPokemon6Move4Id,
  setPokemon6AbilityId,
  setSlotToFill,
  setShowSelectablePokemon,
}) => {
  return (
    <div className="flex flex-col gap-y-3 w-full h-full overflow-y-scroll">
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
