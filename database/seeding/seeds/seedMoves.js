import db, { Move } from "../../model.js";
import moveData0 from "../table_JSONs/moves/all_moves_0.json" assert { type: "json" };
import moveData1 from "../table_JSONs/moves/all_moves_1.json" assert { type: "json" };
import moveData2 from "../table_JSONs/moves/all_moves_2.json" assert { type: "json" };
import moveData3 from "../table_JSONs/moves/all_moves_3.json" assert { type: "json" };
import moveData4 from "../table_JSONs/moves/all_moves_4.json" assert { type: "json" };

console.log("Syncing database...");
await Move.sync({ force: true });
console.log("Seeding moves...");

const allMoves = [
  ...moveData0,
  ...moveData1,
  ...moveData2,
  ...moveData3,
  ...moveData4,
];

const movesInDB = await Promise.all(
  allMoves.map(async (move) => {
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

    const { id, name, accuracy, effect_chance, pp, priority, power } = move;

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

    const newMove = await Move.create({
      moveId: id,
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
  })
);

console.log("moves seeded");

await db.close();
