import db, { Ability } from "../../model.js";
import abilityData0 from "../table_JSONs/abilities/all_abilities_0.json" assert { type: "json" };
import abilityData1 from "../table_JSONs/abilities/all_abilities_1.json" assert { type: "json" };

console.log("Syncing database...");
await Ability.sync({ force: true });
console.log("Seeding abilities...");

const allAbilities = [...abilityData0, ...abilityData1];

const abilitiesInDB = await Promise.all(
  allAbilities.map(async (ability) => {
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
  })
);

console.log("abilities seeded");

await db.close();
