import { useState, useEffect } from "react";
import { IoIosBackspace } from "react-icons/io";

const AbilitySelection = ({
  setShowAbilities,
  slotToFill,
  pokemon1Data,
  pokemon2Data,
  pokemon3Data,
  pokemon4Data,
  pokemon5Data,
  pokemon6Data,
  setPokemon1Ability,
  setPokemon2Ability,
  setPokemon3Ability,
  setPokemon4Ability,
  setPokemon5Ability,
  setPokemon6Ability,
}) => {
  // state values
  const [abilitiesData, setAbilitiesData] = useState([]);

  useEffect(() => {
    switch (slotToFill) {
      case 1:
        populateAbilitiesData(pokemon1Data);
        break;
      case 2:
        populateAbilitiesData(pokemon2Data);
        break;
      case 3:
        populateAbilitiesData(pokemon3Data);
        break;
      case 4:
        populateAbilitiesData(pokemon4Data);
        break;
      case 5:
        populateAbilitiesData(pokemon5Data);
        break;
      case 6:
        populateAbilitiesData(pokemon6Data);
        break;
      default:
        break;
    }
  }, []);

  // handler functions
  const populateAbilitiesData = (pokemonData) => {
    pokemonData.ability3Id
      ? setAbilitiesData([
          pokemonData.ability1,
          pokemonData.ability2,
          pokemonData.ability3,
        ])
      : pokemonData.ability2Id
      ? setAbilitiesData([pokemonData.ability1, pokemonData.ability2])
      : setAbilitiesData([pokemonData.ability1]);
  };

  const handleAbilitySelection = (ability) => {
    switch (slotToFill) {
      case 1:
        setPokemon1Ability(ability);
        setShowAbilities(false);
        break;
      case 2:
        setPokemon2Ability(ability);
        setShowAbilities(false);
        break;
      case 3:
        setPokemon3Ability(ability);
        setShowAbilities(false);
        break;
      case 4:
        setPokemon4Ability(ability);
        setShowAbilities(false);
        break;
      case 5:
        setPokemon5Ability(ability);
        setShowAbilities(false);
        break;
      case 6:
        setPokemon6Ability(ability);
        setShowAbilities(false);
        break;
      default:
        setShowAbilities(false);
        break;
    }
  };

  // map over abilitiesData
  const abilityList = abilitiesData.map((ability, i) => {
    return (
      <div
        key={ability.abilityId}
        onClick={() => handleAbilitySelection(ability)}
        className="flex flex-col w-full cursor-pointer hover:text-accent-gray-dark transition-colors duration-300 ease-in-out"
      >
        <p className="font-semibold drop-shadow-lg">
          {ability.name
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
          {i === abilitiesData.length - 1 && abilitiesData.length > 1
            ? " (Hidden)"
            : ""}
        </p>
        <p className="drop-shadow-lg">{ability.shortEffect}</p>
      </div>
    );
  });

  return (
    <div className="fixed flex flex-col justify-start place-items-center w-full h-full px-10 pt-36 z-50 bg-black bg-opacity-60 animate-fadeIn">
      <div className="flex flex-col place-items-center gap-y-4 w-80 sm:w-96 h-fit p-2 pb-4 bg-white rounded-lg drop-shadow-lg">
        <div className="flex flex-col justify-center place-items-center w-full">
          <IoIosBackspace
            onClick={() => setShowAbilities(false)}
            className="absolute place-self-start text-2xl drop-shadow-lg cursor-pointer hover:text-accent-gray-dark transition-colors duartion-300 ease-in-out"
          />
          <p className="font-semibold text-lg drop-shadow-lg">
            Ability Selection
          </p>
        </div>
        {abilityList}
      </div>
    </div>
  );
};

export default AbilitySelection;
