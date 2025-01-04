import { IoIosBackspace } from "react-icons/io";

const MovePopup = ({ setShowMovePopup, moveToDisplay }) => {
  // console.log("moveToDisplay:", moveToDisplay);

  return (
    <>
      <div className="fixed flex flex-col justify-start place-items-center w-full h-full pt-2 z-50 bg-black bg-opacity-60 animate-slideIn">
        <div className="flex flex-col gap-y-4 w-96 bg-white rounded-lg drop-shadow-lg">
          <div className="flex gap-x-6 bg-accent-gray-light p-2 rounded-t-lg drop-shadow-lg">
            <IoIosBackspace
              onClick={() => setShowMovePopup(false)}
              className="text-2xl lg:text-3xl cursor-pointer hover:text-accent-gray-dark transition-colors duration-300"
            />
            <div className="flex justify-start place-items-center gap-x-2">
              <div
                className={`flex justify-center place-items-center bg-${moveToDisplay.type}-primary w-20 text-text-light rounded-full drop-shadow-lg`}
              >
                <p className="drop-shadow-lg">
                  {moveToDisplay.type.toUpperCase()}
                </p>
              </div>
              <p className="font-semibold drop-shadow-lg">-</p>
              <p className="font-semibold drop-shadow-lg">
                {moveToDisplay.name}
              </p>
            </div>
            <p className="text-center drop-shadow-lg">
              {moveToDisplay.damageClass}
            </p>
          </div>
          <div className="p-2">
            <p className="drop-shadow-lg">{moveToDisplay.flavorText}</p>
          </div>

          <div className="flex justify-center w-full p-2 text-sm lg:text-base">
            <div className="flex-1 flex flex-col gap-y-1 w-1/2">
              <p className="drop-shadow-lg">PP: {moveToDisplay.pp}</p>
              <p className="drop-shadow-lg">
                Accuracy: {moveToDisplay.accuracy}%
              </p>
              <p className="drop-shadow-lg">
                Power: {moveToDisplay.power ?? "N/A"}
              </p>
              <p className="drop-shadow-lg">
                Crit Rate: {moveToDisplay.critRate}%
              </p>
              <p className="drop-shadow-lg">Drain: {moveToDisplay.drain}</p>
              <p className="drop-shadow-lg">
                Flinch Chance: {moveToDisplay.flinchChance}%
              </p>
              <p className="drop-shadow-lg">
                Min Hits: {moveToDisplay.minHits ?? "N/A"}
              </p>
              <p className="drop-shadow-lg">
                Max Hits: {moveToDisplay.maxHits ?? "N/A"}
              </p>
              <p className="drop-shadow-lg">
                Priority: {moveToDisplay.priority}
              </p>
              <p className="drop-shadow-lg">
                Lvl Learned At: {moveToDisplay.levelLearnedAt}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-y-1 w-1/2">
              <p className="drop-shadow-lg">Target: {moveToDisplay.target}</p>
              <p className="drop-shadow-lg">
                Category: {moveToDisplay.category}
              </p>
              <p className="drop-shadow-lg">Ailment: {moveToDisplay.ailment}</p>
              <p className="drop-shadow-lg">
                Ailment Chance: {moveToDisplay.ailmentChance}%
              </p>
              <p className="drop-shadow-lg">
                EffectChance:{" "}
                {moveToDisplay.effectChance
                  ? `${moveToDisplay.effectChance}%`
                  : "N/A"}
              </p>
              <p className="drop-shadow-lg">Healing: {moveToDisplay.healing}</p>
              <p className="drop-shadow-lg">
                Min Turns: {moveToDisplay.minTurns ?? "N/A"}
              </p>
              <p className="drop-shadow-lg">
                Max Turns: {moveToDisplay.maxTurns ?? "N/A"}
              </p>
              <p className="drop-shadow-lg">
                Stat Chance: {moveToDisplay.statChance}
              </p>
            </div>
          </div>
          <div className="p-2 text-sm lg:text-base">
            <p className="font-semibold drop-shadow-lg">Version Groups:</p>
            <p className="drop-shadow-lg">{moveToDisplay.versionGroups}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovePopup;
