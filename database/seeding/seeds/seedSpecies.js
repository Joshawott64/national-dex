import db, { Species, DexEntry } from "../../model.js";
import pokemonSpeciesData0 from "../table_JSONs/species/all_pokemon_species_0.json" with { type: "json" };
import pokemonSpeciesData1 from "../table_JSONs/species/all_pokemon_species_1.json" with { type: "json" };
import pokemonSpeciesData2 from "../table_JSONs/species/all_pokemon_species_2.json" with { type: "json" };
import pokemonSpeciesData3 from "../table_JSONs/species/all_pokemon_species_3.json" with { type: "json" };
import pokemonSpeciesData4 from "../table_JSONs/species/all_pokemon_species_4.json" with { type: "json" };
import pokemonSpeciesData5 from "../table_JSONs/species/all_pokemon_species_5.json" with { type: "json" };

console.log("Syncing database...");
await Species.sync({ force: true });
await DexEntry.sync({ force: true });
console.log("Seeding species...");

const allPokemonSpecies = [
  ...pokemonSpeciesData0,
  ...pokemonSpeciesData1,
  ...pokemonSpeciesData2,
  ...pokemonSpeciesData3,
  ...pokemonSpeciesData4,
  ...pokemonSpeciesData5,
];

const speciesInDB = await Promise.all(
  allPokemonSpecies.map(async (species) => {
    const name =
      species.names[
        species.names.findIndex((name) => {
          return name.language.name === "en";
        })
      ].name;
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
    const dexEntriesInDb = await Promise.all(
      species["flavor_text_entries"].map(async (entry) => {
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
      })
    );

    return newSpecies;
  })
);

console.log("species seeded");

await db.close();
