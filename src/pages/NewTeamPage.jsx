import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SelectablePokemon from "../components/new_teams_page/SelectablePokemon.jsx";
import TeamPreview from "../components/new_teams_page/TeamPreview.jsx";
import PokemonAndMoves from "../components/new_teams_page/PokemonAndMoves.jsx";
import Moveset from "../components/new_teams_page/Moveset.jsx";
import AbilitySelection from "../components/new_teams_page/AbilitySelection.jsx";
import { IoMdCheckmarkCircleOutline, IoMdTrash } from "react-icons/io";

const NewTeamPage = () => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // inovoke useNavigate
  const navigate = useNavigate();

  // state values for team pokemon
  const [pokemon1Data, setPokemon1Data] = useState([]);
  const [pokemon1IsShiny, setPokemon1IsShiny] = useState(false);
  const [pokemon1IsFemale, setPokemon1IsFemale] = useState(false);
  const [pokemon1Move1, setPokemon1Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon1Move2, setPokemon1Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon1Move3, setPokemon1Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon1Move4, setPokemon1Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon1Ability, setPokemon1Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  const [pokemon2Data, setPokemon2Data] = useState([]);
  const [pokemon2IsShiny, setPokemon2IsShiny] = useState(false);
  const [pokemon2IsFemale, setPokemon2IsFemale] = useState(false);
  const [pokemon2Move1, setPokemon2Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon2Move2, setPokemon2Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon2Move3, setPokemon2Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon2Move4, setPokemon2Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon2Ability, setPokemon2Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  const [pokemon3Data, setPokemon3Data] = useState([]);
  const [pokemon3IsShiny, setPokemon3IsShiny] = useState(false);
  const [pokemon3IsFemale, setPokemon3IsFemale] = useState(false);
  const [pokemon3Move1, setPokemon3Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon3Move2, setPokemon3Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon3Move3, setPokemon3Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon3Move4, setPokemon3Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon3Ability, setPokemon3Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  const [pokemon4Data, setPokemon4Data] = useState([]);
  const [pokemon4IsShiny, setPokemon4IsShiny] = useState(false);
  const [pokemon4IsFemale, setPokemon4IsFemale] = useState(false);
  const [pokemon4Move1, setPokemon4Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon4Move2, setPokemon4Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon4Move3, setPokemon4Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon4Move4, setPokemon4Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon4Ability, setPokemon4Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  const [pokemon5Data, setPokemon5Data] = useState([]);
  const [pokemon5IsShiny, setPokemon5IsShiny] = useState(false);
  const [pokemon5IsFemale, setPokemon5IsFemale] = useState(false);
  const [pokemon5Move1, setPokemon5Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon5Move2, setPokemon5Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon5Move3, setPokemon5Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon5Move4, setPokemon5Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon5Ability, setPokemon5Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  const [pokemon6Data, setPokemon6Data] = useState([]);
  const [pokemon6IsShiny, setPokemon6IsShiny] = useState(false);
  const [pokemon6IsFemale, setPokemon6IsFemale] = useState(false);
  const [pokemon6Move1, setPokemon6Move1] = useState({
    move: { name: "Move 1", moveId: null },
  });
  const [pokemon6Move2, setPokemon6Move2] = useState({
    move: { name: "Move 2", moveId: null },
  });
  const [pokemon6Move3, setPokemon6Move3] = useState({
    move: { name: "Move 3", moveId: null },
  });
  const [pokemon6Move4, setPokemon6Move4] = useState({
    move: { name: "Move 4", moveId: null },
  });
  const [pokemon6Ability, setPokemon6Ability] = useState({
    name: "Ability",
    abilityId: null,
  });

  // other state values
  const [showSelectablePokemon, setShowSelectablePokemon] = useState(false);
  const [showMoveset, setShowMoveset] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const [moveToFill, setMoveToFill] = useState(1);
  const [slotToFill, setSlotToFill] = useState(0);
  const [teamName, setTeamName] = useState("New Team");

  // handler functions
  const handleTeamCreation = async () => {
    console.log("TEAM CREATED!!!");

    const bodyObj = {
      pokemon1: {
        data: pokemon1Data,
        isShiny: pokemon1IsShiny,
        isFemale: pokemon1IsFemale,
        move1Id: pokemon1Move1.move.moveId,
        move2Id: pokemon1Move2.move.moveId,
        move3Id: pokemon1Move3.move.moveId,
        move4Id: pokemon1Move4.move.moveId,
        abilityId: pokemon1Ability.abilityId,
      },
      pokemon2: {
        data: pokemon2Data,
        isShiny: pokemon2IsShiny,
        isFemale: pokemon2IsFemale,
        move1Id: pokemon2Move1.move.moveId,
        move2Id: pokemon2Move2.move.moveId,
        move3Id: pokemon2Move3.move.moveId,
        move4Id: pokemon2Move4.move.moveId,
        abilityId: pokemon2Ability.abilityId,
      },
      pokemon3: {
        data: pokemon3Data,
        isShiny: pokemon3IsShiny,
        isFemale: pokemon3IsFemale,
        move1Id: pokemon3Move1.move.moveId,
        move2Id: pokemon3Move2.move.moveId,
        move3Id: pokemon3Move3.move.moveId,
        move4Id: pokemon3Move4.move.moveId,
        abilityId: pokemon3Ability.abilityId,
      },
      pokemon4: {
        data: pokemon4Data,
        isShiny: pokemon4IsShiny,
        isFemale: pokemon4IsFemale,
        move1Id: pokemon4Move1.move.moveId,
        move2Id: pokemon4Move2.move.moveId,
        move3Id: pokemon4Move3.move.moveId,
        move4Id: pokemon4Move4.move.moveId,
        abilityId: pokemon4Ability.abilityId,
      },
      pokemon5: {
        data: pokemon5Data,
        isShiny: pokemon5IsShiny,
        isFemale: pokemon5IsFemale,
        move1Id: pokemon5Move1.move.moveId,
        move2Id: pokemon5Move2.move.moveId,
        move3Id: pokemon5Move3.move.moveId,
        move4Id: pokemon5Move4.move.moveId,
        abilityId: pokemon5Ability.abilityId,
      },
      pokemon6: {
        data: pokemon6Data,
        isShiny: pokemon6IsShiny,
        isFemale: pokemon6IsFemale,
        move1Id: pokemon6Move1.move.moveId,
        move2Id: pokemon6Move2.move.moveId,
        move3Id: pokemon6Move3.move.moveId,
        move4Id: pokemon6Move4.move.moveId,
        abilityId: pokemon6Ability.abilityId,
      },
      teamName: teamName,
      userId: userId,
    };

    const newTeam = await axios.post("/api/pokemon/team/create", bodyObj);

    console.log("newTeam.data", newTeam.data);

    navigate("/teams");
  };

  return (
    <>
      {showSelectablePokemon && (
        <SelectablePokemon
          setPokemon1Data={setPokemon1Data}
          setPokemon1IsShiny={setPokemon1IsFemale}
          setPokemon1IsFemale={setPokemon1IsFemale}
          setPokemon1Move1={setPokemon1Move1}
          setPokemon1Move2={setPokemon1Move2}
          setPokemon1Move3={setPokemon1Move3}
          setPokemon1Move4={setPokemon1Move4}
          setPokemon1Ability={setPokemon1Ability}
          setPokemon2Data={setPokemon2Data}
          setPokemon2IsShiny={setPokemon2IsFemale}
          setPokemon2IsFemale={setPokemon2IsFemale}
          setPokemon2Move1={setPokemon2Move1}
          setPokemon2Move2={setPokemon2Move2}
          setPokemon2Move3={setPokemon2Move3}
          setPokemon2Move4={setPokemon2Move4}
          setPokemon2Ability={setPokemon2Ability}
          setPokemon3Data={setPokemon3Data}
          setPokemon3IsShiny={setPokemon3IsFemale}
          setPokemon3IsFemale={setPokemon3IsFemale}
          setPokemon3Move1={setPokemon3Move1}
          setPokemon3Move2={setPokemon3Move2}
          setPokemon3Move3={setPokemon3Move3}
          setPokemon3Move4={setPokemon3Move4}
          setPokemon3Ability={setPokemon3Ability}
          setPokemon4Data={setPokemon4Data}
          setPokemon4IsShiny={setPokemon4IsFemale}
          setPokemon4IsFemale={setPokemon4IsFemale}
          setPokemon4Move1={setPokemon4Move1}
          setPokemon4Move2={setPokemon4Move2}
          setPokemon4Move3={setPokemon4Move3}
          setPokemon4Move4={setPokemon4Move4}
          setPokemon4Ability={setPokemon4Ability}
          setPokemon5Data={setPokemon5Data}
          setPokemon5IsShiny={setPokemon5IsFemale}
          setPokemon5IsFemale={setPokemon5IsFemale}
          setPokemon5Move1={setPokemon5Move1}
          setPokemon5Move2={setPokemon5Move2}
          setPokemon5Move3={setPokemon5Move3}
          setPokemon5Move4={setPokemon5Move4}
          setPokemon5Ability={setPokemon5Ability}
          setPokemon6Data={setPokemon6Data}
          setPokemon6IsShiny={setPokemon6IsFemale}
          setPokemon6IsFemale={setPokemon6IsFemale}
          setPokemon6Move1={setPokemon6Move1}
          setPokemon6Move2={setPokemon6Move2}
          setPokemon6Move3={setPokemon6Move3}
          setPokemon6Move4={setPokemon6Move4}
          setPokemon6Ability={setPokemon6Ability}
          slotToFill={slotToFill}
          showSelectablePokemon={showSelectablePokemon}
          setShowSelectablePokemon={setShowSelectablePokemon}
        />
      )}
      {showMoveset && (
        <Moveset
          moveToFill={moveToFill}
          slotToFill={slotToFill}
          setShowMoveset={setShowMoveset}
          pokemon1Data={pokemon1Data}
          setPokemon1Move1={setPokemon1Move1}
          setPokemon1Move2={setPokemon1Move2}
          setPokemon1Move3={setPokemon1Move3}
          setPokemon1Move4={setPokemon1Move4}
          pokemon2Data={pokemon2Data}
          setPokemon2Move1={setPokemon2Move1}
          setPokemon2Move2={setPokemon2Move2}
          setPokemon2Move3={setPokemon2Move3}
          setPokemon2Move4={setPokemon2Move4}
          pokemon3Data={pokemon3Data}
          setPokemon3Move1={setPokemon3Move1}
          setPokemon3Move2={setPokemon3Move2}
          setPokemon3Move3={setPokemon3Move3}
          setPokemon3Move4={setPokemon3Move4}
          pokemon4Data={pokemon4Data}
          setPokemon4Move1={setPokemon4Move1}
          setPokemon4Move2={setPokemon4Move2}
          setPokemon4Move3={setPokemon4Move3}
          setPokemon4Move4={setPokemon4Move4}
          pokemon5Data={pokemon5Data}
          setPokemon5Move1={setPokemon5Move1}
          setPokemon5Move2={setPokemon5Move2}
          setPokemon5Move3={setPokemon5Move3}
          setPokemon5Move4={setPokemon5Move4}
          pokemon6Data={pokemon6Data}
          setPokemon6Move1={setPokemon6Move1}
          setPokemon6Move2={setPokemon6Move2}
          setPokemon6Move3={setPokemon6Move3}
          setPokemon6Move4={setPokemon6Move4}
        />
      )}
      {showAbilities && (
        <AbilitySelection
          setShowAbilities={setShowAbilities}
          slotToFill={slotToFill}
          pokemon1Data={pokemon1Data}
          pokemon2Data={pokemon2Data}
          pokemon3Data={pokemon3Data}
          pokemon4Data={pokemon4Data}
          pokemon5Data={pokemon5Data}
          pokemon6Data={pokemon6Data}
          setPokemon1Ability={setPokemon1Ability}
          setPokemon2Ability={setPokemon2Ability}
          setPokemon3Ability={setPokemon3Ability}
          setPokemon4Ability={setPokemon4Ability}
          setPokemon5Ability={setPokemon5Ability}
          setPokemon6Ability={setPokemon6Ability}
        />
      )}
      <div className="flex flex-col justify-center place-items-center gap-y-3 w-full h-full">
        <TeamPreview
          teamName={teamName}
          setTeamName={setTeamName}
          pokemon1Data={pokemon1Data}
          pokemon1IsFemale={pokemon1IsFemale}
          pokemon1IsShiny={pokemon1IsShiny}
          pokemon2Data={pokemon2Data}
          pokemon2IsFemale={pokemon2IsFemale}
          pokemon2IsShiny={pokemon2IsShiny}
          pokemon3Data={pokemon3Data}
          pokemon3IsFemale={pokemon3IsFemale}
          pokemon3IsShiny={pokemon3IsShiny}
          pokemon4Data={pokemon4Data}
          pokemon4IsFemale={pokemon4IsFemale}
          pokemon4IsShiny={pokemon4IsShiny}
          pokemon5Data={pokemon5Data}
          pokemon5IsFemale={pokemon5IsFemale}
          pokemon5IsShiny={pokemon5IsShiny}
          pokemon6Data={pokemon6Data}
          pokemon6IsFemale={pokemon6IsFemale}
          pokemon6IsShiny={pokemon6IsShiny}
          handleTeamCreation={handleTeamCreation}
        />

        <div className="flex flex-col gap-y-3 w-full h-full px-2 rounded-lg overflow-y-scroll">
          <PokemonAndMoves
            pokemonData={pokemon1Data}
            pokemonIsShiny={pokemon1IsShiny}
            pokemonIsFemale={pokemon1IsFemale}
            pokemonMove1={pokemon1Move1}
            pokemonMove2={pokemon1Move2}
            pokemonMove3={pokemon1Move3}
            pokemonMove4={pokemon1Move4}
            pokemonAbility={pokemon1Ability}
            setPokemonIsShiny={setPokemon1IsShiny}
            setPokemonIsFemale={setPokemon1IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={1}
          />
          <PokemonAndMoves
            pokemonData={pokemon2Data}
            pokemonIsShiny={pokemon2IsShiny}
            pokemonIsFemale={pokemon2IsFemale}
            pokemonMove1={pokemon2Move1}
            pokemonMove2={pokemon2Move2}
            pokemonMove3={pokemon2Move3}
            pokemonMove4={pokemon2Move4}
            pokemonAbility={pokemon2Ability}
            setPokemonIsShiny={setPokemon2IsShiny}
            setPokemonIsFemale={setPokemon2IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={2}
          />
          <PokemonAndMoves
            pokemonData={pokemon3Data}
            pokemonIsShiny={pokemon3IsShiny}
            pokemonIsFemale={pokemon3IsFemale}
            pokemonMove1={pokemon3Move1}
            pokemonMove2={pokemon3Move2}
            pokemonMove3={pokemon3Move3}
            pokemonMove4={pokemon3Move4}
            pokemonAbility={pokemon3Ability}
            setPokemonIsShiny={setPokemon3IsShiny}
            setPokemonIsFemale={setPokemon3IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={3}
          />
          <PokemonAndMoves
            pokemonData={pokemon4Data}
            pokemonIsShiny={pokemon4IsShiny}
            pokemonIsFemale={pokemon4IsFemale}
            pokemonMove1={pokemon4Move1}
            pokemonMove2={pokemon4Move2}
            pokemonMove3={pokemon4Move3}
            pokemonMove4={pokemon4Move4}
            pokemonAbility={pokemon4Ability}
            setPokemonIsShiny={setPokemon4IsShiny}
            setPokemonIsFemale={setPokemon4IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={4}
          />
          <PokemonAndMoves
            pokemonData={pokemon5Data}
            pokemonIsShiny={pokemon5IsShiny}
            pokemonIsFemale={pokemon5IsFemale}
            pokemonMove1={pokemon5Move1}
            pokemonMove2={pokemon5Move2}
            pokemonMove3={pokemon5Move3}
            pokemonMove4={pokemon5Move4}
            pokemonAbility={pokemon5Ability}
            setPokemonIsShiny={setPokemon5IsShiny}
            setPokemonIsFemale={setPokemon5IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={5}
          />
          <PokemonAndMoves
            pokemonData={pokemon6Data}
            pokemonIsShiny={pokemon6IsShiny}
            pokemonIsFemale={pokemon6IsFemale}
            pokemonMove1={pokemon6Move1}
            pokemonMove2={pokemon6Move2}
            pokemonMove3={pokemon6Move3}
            pokemonMove4={pokemon6Move4}
            pokemonAbility={pokemon6Ability}
            setPokemonIsShiny={setPokemon6IsShiny}
            setPokemonIsFemale={setPokemon6IsFemale}
            setShowSelectablePokemon={setShowSelectablePokemon}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setSlotToFill={setSlotToFill}
            setMoveToFill={setMoveToFill}
            slotNum={6}
          />
        </div>
      </div>
    </>
  );
};

export default NewTeamPage;
