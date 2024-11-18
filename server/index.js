import express, { application } from "express";
import session from "express-session";
import morgan from "morgan";
import ViteExpress from "vite-express";
import handlerFunctions from "./controller.js";

const app = express();
const port = "5173";

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({ secret: "ssshhhhh", saveUninitialized: true, resave: false })
);

// handler functions destructure
const {
  getAllPokemonDetails,
  getRandomPokemon,
  getPokemonById,
  getDexEntries,
  getMovesetsByPokemonId,
  postMovesetsByPokemonId,
  getUserTeams,
  getPokemonForTeamSelection,
  sessionCheck,
  register,
  login,
  logout,
} = handlerFunctions;

// endpoints
app.get("/api/pokemon/details/all", getAllPokemonDetails);
app.get("/api/pokemon/random", getRandomPokemon);
app.get("/api/pokemon/:id", getPokemonById);
app.get("/api/pokemon/entries/:id", getDexEntries);
app.get("/api/pokemon/moveset/:id", getMovesetsByPokemonId);
app.post("/api/pokemon/moveset", postMovesetsByPokemonId);
app.post("/api/teams", getUserTeams);
app.get("/api/pokemon/team/selection", getPokemonForTeamSelection);
app.get("/api/session-check", sessionCheck);
app.post("/api/register", register);
app.post("/api/login", login);
app.post("/api/logout", logout);

ViteExpress.listen(app, port, () =>
  console.log(`Executing on port ${port} http://localhost:${port}`)
);
