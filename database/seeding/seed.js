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
  DexEntry,
  Version,
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
import versionData from "../seeding/table_JSONs/versions/all_versions_0.json" assert { type: "json" };

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

const typesInDB = typeData.map(async (type) => {
  const { name } = type;

  const newType = await Type.create({
    name,
  });

  return newType;
});

const movesInDB = allMoves.map(async (move) => {
  // not every move has flavor text
  let flavorText = "";

  // sometimes move.meta is null (for some reason)
  let ailment = 0;
  let ailmentChance = 0;
  let category = 0;
  let critRate = 0;
  let drain = 0;
  let flinchChance = 0;
  let healing = 0;
  let minHits = 0;
  let maxHits = 0;
  let minTurns = 0;
  let maxTurns = 0;
  let statChance = 0;

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

  const { name, accuracy, effect_chance, pp, priority, power } = move;

  const damageClass = move.damage_class.name;
  const target = move.target.name;
  let typeId = move.type.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/type\/|\/$)/g,
    ""
  );
  const generationId = move.generation.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/generation\/|\/$)/g,
    ""
  );

  if (typeId === "10002") {
    typeId = 21;
  }

  const newMove = await Move.create({
    name: name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    accuracy,
    effectChance: effect_chance,
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
    typeId,
    generationId,
  });

  return newMove;
});

const versionsInDB = versionData.map(async (version) => {
  const name =
    version.names[
      version.names.findIndex((name) => {
        return name.language.name === "en";
      })
    ].name;

  const newVersion = await Version.create({ name });

  return newVersion;
});

const speciesInDB = allPokemonSpecies.map(async (species) => {
  const name =
    species.names[
      species.names.findIndex((name) => {
        return name.language.name === "en";
      })
    ].name;
  const chainId = species["evolution_chain"].url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/evolution\-chain\/|\/$)/g,
    ""
  );
  const generationId = species.generation.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/generation\/|\/$)/g,
    ""
  );
  const dexNumber = species["pokedex_numbers"][0]["entry_number"];
  const isBaby = species["is_baby"];
  const isLegendary = species["is_legendary"];
  const isMythical = species["is_mythical"];
  const formsSwitchable = species["forms_switchable"];
  const genus =
    species.genera[
      species.genera.findIndex((genus) => {
        return genus.language.name === "en";
      })
    ].genus;
  const hasGenderDifferences = species["has_gender_differences"];

  const newSpecies = await Species.create({
    name,
    chainId,
    generationId,
    dexNumber,
    isBaby,
    isLegendary,
    isMythical,
    formsSwitchable,
    genus,
    hasGenderDifferences,
  });

  // create dex entries table entries
  const dexEntriesInDb = species["flavor_text_entries"].map(async (entry) => {
    const dexEntry = entry["flavor_text"];
    const language = entry.language.name;
    const versionId = entry.version.url.replace(
      /(^https\:\/\/pokeapi\.co\/api\/v2\/version\/|\/$)/g,
      ""
    );
    const speciesId = species.id;

    const newDexEntry = await DexEntry.create({
      dexEntry,
      language,
      versionId,
      speciesId,
    });

    return newDexEntry;
  });

  return newSpecies;
});

const pokemonInDB = allPokemon.map(async (pokemon) => {
  const { name, base_experience, height, is_default, order, weight } = pokemon;

  const latestCry = pokemon.cries.latest;
  const legacyCry = pokemon.cries.legacy;
  const officialArtwork =
    pokemon.sprites.other["official-artwork"].front_default;
  const officialArtworkShiny =
    pokemon.sprites.other["official-artwork"].front_shiny;
  const giph =
    pokemon.sprites.other.showdown.front_default ??
    pokemon.sprites.other.home.front_default;
  const giphFemale =
    pokemon.sprites.other.showdown.front_female ??
    pokemon.sprites.other.home.front_female;
  const giphShiny =
    pokemon.sprites.other.showdown.front_shiny ??
    pokemon.sprites.other.home.front_shiny;
  const giphFemaleShiny =
    pokemon.sprites.other.showdown.front_shiny_female ??
    pokemon.sprites.other.home.front_shiny_female;
  const legacyIcon =
    pokemon.sprites.versions["generation-vii"].icons.front_default;
  const legacyIconFemale =
    pokemon.sprites.versions["generation-vii"].icons.front_female;
  const latestIcon =
    pokemon.sprites.versions["generation-viii"].icons.front_default ??
    pokemon.sprites.front_default;
  const latestIconFemale =
    pokemon.sprites.versions["generation-viii"].icons.front_female;
  const baseHp = pokemon.stats[0].base_stat;
  const baseAttack = pokemon.stats[1].base_stat;
  const baseDefense = pokemon.stats[2].base_stat;
  const baseSpecialAttack = pokemon.stats[3].base_stat;
  const baseSpecialDefense = pokemon.stats[4].base_stat;
  const baseSpeed = pokemon.stats[5].base_stat;
  const abilityId = pokemon.abilities[0].ability.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/ability\/|\/$)/g,
    ""
  );
  const ability2Id =
    pokemon.abilities.length > 1
      ? pokemon.abilities[1].ability.url.replace(
          /(^https\:\/\/pokeapi\.co\/api\/v2\/ability\/|\/$)/g,
          ""
        )
      : null;
  const ability3Id =
    pokemon.abilities.length > 2
      ? pokemon.abilities[2].ability.url.replace(
          /(^https\:\/\/pokeapi\.co\/api\/v2\/ability\/|\/$)/g,
          ""
        )
      : null;
  const typeId = pokemon.types[0].type.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/type\/|\/$)/g,
    ""
  );
  const type2Id =
    pokemon.types.length > 1
      ? pokemon.types[1].type.url.replace(
          /(^https\:\/\/pokeapi\.co\/api\/v2\/type\/|\/$)/g,
          ""
        )
      : null;
  const speciesId = pokemon.species.url.replace(
    /(^https\:\/\/pokeapi\.co\/api\/v2\/pokemon\-species\/|\/$)/g,
    ""
  );

  const newPokemon = await Pokemon.create({
    name,
    baseExperience: base_experience,
    height,
    isDefault: is_default,
    order,
    weight,
    abilityId,
    ability2Id,
    ability3Id,
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
    typeId,
    type2Id,
    speciesId,
  });

  // create movesets table for each pokemon
  const pokemonId = newPokemon.pokemonId;

  const movesetsInDB = pokemon.moves.map(async (move) => {
    const moveId = move.move.url.replace(
      /(^https\:\/\/pokeapi\.co\/api\/v2\/move\/|\/$)/g,
      ""
    );
    const moveDetailsInDB = move.version_group_details.map(async (detail) => {
      const levelLearnedAt = detail.level_learned_at;
      const method = detail.move_learn_method.name;
      const versionGroup = detail.version_group.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      const newMoveSet = await Moveset.create({
        levelLearnedAt,
        method,
        versionGroup,
        moveId: moveId,
        pokemonId: pokemonId,
      });

      return newMoveSet;
    });
  });

  return newPokemon;
});

// await db.close();

console.log("Finished seeding database!");
