import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageBanner from "../components/pokemon_page/ImageBanner.jsx";
import Sprites from "../components/pokemon_page/Sprites.jsx";
import EntryMenu from "../components/pokemon_page/EntryMenu.jsx";
import FormSelection from "../components/pokemon_page/FormSelection.jsx";

const PokemonPage = () => {
  const { id } = useParams();

  // state values
  const [pokemonData, setPokemonData] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [dexNumber, setDexNumber] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNameSimple, setPokemonNameSimple] = useState("");
  const [pokemonGenus, setPokemonGenus] = useState("");
  const [pokemonType1, setPokemonType1] = useState("");
  const [pokemonType2, setPokemonType2] = useState("");
  const [baseAttack, setBaseAttack] = useState(0);
  const [baseDefense, setBaseDefense] = useState(0);
  const [baseHp, setBaseHp] = useState(0);
  const [baseSpecialAttack, setBaseSpecialAttack] = useState(0);
  const [baseSpecialDefense, setBaseSpecialDefense] = useState(0);
  const [baseSpeed, setBaseSpeed] = useState(0);
  const [giph, setGiph] = useState("");
  const [giphShiny, setGiphShiny] = useState("");
  const [giphFemale, setGiphFemale] = useState("");
  const [giphFemaleShiny, setGiphFemaleShiny] = useState("");
  const [currentVersion, setCurrentVersion] = useState("");
  const [currentDexEntry, setCurrentDexEntry] = useState("");
  const [dexEntries, setDexEntries] = useState([]);

  useEffect(() => {
    axios.get(`/api/pokemon/${id}`).then((res) => {
      console.log("res.data:", res.data);
      setPokemonData(res.data);
      setBannerImage(res.data.pokemons[0].officialArtwork);
      setDexNumber(res.data.dexNumber);
      setPokemonName(res.data.name);
      setPokemonNameSimple(res.data.pokemons[0].name);
      setPokemonGenus(res.data.genus);
      setPokemonType1(res.data.pokemons[0].type1.name);
      res.data.pokemons[0].type2
        ? setPokemonType2(res.data.pokemons[0].type2.name)
        : setPokemonType2(null);
      setBaseAttack(res.data.pokemons[0].baseAttack);
      setBaseDefense(res.data.pokemons[0].baseDefense);
      setBaseHp(res.data.pokemons[0].baseHp);
      setBaseSpecialAttack(res.data.pokemons[0].baseSpecialAttack);
      setBaseSpecialDefense(res.data.pokemons[0].baseSpecialDefense);
      setBaseSpeed(res.data.pokemons[0].baseSpeed);
      setGiph(res.data.pokemons[0].giph);
      setGiphShiny(res.data.pokemons[0].giphShiny);
      setGiphFemale(res.data.pokemons[0].giphFemale);
      setGiphFemaleShiny(res.data.pokemons[0].giphFemaleShiny);
    });

    axios.get(`/api/pokemon/entries/${id}`).then((res) => {
      // console.log("res.data:", res.data);
      setCurrentVersion(res.data[res.data.length - 1].version.name);
      setDexEntries(res.data);
      setCurrentDexEntry(res.data[res.data.length - 1].dexEntry);
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-start place-items-center gap-y-2 h-full px-10">
      <ImageBanner
        pokemonData={pokemonData}
        bannerImage={bannerImage}
        giph={giph}
        giphShiny={giphShiny}
        giphFemale={giphFemale}
        giphFemaleShiny={giphFemaleShiny}
      />
      <div>
        <p className="drop-shadow-lg">
          #{dexNumber} - {pokemonName}
        </p>
      </div>
      <div>
        <p className="drop-shadow-lg">The {pokemonGenus}</p>
      </div>
      <div>
        <p>
          {pokemonType1} {pokemonType2}
        </p>
      </div>
      <div>
        <p>Attack: {baseAttack}</p>
        <p>Defense: {baseDefense}</p>
        <p>Hp: {baseHp}</p>
        <p>SpecialAttack: {baseSpecialAttack}</p>
        <p>SpecialDefense: {baseSpecialDefense}</p>
        <p>Speed: {baseSpeed}</p>
        <p>
          Total:{" "}
          {baseAttack +
            baseDefense +
            baseHp +
            baseSpecialAttack +
            baseSpecialDefense +
            baseSpeed}
        </p>
      </div>
      {typeof pokemonData === "object" && (
        <FormSelection
          pokemonData={pokemonData}
          setBannerImage={setBannerImage}
          setGiph={setGiph}
          setGiphShiny={setGiphShiny}
          setGiphFemale={setGiphFemale}
          setGiphFemaleShiny={setGiphFemaleShiny}
          pokemonNameSimple={pokemonNameSimple}
          setPokemonNameSimple={setPokemonNameSimple}
          setPokemonType1={setPokemonType1}
          setPokemonType2={setPokemonType2}
          setBaseAttack={setBaseAttack}
          setBaseDefense={setBaseDefense}
          setBaseHp={setBaseHp}
          setBaseSpecialAttack={setBaseSpecialAttack}
          setBaseSpecialDefense={setBaseSpecialDefense}
          setBaseSpeed={setBaseSpeed}
        />
      )}
      <Sprites
        giph={giph}
        giphShiny={giphShiny}
        giphFemale={giphFemale}
        giphFemaleShiny={giphFemaleShiny}
      />
      <div>
        <p>Cries</p>
      </div>
      <EntryMenu
        currentVersion={currentVersion}
        setCurrentVersion={setCurrentVersion}
        dexEntries={dexEntries}
        setCurrentDexEntry={setCurrentDexEntry}
      />
      {dexEntries.length > 0 && (
        <div className="p-2">
          <p className="text-center drop-shadow-lg">{currentDexEntry}</p>
        </div>
      )}
      <div>
        <p>Base Stat Table</p>
      </div>
      <div>
        <p>Abilities</p>
      </div>
      <div>
        <p>Moves List</p>
      </div>
    </div>
  );
};

export default PokemonPage;
