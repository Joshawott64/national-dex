import { IoMdCreate, IoMdTrash } from "react-icons/io";

const TeamPreview = ({
  teamName,
  setTeamName,
  pokemon1Data,
  pokemon1IsFemale,
  pokemon1IsShiny,
  pokemon2Data,
  pokemon2IsFemale,
  pokemon2IsShiny,
  pokemon3Data,
  pokemon3IsFemale,
  pokemon3IsShiny,
  pokemon4Data,
  pokemon4IsFemale,
  pokemon4IsShiny,
  pokemon5Data,
  pokemon5IsFemale,
  pokemon5IsShiny,
  pokemon6Data,
  pokemon6IsFemale,
  pokemon6IsShiny,
}) => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <div className="relative flex place-items-center h-12 px-10 text-xl text-text-dark">
        <IoMdCreate className="absolute z-30" />
        <input
          className="flex justify-center place-items-center"
          type="text"
          defaultValue={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="flex justify-start place-items-end px-2 -space-x-2 w-full h-28">
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon1Data.giph ?? ""} alt={pokemon1Data.name ?? ""} />
        </div>
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon2Data.giph ?? ""} alt={pokemon2Data.name ?? ""} />
        </div>
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon3Data.giph ?? ""} alt={pokemon3Data.name ?? ""} />
        </div>
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon4Data.giph ?? ""} alt={pokemon4Data.name ?? ""} />
        </div>
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon5Data.giph ?? ""} alt={pokemon5Data.name ?? ""} />
        </div>
        <div className="flex justify-center place-items-end max-w-32">
          <img src={pokemon6Data.giph ?? ""} alt={pokemon6Data.name ?? ""} />
        </div>
      </div>
    </div>
  );
};

export default TeamPreview;
