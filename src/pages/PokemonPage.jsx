import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ImageBanner from "../components/pokemon_page/ImageBanner";

const PokemonPage = () => {
  const { id } = useParams();

  // state values
  const [pokemonData, setPokemonData] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [dexNumber, setDexNumber] = useState();
  const [dexEntry, setDexEntry] = useState("");

  useEffect(() => {
    axios.get(`/api/pokemon/${id}`).then((res) => {
      console.log("res.data:", res.data);
      setPokemonData(res.data);
    });
  }, [id]);

  return (
    <div className="flex flex-col justify-start place-items-center gap-y-2 h-full px-10">
      <ImageBanner pokemonData={pokemonData} />
      <div>
        <p>Dex no. - Pokemon Name</p>
      </div>
      <div>
        <p>Types</p>
      </div>
      <div>
        <p>Optional sprite selector</p>
      </div>
      <div>
        <p>Sprites</p>
      </div>
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
