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

const abilitiesInDB = allAbilities.map(async (ability) => {
  const { name, effect, shortEffect } = ability;

  const newAbility = await Ability.create({
    name,
    effect,
    shortEffect,
  });

  return newAbility;
});

const generationsInDB = generationData.map(async (generation) => {
  const { genName, regionName } = generation;

  const newGeneration = await Generation.create({
    genName,
    regionName,
  });

  return newGeneration;
});

const movesInDB = allMoves.map(async (move) => {
  const {
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
  } = move;

  const newMove = Move.create({
    name,
    accuracy,
    effect,
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
  const {
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
    latestCry,
    legacyCry,
    baseHp,
    baseAttack,
    baseDefense,
    baseSpecialAttack,
    baseSpecialDefense,
    baseSpeed,
  } = pokemon;

  const newPokemon = Pokemon.create({
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

const speciesInDB = allPokemonSpecies.map((species) => {
  const { name, chainId } = species;

  const newSpecies = Species.create({
    name,
    chainId,
  });

  return newSpecies;
});

const typesInDB = typeData.map((type) => {
  const { name } = type;

  const newType = Type.create({
    name,
  });

  return newType;
});

await db.close();

console.log("Finished seeding database!");
