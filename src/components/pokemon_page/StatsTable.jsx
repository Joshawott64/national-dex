const StatsTable = ({
  baseHp,
  baseAttack,
  baseDefense,
  baseSpecialAttack,
  baseSpecialDefense,
  baseSpeed,
}) => {
  return (
    <div className="flex flex-col gap-y-1 w-full bg-accent-gray-light p-2 font-semibold rounded-lg drop-shadow-lg">
      <div className="flex place-items-center">
        <div className="flex w-32">
          <p className="flex-1 drop-shadow-lg">Hp:</p>
          <p className="flex-1 text-center drop-shadow-lg">{baseHp}</p>
        </div>
        <span
          style={{ width: baseHp, maxWidth: 190 }}
          className={`bg-lime-600 h-2 rounded-r-lg drop-shadow-lg`}
        />
      </div>
      <div className="flex place-items-center">
        <div className="flex w-32">
          <p className="flex-1 drop-shadow-lg">Attack:</p>
          <p className="flex-1 text-center drop-shadow-lg">{baseAttack}</p>
        </div>
        <span
          style={{ width: baseAttack, maxWidth: 190 }}
          className={`bg-yellow-400 h-2 rounded-r-lg drop-shadow-lg`}
        />
      </div>
      <div className="flex place-items-center">
        <div className="flex w-32">
          <p className="flex-1 drop-shadow-lg">Defense:</p>
          <p className="flex-1 text-center drop-shadow-lg">{baseDefense}</p>
        </div>
        <span
          style={{ width: baseDefense, maxWidth: 190 }}
          className={`bg-orange-600 h-2 rounded-r-lg drop-shadow-lg`}
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
          className={`bg-cyan-600 h-2 rounded-r-lg drop-shadow-lg`}
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
          className={`bg-blue-900 h-2 rounded-r-lg drop-shadow-lg`}
        />
      </div>
      <div className="flex place-items-center">
        <div className="flex w-32">
          <p className="flex-1 drop-shadow-lg">Speed:</p>
          <p className="flex-1 text-center drop-shadow-lg">{baseSpeed}</p>
        </div>
        <span
          style={{ width: baseSpeed, maxWidth: 190 }}
          className={`bg-purple-600 h-2 rounded-r-lg drop-shadow-lg`}
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
  );
};

export default StatsTable;
