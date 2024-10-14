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

Pokemon.init({
  pokemonId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  baseExperience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isDefault: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  order: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  officialArtwork: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  officialArtworkShiny: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  giph: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  giphFemale: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  giphShiny: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  giphFemaleShiny: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  latestCry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  legacyCry: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  baseHp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseAttack: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseDefense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseSpecialAttack: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseSpecialDefense: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baseSpeed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export class Move extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Move.init({
  moveId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  accuracy: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  effectChance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  pp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  damageClass: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ailment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  minHits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxHits: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  minTurns: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  maxTurns: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  drain: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  healing: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  critRate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ailmentChance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  flinchChance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  statChance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  target: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flavorText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class Moveset extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Moveset.init({
  movesetId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export class Type extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Type.init({
  typeId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class Ability extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Ability.init({
  abilityId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  effect: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortEffect: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class Species extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Species.init({
  speciesId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  chainId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export class Generation extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Generation.init({
  generationId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  genName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class User extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class UserPokemon extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

UserPokemon.init({
  userPokemonId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export class Team extends Model {
  // simplify console logs
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Team.init({
  teamId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

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
