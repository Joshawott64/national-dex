import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageBanner from "../components/pokemon_page/ImageBanner.jsx";
import Sprites from "../components/pokemon_page/Sprites.jsx";
import EntryMenu from "../components/pokemon_page/EntryMenu.jsx";
import FormSelection from "../components/pokemon_page/FormSelection.jsx";
import StatsTable from "../components/pokemon_page/StatsTable.jsx";
import MoveList from "../components/pokemon_page/MoveList.jsx";
import Abilities from "../components/pokemon_page/Abilities.jsx";
import { IoMdVolumeHigh, IoMdMale, IoMdFemale } from "react-icons/io";

const PokemonPage = () => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary

  const { id } = useParams();

  // state values
  const [pokemonData, setPokemonData] = useState("");
  const [movesetData, setMovesetData] = useState([]);
  const [ability1Data, setAbility1Data] = useState(null);
  const [ability2Data, setAbility2Data] = useState(null);
  const [ability3Data, setAbility3Data] = useState(null);
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
  const [legacyCry, setLegacyCry] = useState("");
  const [latestCry, setLatestCry] = useState("");
  const [showFemaleSprite, setShowFemaleSprite] = useState(false);

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
      setLegacyCry(res.data.pokemons[0].legacyCry);
      setLatestCry(res.data.pokemons[0].latestCry);
      setMovesetData(res.data.pokemons[0].movesets);
      setAbility1Data(res.data.pokemons[0].ability1);
      setAbility2Data(res.data.pokemons[0].ability2 ?? null);
      setAbility3Data(res.data.pokemons[0].ability3 ?? null);
    });

    axios.get(`/api/pokemon/entries/${id}`).then((res) => {
      // console.log("res.data:", res.data);
      setCurrentVersion(res.data[res.data.length - 1].version.name);
      setDexEntries(res.data);
      setCurrentDexEntry(res.data[res.data.length - 1].dexEntry);
    });
    // reset to false when using the image banner button
    setShowFemaleSprite(false);
  }, [id]);

  // handler functions
  const handleCryAudio = (time) => {
    switch (time) {
      case "legacy":
        new Audio(legacyCry).play();
        break;
      case "latest":
        new Audio(latestCry).play();
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col justify-start place-items-center gap-y-2 w-full h-full px-10">
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
      <div className="flex justify-center place-items-center gap-x-1 w-36 text-xs text-text-light">
        <div
          className={`flex justify-center place-items-center bg-${pokemonType1}-primary w-16 rounded-full drop-shadow-lg`}
        >
          <p className="drop-shadow-lg">{pokemonType1.toUpperCase()}</p>
        </div>
        {pokemonType2 !== null && (
          <div
            className={`flex justify-center place-items-center bg-${pokemonType2}-primary w-16 rounded-full drop-shadow-lg`}
          >
            <p className="drop-shadow-lg">{pokemonType2.toUpperCase()}</p>
          </div>
        )}
      </div>
      {typeof pokemonData === "object" && (
        <FormSelection
          pokemonData={pokemonData}
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
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
          setLegacyCry={setLegacyCry}
          setLatestCry={setLatestCry}
          setMovesetData={setMovesetData}
          setAbility1Data={setAbility1Data}
          setAbility2Data={setAbility2Data}
          setAbility3Data={setAbility3Data}
          setShowFemaleSprite={setShowFemaleSprite}
        />
      )}
      {pokemonData.hasGenderDifferences && giphFemale !== null && (
        <div className="flex flex-row justify-center place-items-center w-24 text-text-light rounded-lg drop-shadow-lg">
          <div
            className="flex justify-center place-items-center w-full bg-blue-600 p-1 rounded-l-lg drop-shadow-lg"
            onClick={() => setShowFemaleSprite(false)}
          >
            <IoMdMale />
          </div>
          <div
            className="flex justify-center place-items-center w-full bg-red-600 p-1 rounded-r-lg drop-shadow-lg"
            onClick={() => setShowFemaleSprite(true)}
          >
            <IoMdFemale />
          </div>
        </div>
      )}
      <Sprites
        giph={giph}
        giphShiny={giphShiny}
        giphFemale={giphFemale}
        giphFemaleShiny={giphFemaleShiny}
        showFemaleSprite={showFemaleSprite}
      />
      <div className="flex justify-center place-items-center gap-x-4">
        {legacyCry !== null && (
          <div
            onClick={() => handleCryAudio("legacy")}
            className="flex justify-center place-items-center gap-x-2 w-24 text-text-dark bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg"
          >
            <p className="drop-shadow-lg">Legacy</p>
            <IoMdVolumeHigh className="drop-shadow-lg" />
          </div>
        )}
        <div
          onClick={() => handleCryAudio("latest")}
          className="flex justify-center place-items-center gap-x-2 w-24 text-text-dark bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg"
        >
          <p className="drop-shadow-lg">Latest</p>
          <IoMdVolumeHigh className="drop-shadow-lg" />
        </div>
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
      <StatsTable
        baseHp={baseHp}
        baseAttack={baseAttack}
        baseDefense={baseDefense}
        baseSpecialAttack={baseSpecialAttack}
        baseSpecialDefense={baseSpecialDefense}
        baseSpeed={baseSpeed}
      />
      <Abilities
        ability1Data={ability1Data}
        ability2Data={ability2Data}
        ability3Data={ability3Data}
      />
      <MoveList movesetData={movesetData} currentVersion={currentVersion} />
    </div>
  );
};

export default PokemonPage;
