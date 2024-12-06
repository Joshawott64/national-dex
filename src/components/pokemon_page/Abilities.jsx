const Abilities = ({ ability1Data, ability2Data, ability3Data }) => {
  // console.log("ability1Data:", ability1Data);
  // console.log("ability2Data:", ability2Data);
  // console.log("ability3Data:", ability3Data);
  return (
    <div className="w-full bg-accent-gray-light rounded-lg">
      <div className="flex justify-center place-items-center bg-primary rounded-t-lg">
        <p className="p-1 text-text-light drop-shadow-lg">Abilities</p>
      </div>
      <div className="flex flex-col gap-y-4 w-full p-2  drop-shadow-lg">
        {ability1Data !== null && (
          <div className="flex flex-col gap-x-1">
            <p className="font-semibold drop-shadow-lg">
              {ability1Data.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <p className="">{ability1Data.shortEffect}</p>
          </div>
        )}
        {ability2Data !== null && (
          <div className="flex flex-col gap-x-1">
            <p className="font-semibold drop-shadow-lg">
              {ability2Data.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
              {ability3Data === null ? " (Hidden)" : ""}
            </p>
            <p className="">{ability2Data.shortEffect}</p>
          </div>
        )}
        {ability3Data !== null && (
          <div className="flex flex-col gap-x-1">
            <p className="font-semibold drop-shadow-lg">
              {ability3Data.name
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}{" "}
              (Hidden)
            </p>
            <p className="">{ability3Data.shortEffect}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Abilities;
