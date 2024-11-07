import { useState } from "react";

const MoveList = ({ movesetData }) => {
  const [showLevelMoves, setShowLevelMoves] = useState(true);
  const [showEggMoves, setShowEggMoves] = useState(false);
  const [showMachineMoves, setShowMachineMoves] = useState(false);
  const [showTutorMoves, setShowTutorMoves] = useState(false);

  const levelMoves = [];
  const eggMoves = [];
  const machineMoves = [];
  const tutorMoves = [];

  const populateLevelMoves = movesetData.map((move) => {
    if (move.method !== "level-up") {
      return;
    }

    // check if move already exists
    if (levelMoves.some((el) => el.name === move.move.name)) {
      const index = levelMoves.findIndex((el) => el.name === move.move.name);

      levelMoves[index].versionGroups += `, ${move.versionGroup}`;
    } else {
      levelMoves.push({
        name: move.move.name,
        levelLearnedAt: move.levelLearnedAt,
        versionGroups: move.versionGroup,
        accuracy: move.move.accuracy,
        ailment: move.move.ailment,
        ailmentChance: move.move.ailmentChance,
        category: move.move.category,
        critRate: move.move.critRate,
        damageClass: move.move.damageClass,
        drain: move.move.drain,
        effectChance: move.move.effectChance,
        flavorText: move.move.flavorText,
        flinchChance: move.move.flinchChance,
        healing: move.move.healing,
        maxHits: move.move.maxHits,
        minHits: move.move.minHits,
        maxTurns: move.move.maxTurns,
        minTurns: move.move.minTurns,
        power: move.move.power,
        pp: move.move.pp,
        priority: move.move.priority,
        statChance: move.move.statChance,
        target: move.move.target,
        type: move.move.type.name,
      });
    }
  });

  const populateEggMoves = movesetData.map((move) => {
    if (move.method !== "egg") {
      return;
    }

    // check if move already exists
    if (eggMoves.some((el) => el.name === move.move.name)) {
      const index = eggMoves.findIndex((el) => el.name === move.move.name);

      eggMoves[index].versionGroups += `, ${move.versionGroup}`;
    } else {
      eggMoves.push({
        name: move.move.name,
        levelLearnedAt: move.levelLearnedAt,
        versionGroups: move.versionGroup,
        accuracy: move.move.accuracy,
        ailment: move.move.ailment,
        ailmentChance: move.move.ailmentChance,
        category: move.move.category,
        critRate: move.move.critRate,
        damageClass: move.move.damageClass,
        drain: move.move.drain,
        effectChance: move.move.effectChance,
        flavorText: move.move.flavorText,
        flinchChance: move.move.flinchChance,
        healing: move.move.healing,
        maxHits: move.move.maxHits,
        minHits: move.move.minHits,
        maxTurns: move.move.maxTurns,
        minTurns: move.move.minTurns,
        power: move.move.power,
        pp: move.move.pp,
        priority: move.move.priority,
        statChance: move.move.statChance,
        target: move.move.target,
        type: move.move.type.name,
      });
    }
  });

  const populateMachineMoves = movesetData.map((move) => {
    if (move.method !== "machine") {
      return;
    }

    // check if move already exists
    if (machineMoves.some((el) => el.name === move.move.name)) {
      const index = machineMoves.findIndex((el) => el.name === move.move.name);

      machineMoves[index].versionGroups += `, ${move.versionGroup}`;
    } else {
      machineMoves.push({
        name: move.move.name,
        levelLearnedAt: move.levelLearnedAt,
        versionGroups: move.versionGroup,
        accuracy: move.move.accuracy,
        ailment: move.move.ailment,
        ailmentChance: move.move.ailmentChance,
        category: move.move.category,
        critRate: move.move.critRate,
        damageClass: move.move.damageClass,
        drain: move.move.drain,
        effectChance: move.move.effectChance,
        flavorText: move.move.flavorText,
        flinchChance: move.move.flinchChance,
        healing: move.move.healing,
        maxHits: move.move.maxHits,
        minHits: move.move.minHits,
        maxTurns: move.move.maxTurns,
        minTurns: move.move.minTurns,
        power: move.move.power,
        pp: move.move.pp,
        priority: move.move.priority,
        statChance: move.move.statChance,
        target: move.move.target,
        type: move.move.type.name,
      });
    }
  });
  const populateTutorMoves = movesetData.map((move) => {
    if (move.method !== "tutor") {
      return;
    }

    // check if move already exists
    if (tutorMoves.some((el) => el.name === move.move.name)) {
      const index = tutorMoves.findIndex((el) => el.name === move.move.name);

      tutorMoves[index].versionGroups += `, ${move.versionGroup}`;
    } else {
      tutorMoves.push({
        name: move.move.name,
        levelLearnedAt: move.levelLearnedAt,
        versionGroups: move.versionGroup,
        accuracy: move.move.accuracy,
        ailment: move.move.ailment,
        ailmentChance: move.move.ailmentChance,
        category: move.move.category,
        critRate: move.move.critRate,
        damageClass: move.move.damageClass,
        drain: move.move.drain,
        effectChance: move.move.effectChance,
        flavorText: move.move.flavorText,
        flinchChance: move.move.flinchChance,
        healing: move.move.healing,
        maxHits: move.move.maxHits,
        minHits: move.move.minHits,
        maxTurns: move.move.maxTurns,
        minTurns: move.move.minTurns,
        power: move.move.power,
        pp: move.move.pp,
        priority: move.move.priority,
        statChance: move.move.statChance,
        target: move.move.target,
        type: move.move.type.name,
      });
    }
  });

  console.log("levelMoves:", levelMoves);
  //   console.log("eggMoves:", eggMoves);
  //   console.log("machineMoves:", machineMoves);
  //   console.log("tutorMoves:", tutorMoves);

  const levelMoveCards = levelMoves.map((move) => (
    <div>
      <p>{move.name}</p>
    </div>
  ));
  const eggMoveCards = eggMoves.map((move) => (
    <div>
      <p>{move.name}</p>
    </div>
  ));
  const machineMoveCards = machineMoves.map((move) => (
    <div>
      <p>{move.name}</p>
    </div>
  ));
  const tutorMoveCards = tutorMoves.map((move) => (
    <div>
      <p>{move.name}</p>
    </div>
  ));

  return (
    <div className="w-full h-full">
      <div className="w-full">
        <div className="flex justify-center place-items-center text-center text-text-light bg-accent-gray-dark rounded-tl-lg rounded-tr-lg">
          <div
            className={`flex-1 w-full h-full p-1 rounded-tl-lg ${
              showLevelMoves ? "bg-primary" : ""
            }`}
            onClick={() => {
              setShowLevelMoves(true);
              setShowEggMoves(false);
              setShowMachineMoves(false);
              setShowTutorMoves(false);
            }}
          >
            <p className="drop-shadow-lg">Level</p>
          </div>
          <div
            className={`flex-1 w-full h-full p-1  ${
              showEggMoves ? "bg-primary" : ""
            }`}
            onClick={() => {
              setShowLevelMoves(false);
              setShowEggMoves(true);
              setShowMachineMoves(false);
              setShowTutorMoves(false);
            }}
          >
            <p className="drop-shadow-lg">Egg</p>
          </div>
          <div
            className={`flex-1 w-full h-full p-1  ${
              showMachineMoves ? "bg-primary" : ""
            }`}
            onClick={() => {
              setShowLevelMoves(false);
              setShowEggMoves(false);
              setShowMachineMoves(true);
              setShowTutorMoves(false);
            }}
          >
            <p className="drop-shadow-lg">TM</p>
          </div>
          <div
            className={`flex-1 w-full h-full p-1 rounded-tr-lg  ${
              showTutorMoves ? "bg-primary" : ""
            }`}
            onClick={() => {
              setShowLevelMoves(false);
              setShowEggMoves(false);
              setShowMachineMoves(false);
              setShowTutorMoves(true);
            }}
          >
            <p className="drop-shadow-lg">Tutor</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-96 bg-accent-gray-light rounded-b-lg drop-shadow-lg overflow-y-scroll">
        {showLevelMoves && levelMoveCards.length > 0 && levelMoveCards}
        {showEggMoves && eggMoveCards.length > 0 && eggMoveCards}
        {showMachineMoves && machineMoveCards.length > 0 && machineMoveCards}
        {showTutorMoves && tutorMoveCards.length > 0 && tutorMoveCards}
      </div>
    </div>
  );
};

export default MoveList;
