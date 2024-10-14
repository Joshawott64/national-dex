import db, {
  Pokemon,
  Move,
  Moveset,
  Type,
  Ability,
  Species,
  Generation,
  User,
  UserPokemon,
  Team,
} from "../model.js";
import abilityData0 from "../seeding/table_JSONs/abilities/all_abilities_0.json" assert { type: "json" };
import abilityData1 from "../seeding/table_JSONs/abilities/all_abilities_1.json" assert { type: "json" };
import generationData from "../seeding/table_JSONs/generations/all_generations_0.json" assert { type: "json" };
import moveData0 from "../seeding/table_JSONs/moves/all_moves_0.json" assert { type: "json" };
import moveData1 from "../seeding/table_JSONs/moves/all_moves_1.json" assert { type: "json" };
import moveData2 from "../seeding/table_JSONs/moves/all_moves_2.json" assert { type: "json" };
import moveData3 from "../seeding/table_JSONs/moves/all_moves_3.json" assert { type: "json" };
import moveData4 from "../seeding/table_JSONs/moves/all_moves_4.json" assert { type: "json" };
import pokemonData0 from "../seeding/table_JSONs/pokemon/all_pokemon_0.json" assert { type: "json" };
import pokemonData1 from "../seeding/table_JSONs/pokemon/all_pokemon_1.json" assert { type: "json" };
import pokemonData2 from "../seeding/table_JSONs/pokemon/all_pokemon_2.json" assert { type: "json" };
import pokemonData3 from "../seeding/table_JSONs/pokemon/all_pokemon_3.json" assert { type: "json" };
import pokemonData4 from "../seeding/table_JSONs/pokemon/all_pokemon_4.json" assert { type: "json" };
import pokemonData5 from "../seeding/table_JSONs/pokemon/all_pokemon_5.json" assert { type: "json" };
import pokemonData6 from "../seeding/table_JSONs/pokemon/all_pokemon_6.json" assert { type: "json" };
import pokemonSpeciesData0 from "../seeding/table_JSONs/species/all_pokemon_species_0.json" assert { type: "json" };
import pokemonSpeciesData1 from "../seeding/table_JSONs/species/all_pokemon_species_1.json" assert { type: "json" };
import pokemonSpeciesData2 from "../seeding/table_JSONs/species/all_pokemon_species_2.json" assert { type: "json" };
import pokemonSpeciesData3 from "../seeding/table_JSONs/species/all_pokemon_species_3.json" assert { type: "json" };
import pokemonSpeciesData4 from "../seeding/table_JSONs/species/all_pokemon_species_4.json" assert { type: "json" };
import pokemonSpeciesData5 from "../seeding/table_JSONs/species/all_pokemon_species_5.json" assert { type: "json" };
import typeData from "../seeding/table_JSONs/types/all_types_0.json" assert { type: "json" };

console.log("Syncing database...");
await db.sync({ force: true });
console.log("Seeding database...");

const allAbilities = [...abilityData0, ...abilityData1];

const allMoves = [
  ...moveData0,
  ...moveData1,
  ...moveData2,
  ...moveData3,
  ...moveData4,
];

const allPokemon = [
  ...pokemonData0,
  ...pokemonData1,
  ...pokemonData2,
  ...pokemonData3,
  ...pokemonData4,
  ...pokemonData5,
  ...pokemonData6,
];

const allPokemonSpecies = [
  ...pokemonSpeciesData0,
  ...pokemonSpeciesData1,
  ...pokemonSpeciesData2,
  ...pokemonSpeciesData3,
  ...pokemonSpeciesData4,
  ...pokemonSpeciesData5,
];

// console.log("allAbilities[0]:", allAbilities[0]);
// console.log("allAbilities[0]:", allAbilities[0].effect_entries[1].effect);

const abilitiesInDB = allAbilities.map(async (ability) => {
  const { name } = ability;
  // not every move has an effect and shortEffect
  let effect = "";
  let shortEffect = "";

  if (ability.effect_entries.length > 0) {
    // match effects in the english language
    effect =
      ability.effect_entries[
        ability.effect_entries.findIndex((entry) => {
          return entry.language.name === "en";
        })
      ].effect;
    // match short effects in the english language
    shortEffect =
      ability.effect_entries[
        ability.effect_entries.findIndex((entry) => {
          return entry.language.name === "en";
        })
      ].short_effect;
  }

  const newAbility = await Ability.create({
    name,
    effect,
    shortEffect,
  });

  return newAbility;
});

