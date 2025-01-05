import db, { Type } from "../../model.js";
import typeData from "../table_JSONs/types/all_types_0.json" with { type: "json" };

console.log("Syncing database...");
await Type.sync({ force: true });
console.log("Seeding abilities...");

const typesInDB = await Promise.all(
  typeData.map(async (type) => {
    const { id, name } = type;

    const newType = await Type.create({
      typeId: id,
      name: name,
    });

    return newType;
  })
);

console.log("types seeded");

await db.close();
