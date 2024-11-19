import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectablePokemon from "../components/new_teams_page/SelectablePokemon.jsx";
import TeamPreview from "../components/new_teams_page/TeamPreview.jsx";
import PokemonAndMoves from "../components/new_teams_page/PokemonAndMoves.jsx";

const NewTeamPage = () => {
  // user from redux store
  const user = useSelector((state) => state.user);

  // state values for team pokemon
  const [pokemon1Data, setPokemon1Data] = useState([]);
  const [pokemon1IsShiny, setPokemon1IsShiny] = useState(false);
  const [pokemon1IsFemale, setPokemon1IsFemale] = useState(false);
  const [pokemon1Move1, setPokemon1Move1] = useState(0);
  const [pokemon1Move2, setPokemon1Move2] = useState(0);
  const [pokemon1Move3, setPokemon1Move3] = useState(0);
  const [pokemon1Move4, setPokemon1Move4] = useState(0);
  const [pokemon1Ability, setPokemon1Ability] = useState(0);

  const [pokemon2Data, setPokemon2Data] = useState([]);
  const [pokemon2IsShiny, setPokemon2IsShiny] = useState(false);
  const [pokemon2IsFemale, setPokemon2IsFemale] = useState(false);
  const [pokemon2Move1, setPokemon2Move1] = useState(0);
  const [pokemon2Move2, setPokemon2Move2] = useState(0);
  const [pokemon2Move3, setPokemon2Move3] = useState(0);
  const [pokemon2Move4, setPokemon2Move4] = useState(0);
  const [pokemon2Ability, setPokemon2Ability] = useState(0);

  const [pokemon3Data, setPokemon3Data] = useState([]);
  const [pokemon3IsShiny, setPokemon3IsShiny] = useState(false);
  const [pokemon3IsFemale, setPokemon3IsFemale] = useState(false);
  const [pokemon3Move1, setPokemon3Move1] = useState(0);
  const [pokemon3Move2, setPokemon3Move2] = useState(0);
  const [pokemon3Move3, setPokemon3Move3] = useState(0);
  const [pokemon3Move4, setPokemon3Move4] = useState(0);
  const [pokemon3Ability, setPokemon3Ability] = useState(0);

  const [pokemon4Data, setPokemon4Data] = useState([]);
  const [pokemon4IsShiny, setPokemon4IsShiny] = useState(false);
  const [pokemon4IsFemale, setPokemon4IsFemale] = useState(false);
  const [pokemon4Move1, setPokemon4Move1] = useState(0);
  const [pokemon4Move2, setPokemon4Move2] = useState(0);
  const [pokemon4Move3, setPokemon4Move3] = useState(0);
  const [pokemon4Move4, setPokemon4Move4] = useState(0);
  const [pokemon4Ability, setPokemon4Ability] = useState(0);

  const [pokemon5Data, setPokemon5Data] = useState([]);
  const [pokemon5IsShiny, setPokemon5IsShiny] = useState(false);
  const [pokemon5IsFemale, setPokemon5IsFemale] = useState(false);
  const [pokemon5Move1, setPokemon5Move1] = useState(0);
  const [pokemon5Move2, setPokemon5Move2] = useState(0);
  const [pokemon5Move3, setPokemon5Move3] = useState(0);
  const [pokemon5Move4, setPokemon5Move4] = useState(0);
  const [pokemon5Ability, setPokemon5Ability] = useState(0);

  const [pokemon6Data, setPokemon6Data] = useState([]);
  const [pokemon6IsShiny, setPokemon6IsShiny] = useState(false);
  const [pokemon6IsFemale, setPokemon6IsFemale] = useState(false);
  const [pokemon6Move1, setPokemon6Move1] = useState(0);
  const [pokemon6Move2, setPokemon6Move2] = useState(0);
  const [pokemon6Move3, setPokemon6Move3] = useState(0);
  const [pokemon6Move4, setPokemon6Move4] = useState(0);
  const [pokemon6Ability, setPokemon6Ability] = useState(0);

  // other state values
  const [showSelectablePokemon, setShowSelectablePokemon] = useState(false);
  const [slotToFill, setSlotToFill] = useState(0);
  const [teamName, setTeamName] = useState("New Team");

  return (
    <div className="flex flex-col gap-y-4 w-full h-full">
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
        pokemon1Move1={pokemon1Move1}
        pokemon1Move2={pokemon1Move2}
        pokemon1Move3={pokemon1Move3}
        pokemon1Move4={pokemon1Move4}
        pokemon1Ability={pokemon1Ability}
        setPokemon1Move1={setPokemon1Move1}
        setPokemon1Move2={setPokemon1Move2}
        setPokemon1Move3={setPokemon1Move3}
        setPokemon1Move4={setPokemon1Move4}
        setPokemon1Ability={setPokemon1Ability}
        pokemon2Data={pokemon2Data}
        pokemon2IsShiny={pokemon2IsShiny}
        pokemon2IsFemale={pokemon2IsFemale}
        pokemon2Move1={pokemon2Move1}
        pokemon2Move2={pokemon2Move2}
        pokemon2Move3={pokemon2Move3}
        pokemon2Move4={pokemon2Move4}
        pokemon2Ability={pokemon2Ability}
        setPokemon2Move1={setPokemon2Move1}
        setPokemon2Move2={setPokemon2Move2}
        setPokemon2Move3={setPokemon2Move3}
        setPokemon2Move4={setPokemon2Move4}
        setPokemon2Ability={setPokemon2Ability}
        pokemon3Data={pokemon3Data}
        pokemon3IsShiny={pokemon3IsShiny}
        pokemon3IsFemale={pokemon3IsFemale}
        pokemon3Move1={pokemon3Move1}
        pokemon3Move2={pokemon3Move2}
        pokemon3Move3={pokemon3Move3}
        pokemon3Move4={pokemon3Move4}
        pokemon3Ability={pokemon3Ability}
        setPokemon3Move1={setPokemon3Move1}
        setPokemon3Move2={setPokemon3Move2}
        setPokemon3Move3={setPokemon3Move3}
        setPokemon3Move4={setPokemon3Move4}
        setPokemon3Ability={setPokemon3Ability}
        pokemon4Data={pokemon4Data}
        pokemon4IsShiny={pokemon4IsShiny}
        pokemon4IsFemale={pokemon4IsFemale}
        pokemon4Move1={pokemon4Move1}
        pokemon4Move2={pokemon4Move2}
        pokemon4Move3={pokemon4Move3}
        pokemon4Move4={pokemon4Move4}
        pokemon4Ability={pokemon4Ability}
        setPokemon4Move1={setPokemon4Move1}
        setPokemon4Move2={setPokemon4Move2}
        setPokemon4Move3={setPokemon4Move3}
        setPokemon4Move4={setPokemon4Move4}
        setPokemon4Ability={setPokemon4Ability}
        pokemon5Data={pokemon5Data}
        pokemon5IsShiny={pokemon5IsShiny}
        pokemon5IsFemale={pokemon5IsFemale}
        pokemon5Move1={pokemon5Move1}
        pokemon5Move2={pokemon5Move2}
        pokemon5Move3={pokemon5Move3}
        pokemon5Move4={pokemon5Move4}
        pokemon5Ability={pokemon5Ability}
        setPokemon5Move1={setPokemon5Move1}
        setPokemon5Move2={setPokemon5Move2}
        setPokemon5Move3={setPokemon5Move3}
        setPokemon5Move4={setPokemon5Move4}
        setPokemon5Ability={setPokemon5Ability}
        pokemon6Data={pokemon6Data}
        pokemon6IsShiny={pokemon6IsShiny}
        pokemon6IsFemale={pokemon6IsFemale}
        pokemon6Move1={pokemon6Move1}
        pokemon6Move2={pokemon6Move2}
        pokemon6Move3={pokemon6Move3}
        pokemon6Move4={pokemon6Move4}
        pokemon6Ability={pokemon6Ability}
        setPokemon6Move1={setPokemon6Move1}
        setPokemon6Move2={setPokemon6Move2}
        setPokemon6Move3={setPokemon6Move3}
        setPokemon6Move4={setPokemon6Move4}
        setPokemon6Ability={setPokemon6Ability}
        setSlotToFill={setSlotToFill}
        setShowSelectablePokemon={setShowSelectablePokemon}
      />
    </div>
  );
};

export default NewTeamPage;
