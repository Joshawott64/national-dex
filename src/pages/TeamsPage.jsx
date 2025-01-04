import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";
import TeamCard from "../components/teams_page/TeamCard.jsx";
import ConfirmDelete from "../components/teams_page/ConfirmDelete.jsx";
import { IoIosAddCircle } from "react-icons/io";

const TeamsPage = () => {
  // userId from redux store
  const userId = useSelector((state) => state.userId);

  // invoke useNavigate
  const navigate = useNavigate();

  // destructure prop from Outlet
  const [setShowLogin, setShowDeleteUser] = useOutletContext();

  // state values
  const [teamData, setTeamData] = useState([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [teamToDelete, setTeamToDelete] = useState();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (userId) {
      axios.post("/api/teams", { userId: userId }).then((res) => {
        setTeamData(res.data);
        // console.log("teamData:", res.data);
      });

      axios.get(`/api/users/${userId}`).then((res) => {
        setUsername(res.data.username);
      });
    }
  }, [userId, showConfirmDelete]);

  // map over teamData
  const userTeams = teamData.map((team) => (
    <div key={team.teamId} className="flex flex-col gap-y-1 w-full h-[68px]">
      <p className="font-medium drop-shadow-lg">{team.name}</p>
      <TeamCard
        team={team}
        setShowConfirmDelete={setShowConfirmDelete}
        setTeamToDelete={setTeamToDelete}
      />
    </div>
  ));

  return (
    <>
      {userId && (
        <>
          {showConfirmDelete && (
            <ConfirmDelete
              teamToDelete={teamToDelete}
              setShowConfirmDelete={setShowConfirmDelete}
            />
          )}
          <div className="flex flex-col justify-start place-items-center gap-y-4 w-full h-full px-10 pt-4">
            <p className="text-xl lg:text-2xl font-medium drop-shadow-lg md:hidden lg:block xl:block">
              {username}'s Teams
            </p>
            <div className="md:grid md:grid-cols-2 flex flex-col gap-x-2 gap-y-2 w-full max-h-full py-2 rounded-lg overflow-y-scroll">
              {userTeams}
            </div>
            <div
              onClick={() => navigate("/teams/create")}
              className="group flex justify-start place-items-center gap-x-2 w-full md:w-1/2 min-h-10 h-10 px-2 bg-accent-gray-light rounded-lg drop-shadow-lg cursor-pointer"
            >
              <IoIosAddCircle className="text-xl drop-shadow-lg group-hover:text-accent-gray-dark transition-colors duration-300" />
              <p className="drop-shadow-lg group-hover:text-accent-gray-dark transition-colors duration-300">
                New team
              </p>
            </div>
            <div className="flex justify-end place-items-center w-full pt-4">
              <div
                onClick={() => setShowDeleteUser(true)}
                className="flex justify-center place-items-center bg-red-600 text-sm text-text-light rounded-full drop-shadow-lg cursor-pointer"
              >
                <p className="p-1 px-2 drop-shadow-lg">Delete Account</p>
              </div>
            </div>
          </div>
        </>
      )}
      {!userId && (
        <>
          <div className="flex justify-center place-items-center gap-x-1 w-full h-full">
            <p>Please</p>
            <p
              onClick={() => setShowLogin(true)}
              className="text-primary drop-shadow-lg"
            >
              log in
            </p>
            <p>to access this feature</p>
          </div>
        </>
      )}
    </>
  );
};

export default TeamsPage;
