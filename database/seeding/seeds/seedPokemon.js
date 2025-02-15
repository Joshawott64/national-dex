import db, { Pokemon, Moveset } from "../../model.js";
import pokemonData0 from "../table_JSONs/pokemon/all_pokemon_0.json" assert { type: "json" };
import pokemonData1 from "../table_JSONs/pokemon/all_pokemon_1.json" assert { type: "json" };
import pokemonData2 from "../table_JSONs/pokemon/all_pokemon_2.json" assert { type: "json" };
import pokemonData3 from "../table_JSONs/pokemon/all_pokemon_3.json" assert { type: "json" };
import pokemonData4 from "../table_JSONs/pokemon/all_pokemon_4.json" assert { type: "json" };
import pokemonData5 from "../table_JSONs/pokemon/all_pokemon_5.json" assert { type: "json" };
import pokemonData6 from "../table_JSONs/pokemon/all_pokemon_6.json" assert { type: "json" };

// due to memory constraints on ec2 instance, I had to

console.log("Syncing database...");
await Pokemon.sync({ force: true });
// await Moveset.sync({ force: true });
console.log("Seeding pokemon...");

const allPokemon = [
  ...pokemonData0,
  ...pokemonData1,
  ...pokemonData2,
  ...pokemonData3,
  ...pokemonData4,
  ...pokemonData5,
  ...pokemonData6,
];

const pokemonInDB = await Promise.all(
  allPokemon.map(async (pokemon) => {
    const { id, name, base_experience, height, is_default, order, weight } =
      pokemon;

    // console.log("Syncing database...");
    // await Pokemon.sync();
    // await Moveset.sync();
    // console.log(`Seeding ${name}...`);

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
      pokemonId: id,
      name: name,
      baseExperience: base_experience,
      height: height,
      isDefault: is_default,
      order: order,
      weight: weight,
      abilityId: abilityId,
      ability2Id: ability2Id,
      ability3Id: ability3Id,
      officialArtwork: officialArtwork,
      officialArtworkShiny: officialArtworkShiny,
      giph: giph,
      giphFemale: giphFemale,
      giphShiny: giphShiny,
      giphFemaleShiny: giphFemaleShiny,
      legacyIcon: legacyIcon,
      legacyIconFemale: legacyIconFemale,
      latestIcon: latestIcon,
      latestIconFemale: latestIconFemale,
      latestCry: latestCry,
      legacyCry: legacyCry,
      baseHp: baseHp,
      baseAttack: baseAttack,
      baseDefense: baseDefense,
      baseSpecialAttack: baseSpecialAttack,
      baseSpecialDefense: baseSpecialDefense,
      baseSpeed: baseSpeed,
      typeId: typeId,
      type2Id: type2Id,
      speciesId: speciesId,
    });

    return newPokemon;
  })
);

console.log("pokemon seeded");

await db.close();
