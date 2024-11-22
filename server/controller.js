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
import { Sequelize, Op } from "sequelize";
import bcrypt from "bcryptjs";

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
      where: {
        officialArtwork: { [Op.like]: "https://raw.githubusercontent.com%" },
      },
      order: [[Sequelize.fn("RANDOM")]],
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
            { model: Ability, as: "ability1" },
            { model: Ability, as: "ability2" },
            { model: Ability, as: "ability3" },
            {
              model: Moveset,
              separate: true,
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
            },
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
  postMovesetsByPokemonId: async (req, res) => {
    const { id } = req.body;

    const movesetData = await Moveset.findAll({
      where: { pokemonId: id },
      include: [
        {
          model: Move,
          order: [["name", "ASC"]],
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
  postAbilitiesByPokemonId: async (req, res) => {
    const { id } = req.body;

    const abilities = await Ability.findAll({
      where: {},
    });
  },
  getUserTeams: async (req, res) => {
    const { userId } = req.body;

    // respond if userId is null (if a logged out user manually navigates to the teams page)
    if (!userId) {
      console.log("No userId found");
      return res
        .status(404)
        .send({ success: false, message: "No user ID found." });
    }

    // get teams (and associated models) that match userId
    const teamData = await Team.findAll({
      where: { userId: userId },
      include: [
        {
          model: UserPokemon,
          as: "userPokemon1",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
        {
          model: UserPokemon,
          as: "userPokemon2",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
        {
          model: UserPokemon,
          as: "userPokemon3",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
        {
          model: UserPokemon,
          as: "userPokemon4",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
        {
          model: UserPokemon,
          as: "userPokemon5",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
        {
          model: UserPokemon,
          as: "userPokemon6",
          include: [
            { model: Move, as: "move1", include: [{ model: Type }] },
            { model: Move, as: "move2", include: [{ model: Type }] },
            { model: Move, as: "move3", include: [{ model: Type }] },
            { model: Move, as: "move4", include: [{ model: Type }] },
            {
              model: Pokemon,
            },
            {
              model: Ability,
            },
          ],
        },
      ],
    });

    res.status(200).send(teamData);
  },
  getPokemonForTeamSelection: async (req, res) => {
    const pokemonData = await Pokemon.findAll({
      order: ["speciesId"],
      include: [
        {
          model: Species,
          // where: { isDefault: true },
        },
        { model: Type, as: "type1" },
        { model: Type, as: "type2" },
        { model: Ability, as: "ability1" },
        { model: Ability, as: "ability2" },
        { model: Ability, as: "ability3" },
      ],
    });

    res.status(200).send(pokemonData);
  },
  createNewTeam: async (req, res) => {
    const {
      pokemon1,
      pokemon2,
      pokemon3,
      pokemon4,
      pokemon5,
      pokemon6,
      teamName,
      userId,
    } = req.body;

    console.log("req.body:", req.body);

    const newUserPokemon1 = await UserPokemon.create({
      isShiny: pokemon1.isShiny,
      isFemale: pokemon1.isFemale,
      abilityId: pokemon1.abilityId,
      move1Id: pokemon1.move1Id,
      move2Id: pokemon1.move2Id,
      move3Id: pokemon1.move3Id,
      move4Id: pokemon1.move4Id,
      move5Id: pokemon1.move5Id,
      move6Id: pokemon1.move6Id,
      pokemonId: pokemon1.data.pokemonId,
      userId: userId,
    });

    const newUserPokemon2 = await UserPokemon.create({
      isShiny: pokemon2.isShiny,
      isFemale: pokemon2.isFemale,
      abilityId: pokemon2.abilityId,
      move1Id: pokemon2.move1Id,
      move2Id: pokemon2.move2Id,
      move3Id: pokemon2.move3Id,
      move4Id: pokemon2.move4Id,
      move5Id: pokemon2.move5Id,
      move6Id: pokemon2.move6Id,
      pokemonId: pokemon2.data.pokemonId,
      userId: userId,
    });

    const newUserPokemon3 = await UserPokemon.create({
      isShiny: pokemon3.isShiny,
      isFemale: pokemon3.isFemale,
      abilityId: pokemon3.abilityId,
      move1Id: pokemon3.move1Id,
      move2Id: pokemon3.move2Id,
      move3Id: pokemon3.move3Id,
      move4Id: pokemon3.move4Id,
      move5Id: pokemon3.move5Id,
      move6Id: pokemon3.move6Id,
      pokemonId: pokemon3.data.pokemonId,
      userId: userId,
    });

    const newUserPokemon4 = await UserPokemon.create({
      isShiny: pokemon4.isShiny,
      isFemale: pokemon4.isFemale,
      abilityId: pokemon4.abilityId,
      move1Id: pokemon4.move1Id,
      move2Id: pokemon4.move2Id,
      move3Id: pokemon4.move3Id,
      move4Id: pokemon4.move4Id,
      move5Id: pokemon4.move5Id,
      move6Id: pokemon4.move6Id,
      pokemonId: pokemon4.data.pokemonId,
      userId: userId,
    });

    const newUserPokemon5 = await UserPokemon.create({
      isShiny: pokemon5.isShiny,
      isFemale: pokemon5.isFemale,
      abilityId: pokemon5.abilityId,
      move1Id: pokemon5.move1Id,
      move2Id: pokemon5.move2Id,
      move3Id: pokemon5.move3Id,
      move4Id: pokemon5.move4Id,
      move5Id: pokemon5.move5Id,
      move6Id: pokemon5.move6Id,
      pokemonId: pokemon5.data.pokemonId,
      userId: userId,
    });

    const newUserPokemon6 = await UserPokemon.create({
      isShiny: pokemon6.isShiny,
      isFemale: pokemon6.isFemale,
      abilityId: pokemon6.abilityId,
      move1Id: pokemon6.move1Id,
      move2Id: pokemon6.move2Id,
      move3Id: pokemon6.move3Id,
      move4Id: pokemon6.move4Id,
      move5Id: pokemon6.move5Id,
      move6Id: pokemon6.move6Id,
      pokemonId: pokemon6.data.pokemonId,
      userId: userId,
    });

    const newTeam = await Team.create({
      name: teamName,
      userPokemon1Id: newUserPokemon1.userPokemonId,
      userPokemon2Id: newUserPokemon2.userPokemonId,
      userPokemon3Id: newUserPokemon3.userPokemonId,
      userPokemon4Id: newUserPokemon4.userPokemonId,
      userPokemon5Id: newUserPokemon5.userPokemonId,
      userPokemon6Id: newUserPokemon6.userPokemonId,
      userId: userId,
    });

    res.status(200).send(newTeam);
  },
  deleteTeam: async (req, res) => {
    const { id } = req.params;

    // find team to delete
    const teamToDelete = await Team.findOne({
      where: { teamId: id },
    });

    // delete UserPokemon associated with team
    const deleteTeamPokemon = await UserPokemon.destroy({
      where: {
        userPokemonId: {
          [Op.in]: [
            teamToDelete.userPokemon1Id,
            teamToDelete.userPokemon2Id,
            teamToDelete.userPokemon3Id,
            teamToDelete.userPokemon4Id,
            teamToDelete.userPokemon5Id,
            teamToDelete.userPokemon6Id,
          ],
        },
      },
    });

    // delete Team
    const deleteTeam = await Team.destroy({
      where: {
        teamId: teamToDelete.teamId,
        userPokemon1Id: teamToDelete.userPokemon1Id,
        userPokemon2Id: teamToDelete.userPokemon2Id,
        userPokemon3Id: teamToDelete.userPokemon3Id,
        userPokemon4Id: teamToDelete.userPokemon4Id,
        userPokemon5Id: teamToDelete.userPokemon5Id,
        userPokemon6Id: teamToDelete.userPokemon6Id,
      },
    });

    res.status(200).send({ success: true, message: "Successful deletion!" });
  },
  sessionCheck: async (req, res) => {
    if (req.session.userId) {
      res.send({
        message: "user is still logged in",
        success: true,
        userId: req.session.userId,
      });
      return;
    } else {
      res.send({
        message: "no user logged in",
        success: false,
      });
      return;
    }
  },
  register: async (req, res) => {
    const { username, password } = req.body;

    // check for existing account
    const userCheck = await User.findOne({
      where: { username: username },
    });

    // if account exists, notify user
    if (userCheck) {
      res.status(400).send({
        message: "Username already exists",
      });
    } else {
      // if user doesn't exist, create one after encrypting password

      const salt = bcrypt.genSaltSync(5);
      const passHash = bcrypt.hashSync(password, salt);

      const newUser = await User.create({
        username,
        password: passHash,
      });

      // set userId and username in session
      req.session.userId = newUser.userId;
      req.session.username = newUser.username;

      // set userId and username on session and send data to front end
      res.status(200).send({
        message: "Registration successful!",
        userId: newUser.userId,
        username: newUser.username,
      });
    }
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    // check for username in database
    const userCheck = await User.findOne({
      where: {
        username: username,
      },
    });

    // if no account, notify user
    if (!userCheck) {
      res.status(400).send({
        message: "Username does not exist",
      });
    } else {
      // if account exits, check hashed password
      const passwordCheck = bcrypt.compareSync(password, userCheck.password);

      // check if password exists
      if (!passwordCheck) {
        res.status(403).send({
          message: "Username or password is incorrect",
        });
      } else {
        // if passwords match
        // set userId and username on session and send data to front end
        req.session.userId = userCheck.userId;
        req.session.username = userCheck.username;

        res.status(200).send({
          message: "Login successful!",
          userId: userCheck.userId,
          username: userCheck.username,
        });
      }
    }
  },
  logout: async (req, res) => {
    // destroy session
    req.session.destroy();

    if (req.session) {
      res.status(400).send({
        message: "That's not true... THATS IMPOSSIBLE!",
        success: false,
      });
    } else {
      res.status(200).send({
        message: "Session destroyed",
        success: true,
      });
    }
  },
};

export default handlerFunctions;
