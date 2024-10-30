import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageBanner from "../components/pokemon_page/ImageBanner.jsx";
import Sprites from "../components/pokemon_page/Sprites.jsx";

const PokemonPage = () => {
  const { id } = useParams();

  // state values
  const [pokemonData, setPokemonData] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [dexNumber, setDexNumber] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [currentDexEntry, setCurrentDexEntry] = useState("");
  const [giph, setGiph] = useState("");
  const [giphShiny, setGiphShiny] = useState("");
  const [giphFemale, setGiphFemale] = useState("");
  const [giphFemaleShiny, setGiphFemaleShiny] = useState("");

  useEffect(() => {
    axios.get(`/api/pokemon/${id}`).then((res) => {
      console.log("res.data:", res.data);
      setPokemonData(res.data);
      setBannerImage(res.data.pokemons[0].officialArtwork);
      setDexNumber(res.data.dexNumber);
      setPokemonName(res.data.name);
      setGiph(res.data.pokemons[0].giph);
      setGiphShiny(res.data.pokemons[0].giphShiny);
      setGiphFemale(res.data.pokemons[0].giphFemale);
      setGiphFemaleShiny(res.data.pokemons[0].giphFemaleShiny);
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-start place-items-center gap-y-2 h-full px-10">
      <ImageBanner pokemonData={pokemonData} bannerImage={bannerImage} />
      <div>
        <p>
          #{dexNumber} - {pokemonName}
        </p>
      </div>
      <div>
        <p>Types</p>
      </div>
      <div>
        <p>Optional sprite selector</p>
      </div>
      <Sprites
        giph={giph}
        giphShiny={giphShiny}
        giphFemale={giphFemale}
        giphFemaleShiny={giphFemaleShiny}
      />
      <div>
        <p>Dex entry selection</p>
      </div>
      <div>
        <p>Current dex entry</p>
      </div>
      <div>
        <p>Moves List</p>
      </div>
    </div>
  );
};

export default PokemonPage;
