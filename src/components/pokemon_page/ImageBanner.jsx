import { useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageBanner = ({ pokemonData, bannerImage }) => {
  // invoke useNavigate
  const navigate = useNavigate();
  return (
    <>
      {typeof pokemonData === "object" && (
        <div className="flex justify-center place-items-center w-full md:w-5/6 lg:w-3/4 2xl:w-2/3 bg-accent-gray-light rounded-xl drop-shadow-lg">
          <button
            onClick={() => navigate(`/pokemon/${pokemonData.speciesId - 1}`)}
            disabled={pokemonData.speciesId === 1}
            className="flex justify-center place-items-center h-full px-1 bg-primary text-text-light text-2xl md:text-3xl rounded-l-xl disabled:bg-accent-gray-dark"
          >
            <IoIosArrowBack className="drop-shadow-lg" />
          </button>
          <div className="w-full"></div>
          <img
            src={bannerImage}
            alt={pokemonData.name}
            className="w-32 md:w-40 lg:w-48"
          />
          <div className="w-full"></div>
          <button
            onClick={() => navigate(`/pokemon/${pokemonData.speciesId + 1}`)}
            disabled={pokemonData.speciesId === 1025}
            className="flex justify-center place-items-center h-full px-1 bg-primary text-text-light text-2xl md:text-3xl rounded-r-xl disabled:bg-accent-gray-dark"
          >
            <IoIosArrowForward className="drop-shadow-lg" />
          </button>
        </div>
      )}
    </>
  );
};

export default ImageBanner;
