import { all } from "axios";
import db, { Evolution, Chain } from "../../model.js";
import evolutionChainData0 from "../table_JSONs/chains/all_evolution_chains_0.json" assert { type: "json" };
import evolutionChainData1 from "../table_JSONs/chains/all_evolution_chains_1.json" assert { type: "json" };
import evolutionChainData2 from "../table_JSONs/chains/all_evolution_chains_2.json" assert { type: "json" };

console.log("Syncing database...");
await Evolution.sync({ force: true });
await Chain.sync({ force: true });
console.log("Seeding evolutions...");

const allEvolutionChains = [
  ...evolutionChainData0,
  ...evolutionChainData1,
  ...evolutionChainData2,
];
console.log("allEvolutionChains.length", allEvolutionChains.length);
// recursive function for populating evolutions table
const createEvolutionEntry = async (evolvesTo, chain, iteration) => {
  // delcare variables for evolution creation
  let speciesId = null;
  let chainId = chain.id;
  let trigger = null;
  let gender = null;
  let heldItem = null;
  let item = null;
  let knownMove = null;
  let knownMovesType = null;
  let location = null;
  let minAffection = null;
  let minBeauty = null;
  let minHappiness = null;
  let minLevel = null;
  let needsOverworldRain = null;
  let partySpecies = null;
  let partyType = null;
  let relativePhysicalStats = null;
  let timeOfDay = null;
  let tradeSpecies = null;
  let turnUpsideDown = null;

  // map over evolvesTo and evolutionDetails in applicable cases
  const evolutionList = await Promise.all(
    evolvesTo.map(async (evolution) => {
      // reassign speciesId
      speciesId = evolution.species.url.replace(
        /(^https\:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/|\/$)/g,
        ""
      );

      const evolutionDetailsList = await Promise.all(
        evolution.evolution_details.map(async (evolutionDetails) => {
          // reassign evolution details
          trigger =
            evolutionDetails.trigger === null
              ? null
              : evolutionDetails.trigger.name;
          gender = evolutionDetails.gender;
          heldItem =
            evolutionDetails.held_item === null
              ? null
              : evolutionDetails.held_item.name;
          item =
            evolutionDetails.item === null ? null : evolutionDetails.item.name;
          knownMove =
            evolutionDetails.known_move === null
              ? null
              : evolutionDetails.known_move.name;
          knownMovesType =
            evolutionDetails.known_moves_type === null
              ? null
              : evolutionDetails.name;
          location =
            evolutionDetails.location === null
              ? null
              : evolutionDetails.location.name;
          minAffection = evolutionDetails.min_affection;
          minBeauty = evolutionDetails.min_beauty;
          minHappiness = evolutionDetails.min_happiness;
          minLevel = evolutionDetails.min_level;
          needsOverworldRain = evolutionDetails.needs_overworld_rain;
          partySpecies =
            evolutionDetails.party_species === null
              ? null
              : evolutionDetails.party_species.name;
          partyType =
            evolutionDetails.party_type === null
              ? null
              : evolutionDetails.party_type.name;
          relativePhysicalStats = evolutionDetails.relative_physical_stats;
          timeOfDay = evolutionDetails.time_of_day;
          tradeSpecies =
            evolutionDetails.trade_species === null
              ? null
              : evolutionDetails.trade_species.name;
          turnUpsideDown = evolutionDetails.turn_upside_down;

          const newEvolution = await Evolution.create({
            speciesId: evolution.species.url.replace(
              /(^https\:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/|\/$)/g,
              ""
            ),
            chainId: chainId,
            trigger: trigger,
            gender: gender,
            heldItem: heldItem,
            item: item,
            knownMove: knownMove,
            knownMovesType: knownMovesType,
            location: location,
            minAffection: minAffection,
            minBeauty: minBeauty,
            minHappiness: minHappiness,
            minLevel: minLevel,
            needsOverworldRain: needsOverworldRain,
            partySpecies: partySpecies,
            partyType: partyType,
            relativePhysicalStats: relativePhysicalStats,
            timeOfDay: timeOfDay,
            tradeSpecies: tradeSpecies,
            turnUpsideDown: turnUpsideDown,
            alolan: false,
            galarian: false,
            hisuian: false,
            paldean: false,
          });
        })
      );
      // create new evolution entry for edge cases (e.g. Manaphy)
      if (evolution.evolution_details.length === 0 && evolution.species) {
        const newEvolution = await Evolution.create({
          speciesId: evolution.species.url.replace(
            /(^https\:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/|\/$)/g,
            ""
          ),
          chainId: chainId,
          trigger: trigger,
          gender: gender,
          heldItem: heldItem,
          item: item,
          knownMove: knownMove,
          knownMovesType: knownMovesType,
          location: location,
          minAffection: minAffection,
          minBeauty: minBeauty,
          minHappiness: minHappiness,
          minLevel: minLevel,
          needsOverworldRain: needsOverworldRain,
          partySpecies: partySpecies,
          partyType: partyType,
          relativePhysicalStats: relativePhysicalStats,
          timeOfDay: timeOfDay,
          tradeSpecies: tradeSpecies,
          turnUpsideDown: turnUpsideDown,
          alolan: false,
          galarian: false,
          hisuian: false,
          paldean: false,
        });
      }

      // check if there are more evolutions in current chain
      if (evolution.evolves_to && evolution.evolves_to.length > 0) {
        createEvolutionEntry(evolution.evolves_to, chain, iteration);
      } else if (iteration === allEvolutionChains.length) {
        // check if the end of allEvolutionChains has been reached and if so, close db
        await db.close();
      }
    })
  );
};

// create evolutions and chains tables
const evolutionChainsInDB = await Promise.all(
  allEvolutionChains.map(async (chain, i) => {
    console.log("i", i);
    // create new chain entry
    const newChain = await Chain.create({
      chainId: chain.id,
      babyTriggerItem:
        chain.baby_trigger_item === null ? null : chain.baby_trigger_item.name,
    });

    // create evolution entry for first pokemon in chain
    const firstEvolution = await Evolution.create({
      speciesId: chain.chain.species.url.replace(
        /(^https\:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/|\/$)/g,
        ""
      ),
      chainId: chain.id,
      trigger: null,
      gender: null,
      heldItem: null,
      item: null,
      knownMove: null,
      knowMovesType: null,
      location: null,
      minAffection: null,
      minBeauty: null,
      minHappiness: null,
      minLevel: null,
      needsOverworldRain: null,
      partySpecies: null,
      partyType: null,
      relativePhysicalStats: null,
      timeOfDay: null,
      tradeSpecies: null,
      turnUpsideDown: null,
      alolan: false,
      galarian: false,
      hisuian: false,
      paldean: false,
    });

    // invoke recursive function if current pokemon species can evolve
    if (chain.chain.evolves_to.length > 0) {
      createEvolutionEntry(chain.chain.evolves_to, chain, i);
    }
  })
);

console.log("evolutions seeded");

// await db.close();
