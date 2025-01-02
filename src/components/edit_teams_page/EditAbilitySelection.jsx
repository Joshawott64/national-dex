import { useState, useEffect } from "react";
import { IoIosBackspace } from "react-icons/io";

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
  const abilityList = abilitiesData.map((ability, i) => {
    return (
      <div
        key={ability.abilityId}
        onClick={() => setNewAbility(ability)}
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

export default EditAbilitySelection;
