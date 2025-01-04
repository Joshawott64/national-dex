import { useNavigate, useNavigationType } from "react-router-dom";
import {
  IoMdCreate,
  IoMdCheckmarkCircleOutline,
  IoMdTrash,
} from "react-icons/io";

const EditTeamPreview = ({
  teamToEditData,
  newTeamName,
  setNewTeamName,
  userPokemon1,
  userPokemon2,
  userPokemon3,
  userPokemon4,
  userPokemon5,
  userPokemon6,
  pokemon1IsShiny,
  pokemon1IsFemale,
  pokemon2IsShiny,
  pokemon2IsFemale,
  pokemon3IsShiny,
  pokemon3IsFemale,
  pokemon4IsShiny,
  pokemon4IsFemale,
  pokemon5IsShiny,
  pokemon5IsFemale,
  pokemon6IsShiny,
  pokemon6IsFemale,
  handleSaveChanges,
}) => {
  // invoke useNavigate
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center place-items-center gap-y-16 w-full">
      <div>
        <div className="relative flex justify-start place-items-center h-12 z-30 text-xl text-text-dark">
          <IoMdCreate className="absolute h-7 left-2 z-40 bg-accent-gray-light" />
          <input
            className="flex justify-center place-items-center xl:w-96 text-center bg-accent-gray-light border-2 border-text-dark focus:outline-none focus:border-accent-gray-dark transition-colors duratino-300 ease-in-out rounded-lg drop-shadow-lg"
            type="text"
            defaultValue={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
          />
        </div>
        <div className="flex justify-center place-items-center gap-x-4 xl:text-lg">
          <div
            onClick={() => navigate("/teams")}
            className="group flex justify-center place-items-center gap-x-1 bg-red-600 p-1 px-2 text-text-light rounded-full drop-shadow-lg cursor-pointer"
          >
            <p className="group-hover:animate-pulse drop-shadow-lg">Discard</p>
            <IoMdTrash className="group-hover:animate-pulse drop-shadow-lg" />
          </div>
          <div
            onClick={handleSaveChanges}
            className="group flex justify-center place-items-center gap-x-1 bg-accent-gray-dark p-1 px-2 text-text-light rounded-full drop-shadow-lg cursor-pointer"
          >
            <p className="group-hover:animate-pulse drop-shadow-lg">Save</p>
            <IoMdCheckmarkCircleOutline className="group-hover:animate-pulse drop-shadow-lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-center place-items-end px-5 -space-x-2 lg:-space-x-0 xl:space-x-4 2xl:space-x-8 3xl:space-x-20 w-full h-28">
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon1.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon1.pokemon.giph ?? ""}
                alt={userPokemon1.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon1.giph
                    ? userPokemon1.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon1IsFemale && !pokemon1IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon1.pokemon.giphFemale ??
                  userPokemon1.pokemon.giph ??
                  ""
                }
                alt={userPokemon1.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon1.pokemon.giphFemale
                    ? userPokemon1.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon1IsFemale && !pokemon1IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon1.pokemon.giphShiny ?? ""}
                alt={userPokemon1.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon1.pokemon.giphShiny
                    ? userPokemon1.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon1IsFemale && pokemon1IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon1.pokemon.giphFemaleShiny ??
                  userPokemon1.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon1.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon1.pokemon.giphFemaleShiny
                    ? userPokemon1.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon1IsFemale && pokemon1IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon2.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon2.pokemon.giph ?? ""}
                alt={userPokemon2.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon2.pokemon.giph
                    ? userPokemon2.pokemon.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon2IsFemale && !pokemon2IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon2.pokemon.giphFemale ??
                  userPokemon2.pokemon.giph ??
                  ""
                }
                alt={userPokemon2.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon2.pokemon.giphFemale
                    ? userPokemon2.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon2IsFemale && !pokemon2IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon2.pokemon.giphShiny ?? ""}
                alt={userPokemon2.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon2.pokemon.giphShiny
                    ? userPokemon2.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon2IsFemale && pokemon2IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon2.pokemon.giphFemaleShiny ??
                  userPokemon2.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon2.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon2.pokemon.giphFemaleShiny
                    ? userPokemon2.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon2IsFemale && pokemon2IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon3.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon3.pokemon.giph ?? ""}
                alt={userPokemon3.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon3.pokemon.giph
                    ? userPokemon3.pokemon.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon3IsFemale && !pokemon3IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon3.pokemon.giphFemale ??
                  userPokemon3.pokemon.giph ??
                  ""
                }
                alt={userPokemon3.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon3.pokemon.giphFemale
                    ? userPokemon3.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon3IsFemale && !pokemon3IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon3.pokemon.giphShiny ?? ""}
                alt={userPokemon3.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon3.pokemon.giphShiny
                    ? userPokemon3.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon3IsFemale && pokemon3IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon3.pokemon.giphFemaleShiny ??
                  userPokemon3.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon3.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon3.pokemon.giphFemaleShiny
                    ? userPokemon3.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon3IsFemale && pokemon3IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon4.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon4.pokemon.giph ?? ""}
                alt={userPokemon4.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon4.pokemon.giph
                    ? userPokemon4.pokemon.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon4IsFemale && !pokemon4IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon4.pokemon.giphFemale ??
                  userPokemon4.pokemon.giph ??
                  ""
                }
                alt={userPokemon4.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon4.pokemon.giphFemale
                    ? userPokemon4.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon4IsFemale && !pokemon4IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon4.pokemon.giphShiny ?? ""}
                alt={userPokemon4.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon4.pokemon.giphShiny
                    ? userPokemon4.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon4IsFemale && pokemon4IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon4.pokemon.giphFemaleShiny ??
                  userPokemon4.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon4.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon4.pokemon.giphFemaleShiny
                    ? userPokemon4.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon4IsFemale && pokemon4IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon5.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon5.pokemon.giph ?? ""}
                alt={userPokemon5.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon5.pokemon.giph
                    ? userPokemon5.pokemon.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon5IsFemale && !pokemon5IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon5.pokemon.giphFemale ??
                  userPokemon5.pokemon.giph ??
                  ""
                }
                alt={userPokemon5.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon5.pokemon.giphFemale
                    ? userPokemon5.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon5IsFemale && !pokemon5IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon5.pokemon.giphShiny ?? ""}
                alt={userPokemon5.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon5.pokemon.giphShiny
                    ? userPokemon5.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon5IsFemale && pokemon5IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon5.pokemon.giphFemaleShiny ??
                  userPokemon5.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon5.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon5.pokemon.giphFemaleShiny
                    ? userPokemon5.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon5IsFemale && pokemon5IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
        <div className="flex-1 flex justify-center place-items-end max-w-32">
          {userPokemon6.pokemonId && (
            <>
              {/* pokemon is male and not shiny */}
              <img
                src={userPokemon6.pokemon.giph ?? ""}
                alt={userPokemon6.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon6.pokemon.giph
                    ? userPokemon6.pokemon.giph.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${
                  !pokemon6IsFemale && !pokemon6IsShiny ? "block" : "hidden"
                }`}
              />
              {/* pokemon is female and not shiny */}
              <img
                src={
                  userPokemon6.pokemon.giphFemale ??
                  userPokemon6.pokemon.giph ??
                  ""
                }
                alt={userPokemon6.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon6.pokemon.giphFemale
                    ? userPokemon6.pokemon.giphFemale.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon6IsFemale && !pokemon6IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is male and shiny */}
              <img
                src={userPokemon6.pokemon.giphShiny ?? ""}
                alt={userPokemon6.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon6.pokemon.giphShiny
                    ? userPokemon6.pokemon.giphShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${!pokemon6IsFemale && pokemon6IsShiny ? "block" : "hidden"}`}
              />
              {/* pokemon is female and shiny */}
              <img
                src={
                  userPokemon6.pokemon.giphFemaleShiny ??
                  userPokemon6.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon6.pokemon.name ?? ""}
                className={`absolute ${
                  userPokemon6.pokemon.giphFemaleShiny
                    ? userPokemon6.pokemon.giphFemaleShiny.endsWith(".png")
                      ? "w-24"
                      : ""
                    : ""
                } ${pokemon6IsFemale && pokemon6IsShiny ? "block" : "hidden"}`}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditTeamPreview;
