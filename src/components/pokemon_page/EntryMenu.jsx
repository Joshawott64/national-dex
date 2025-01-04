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
      className="px-2 py-0.5 cursor-pointer hover:bg-primary-darkened transition-colors duration-200"
    >
      <p className="drop-shadow-lg">{entry.version.name}</p>
    </div>
  ));

  return (
    <div className="text-text-light text-sm md:text-base">
      <div
        onClick={() => setShowEntryOptions(!showEntryOptions)}
        className="flex justify-center place-items-center min-w-20 max-w-40 gap-x-2 p-2 rounded-lg bg-primary drop-shadow-lg cursor-pointer hover:bg-primary-darkened duration-300"
      >
        <p className="drop-shadow-lg">{currentVersion}</p>
        <IoMdMenu className="drop-shadow-lg" />
      </div>

      {showEntryOptions && (
        <div className="absolute flex flex-col gap-y-1 min-w-16 max-h-24 z-50 rounded-lg bg-primary overflow-y-scroll">
          {entryOptions}
        </div>
      )}
    </div>
  );
};

export default EntryMenu;
