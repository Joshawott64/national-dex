import axios from "axios";
import { IoIosWarning } from "react-icons/io";

const ConfirmDelete = ({ teamToDelete, setShowConfirmDelete }) => {
  // handler functions
  const handleDeletion = async () => {
    const deleteTeam = await axios.delete(
      `/api/pokemon/team/delete/${teamToDelete.teamId}`
    );
    setShowConfirmDelete(false);
  };

  return (
    <>
      <div className="fixed flex flex-col justify-start place-items-center w-full h-full px-10 pt-36 z-50 bg-black bg-opacity-60 animate-fadeIn">
        <div className="flex flex-col place-items-center gap-y-4 w-80 sm:w-96 h-fit p-2 pb-4 bg-white rounded-lg drop-shadow-lg">
          <div className="flex flex-col justify-center place-items-center w-full text-center">
            <div className="flex flex-col">
              <p className="drop-shadow-lg">Are you sure you want to delete</p>
              <p className="font-semibold drop-shadow-lg">
                {teamToDelete.name}?
              </p>
            </div>
            <p className="flex justify-center place-items-center gap-x-2 text-warning drop-shadow-lg">
              <IoIosWarning className="text-lg" />
              This action cannot be undone
              <IoIosWarning className="text-lg" />
            </p>
          </div>
          <div className="flex flex-row gap-x-6 text-text-light">
            <div className="flex justify-center place-items-center w-20 bg-accent-gray-dark rounded-full drop-shadow-lg">
              <p
                onClick={() => {
                  setShowConfirmDelete(false);
                }}
                className="p-1 drop-shadow-lg"
              >
                Cancel
              </p>
            </div>
            <div className="flex justify-center place-items-center w-20 bg-red-600 rounded-full drop-shadow-lg">
              <p onClick={handleDeletion} className="p-1 drop-shadow-lg">
                Confirm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmDelete;
