import pokemonList from "./api_JSONs/pokeapi_all_pokemon.json" assert { type: "json" };
import pokemonSpeciesList from "./api_JSONs/pokeapi_all_pokemon_species.json" assert { type: "json" };
import typesList from "./api_JSONs/pokeapi_all_types.json" assert { type: "json" };
import movesList from "./api_JSONs/pokeapi_all_moves.json" assert { type: "json" };
import abilitiesList from "./api_JSONs/pokeapi_all_abilities.json" assert { type: "json" };
import generationsList from "./api_JSONs/pokeapi_all_generations.json" assert { type: "json" };
import versionsList from "./api_JSONs/pokeapi_all_versions.json" assert { type: "json" };
import { createWriteStream } from "fs";
import JSONStream from "JSONStream";
import axios from "axios";
import path from "path";
import { json } from "sequelize";

// generate json files from api lists
const generateJSONs = async (filePath, list, concatenator) => {
  let writeStream = createWriteStream(`${filePath}0.json`);
  let jsonStream = JSONStream.stringify();
  jsonStream.pipe(writeStream);

  list.results.forEach(async (el, i) => {
    // wait 0.5 seconds to avoid flood the api with requests
    setTimeout(async () => {
      // api call
      const currentItem = await axios.get(el.url);
      console.log("currentItem.data:", currentItem.data);

      // write data to json file
      jsonStream.write(currentItem.data);

      // end writeStream/jsonStream and create new ones when i matches concatenator\
      if (i % concatenator === 0 && i !== 0) {
        jsonStream.end();
        writeStream.on("finish", () => {
          console.log("JSON file has been written successfully.");
        });
        writeStream = createWriteStream(`${filePath}${i / concatenator}.json`);
        jsonStream = JSONStream.stringify();
        jsonStream.pipe(writeStream);
      }

      // end writeStream/jsonStream once last item is called
      if (i === list.results.length - 1) {
        jsonStream.end();
        writeStream.on("finish", () => {
          console.log("JSON file has been written successfully.");
        });
      }
    }, i * 500);
  });
};

// generate pokemon jsons
await generateJSONs(
  "./database/seeding/table_JSONs/pokemon/all_pokemon_",
  pokemonList,
  200
);

// generate pokemon species jsons
await generateJSONs(
  "./database/seeding/table_JSONs/species/all_pokemon_species_",
  pokemonSpeciesList,
  200
);

// generate move jsons
await generateJSONs(
  "./database/seeding/table_JSONs/moves/all_moves_",
  movesList,
  200
);

// generate ability jsons
await generateJSONs(
  "./database/seeding/table_JSONs/abilities/all_abilities_",
  abilitiesList,
  200
);

// generate type jsons
await generateJSONs(
  "./database/seeding/table_JSONs/types/all_types_",
  typesList,
  50
);

// generate generation jsons
await generateJSONs(
  "./database/seeding/table_JSONs/generations/all_generations_",
  generationsList,
  20
);

// generate versions jsons
await generateJSONs(
  "./database/seeding/table_JSONs/versions/all_versions_",
  versionsList,
  200
);
