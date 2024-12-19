import { IoMdCreate } from "react-icons/io";

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
    <div className="flex flex-col justify-center place-items-center gap-y-16 w-full">
      <div className="relative flex justify-start place-items-center h-12 z-30 text-xl text-text-dark">
        <IoMdCreate className="absolute h-7 left-2 z-40 bg-accent-gray-light" />
        <input
          className="flex justify-center place-items-center text-center bg-accent-gray-light border-2 border-accent-gray-light focus:outline-none focus:border-accent-gray-dark transition-colors duratino-300 ease-in-out rounded-lg drop-shadow-lg"
          type="text"
          defaultValue={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="flex justify-start place-items-end px-5 -space-x-2 w-full h-28">
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon1Data.giph ?? ""}
            alt={pokemon1Data.name ?? ""}
            className={`absolute ${
              pokemon1Data.giph
                ? pokemon1Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon1IsFemale && !pokemon1IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon1Data.giphFemale ?? pokemon1Data.giph ?? ""}
            alt={pokemon1Data.name ?? ""}
            className={`absolute ${
              pokemon1Data.giphFemale
                ? pokemon1Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon1IsFemale && !pokemon1IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon1Data.giphShiny ?? ""}
            alt={pokemon1Data.name ?? ""}
            className={`absolute ${
              pokemon1Data.giphShiny
                ? pokemon1Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon1IsFemale && pokemon1IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon1Data.giphFemaleShiny ?? pokemon1Data.giphShiny ?? ""}
            alt={pokemon1Data.name ?? ""}
            className={`absolute ${
              pokemon1Data.giphFemaleShiny
                ? pokemon1Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon1IsFemale && pokemon1IsShiny ? "block" : "hidden"}`}
          />
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon2Data.giph ?? ""}
            alt={pokemon2Data.name ?? ""}
            className={`absolute ${
              pokemon2Data.giph
                ? pokemon2Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon2IsFemale && !pokemon2IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon2Data.giphFemale ?? pokemon2Data.giph ?? ""}
            alt={pokemon2Data.name ?? ""}
            className={`absolute ${
              pokemon2Data.giphFemale
                ? pokemon2Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon2IsFemale && !pokemon2IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon2Data.giphShiny ?? ""}
            alt={pokemon2Data.name ?? ""}
            className={`absolute ${
              pokemon2Data.giphShiny
                ? pokemon2Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon2IsFemale && pokemon2IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon2Data.giphFemaleShiny ?? pokemon2Data.giphShiny ?? ""}
            alt={pokemon2Data.name ?? ""}
            className={`absolute ${
              pokemon2Data.giphFemaleShiny
                ? pokemon2Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon2IsFemale && pokemon2IsShiny ? "block" : "hidden"}`}
          />
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon3Data.giph ?? ""}
            alt={pokemon3Data.name ?? ""}
            className={`absolute ${
              pokemon3Data.giph
                ? pokemon3Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon3IsFemale && !pokemon3IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon3Data.giphFemale ?? pokemon3Data.giph ?? ""}
            alt={pokemon3Data.name ?? ""}
            className={`absolute ${
              pokemon3Data.giphFemale
                ? pokemon3Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon3IsFemale && !pokemon3IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon3Data.giphShiny ?? ""}
            alt={pokemon3Data.name ?? ""}
            className={`absolute ${
              pokemon3Data.giphShiny
                ? pokemon3Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon3IsFemale && pokemon3IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon3Data.giphFemaleShiny ?? pokemon3Data.giphShiny ?? ""}
            alt={pokemon3Data.name ?? ""}
            className={`absolute ${
              pokemon3Data.giphFemaleShiny
                ? pokemon3Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon3IsFemale && pokemon3IsShiny ? "block" : "hidden"}`}
          />
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon4Data.giph ?? ""}
            alt={pokemon4Data.name ?? ""}
            className={`absolute ${
              pokemon4Data.giph
                ? pokemon4Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon4IsFemale && !pokemon4IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon4Data.giphFemale ?? pokemon4Data.giph ?? ""}
            alt={pokemon4Data.name ?? ""}
            className={`absolute ${
              pokemon4Data.giphFemale
                ? pokemon4Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon4IsFemale && !pokemon4IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon4Data.giphShiny ?? ""}
            alt={pokemon4Data.name ?? ""}
            className={`absolute ${
              pokemon4Data.giphShiny
                ? pokemon4Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon4IsFemale && pokemon4IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon4Data.giphFemaleShiny ?? pokemon4Data.giphShiny ?? ""}
            alt={pokemon4Data.name ?? ""}
            className={`absolute ${
              pokemon4Data.giphFemaleShiny
                ? pokemon4Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon4IsFemale && pokemon4IsShiny ? "block" : "hidden"}`}
          />
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon5Data.giph ?? ""}
            alt={pokemon5Data.name ?? ""}
            className={`absolute ${
              pokemon5Data.giph
                ? pokemon5Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon5IsFemale && !pokemon5IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon5Data.giphFemale ?? pokemon5Data.giph ?? ""}
            alt={pokemon5Data.name ?? ""}
            className={`absolute ${
              pokemon5Data.giphFemale
                ? pokemon5Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon5IsFemale && !pokemon5IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon5Data.giphShiny ?? ""}
            alt={pokemon5Data.name ?? ""}
            className={`absolute ${
              pokemon5Data.giphShiny
                ? pokemon5Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon5IsFemale && pokemon5IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon5Data.giphFemaleShiny ?? pokemon5Data.giphShiny ?? ""}
            alt={pokemon5Data.name ?? ""}
            className={`absolute ${
              pokemon5Data.giphFemaleShiny
                ? pokemon5Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon5IsFemale && pokemon5IsShiny ? "block" : "hidden"}`}
          />
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          <img
            src={pokemon6Data.giph ?? ""}
            alt={pokemon6Data.name ?? ""}
            className={`absolute ${
              pokemon6Data.giph
                ? pokemon6Data.giph.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon6IsFemale && !pokemon6IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and not shiny */}
          <img
            src={pokemon6Data.giphFemale ?? pokemon6Data.giph ?? ""}
            alt={pokemon6Data.name ?? ""}
            className={`absolute ${
              pokemon6Data.giphFemale
                ? pokemon6Data.giphFemale.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon6IsFemale && !pokemon6IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is male and shiny */}
          <img
            src={pokemon6Data.giphShiny ?? ""}
            alt={pokemon6Data.name ?? ""}
            className={`absolute ${
              pokemon6Data.giphShiny
                ? pokemon6Data.giphShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${!pokemon6IsFemale && pokemon6IsShiny ? "block" : "hidden"}`}
          />
          {/* pokemon is female and shiny */}
          <img
            src={pokemon6Data.giphFemaleShiny ?? pokemon6Data.giphShiny ?? ""}
            alt={pokemon6Data.name ?? ""}
            className={`absolute ${
              pokemon6Data.giphFemaleShiny
                ? pokemon6Data.giphFemaleShiny.endsWith(".png")
                  ? "w-24"
                  : ""
                : ""
            } ${pokemon6IsFemale && pokemon6IsShiny ? "block" : "hidden"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamPreview;
