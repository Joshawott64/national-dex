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
  Version,
  DexEntry,
} from "../database/model.js";
import { Sequelize } from "sequelize";

const handlerFunctions = {
  getAllPokemonDetails: async (req, res) => {
    const pokemonData = await Species.findAll({
      order: ["speciesId"],
      include: [
        {
          model: Pokemon,
          where: { isDefault: true },
          include: [
            { model: Type, as: "type1" },
            { model: Type, as: "type2" },
          ],
        },
      ],
    });

    res.status(200).send(pokemonData);
  },
  getRandomPokemon: async (req, res) => {
    const randomPokemonData = await Pokemon.findOne({
      order: [Sequelize.fn("RAND")],
    });

    res.status(200).send(randomPokemonData);
  },
  getPokemonById: async (req, res) => {
    const id = req.params.id;

    const pokemonData = await Species.findOne({
      where: { speciesId: id },
      include: [
        {
          model: Pokemon,
          separate: true,
          order: [["pokemonId", "ASC"]],
          include: [
            { model: Type, as: "type1" },
            { model: Type, as: "type2" },
          ],
        },
      ],
    });

    res.status(200).send(pokemonData);
  },
  getDexEntries: async (req, res) => {
    const id = req.params.id;

    const dexEntryData = await DexEntry.findAll({
      where: { speciesId: id, language: "en" },
      order: ["dexEntryId"],
      include: [{ model: Version }],
    });

    res.status(200).send(dexEntryData);
  },
  getMovesetsByPokemonId: async (req, res) => {
    const id = req.params.id;

    const movesetData = await Moveset.findAll({
      where: { pokemonId: id },
      order: [["levelLearnedAt", "ASC"]],
      include: [
        {
          model: Move,

          include: [
            {
              model: Type,
            },
          ],
        },
      ],
    });

    res.status(200).send(movesetData);
  },
};

export default handlerFunctions;
