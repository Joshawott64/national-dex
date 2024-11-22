import axios from "axios";

const ConfirmDelete = ({ teamToDelete, setShowConfirmDelete }) => {
  // handler functions
  const handleDeletion = async () => {
    const deleteTeam = await axios.delete(
      `/api/pokemon/team/delete/${teamToDelete.teamId}`
    );
    setShowConfirmDelete(false);

    console.log("TEAM DELETED!!!");
  };

  return (
    <div className="absolute flex justify-center place-items-start w-full h-full bg-black bg-opacity-60 z-50 animate-fadeIn">
      <div className="bg-white">
        <div>
          <p>Are you sure you want to delete {teamToDelete.name}?</p>
          <p>This cannot be undone</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <p
            onClick={() => {
              setShowConfirmDelete(false);
            }}
          >
            Cancel
          </p>
          <p onClick={handleDeletion}>Confirm</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
