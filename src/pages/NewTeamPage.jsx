import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectablePokemon from "../components/new_teams_page/SelectablePokemon.jsx";
import TeamPreview from "../components/new_teams_page/TeamPreview.jsx";
import PokemonAndMoves from "../components/new_teams_page/PokemonAndMoves.jsx";
import Moveset from "../components/new_teams_page/MoveSet.jsx";

const NewTeamPage = () => {
  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // state values for team pokemon
  const [pokemon1Data, setPokemon1Data] = useState([]);
  const [pokemon1IsShiny, setPokemon1IsShiny] = useState(false);
  const [pokemon1IsFemale, setPokemon1IsFemale] = useState(false);
  const [pokemon1Move1Id, setPokemon1Move1Id] = useState(0);
  const [pokemon1Move2Id, setPokemon1Move2Id] = useState(0);
  const [pokemon1Move3Id, setPokemon1Move3Id] = useState(0);
  const [pokemon1Move4Id, setPokemon1Move4Id] = useState(0);
  const [pokemon1AbilityId, setPokemon1AbilityId] = useState(0);

  const [pokemon2Data, setPokemon2Data] = useState([]);
  const [pokemon2IsShiny, setPokemon2IsShiny] = useState(false);
  const [pokemon2IsFemale, setPokemon2IsFemale] = useState(false);
  const [pokemon2Move1Id, setPokemon2Move1Id] = useState(0);
  const [pokemon2Move2Id, setPokemon2Move2Id] = useState(0);
  const [pokemon2Move3Id, setPokemon2Move3Id] = useState(0);
  const [pokemon2Move4Id, setPokemon2Move4Id] = useState(0);
  const [pokemon2AbilityId, setPokemon2AbilityId] = useState(0);

  const [pokemon3Data, setPokemon3Data] = useState([]);
  const [pokemon3IsShiny, setPokemon3IsShiny] = useState(false);
  const [pokemon3IsFemale, setPokemon3IsFemale] = useState(false);
  const [pokemon3Move1Id, setPokemon3Move1Id] = useState(0);
  const [pokemon3Move2Id, setPokemon3Move2Id] = useState(0);
  const [pokemon3Move3Id, setPokemon3Move3Id] = useState(0);
  const [pokemon3Move4Id, setPokemon3Move4Id] = useState(0);
  const [pokemon3AbilityId, setPokemon3AbilityId] = useState(0);

  const [pokemon4Data, setPokemon4Data] = useState([]);
  const [pokemon4IsShiny, setPokemon4IsShiny] = useState(false);
  const [pokemon4IsFemale, setPokemon4IsFemale] = useState(false);
  const [pokemon4Move1Id, setPokemon4Move1Id] = useState(0);
  const [pokemon4Move2Id, setPokemon4Move2Id] = useState(0);
  const [pokemon4Move3Id, setPokemon4Move3Id] = useState(0);
  const [pokemon4Move4Id, setPokemon4Move4Id] = useState(0);
  const [pokemon4AbilityId, setPokemon4AbilityId] = useState(0);

  const [pokemon5Data, setPokemon5Data] = useState([]);
  const [pokemon5IsShiny, setPokemon5IsShiny] = useState(false);
  const [pokemon5IsFemale, setPokemon5IsFemale] = useState(false);
  const [pokemon5Move1Id, setPokemon5Move1Id] = useState(0);
  const [pokemon5Move2Id, setPokemon5Move2Id] = useState(0);
  const [pokemon5Move3Id, setPokemon5Move3Id] = useState(0);
  const [pokemon5Move4Id, setPokemon5Move4Id] = useState(0);
  const [pokemon5AbilityId, setPokemon5AbilityId] = useState(0);

  const [pokemon6Data, setPokemon6Data] = useState([]);
  const [pokemon6IsShiny, setPokemon6IsShiny] = useState(false);
  const [pokemon6IsFemale, setPokemon6IsFemale] = useState(false);
  const [pokemon6Move1Id, setPokemon6Move1Id] = useState(0);
  const [pokemon6Move2Id, setPokemon6Move2Id] = useState(0);
  const [pokemon6Move3Id, setPokemon6Move3Id] = useState(0);
  const [pokemon6Move4Id, setPokemon6Move4Id] = useState(0);
  const [pokemon6AbilityId, setPokemon6AbilityId] = useState(0);

  // other state values
  const [showSelectablePokemon, setShowSelectablePokemon] = useState(false);
  const [slotToFill, setSlotToFill] = useState(0);
  const [teamName, setTeamName] = useState("New Team");
  const [movesetData, setMovesetData] = useState([]);
  const [showMoveset, setShowMoveset] = useState(false);

  return (
    <div className="flex flex-col gap-y-4 w-full h-full px-10">
      {showSelectablePokemon && (
        <SelectablePokemon
          setPokemon1Data={setPokemon1Data}
          setPokemon1IsShiny={setPokemon1IsFemale}
          setPokemon1IsFemale={setPokemon1IsFemale}
          setPokemon2Data={setPokemon2Data}
          setPokemon2IsShiny={setPokemon2IsFemale}
          setPokemon2IsFemale={setPokemon2IsFemale}
          setPokemon3Data={setPokemon3Data}
          setPokemon3IsShiny={setPokemon3IsFemale}
          setPokemon3IsFemale={setPokemon3IsFemale}
          setPokemon4Data={setPokemon4Data}
          setPokemon4IsShiny={setPokemon4IsFemale}
          setPokemon4IsFemale={setPokemon4IsFemale}
          setPokemon5Data={setPokemon5Data}
          setPokemon5IsShiny={setPokemon5IsFemale}
          setPokemon5IsFemale={setPokemon5IsFemale}
          setPokemon6Data={setPokemon6Data}
          setPokemon6IsShiny={setPokemon6IsFemale}
          setPokemon6IsFemale={setPokemon6IsFemale}
          slotToFill={slotToFill}
          setShowSelectablePokemon={setShowSelectablePokemon}
        />
      )}
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
      />
      <PokemonAndMoves
        pokemon1Data={pokemon1Data}
        pokemon1IsShiny={pokemon1IsShiny}
        pokemon1IsFemale={pokemon1IsFemale}
        pokemon1Move1Id={pokemon1Move1Id}
        pokemon1Move2Id={pokemon1Move2Id}
        pokemon1Move3Id={pokemon1Move3Id}
        pokemon1Move4Id={pokemon1Move4Id}
        pokemon1AbilityId={pokemon1AbilityId}
        setPokemon1Move1Id={setPokemon1Move1Id}
        setPokemon1Move2Id={setPokemon1Move2Id}
        setPokemon1Move3Id={setPokemon1Move3Id}
        setPokemon1Move4Id={setPokemon1Move4Id}
        setPokemon1AbilityId={setPokemon1AbilityId}
        pokemon2Data={pokemon2Data}
        pokemon2IsShiny={pokemon2IsShiny}
        pokemon2IsFemale={pokemon2IsFemale}
        pokemon2Move1Id={pokemon2Move1Id}
        pokemon2Move2Id={pokemon2Move2Id}
        pokemon2Move3Id={pokemon2Move3Id}
        pokemon2Move4Id={pokemon2Move4Id}
        pokemon2AbilityId={pokemon2AbilityId}
        setPokemon2Move1Id={setPokemon2Move1Id}
        setPokemon2Move2Id={setPokemon2Move2Id}
        setPokemon2Move3Id={setPokemon2Move3Id}
        setPokemon2Move4Id={setPokemon2Move4Id}
        setPokemon2AbilityId={setPokemon2AbilityId}
        pokemon3Data={pokemon3Data}
        pokemon3IsShiny={pokemon3IsShiny}
        pokemon3IsFemale={pokemon3IsFemale}
        pokemon3Move1Id={pokemon3Move1Id}
        pokemon3Move2Id={pokemon3Move2Id}
        pokemon3Move3Id={pokemon3Move3Id}
        pokemon3Move4Id={pokemon3Move4Id}
        pokemon3AbilityId={pokemon3AbilityId}
        setPokemon3Move1Id={setPokemon3Move1Id}
        setPokemon3Move2Id={setPokemon3Move2Id}
        setPokemon3Move3Id={setPokemon3Move3Id}
        setPokemon3Move4Id={setPokemon3Move4Id}
        setPokemon3AbilityId={setPokemon3AbilityId}
        pokemon4Data={pokemon4Data}
        pokemon4IsShiny={pokemon4IsShiny}
        pokemon4IsFemale={pokemon4IsFemale}
        pokemon4Move1Id={pokemon4Move1Id}
        pokemon4Move2Id={pokemon4Move2Id}
        pokemon4Move3Id={pokemon4Move3Id}
        pokemon4Move4Id={pokemon4Move4Id}
        pokemon4AbilityId={pokemon4AbilityId}
        setPokemon4Move1Id={setPokemon4Move1Id}
        setPokemon4Move2Id={setPokemon4Move2Id}
        setPokemon4Move3Id={setPokemon4Move3Id}
        setPokemon4Move4Id={setPokemon4Move4Id}
        setPokemon4AbilityId={setPokemon4AbilityId}
        pokemon5Data={pokemon5Data}
        pokemon5IsShiny={pokemon5IsShiny}
        pokemon5IsFemale={pokemon5IsFemale}
        pokemon5Move1Id={pokemon5Move1Id}
        pokemon5Move2Id={pokemon5Move2Id}
        pokemon5Move3Id={pokemon5Move3Id}
        pokemon5Move4Id={pokemon5Move4Id}
        pokemon5AbilityId={pokemon5AbilityId}
        setPokemon5Move1Id={setPokemon5Move1Id}
        setPokemon5Move2Id={setPokemon5Move2Id}
        setPokemon5Move3Id={setPokemon5Move3Id}
        setPokemon5Move4Id={setPokemon5Move4Id}
        setPokemon5AbilityId={setPokemon5AbilityId}
        pokemon6Data={pokemon6Data}
        pokemon6IsShiny={pokemon6IsShiny}
        pokemon6IsFemale={pokemon6IsFemale}
        pokemon6Move1Id={pokemon6Move1Id}
        pokemon6Move2Id={pokemon6Move2Id}
        pokemon6Move3Id={pokemon6Move3Id}
        pokemon6Move4Id={pokemon6Move4Id}
        pokemon6AbilityId={pokemon6AbilityId}
        setPokemon6Move1Id={setPokemon6Move1Id}
        setPokemon6Move2Id={setPokemon6Move2Id}
        setPokemon6Move3Id={setPokemon6Move3Id}
        setPokemon6Move4Id={setPokemon6Move4Id}
        setPokemon6AbilityId={setPokemon6AbilityId}
        setSlotToFill={setSlotToFill}
        setShowSelectablePokemon={setShowSelectablePokemon}
      />
    </div>
  );
};

export default NewTeamPage;
