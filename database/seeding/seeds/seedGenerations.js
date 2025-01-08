import db, { Generation } from "../../model.js";
import generationData from "../table_JSONs/generations/all_generations_0.json" assert { type: "json" };

console.log("Syncing database...");
await Generation.sync({ force: true });
console.log("Seeding generations...");

const generationsInDB = await Promise.all(
  generationData.map(async (generation) => {
    const genName = generation.name;
    const regionName = generation.main_region.name;

    const newGeneration = await Generation.create({
      genName,
      regionName,
    });

    return newGeneration;
  })
);

console.log("generations seeded");

await db.close();
