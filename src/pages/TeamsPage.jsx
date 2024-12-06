import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TeamCard from "../components/teams_page/TeamCard.jsx";
import ConfirmDelete from "../components/teams_page/ConfirmDelete.jsx";
import { IoIosAddCircle } from "react-icons/io";

const TeamsPage = () => {
  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // invoke useNavigate
  const navigate = useNavigate();

  // state values
  const [teamData, setTeamData] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState();

  useEffect(() => {
    axios.post("/api/teams", { userId: userId }).then((res) => {
      setTeamData(res.data);
      // console.log("teamData:", res.data);
    });
  }, [userId, showConfirmDelete]);

  const userTeams = teamData.map((team) => (
    <div key={team.teamId}>
      <p>{team.name}</p>
      <TeamCard
        team={team}
        setShowConfirmDelete={setShowConfirmDelete}
        setTeamToDelete={setTeamToDelete}
      />
    </div>
  ));

  return (
    <>
      {showConfirmDelete && (
        <ConfirmDelete
          teamToDelete={teamToDelete}
          setShowConfirmDelete={setShowConfirmDelete}
        />
      )}
      <div className="flex flex-col gap-y-4 w-full h-full px-10">
        <p>Your teams</p>
        <div className="max-h-full overflow-y-scroll">{userTeams}</div>
        <div
          onClick={() => navigate("/teams/create")}
          className="flex justify-start place-items-center gap-x-2 h-10 px-2 bg-accent-gray-light rounded-lg drop-shadow-lg"
        >
          <IoIosAddCircle className="text-xl drop-shadow-lg" />
          <p className="drop-shadow-lg">New team</p>
        </div>
      </div>
    </>
  );
};

export default TeamsPage;