const generationsInDB = generationData.map(async (generation) => {
  const genName = generation.name;
  const regionName = generation.main_region.name;

  const newGeneration = await Generation.create({
    genName,
    regionName,
  });

  return newGeneration;
});

const movesInDB = allMoves.map(async (move) => {
  // not every move has flavor text
  let flavorText = "";

  // sometimes move.meta is null (for some reason)
  let ailment = "";
  let ailmentChance = "";
  let category = "";
  let critRate = "";
  let drain = "";
  let flinchChance = "";
  let healing = "";
  let minHits = "";
  let maxHits = "";
  let minTurns = "";
  let maxTurns = "";
  let statChance = "";

  if (move.flavor_text_entries.length > 0) {
    // match flavor text in english language
    flavorText =
      move.flavor_text_entries[
        move.flavor_text_entries.findIndex((entry) => {
          return entry.language.name === "en";
        })
      ].flavor_text;
  }

  if (move.meta !== null) {
    ailment = move.meta.ailment.name;
    ailmentChance = move.meta.ailment_chance;
    category = move.meta.category.name;
    critRate = move.meta.crit_rate;
    drain = move.meta.drain;
    flinchChance = move.meta.flinch_chance;
    healing = move.meta.healing;
    minHits = move.meta.min_hits;
    maxHits = move.meta.max_hits;
    minTurns = move.meta.min_turns;
    maxTurns = move.meta.max_turns;
    statChance = move.meta.stat_chance;
  }

  const { name, accuracy, effectChance, pp, priority, power } = move;

  const damageClass = move.damage_class.name;
  const target = move.target.name;

  const newMove = await Move.create({
    name,
    accuracy,
    effectChance,
    pp,
    priority,
    power,
    damageClass,
    ailment,
    category,
    minHits,
    maxHits,
    minTurns,
    maxTurns,
    drain,
    healing,
    critRate,
    ailmentChance,
    flinchChance,
    statChance,
    target,
    flavorText,
  });

  return newMove;
});

const pokemonInDB = allPokemon.map(async (pokemon) => {
  const { name, baseExperience, height, isDefault, order, weight } = pokemon;

  const latestCry = pokemon.cries.latest;
  const legacyCry = pokemon.cries.legacy;
  const officialArtwork =
    pokemon.sprites.other["official-artwork"].front_default;
  const officialArtworkShiny =
    pokemon.sprites.other["official-artwork"].front_shiny;
  const giph = pokemon.sprites.other.showdown.front_default;
  const giphFemale = pokemon.sprites.other.showdown.front_female;
  const giphShiny = pokemon.sprites.other.showdown.front_shiny;
  const giphFemaleShiny = pokemon.sprites.other.showdown.front_shiny_female;
  const legacyIcon =
    pokemon.sprites.versions["generation-vii"].icons.front_default;
  const legacyIconFemale =
    pokemon.sprites.versions["generation-vii"].icons.front_female;
  const latestIcon =
    pokemon.sprites.versions["generation-viii"].icons.front_default;
  const latestIconFemale =
    pokemon.sprites.versions["generation-viii"].icons.front_female;
  const baseHp = pokemon.stats[0].base_stat;
  const baseAttack = pokemon.stats[1].base_stat;
  const baseDefense = pokemon.stats[2].base_stat;
  const baseSpecialAttack = pokemon.stats[3].base_stat;
  const baseSpecialDefense = pokemon.stats[4].base_stat;
  const baseSpeed = pokemon.stats[5].base_stat;

  const newPokemon = await Pokemon.create({
    name,
    baseExperience,
    height,
    isDefault,
    order,
    weight,
    officialArtwork,
    officialArtworkShiny,
    giph,
    giphFemale,
    giphShiny,
    giphFemaleShiny,
    legacyIcon,
    legacyIconFemale,
    latestIcon,
    latestIconFemale,
    latestCry,
    legacyCry,
    baseHp,
    baseAttack,
    baseDefense,
    baseSpecialAttack,
    baseSpecialDefense,
    baseSpeed,
  });

  return newPokemon;
});

const speciesInDB = allPokemonSpecies.map(async (species) => {
  const {
    name,
    // chainId
  } = species;

  const newSpecies = await Species.create({
    name,
    // chainId,
  });

  return newSpecies;
});

const typesInDB = typeData.map(async (type) => {
  const { name } = type;

  const newType = await Type.create({
    name,
  });

  return newType;
});

await db.close();

console.log("Finished seeding database!");
