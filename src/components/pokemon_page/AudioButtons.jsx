import { IoMdVolumeHigh } from "react-icons/io";

const AudioButtons = ({ legacyCry, latestCry }) => {
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
    <div className="hidden lg:flex justify-center place-items-center gap-x-4">
      {legacyCry !== null && (
        <div
          onClick={() => handleCryAudio("legacy")}
          //   onClick={playLegacy}
          style={{ cursor: "pointer" }}
          className="flex justify-center place-items-center gap-x-2 w-24 text-text-dark bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer"
        >
          <p className="drop-shadow-lg">Legacy</p>
          <IoMdVolumeHigh className="drop-shadow-lg" />
        </div>
      )}
      {latestCry !== null && (
        <div
          onClick={() => handleCryAudio("latest")}
          //   onClick={playLatest}
          style={{ cursor: "pointer" }}
          className="flex justify-center place-items-center gap-x-2 w-24 text-text-dark bg-accent-gray-light border-2 border-text-dark rounded-lg drop-shadow-lg cursor-pointer"
        >
          <p className="drop-shadow-lg">Latest</p>
          <IoMdVolumeHigh className="drop-shadow-lg" />
        </div>
      )}
    </div>
  );
};

export default AudioButtons;
