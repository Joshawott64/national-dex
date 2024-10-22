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
    // chainId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
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
    nickname: {
      type: DataTypes.TEXT,
      allowNull: false,
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

// Ability table relationships
Ability.hasMany(Pokemon, { foreignKey: "ability1Id" });
Ability.hasMany(Pokemon, { foreignKey: "ability2Id" });
Ability.hasMany(Pokemon, { foreignKey: "ability3Id" });
Pokemon.belongsTo(Ability, { foreignKey: "abilityId" });

Ability.hasMany(UserPokemon, { foreignKey: "abilityId" });
UserPokemon.belongsTo(Ability, { foreignKey: "abilityId" });

// Type table relationships
Type.hasMany(Pokemon, { foreignKey: "type1Id" });
Type.hasMany(Pokemon, { foreignKey: "type2Id" });
Pokemon.belongsTo(Type, { foreignKey: "typeId" });

Type.hasMany(Move, { foreignKey: "typeId" });
Move.belongsTo(Type, { foreignKey: "typeId" });

// Species table relationships
Species.hasMany(Pokemon, { foreignKey: "speciesId" });
Pokemon.belongsTo(Species, { foreignKey: "speciesId" });

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
UserPokemon.belongsTo(Move, { foreignKey: "moveId" });

Move.hasMany(Moveset, { foreignKey: "moveId" });
Moveset.belongsTo(Move, { foreignKey: "moveId" });

// Pokemon table relationships
Pokemon.hasMany(UserPokemon, { foreignKey: "pokemonId" });
UserPokemon.belongsTo(Pokemon, { foreignKey: "pokemonId" });

Pokemon.hasMany(Moveset, { foreignKey: "pokemonId" });
Moveset.belongsTo(Pokemon, { foreignKey: "pokemonId" });

// UserPokemon table relationships
UserPokemon.hasMany(Team, { foreignKey: "userPokemon1Id" });
UserPokemon.hasMany(Team, { foreignKey: "userPokemon2Id" });
UserPokemon.hasMany(Team, { foreignKey: "userPokemon3Id" });
UserPokemon.hasMany(Team, { foreignKey: "userPokemon4Id" });
UserPokemon.hasMany(Team, { foreignKey: "userPokemon5Id" });
UserPokemon.hasMany(Team, { foreignKey: "userPokemon6Id" });
Team.belongsTo(UserPokemon, { foreignKey: "userPokemonId" });

// User table relationships
User.hasMany(UserPokemon, { foreignKey: "userId" });
UserPokemon.belongsTo(User, { foreignKey: "userId" });

export default db;
