import { useNavigate } from "react-router-dom";

const EvolutionChain = ({ evolutionChainData }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  console.log("evolutionChainData:", evolutionChainData);

  // map over evolutionChainData
  const evolutionList = evolutionChainData.map((evolution) => {
    let imageUrl = "";
    let flavorText = "";

    // assign imageUrl
    if (evolution.alolan) {
      imageUrl =
        evolution.species.pokemons[
          evolution.species.pokemons.findIndex((pokemon) =>
            pokemon.name.includes("alola")
          )
        ].officialArtwork;
    } else if (evolution.galarian) {
      imageUrl =
        evolution.species.pokemons[
          evolution.species.pokemons.findIndex((pokemon) =>
            pokemon.name.includes("galar")
          )
        ].officialArtwork;
    } else if (evolution.hisuian) {
      imageUrl =
        evolution.species.pokemons[
          evolution.species.pokemons.findIndex((pokemon) =>
            pokemon.name.includes("hisui")
          )
        ].officialArtwork;
    } else if (evolution.paldean) {
      imageUrl =
        evolution.species.pokemons[
          evolution.species.pokemons.findIndex((pokemon) =>
            pokemon.name.includes("paldea")
          )
        ].officialArtwork;
    } else {
      imageUrl =
        evolution.species.pokemons[
          evolution.species.pokemons.findIndex((pokemon) => pokemon.isDefault)
        ].officialArtwork;
    }

    // reassign flavor text based on evolution trigger
    switch (evolution.trigger) {
      case "level-up":
        flavorText = `Level ${evolution.minLevel}`;

        // level up with other conditions
        evolution.minHappiness
          ? (flavorText = `Level up, Happiness: ${evolution.minHappiness}`)
          : "";
        evolution.knownMove
          ? (flavorText = `Level up, knowing ${evolution.knownMove}`)
          : "";
        evolution.heldItem
          ? (flavorText = `Level up, holding ${evolution.heldItem}`)
          : "";
        evolution.timeOfDay
          ? (flavorText = flavorText + `, at ${evolution.timeOfDay}`)
          : "";
        evolution.location
          ? (flavorText = `Level up, at ${evolution.location}`)
          : "";
        evolution.minAffection
          ? (flavorText = `Level up, Affection: ${evolution.minAffection}`)
          : "";
        evolution.minBeauty
          ? (flavorText = `Level up, Beauty: ${evolution.minBeauty}`)
          : "";
        evolution.partySpecies
          ? (flavorText = `Level up, ${evolution.partySpecies} in party`)
          : "";
        break;
      case "use-item":
        flavorText = evolution.item;
        break;
      case "trade":
        flavorText = "Trade";

        // trade with other conditions
        evolution.heldItem
          ? (flavorText = `Trade, holding ${evolution.heldItem}`)
          : "";
        evolution.tradeSpecies
          ? (flavorText = `Trade, for ${evolution.tradeSpecies}`)
          : "";
        break;
      case "three-critical-hits":
        flavorText = "Land 3 critical hits in 1 battle";
        break;
      case "strong-style-move":
        evolution.knownMove
          ? (flavorText = `Level up, knowing ${evolution.knownMove}`)
          : "";
        break;
      case "agile-style-move":
        evolution.knownMove
          ? (flavorText = `Level up, knowing ${evolution.knownMove}`)
          : "";
        break;
      case "shed":
        flavorText = "Shed";
        break;
      case "recoil-damage":
        flavorText = "Recoil damage";
        break;
      case "take-damage":
        flavorText = "Take damage";
        break;
      case "other":
        flavorText = "KO 3 Bisharp hldg Leader's Crest";
        break;
      case null:
        evolution.chain.babyTriggerItem
          ? (flavorText = `Breed, holding ${evolution.chain.babyTriggerItem}`)
          : evolutionChainData.length > 1
          ? (flavorText = "Stage 1")
          : (flavorText = "Does not evolve");
        break;
      default:
        flavorText = "Does not evolve";
        break;
    }
    return (
      <div
        key={evolution.evolutionId}
        className="group flex flex-col justify-center place-items-center w-24 md:w-28 h-24 md:h-28 bg-accent-gray-light rounded-lg drop-shadow-lg cursor-pointer"
        onClick={() => navigate(`/pokemon/${evolution.speciesId}`)}
      >
        <img
          src={imageUrl}
          alt={evolution.species.name}
          className="flex-1 w-16 md:w-20"
        />
        <div className="flex-1 flex justify-center place-items-center w-full bg-primary rounded-b-lg group-hover:bg-primary-darkened transition-colors duration-300">
          <p className="text-white text-center text-xs md:text-sm drop-shadow-lg">
            {flavorText}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`flex justify-center place-items-center w-full md:w-5/6 lg:w-3/4 2xl:w-2/3 gap-x-4 ${
        evolutionList.length >= 3 ? "grid grid-cols-3 gap-4" : ""
      }`}
    >
      {evolutionList}
    </div>
  );
};

export default EvolutionChain;
