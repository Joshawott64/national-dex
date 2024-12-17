const StatsTable = ({
  baseHp,
  baseAttack,
  baseDefense,
  baseSpecialAttack,
  baseSpecialDefense,
  baseSpeed,
}) => {
  return (
    <div className="w-full h-fit bg-accent-gray-light rounded-lg drop-shadow-lg">
      <div className="flex justify-center place-items-center bg-primary rounded-t-lg drop-shadow-lg">
        <p className="p-1 text-text-light drop-shadow-lg">Base Stats</p>
      </div>
      <div className="flex flex-col gap-y-1 w-full p-2 font-semibold">
        <div className="flex place-items-center w-full">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Hp:</p>
            <p className="flex-1 text-center drop-shadow-lg">{baseHp}</p>
          </div>
          <span
            style={{ width: baseHp, maxWidth: 190 }}
            className={`bg-lime-600 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseHp * 0.75, maxWidth: 130 }}
            className={`bg-lime-600 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseHp, maxWidth: "100%" }}
            className={`bg-lime-600 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Attack:</p>
            <p className="flex-1 text-center drop-shadow-lg">{baseAttack}</p>
          </div>
          <span
            style={{ width: baseAttack, maxWidth: 190 }}
            className={`bg-yellow-400 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseAttack * 0.75, maxWidth: 130 }}
            className={`bg-yellow-400 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseAttack, maxWidth: "100%" }}
            className={`bg-yellow-400 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Defense:</p>
            <p className="flex-1 text-center drop-shadow-lg">{baseDefense}</p>
          </div>
          <span
            style={{ width: baseDefense, maxWidth: 190 }}
            className={`bg-orange-600 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseDefense * 0.75, maxWidth: 130 }}
            className={`bg-orange-600 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseDefense, maxWidth: "100%" }}
            className={`bg-orange-600 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Sp. Atk:</p>
            <p className="flex-1 text-center drop-shadow-lg">
              {baseSpecialAttack}
            </p>
          </div>
          <span
            style={{ width: baseSpecialAttack, maxWidth: 190 }}
            className={`bg-cyan-600 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseSpecialAttack * 0.75, maxWidth: 130 }}
            className={`bg-cyan-600 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseSpecialAttack, maxWidth: "100%" }}
            className={`bg-cyan-600 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Sp. Def:</p>
            <p className="flex-1 text-center drop-shadow-lg">
              {baseSpecialDefense}
            </p>
          </div>
          <span
            style={{ width: baseSpecialDefense, maxWidth: 190 }}
            className={`bg-blue-900 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseSpecialDefense * 0.75, maxWidth: 130 }}
            className={`bg-blue-900 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseSpecialDefense, maxWidth: "100%" }}
            className={`bg-blue-900 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Speed:</p>
            <p className="flex-1 text-center drop-shadow-lg">{baseSpeed}</p>
          </div>
          <span
            style={{ width: baseSpeed, maxWidth: 190 }}
            className={`bg-purple-600 h-2 rounded-r-lg drop-shadow-lg sm:hidden lg:block xl:hidden`}
          />
          <span
            style={{ width: baseSpeed * 0.75, maxWidth: 130 }}
            className={`bg-purple-600 h-2 rounded-r-lg drop-shadow-lg hidden sm:block lg:hidden`}
          />
          <span
            style={{ width: baseSpeed, maxWidth: "100%" }}
            className={`bg-purple-600 h-2 rounded-r-lg drop-shadow-lg hidden xl:block`}
          />
        </div>
        <div className="flex place-items-center">
          <div className="flex w-32">
            <p className="flex-1 drop-shadow-lg">Total:</p>
            <p className="flex-1 text-center drop-shadow-lg">
              {baseAttack +
                baseDefense +
                baseSpecialAttack +
                baseSpecialDefense +
                baseSpeed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsTable;
