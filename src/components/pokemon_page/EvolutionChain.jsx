import { useNavigate } from "react-router-dom";

const EvolutionChain = ({ evolutionChainData }) => {
  // invoke useNavigate
  const navigate = useNavigate();

  // map over evolutionChainData
  const evolutionList = evolutionChainData.map((evolution) => {
    let flavorText = "";

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
        flavorText = "!!!!!!!!! [Kingambit] !!!!!!!!!";
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
        className="flex flex-col justify-center place-items-center w-24 h-24 bg-accent-gray-light rounded-lg drop-shadow-lg"
        onClick={() => navigate(`/pokemon/${evolution.speciesId}`)}
      >
        <img
          src={evolution.species.pokemons[0].officialArtwork}
          alt={evolution.species.name}
          className="flex-1 w-16"
        />
        <div className="flex-1 flex justify-center place-items-center w-full bg-primary rounded-b-lg">
          <p className="text-white text-center text-xs drop-shadow-lg">
            {flavorText}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div
      className={`flex justify-center place-items-center w-full gap-x-4 ${
        evolutionList.length >= 3 ? "grid grid-cols-3 gap-4" : ""
      }`}
    >
      {evolutionList}
    </div>
  );
};

export default EvolutionChain;
