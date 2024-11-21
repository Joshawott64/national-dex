import { useState, useEffect } from "react";
import axios from "axios";

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
  const abilityList = abilitiesData.map((ability) => (
    <div key={ability.abilityId}>
      <p onClick={() => handleAbilitySelection(ability)}>{ability.name}</p>
    </div>
  ));

  return (
    <div className="absolute w-full h-full bg-accent-gray-light z-50">
      <p>Ability Selection</p>
      {abilityList}
    </div>
  );
};

export default AbilitySelection;
