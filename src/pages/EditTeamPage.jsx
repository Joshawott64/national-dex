import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditTeamPreview from "../components/edit_teams_page/EditTeamPreview.jsx";
import EditPokemonAndMoves from "../components/edit_teams_page/EditPokemonAndMoves.jsx";

const EditTeamPage = () => {
  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // current teamId
  const { id } = useParams();

  // inovoke useNavigate
  const navigate = useNavigate();

  // state values
  const [teamToEditData, setTeamToEditData] = useState();
  const [newTeamName, setNewTeamName] = useState();

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
      setPokemon1IsShiny(res.data.userPokemon1.isShiny);
      setPokemon1IsFemale(res.data.userPokemon1.isFemale);
      setPokemon2IsShiny(res.data.userPokemon2.isShiny);
      setPokemon2IsFemale(res.data.userPokemon2.isFemale);
      setPokemon3IsShiny(res.data.userPokemon3.isShiny);
      setPokemon3IsFemale(res.data.userPokemon3.isFemale);
      setPokemon4IsShiny(res.data.userPokemon4.isShiny);
      setPokemon4IsFemale(res.data.userPokemon4.isFemale);
      setPokemon5IsShiny(res.data.userPokemon5.isShiny);
      setPokemon5IsFemale(res.data.userPokemon5.isFemale);
      setPokemon6IsShiny(res.data.userPokemon6.isShiny);
      setPokemon6IsFemale(res.data.userPokemon6.isFemale);
      console.log("res.data:", res.data);
    });
  }, []);

  return (
    <>
      <p>Edit Page</p>
      {teamToEditData && (
        <EditTeamPreview
          teamToEditData={teamToEditData}
          newTeamName={newTeamName}
          setNewTeamName={setNewTeamName}
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
            userPokemon={teamToEditData.userPokemon1}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon1IsShiny}
            pokemonIsFemale={pokemon1IsFemale}
            setPokemonIsShiny={setPokemon1IsShiny}
            setPokemonIsFemale={setPokemon1IsFemale}
            slotToFill={1}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            userPokemon={teamToEditData.userPokemon2}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon2IsShiny}
            pokemonIsFemale={pokemon2IsFemale}
            setPokemonIsShiny={setPokemon2IsShiny}
            setPokemonIsFemale={setPokemon2IsFemale}
            slotToFill={2}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            userPokemon={teamToEditData.userPokemon3}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon3IsShiny}
            pokemonIsFemale={pokemon3IsFemale}
            setPokemonIsShiny={setPokemon3IsShiny}
            setPokemonIsFemale={setPokemon3IsFemale}
            slotToFill={3}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            userPokemon={teamToEditData.userPokemon4}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon4IsShiny}
            pokemonIsFemale={pokemon4IsFemale}
            setPokemonIsShiny={setPokemon4IsShiny}
            setPokemonIsFemale={setPokemon4IsFemale}
            slotToFill={4}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            userPokemon={teamToEditData.userPokemon5}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon5IsShiny}
            pokemonIsFemale={pokemon5IsFemale}
            setPokemonIsShiny={setPokemon5IsShiny}
            setPokemonIsFemale={setPokemon5IsFemale}
            slotToFill={5}
          />
          <EditPokemonAndMoves
            teamToEditData={teamToEditData}
            userPokemon={teamToEditData.userPokemon6}
            setTeamToEditData={setTeamToEditData}
            pokemonIsShiny={pokemon6IsShiny}
            pokemonIsFemale={pokemon6IsFemale}
            setPokemonIsShiny={setPokemon6IsShiny}
            setPokemonIsFemale={setPokemon6IsFemale}
            slotToFill={6}
          />
        </div>
      )}
    </>
  );
};

export default EditTeamPage;
