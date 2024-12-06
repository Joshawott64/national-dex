import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditTeamPreview from "../components/edit_teams_page/EditTeamPreview.jsx";
import EditPokemonAndMoves from "../components/edit_teams_page/EditPokemonAndMoves.jsx";
import EditMoveset from "../components/edit_teams_page/EditMoveset.jsx";
import EditAbilitySelection from "../components/edit_teams_page/EditAbilitySelection.jsx";
import EditSelectablePokemon from "../components/edit_teams_page/EditSelectablePokemon.jsx";

const EditTeamPage = () => {
  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // current teamId
  const { id } = useParams();

  // inovoke useNavigate
  const navigate = useNavigate();

  // state values
  const [teamToEditData, setTeamToEditData] = useState();
  const [slotToFill, setSlotToFill] = useState(0);
  const [moveToFill, setMoveToFill] = useState(0);
  const [showMoveset, setShowMoveset] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const [showSelectablePokemon, setShowSelectablePokemon] = useState(false);

  // state values for team/move/ability/pokemon changes
  const [newTeamName, setNewTeamName] = useState();
  const [newMove, setNewMove] = useState();
  const [newAbility, setNewAbility] = useState();
  const [newPokemon, setNewPokemon] = useState();

  // state values for userPokemon
  const [userPokemon1, setUserPokemon1] = useState();
  const [userPokemon2, setUserPokemon2] = useState();
  const [userPokemon3, setUserPokemon3] = useState();
  const [userPokemon4, setUserPokemon4] = useState();
  const [userPokemon5, setUserPokemon5] = useState();
  const [userPokemon6, setUserPokemon6] = useState();

  // state values for team preview sprites
  const [pokemon1IsShiny, setPokemon1IsShiny] = useState(false);
  const [pokemon1IsFemale, setPokemon1IsFemale] = useState(false);
  const [pokemon2IsShiny, setPokemon2IsShiny] = useState(false);
  const [pokemon2IsFemale, setPokemon2IsFemale] = useState(false);
  const [pokemon3IsShiny, setPokemon3IsShiny] = useState(false);
  const [pokemon3IsFemale, setPokemon3IsFemale] = useState(false);
  const [pokemon4IsShiny, setPokemon4IsShiny] = useState(false);
  const [pokemon4IsFemale, setPokemon4IsFemale] = useState(false);
  const [pokemon5IsShiny, setPokemon5IsShiny] = useState(false);
  const [pokemon5IsFemale, setPokemon5IsFemale] = useState(false);
  const [pokemon6IsShiny, setPokemon6IsShiny] = useState(false);
  const [pokemon6IsFemale, setPokemon6IsFemale] = useState(false);

  useEffect(() => {
    axios.get(`/api/pokemon/team/${id}`).then((res) => {
      setTeamToEditData(res.data);
      setNewTeamName(res.data.name);
      setUserPokemon1(res.data.userPokemon1);
      setPokemon1IsShiny(res.data.userPokemon1.isShiny);
      setPokemon1IsFemale(res.data.userPokemon1.isFemale);
      setUserPokemon2(res.data.userPokemon2);
      setPokemon2IsShiny(res.data.userPokemon2.isShiny);
      setPokemon2IsFemale(res.data.userPokemon2.isFemale);
      setUserPokemon3(res.data.userPokemon3);
      setPokemon3IsShiny(res.data.userPokemon3.isShiny);
      setPokemon3IsFemale(res.data.userPokemon3.isFemale);
      setUserPokemon4(res.data.userPokemon4);
      setPokemon4IsShiny(res.data.userPokemon4.isShiny);
      setPokemon4IsFemale(res.data.userPokemon4.isFemale);
      setUserPokemon5(res.data.userPokemon5);
      setPokemon5IsShiny(res.data.userPokemon5.isShiny);
      setPokemon5IsFemale(res.data.userPokemon5.isFemale);
      setUserPokemon6(res.data.userPokemon6);
      setPokemon6IsShiny(res.data.userPokemon6.isShiny);
      setPokemon6IsFemale(res.data.userPokemon6.isFemale);
      console.log("res.data:", res.data);
    });
  }, []);

  // handler functions
  const handleSaveChanges = async () => {
    console.log("teamToEditData:", teamToEditData);

    const bodyObj = {
      userId: userId,
      teamId: teamToEditData.teamId,
      teamName: newTeamName,
      pokemon1: teamToEditData.userPokemon1,
      pokemon2: teamToEditData.userPokemon2,
      pokemon3: teamToEditData.userPokemon3,
      pokemon4: teamToEditData.userPokemon4,
      pokemon5: teamToEditData.userPokemon5,
      pokemon6: teamToEditData.userPokemon6,
    };

    const savedTeam = await axios.put("/api/pokemon/team/edit", bodyObj);

    navigate("/teams");
  };

  return (
    <>
      <EditSelectablePokemon
        teamToEditData={teamToEditData}
        setTeamToEditData={setTeamToEditData}
        setNewPokemon={setNewPokemon}
        showSelectablePokemon={showSelectablePokemon}
        setShowSelectablePokemon={setShowSelectablePokemon}
        slotToFill={slotToFill}
      />
      {showMoveset && (
        <EditMoveset
          teamToEditData={teamToEditData}
          setShowMoveset={setShowMoveset}
          moveToFill={moveToFill}
          slotToFill={slotToFill}
          setNewMove={setNewMove}
        />
      )}
      {showAbilities && (
        <EditAbilitySelection
          teamToEditData={teamToEditData}
          slotToFill={slotToFill}
          setNewAbility={setNewAbility}
          setShowAbilities={setShowAbilities}
        />
      )}
      {teamToEditData && (
        <EditTeamPreview
          teamToEditData={teamToEditData}
          newTeamName={newTeamName}
          setNewTeamName={setNewTeamName}
          userPokemon1={userPokemon1}
          userPokemon2={userPokemon2}
          userPokemon3={userPokemon3}
          userPokemon4={userPokemon4}
          userPokemon5={userPokemon5}
          userPokemon6={userPokemon6}
          pokemon1IsShiny={pokemon1IsShiny}
          pokemon1IsFemale={pokemon1IsFemale}
          pokemon2IsShiny={pokemon2IsShiny}
          pokemon2IsFemale={pokemon2IsFemale}
          pokemon3IsShiny={pokemon3IsShiny}
          pokemon3IsFemale={pokemon3IsFemale}
          pokemon4IsShiny={pokemon4IsShiny}
          pokemon4IsFemale={pokemon4IsFemale}
          pokemon5IsShiny={pokemon5IsShiny}
          pokemon5IsFemale={pokemon5IsFemale}
          pokemon6IsShiny={pokemon6IsShiny}
          pokemon6IsFemale={pokemon6IsFemale}
        />
      )}
      {teamToEditData && (
        <div className="flex flex-col gap-y-3 w-full h-full px-2 overflow-y-scroll">
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon1}
            setUserPokemon={setUserPokemon1}
            pokemonIsShiny={pokemon1IsShiny}
            pokemonIsFemale={pokemon1IsFemale}
            setPokemonIsShiny={setPokemon1IsShiny}
            setPokemonIsFemale={setPokemon1IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={1}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon2}
            setUserPokemon={setUserPokemon2}
            pokemonIsShiny={pokemon2IsShiny}
            pokemonIsFemale={pokemon2IsFemale}
            setPokemonIsShiny={setPokemon2IsShiny}
            setPokemonIsFemale={setPokemon2IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={2}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon3}
            setUserPokemon={setUserPokemon3}
            pokemonIsShiny={pokemon3IsShiny}
            pokemonIsFemale={pokemon3IsFemale}
            setPokemonIsShiny={setPokemon3IsShiny}
            setPokemonIsFemale={setPokemon3IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={3}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon4}
            setUserPokemon={setUserPokemon4}
            pokemonIsShiny={pokemon4IsShiny}
            pokemonIsFemale={pokemon4IsFemale}
            setPokemonIsShiny={setPokemon4IsShiny}
            setPokemonIsFemale={setPokemon4IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={4}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon5}
            setUserPokemon={setUserPokemon5}
            pokemonIsShiny={pokemon5IsShiny}
            pokemonIsFemale={pokemon5IsFemale}
            setPokemonIsShiny={setPokemon5IsShiny}
            setPokemonIsFemale={setPokemon5IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={5}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            setTeamToEditData={setTeamToEditData}
            userPokemon={userPokemon6}
            setUserPokemon={setUserPokemon6}
            pokemonIsShiny={pokemon6IsShiny}
            pokemonIsFemale={pokemon6IsFemale}
            setPokemonIsShiny={setPokemon6IsShiny}
            setPokemonIsFemale={setPokemon6IsFemale}
            moveToFill={moveToFill}
            setMoveToFill={setMoveToFill}
            setShowMoveset={setShowMoveset}
            setShowAbilities={setShowAbilities}
            setShowSelectablePokemon={setShowSelectablePokemon}
            slotToFill={slotToFill}
            setSlotToFill={setSlotToFill}
            slotNum={6}
            newMove={newMove}
            newAbility={newAbility}
            newPokemon={newPokemon}
          />
        </div>
      )}
      <div>
        <p onClick={() => navigate("/teams")}>Discard</p>
        <p onClick={handleSaveChanges}>Save</p>
      </div>
    </>
  );
};

export default EditTeamPage;
