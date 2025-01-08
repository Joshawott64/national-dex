import db, { Version } from "../../model.js";
import versionData from "../table_JSONs/versions/all_versions_0.json" assert { type: "json" };

console.log("Syncing database...");
await Version.sync({ force: true });
console.log("Seeding versions...");

const versionsInDB = await Promise.all(
  versionData.map(async (version) => {
    const name =
      version.names[
        version.names.findIndex((name) => {
          return name.language.name === "en";
        })
      ].name;

    const newVersion = await Version.create({ name });

    return newVersion;
  })
);

console.log("versions seeded");

await db.close();
