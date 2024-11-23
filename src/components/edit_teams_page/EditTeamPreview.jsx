import { IoMdCreate, IoMdTrash } from "react-icons/io";

const EditTeamPreview = ({
  teamToEditData,
  newTeamName,
  setNewTeamName,
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
}) => {
  return (
    <div className="flex flex-col justify-center place-items-center">
      <div className="relative flex place-items-center h-12 px-10 text-xl text-text-dark">
        <IoMdCreate className="absolute z-30" />
        <input
          className="flex justify-center place-items-center"
          type="text"
          defaultValue={newTeamName}
          onChange={(e) => setNewTeamName(e.target.value)}
        />
      </div>
      <div className="flex justify-start place-items-end px-2 -space-x-2 w-full h-28">
        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon1IsFemale &&
            !pokemon1IsShiny &&
            teamToEditData.userPokemon1.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon1.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon1IsFemale &&
            !pokemon1IsShiny &&
            teamToEditData.userPokemon1.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon1.pokemon.giphFemale ??
                  teamToEditData.userPokemon1.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon1IsFemale &&
            pokemon1IsShiny &&
            teamToEditData.userPokemon1.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon1.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon1IsFemale &&
            pokemon1IsShiny &&
            teamToEditData.userPokemon1.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon1.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon1.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon1.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon2IsFemale &&
            !pokemon2IsShiny &&
            teamToEditData.userPokemon2.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon2.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon2IsFemale &&
            !pokemon2IsShiny &&
            teamToEditData.userPokemon2.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon2.pokemon.giphFemale ??
                  teamToEditData.userPokemon2.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon2IsFemale &&
            pokemon2IsShiny &&
            teamToEditData.userPokemon2.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon2.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon2IsFemale &&
            pokemon2IsShiny &&
            teamToEditData.userPokemon2.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon2.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon2.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon2.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon3IsFemale &&
            !pokemon3IsShiny &&
            teamToEditData.userPokemon3.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon3.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon3IsFemale &&
            !pokemon3IsShiny &&
            teamToEditData.userPokemon3.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon3.pokemon.giphFemale ??
                  teamToEditData.userPokemon3.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon3IsFemale &&
            pokemon3IsShiny &&
            teamToEditData.userPokemon3.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon3.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon3IsFemale &&
            pokemon3IsShiny &&
            teamToEditData.userPokemon3.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon3.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon3.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon3.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon4IsFemale &&
            !pokemon4IsShiny &&
            teamToEditData.userPokemon4.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon4.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon4IsFemale &&
            !pokemon4IsShiny &&
            teamToEditData.userPokemon4.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon4.pokemon.giphFemale ??
                  teamToEditData.userPokemon4.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon4IsFemale &&
            pokemon4IsShiny &&
            teamToEditData.userPokemon4.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon4.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon4IsFemale &&
            pokemon4IsShiny &&
            teamToEditData.userPokemon4.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon4.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon4.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon4.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon5IsFemale &&
            !pokemon5IsShiny &&
            teamToEditData.userPokemon5.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon5.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon5IsFemale &&
            !pokemon5IsShiny &&
            teamToEditData.userPokemon5.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon5.pokemon.giphFemale ??
                  teamToEditData.userPokemon5.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon5IsFemale &&
            pokemon5IsShiny &&
            teamToEditData.userPokemon5.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon5.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon5IsFemale &&
            pokemon5IsShiny &&
            teamToEditData.userPokemon5.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon5.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon5.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon5.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon6IsFemale &&
            !pokemon6IsShiny &&
            teamToEditData.userPokemon6.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon6.pokemon.giph ?? ""}
                alt={teamToEditData.userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon6IsFemale &&
            !pokemon6IsShiny &&
            teamToEditData.userPokemon6.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon6.pokemon.giphFemale ??
                  teamToEditData.userPokemon6.pokemon.giph ??
                  ""
                }
                alt={teamToEditData.userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon6IsFemale &&
            pokemon6IsShiny &&
            teamToEditData.userPokemon6.pokemonId !== null && (
              <img
                src={teamToEditData.userPokemon6.pokemon.giphShiny ?? ""}
                alt={teamToEditData.userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon6IsFemale &&
            pokemon6IsShiny &&
            teamToEditData.userPokemon6.pokemonId !== null && (
              <img
                src={
                  teamToEditData.userPokemon6.pokemon.giphFemaleShiny ??
                  teamToEditData.userPokemon6.pokemon.giphShiny ??
                  ""
                }
                alt={teamToEditData.userPokemon6.pokemon.name ?? ""}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default EditTeamPreview;
