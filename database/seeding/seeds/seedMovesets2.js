import db, { Pokemon, Moveset } from "../../model.js";
import pokemonData0 from "../table_JSONs/pokemon/all_pokemon_0.json" assert { type: "json" };
import pokemonData1 from "../table_JSONs/pokemon/all_pokemon_1.json" assert { type: "json" };
import pokemonData2 from "../table_JSONs/pokemon/all_pokemon_2.json" assert { type: "json" };
import pokemonData3 from "../table_JSONs/pokemon/all_pokemon_3.json" assert { type: "json" };
import pokemonData4 from "../table_JSONs/pokemon/all_pokemon_4.json" assert { type: "json" };
import pokemonData5 from "../table_JSONs/pokemon/all_pokemon_5.json" assert { type: "json" };
import pokemonData6 from "../table_JSONs/pokemon/all_pokemon_6.json" assert { type: "json" };

// a new approach
const allPokemon = [
  // ...pokemonData0,
  ...pokemonData1,
  //   ...pokemonData2,
  //   ...pokemonData3,
  //   ...pokemonData4,
  //   ...pokemonData5,
  //   ...pokemonData6,
];

const movesets = [];

const pokemonList = await Promise.all(
  allPokemon.map(async (pokemon) => {
    const { id, moves } = pokemon;

    const populateMovesets = await Promise.all(
      moves.map(async (move) => {
        const movesetObj = move;
        movesetObj.id = id;
        // console.log("testObj:", testObj)
        movesets.push(movesetObj);
      })
    );
    // return movesets = [...pokemon.moves]
  })
);

console.log("Syncing database...");
// await Pokemon.sync({ force: true });
await Moveset.sync();
console.log("Seeding movesets...");

// create movesets table for each pokemon
const movesetsInDB = await Promise.all(
  movesets.map(async (move) => {
    const moveId = move.move.url.replace(
      /(^https\:\/\/pokeapi\.co\/api\/v2\/move\/|\/$)/g,
      ""
    );
    const moveDetailsInDB = await Promise.all(
      move.version_group_details.map(async (detail) => {
        // console.log("Syncing database...");
        // await Pokemon.sync({ force: true });
        // await Moveset.sync();
        // console.log("Seeding movesets...");

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
          pokemonId: move.id,
        });

        // console.log("moveset move seeded");

        // await db.close();

        return newMoveSet;
      })
    );
  })
);

console.log("movesets seeded");

await db.close();
