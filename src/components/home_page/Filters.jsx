import { useState, useEffect } from "react";
import { IoMdTrash, IoIosArrowDown } from "react-icons/io";
import axios from "axios";

const Filters = ({
  useFilters,
  typeFilters,
  generationFilters,
  legendaryFilter,
  mythicalFilter,
  setUseFilters,
  setTypeFilters,
  setGenerationFilters,
  setLegendaryFilter,
  setMythicalFilter,
}) => {
  // bg-bug-primary bg-dark-primary bg-dragon-primary bg-electric-primary bg-fairy-primary bg-fighting-primary bg-fire-primary bg-ghost-primary bg-grass-primary bg-ground-primary bg-ice-primary bg-normal-primary bg-poison-primary bg-flying-primary bg-psychic-primary bg-rock-primary bg-steel-primary bg-water-primary
  // border-bug-primary border-dark-primary border-dragon-primary border-electric-primary border-fairy-primary border-fighting-primary border-fire-primary border-ghost-primary border-grass-primary border-ground-primary border-ice-primary border-normal-primary border-poison-primary border-flying-primary border-psychic-primary border-rock-primary border-steel-primary border-water-primary

  // state values
  const [typeData, setTypeData] = useState([]);
  const [generationData, setGenerationData] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    axios.get("/api/types").then((res) => {
      setTypeData(res.data);
    });

    axios.get("/api/generations").then((res) => {
      setGenerationData(res.data);
    });
  }, []);

  // handler functions
  const handleClearFilters = () => {
    setUseFilters(false);
    setTypeFilters([]);
    setGenerationFilters([]);
    setLegendaryFilter(false);
    setMythicalFilter(false);
  };

  const handleTypeFilter = async (typeId) => {
    // check if typeId is already in typeFilters
    if (typeFilters.includes(typeId)) {
      setTypeFilters(
        typeFilters.filter((el) => {
          return el !== typeId;
        })
      );
    } else {
      setTypeFilters([...typeFilters, typeId]);
    }
  };

  const handleGenerationFilter = async (generationId) => {
    // check if generationId is already in generationFilters
    if (generationFilters.includes(generationId)) {
      setGenerationFilters(
        generationFilters.filter((el) => {
          return el !== generationId;
        })
      );
    } else {
      setGenerationFilters([...generationFilters, generationId]);
    }
  };

  // map over typeData
  const typeList = typeData.map((type) => (
    <div
      onClick={() => handleTypeFilter(type.typeId)}
      key={type.typeId}
      className={`flex justify-center place-items-center w-20 border-2 border-text-light rounded-full drop-shadow-lg transition-colors duration-100 ease-in-out ${
        typeFilters.includes(type.typeId)
          ? `bg-${type.name}-primary`
          : "bg-transparent"
      }`}
    >
      <p className="drop-shadow-lg">{type.name.toUpperCase()}</p>
    </div>
  ));

  // map over generationData
  const generationList = generationData.map((generation) => (
    <div
      onClick={() => handleGenerationFilter(generation.generationId)}
      key={generation.generationId}
      className={`flex justify-center place-items-center gap-x-2 w-20 border-2 border-text-light rounded-full drop-shadow-lg transition-colors duration-100 ease-in-out ${
        generationFilters.includes(generation.generationId)
          ? "bg-accent-gray-dark"
          : "bg-transparent"
      }`}
    >
      <p className="drop-shadow-lg">
        {generation.genName.replace(/^[A-z]+\-/g, "").toUpperCase()}
      </p>
      <p className="drop-shadow-lg">
        {generation.regionName.charAt(0).toUpperCase() +
          generation.regionName.slice(1)}
      </p>
    </div>
  ));
  return (
    <div
      className={`absolute flex justify-end w-full z-30 transition-transform duration-300 ease-in-out ${
        showFilters ? "translate-y-0 drop-shadow-lg" : "-translate-y-[464px]"
      }`}
    >
      <div className="flex flex-col justify-center text-text-light">
        <div
          className={`flex flex-col justify-start place-items-center gap-y-2 w-72 h-[464px] p-2 bg-primary rounded-bl-lg ${
            showFilters ? "drop-shadow-lg" : ""
          }`}
        >
          <div className="flex-1 flex flex-col justify-center place-items-center gap-y-2 w-full">
            <p className="drop-shadow-lg">Types</p>
            <div className="w-full grid grid-cols-3 place-items-center gap-y-2 gap-x-2 text-sm text-center">
              {typeList}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center place-items-center gap-y-2 w-full">
            <p className="drop-shadow-lg">Generations</p>
            <div className="w-full grid grid-cols-3 place-items-center gap-y-2 gap-x-2 text-sm text-center">
              {generationList}
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center place-items-center gap-y-2 w-full">
            <p className="drop-shadow-lg">Other</p>
            <div className="flex gap-x-4 text-sm text-center">
              <div
                onClick={() => setLegendaryFilter(!legendaryFilter)}
                className={`flex justify-center place-items-center w-20 border-2 border-text-light rounded-full drop-shadow-lg transition-colors duration-100 ease-in-out ${
                  legendaryFilter ? `bg-accent-gray-dark` : "bg-transparent"
                }`}
              >
                <p className="drop-shadow-lg">Legendary</p>
              </div>
              <div
                onClick={() => setMythicalFilter(!mythicalFilter)}
                className={`flex justify-center place-items-center w-20 border-2 border-text-light rounded-full drop-shadow-lg transition-colors duration-100 ease-in-out ${
                  mythicalFilter ? `bg-accent-gray-dark` : "bg-transparent"
                }`}
              >
                <p className="drop-shadow-lg">Mythical</p>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClearFilters()}
            className="flex-1 flex justify-center place-items-center w-full"
          >
            <div className="flex justify-center place-items-center gap-x-1 w-20 border-2 border-text-light rounded-full drop-shadow-lg">
              <p className="drop-shadow-lg">Clear</p>
              <IoMdTrash className="drop-shadow-lg" />
            </div>
          </div>
        </div>
        <div className="flex justify-end w-full">
          <div
            onClick={() => setShowFilters(!showFilters)}
            className="flex justify-center place-items-center gap-x-1 px-2 py-1 w-fit text-sm text-center bg-primary rounded-b-lg drop-shadow-lg"
          >
            <p className="drop-shadow-lg">Filters</p>
            <IoIosArrowDown
              className={`drop-shadow-lg transition-transform duration-300 ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
