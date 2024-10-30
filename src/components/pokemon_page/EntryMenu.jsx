import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const EntryMenu = ({
  currentVersion,
  setCurrentVersion,
  dexEntries,
  setCurrentDexEntry,
}) => {
  const [showEntryOptions, setShowEntryOptions] = useState(false);

  const entryOptions = dexEntries.map((entry) => (
    <div
      key={entry.dexEntryId}
      onClick={() => {
        setCurrentVersion(entry.version.name);
        setCurrentDexEntry(entry.dexEntry);
        setShowEntryOptions(false);
      }}
    >
      <p className="drop-shadow-lg">{entry.version.name}</p>
    </div>
  ));

  return (
    <div className="text-text-light text-sm ">
      <div
        onClick={() => setShowEntryOptions(!showEntryOptions)}
        className="flex justify-center place-items-center min-w-20 max-w-40 gap-x-2 p-2 rounded-lg bg-primary drop-shadow-lg"
      >
        <p className="drop-shadow-lg">{currentVersion}</p>
        <IoMdMenu className="drop-shadow-lg" />
      </div>

      {showEntryOptions && (
        <div className="absolute flex flex-col gap-y-1 h-24 p-2 rounded-lg bg-primary overflow-y-scroll">
          {entryOptions}
        </div>
      )}
    </div>
  );
};

export default EntryMenu;
