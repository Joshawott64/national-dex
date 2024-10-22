import db, {
  Pokemon,
  Move,
  Moveset,
  Type,
  Ability,
  Species,
  Generation,
  User,
  UserPokemon,
  Team,
} from "../database/model.js";
import { Sequelize } from "sequelize";

const handlerFunctions = {
  getAllPokemon: async (req, res) => {
    const pokemonData = Pokemon.findAll();

    res.status(200).send(pokemonData);
  },
  getRandomPokemon: async (req, res) => {
    const randomPokemonData = Pokemon.findOne({
      order: [Sequelize.fn("RAND")],
    });

    res.status(200).send(randomPokemonData);
  },
  getPokemonById: async (req, res) => {
    const id = req.params;

    const pokemonData = Pokemon.findOne({
      where: { pokemonId: id },
    });

    res.status(200).send(pokemonData);
  },
};

export default handlerFunctions;
