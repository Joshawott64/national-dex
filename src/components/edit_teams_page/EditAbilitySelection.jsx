import { useState, useEffect } from "react";

const EditAbilitySelection = ({
  teamToEditData,
  slotToFill,
  setNewAbility,
  setShowAbilities,
}) => {
  // state values
  const [abilitiesData, setAbilitiesData] = useState([]);

  useEffect(() => {
    switch (slotToFill) {
      case 1:
        populateAbilitiesData(teamToEditData.userPokemon1.pokemon);
        break;
      case 2:
        populateAbilitiesData(teamToEditData.userPokemon2.pokemon);
        break;
      case 3:
        populateAbilitiesData(teamToEditData.userPokemon3.pokemon);
        break;
      case 4:
        populateAbilitiesData(teamToEditData.userPokemon4.pokemon);
        break;
      case 5:
        populateAbilitiesData(teamToEditData.userPokemon5.pokemon);
        break;
      case 6:
        populateAbilitiesData(teamToEditData.userPokemon6.pokemon);
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

  // map over abilitiesData
  const abilityList = abilitiesData.map((ability) => (
    <div key={ability.abilityId}>
      <p
        onClick={() => {
          setNewAbility(ability);
          setShowAbilities(false);
        }}
      >
        {ability.name}
      </p>
    </div>
  ));

  return (
    <div className="absolute w-full h-full bg-accent-gray-light z-50">
      <p>Ability Selection</p>
      {abilityList}
    </div>
  );
};

export default EditAbilitySelection;
