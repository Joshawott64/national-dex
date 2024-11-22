import { Model, DataTypes } from "sequelize";
import util from "util";
import url from "url";
import connectToDB from "./db.js";

export const db = await connectToDB("postgresql:///national_dex");

export class Pokemon extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Pokemon.init(
  {
    pokemonId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    baseExperience: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    officialArtwork: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    officialArtworkShiny: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    giph: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    giphFemale: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    giphShiny: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    giphFemaleShiny: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    legacyIcon: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    legacyIconFemale: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    latestIcon: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    latestIconFemale: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    latestCry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    legacyCry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    baseHp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseAttack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseDefense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseSpecialAttack: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseSpecialDefense: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    baseSpeed: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    modelName: "pokemon",
    sequelize: db,
  }
);

export class Move extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Move.init(
  {
    moveId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    accuracy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    effectChance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    pp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    priority: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    power: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    damageClass: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    ailment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    minHits: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxHits: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    minTurns: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxTurns: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    drain: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    healing: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    critRate: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ailmentChance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    flinchChance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    statChance: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    target: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    flavorText: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    modelName: "move",
    sequelize: db,
  }
);

export class Moveset extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Moveset.init(
  {
    movesetId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    levelLearnedAt: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    method: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    versionGroup: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    modelName: "moveset",
    sequelize: db,
  }
);

export class Type extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Type.init(
  {
    typeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "type",
    sequelize: db,
  }
);

export class Ability extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Ability.init(
  {
    abilityId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    effect: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    shortEffect: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "ability",
    sequelize: db,
  }
);

export class Species extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Species.init(
  {
    speciesId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    chainId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dexNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    isBaby: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isLegendary: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isMythical: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    formsSwitchable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    genus: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    hasGenderDifferences: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    modelName: "species",
    sequelize: db,
  }
);

export class Generation extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Generation.init(
  {
    generationId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    genName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    regionName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "generation",
    sequelize: db,
  }
);

export class User extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class UserPokemon extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

UserPokemon.init(
  {
    userPokemonId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isShiny: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    isFemale: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    modelName: "user_pokemon",
    sequelize: db,
  }
);

export class Team extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Team.init(
  {
    teamId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "team",
    sequelize: db,
  }
);

export class Version extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Version.init(
  {
    versionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    modelName: "version",
    sequelize: db,
  }
);

export class DexEntry extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

DexEntry.init(
  {
    dexEntryId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dexEntry: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    modelName: "dex_entry",
    sequelize: db,
  }
);

// Ability table relationships
Ability.hasMany(Pokemon, { foreignKey: "abilityId" });
Ability.hasMany(Pokemon, { foreignKey: "ability2Id" });
Ability.hasMany(Pokemon, { foreignKey: "ability3Id" });
Pokemon.belongsTo(Ability, { as: "ability1", foreignKey: "abilityId" });
Pokemon.belongsTo(Ability, { as: "ability2", foreignKey: "ability2Id" });
Pokemon.belongsTo(Ability, { as: "ability3", foreignKey: "ability3Id" });

Ability.hasMany(UserPokemon, { foreignKey: "abilityId" });
UserPokemon.belongsTo(Ability, { foreignKey: "abilityId" });

// Type table relationships
Type.hasMany(Pokemon, { foreignKey: "typeId" });
Type.hasMany(Pokemon, { foreignKey: "type2Id" });
Pokemon.belongsTo(Type, { as: "type1", foreignKey: "typeId" });
Pokemon.belongsTo(Type, { as: "type2", foreignKey: "type2Id" });

Type.hasMany(Move, { foreignKey: "typeId" });
Move.belongsTo(Type, { foreignKey: "typeId" });

// Species table relationships
Species.hasMany(Pokemon, { foreignKey: "speciesId" });
Pokemon.belongsTo(Species, { foreignKey: "speciesId" });
Species.hasMany(DexEntry, { foreignKey: "speciesId" });
DexEntry.belongsTo(Species, { foreignKey: "speciesId" });

// Generation table relationships
Generation.hasMany(Species, { foreignKey: "generationId" });
Species.belongsTo(Generation, { foreignKey: "generationId" });

Generation.hasMany(Move, { foreignKey: "generationId" });
Move.belongsTo(Generation, { foreignKey: "generationId" });

// Move table relationships
Move.hasMany(UserPokemon, { foreignKey: "move1Id" });
Move.hasMany(UserPokemon, { foreignKey: "move2Id" });
Move.hasMany(UserPokemon, { foreignKey: "move3Id" });
Move.hasMany(UserPokemon, { foreignKey: "move4Id" });
UserPokemon.belongsTo(Move, { as: "move1", foreignKey: "move1Id" });
UserPokemon.belongsTo(Move, { as: "move2", foreignKey: "move2Id" });
UserPokemon.belongsTo(Move, { as: "move3", foreignKey: "move3Id" });
UserPokemon.belongsTo(Move, { as: "move4", foreignKey: "move4Id" });

Move.hasMany(Moveset, { foreignKey: "moveId" });
Moveset.belongsTo(Move, { foreignKey: "moveId" });

// Pokemon table relationships
Pokemon.hasMany(UserPokemon, { foreignKey: "pokemonId" });
UserPokemon.belongsTo(Pokemon, { foreignKey: "pokemonId" });

Pokemon.hasMany(Moveset, { foreignKey: "pokemonId" });
Moveset.belongsTo(Pokemon, { foreignKey: "pokemonId" });

// UserPokemon table relationships
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon1Id",
  onDelete: "CASCADE",
});
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon2Id",
  onDelete: "CASCADE",
});
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon3Id",
  onDelete: "CASCADE",
});
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon4Id",
  onDelete: "CASCADE",
});
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon5Id",
  onDelete: "CASCADE",
});
UserPokemon.hasMany(Team, {
  foreignKey: "userPokemon6Id",
  onDelete: "CASCADE",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon1",
  foreignKey: "userPokemon1Id",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon2",
  foreignKey: "userPokemon2Id",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon3",
  foreignKey: "userPokemon3Id",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon4",
  foreignKey: "userPokemon4Id",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon5",
  foreignKey: "userPokemon5Id",
});
Team.belongsTo(UserPokemon, {
  as: "userPokemon6",
  foreignKey: "userPokemon6Id",
});

// User table relationships
User.hasMany(UserPokemon, { foreignKey: "userId", onDelete: "CASCADE" });
UserPokemon.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Team, { foreignKey: "userId", onDelete: "CASCADE" });
Team.belongsTo(User, { foreignKey: "userId" });

// Version table relationships
Version.hasMany(DexEntry, { foreignKey: "versionId" });
DexEntry.belongsTo(Version, { foreignKey: "versionId" });

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log("Syncing database...");
  await db.sync();
  console.log("Finished syncing database!");
}

export default db;
