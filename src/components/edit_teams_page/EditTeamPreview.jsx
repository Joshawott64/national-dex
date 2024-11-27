import { IoMdCreate, IoMdTrash } from "react-icons/io";

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
            userPokemon1.pokemonId !== null && (
              <img
                src={userPokemon1.pokemon.giph ?? ""}
                alt={userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon1IsFemale &&
            !pokemon1IsShiny &&
            userPokemon1.pokemonId !== null && (
              <img
                src={
                  userPokemon1.pokemon.giphFemale ??
                  userPokemon1.pokemon.giph ??
                  ""
                }
                alt={userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon1IsFemale &&
            pokemon1IsShiny &&
            userPokemon1.pokemonId !== null && (
              <img
                src={userPokemon1.pokemon.giphShiny ?? ""}
                alt={userPokemon1.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon1IsFemale &&
            pokemon1IsShiny &&
            userPokemon1.pokemonId !== null && (
              <img
                src={
                  userPokemon1.pokemon.giphFemaleShiny ??
                  userPokemon1.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon1.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon2IsFemale &&
            !pokemon2IsShiny &&
            userPokemon2.pokemonId !== null && (
              <img
                src={userPokemon2.pokemon.giph ?? ""}
                alt={userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon2IsFemale &&
            !pokemon2IsShiny &&
            userPokemon2.pokemonId !== null && (
              <img
                src={
                  userPokemon2.pokemon.giphFemale ??
                  userPokemon2.pokemon.giph ??
                  ""
                }
                alt={userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon2IsFemale &&
            pokemon2IsShiny &&
            userPokemon2.pokemonId !== null && (
              <img
                src={userPokemon2.pokemon.giphShiny ?? ""}
                alt={userPokemon2.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon2IsFemale &&
            pokemon2IsShiny &&
            userPokemon2.pokemonId !== null && (
              <img
                src={
                  userPokemon2.pokemon.giphFemaleShiny ??
                  userPokemon2.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon2.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon3IsFemale &&
            !pokemon3IsShiny &&
            userPokemon3.pokemonId !== null && (
              <img
                src={userPokemon3.pokemon.giph ?? ""}
                alt={userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon3IsFemale &&
            !pokemon3IsShiny &&
            userPokemon3.pokemonId !== null && (
              <img
                src={
                  userPokemon3.pokemon.giphFemale ??
                  userPokemon3.pokemon.giph ??
                  ""
                }
                alt={userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon3IsFemale &&
            pokemon3IsShiny &&
            userPokemon3.pokemonId !== null && (
              <img
                src={userPokemon3.pokemon.giphShiny ?? ""}
                alt={userPokemon3.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon3IsFemale &&
            pokemon3IsShiny &&
            userPokemon3.pokemonId !== null && (
              <img
                src={
                  userPokemon3.pokemon.giphFemaleShiny ??
                  userPokemon3.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon3.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon4IsFemale &&
            !pokemon4IsShiny &&
            userPokemon4.pokemonId !== null && (
              <img
                src={userPokemon4.pokemon.giph ?? ""}
                alt={userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon4IsFemale &&
            !pokemon4IsShiny &&
            userPokemon4.pokemonId !== null && (
              <img
                src={
                  userPokemon4.pokemon.giphFemale ??
                  userPokemon4.pokemon.giph ??
                  ""
                }
                alt={userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon4IsFemale &&
            pokemon4IsShiny &&
            userPokemon4.pokemonId !== null && (
              <img
                src={userPokemon4.pokemon.giphShiny ?? ""}
                alt={userPokemon4.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon4IsFemale &&
            pokemon4IsShiny &&
            userPokemon4.pokemonId !== null && (
              <img
                src={
                  userPokemon4.pokemon.giphFemaleShiny ??
                  userPokemon4.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon4.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon5IsFemale &&
            !pokemon5IsShiny &&
            userPokemon5.pokemonId !== null && (
              <img
                src={userPokemon5.pokemon.giph ?? ""}
                alt={userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon5IsFemale &&
            !pokemon5IsShiny &&
            userPokemon5.pokemonId !== null && (
              <img
                src={
                  userPokemon5.pokemon.giphFemale ??
                  userPokemon5.pokemon.giph ??
                  ""
                }
                alt={userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon5IsFemale &&
            pokemon5IsShiny &&
            userPokemon5.pokemonId !== null && (
              <img
                src={userPokemon5.pokemon.giphShiny ?? ""}
                alt={userPokemon5.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon5IsFemale &&
            pokemon5IsShiny &&
            userPokemon5.pokemonId !== null && (
              <img
                src={
                  userPokemon5.pokemon.giphFemaleShiny ??
                  userPokemon5.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon5.pokemon.name ?? ""}
              />
            )}
        </div>

        <div className="flex justify-center place-items-end max-w-32">
          {/* pokemon is male and not shiny */}
          {!pokemon6IsFemale &&
            !pokemon6IsShiny &&
            userPokemon6.pokemonId !== null && (
              <img
                src={userPokemon6.pokemon.giph ?? ""}
                alt={userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and not shiny */}
          {pokemon6IsFemale &&
            !pokemon6IsShiny &&
            userPokemon6.pokemonId !== null && (
              <img
                src={
                  userPokemon6.pokemon.giphFemale ??
                  userPokemon6.pokemon.giph ??
                  ""
                }
                alt={userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is male and shiny */}
          {!pokemon6IsFemale &&
            pokemon6IsShiny &&
            userPokemon6.pokemonId !== null && (
              <img
                src={userPokemon6.pokemon.giphShiny ?? ""}
                alt={userPokemon6.pokemon.name ?? ""}
              />
            )}
          {/* pokemon is female and shiny */}
          {pokemon6IsFemale &&
            pokemon6IsShiny &&
            userPokemon6.pokemonId !== null && (
              <img
                src={
                  userPokemon6.pokemon.giphFemaleShiny ??
                  userPokemon6.pokemon.giphShiny ??
                  ""
                }
                alt={userPokemon6.pokemon.name ?? ""}
              />
            )}
        </div>
      </div>
    </div>
  );
};

export default EditTeamPreview;
