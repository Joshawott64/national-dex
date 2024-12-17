import React from "react";

const FormSelection = ({
  pokemonData,
  pokemonName,
  setPokemonName,
  setBannerImage,
  setGiph,
  setGiphShiny,
  setGiphFemale,
  setGiphFemaleShiny,
  pokemonNameSimple,
  setPokemonNameSimple,
  setPokemonType1,
  setPokemonType2,
  setBaseAttack,
  setBaseDefense,
  setBaseHp,
  setBaseSpecialAttack,
  setBaseSpecialDefense,
  setBaseSpeed,
  setLegacyCry,
  setLatestCry,
  setMovesetData,
  setAbility1Data,
  setAbility2Data,
  setAbility3Data,
  setShowFemaleSprite,
}) => {
  // handler functions
  const handlePokemonNameChange = async (currentName, formName) => {
    if (formName.includes("pikachu-rock-star")) {
      setPokemonName("Rock Star " + currentName);
    } else if (formName.includes("pikachu-belle")) {
      setPokemonName("Belle " + currentName);
    } else if (formName.includes("pikachu-pop-star")) {
      setPokemonName("Pop Star " + currentName);
    } else if (formName.includes("pikachu-phd")) {
      setPokemonName("PHD " + currentName);
    } else if (formName.includes("pikachu-libre")) {
      setPokemonName(currentName + " Libre");
    } else if (formName.includes("pikachu-cosplay")) {
      setPokemonName("Cosplay " + currentName);
    } else if (formName.includes("pikachu-original-cap")) {
      setPokemonName("Original Cap " + currentName);
    } else if (formName.includes("pikachu-hoenn-cap")) {
      setPokemonName("Hoenn Cap " + currentName);
    } else if (formName.includes("pikachu-sinnoh-cap")) {
      setPokemonName("Sinnoh Cap " + currentName);
    } else if (formName.includes("pikachu-unova-cap")) {
      setPokemonName("Unova Cap " + currentName);
    } else if (formName.includes("pikachu-kalos-cap")) {
      setPokemonName("Kalos Cap " + currentName);
    } else if (formName.includes("pikachu-alola-cap")) {
      setPokemonName("Alola Cap " + currentName);
    } else if (formName.includes("pikachu-partner-cap")) {
      setPokemonName("Partner Cap " + currentName);
    } else if (formName.includes("pikachu-starter")) {
      setPokemonName(currentName + " (Starter)");
    } else if (formName.includes("-world-cap")) {
      setPokemonName("World Cap " + currentName);
    } else if (formName.includes("-mega-x")) {
      setPokemonName("Mega " + currentName + " X");
    } else if (formName.includes("-mega-y")) {
      setPokemonName("Mega " + currentName + " Y");
    } else if (formName.includes("-single-strike-gmax")) {
      setPokemonName("Gigantamax " + currentName + " (Single Strike)");
    } else if (formName.includes("-rapid-strike-gmax")) {
      setPokemonName("Gigantamax " + currentName + " (Rapid Strike)");
    } else if (formName.includes("-rapid-strike")) {
      setPokemonName(currentName + " (Rapid Strike)");
    } else if (formName.includes("-gmax")) {
      setPokemonName("Gigantamax " + currentName);
    } else if (
      formName.includes("-totem-alola") ||
      formName.includes("-totem")
    ) {
      setPokemonName("Totem " + currentName);
    } else if (formName.includes("-alola")) {
      setPokemonName("Alolan " + currentName);
    } else if (formName.includes("-galar-zen")) {
      setPokemonName("Galarian " + currentName + " (Zen)");
    } else if (formName.includes("-galar")) {
      setPokemonName("Galarian " + currentName);
    } else if (formName.includes("necrozma-dusk")) {
      setPokemonName("Dusk Mane " + currentName);
    } else if (formName.includes("necrozma-dawn")) {
      setPokemonName("Dawn Wings " + currentName);
    } else if (formName.includes("-ultra")) {
      setPokemonName("Ultra " + currentName);
    } else if (formName.includes("-terastal")) {
      setPokemonName("Terastal " + currentName);
    } else if (formName.includes("-stellar")) {
      setPokemonName("Stellar " + currentName);
    } else if (formName.includes("-wellspring-mask")) {
      setPokemonName("Wellspring Mask " + currentName);
    } else if (formName.includes("-hearthflame-mask")) {
      setPokemonName("Hearthflame Mask " + currentName);
    } else if (formName.includes("-cornerstone-mask")) {
      setPokemonName("Cornerstone Mask " + currentName);
    } else if (formName.includes("-roaming")) {
      setPokemonName("Roaming " + currentName);
    } else if (formName.includes("-therian")) {
      setPokemonName(currentName + " Therian");
    } else if (formName.includes("-eternamax")) {
      setPokemonName("Eternamax " + currentName);
    } else if (formName.includes("-crowned")) {
      setPokemonName(currentName + " (Crowned)");
    } else if (formName.includes("-hangry")) {
      setPokemonName(currentName + " (Hangry)");
    } else if (formName.includes("-low-key")) {
      setPokemonName(currentName + " (Low-Key)");
    } else if (formName.includes("-school")) {
      setPokemonName(currentName + " (School)");
    } else if (formName.includes("lycanroc-midnight")) {
      setPokemonName(currentName + " (Midnight)");
    } else if (formName.includes("lycanroc-dusk")) {
      setPokemonName(currentName + " (Dusk)");
    } else if (formName.includes("-hisui")) {
      setPokemonName("Hisiuan " + currentName);
    } else if (formName.includes("-unbound")) {
      setPokemonName(currentName + " (Unbound)");
    } else if (formName.includes("-mega")) {
      setPokemonName("Mega " + currentName);
    } else if (formName.includes("-eternal")) {
      setPokemonName("Eternal " + currentName);
    } else if (formName.includes("-ash")) {
      setPokemonName("Ash " + currentName);
    } else if (formName.includes("-resolute")) {
      setPokemonName(currentName + " Resolute");
    } else if (formName.includes("kyurem-black")) {
      setPokemonName(currentName + " Black");
    } else if (formName.includes("kyurem-white")) {
      setPokemonName(currentName + " White");
    } else if (formName.includes("-zen")) {
      setPokemonName(currentName + " (Zen)");
    } else if (formName.includes("-sky")) {
      setPokemonName(currentName + " (Sky)");
    } else if (formName.includes("-origin")) {
      setPokemonName(currentName + " (Origin)");
    } else if (formName.includes("-heat")) {
      setPokemonName(currentName + " Heat");
    } else if (formName.includes("-wash")) {
      setPokemonName(currentName + " Wash");
    } else if (formName.includes("-frost")) {
      setPokemonName(currentName + " Frost");
    } else if (formName.includes("-fan")) {
      setPokemonName(currentName + " Fan");
    } else if (formName.includes("-mow")) {
      setPokemonName(currentName + " Mow");
    } else if (formName.includes("-attack")) {
      setPokemonName(currentName + " (Attack)");
    } else if (formName.includes("-defense")) {
      setPokemonName(currentName + " (Defense)");
    } else if (formName.includes("-speed")) {
      setPokemonName(currentName + " (Speed)");
    } else if (formName.includes("-primal")) {
      setPokemonName("Primal " + currentName);
    } else if (formName.includes("-sunny")) {
      setPokemonName(currentName + " (Sunny)");
    } else if (formName.includes("-rainy")) {
      setPokemonName(currentName + " (Rainy)");
    } else if (formName.includes("-snowy")) {
      setPokemonName(currentName + " (Snowy)");
    } else if (formName.includes("eevee-starter")) {
      setPokemonName(currentName + "(Starter)");
    } else if (formName.includes("paldea-combat-breed")) {
      setPokemonName("Paldean " + currentName + " (Combat)");
    } else if (formName.includes("paldea-blaze-breed")) {
      setPokemonName("Paldean " + currentName + " (Blaze)");
    } else if (formName.includes("paldea-aqua-breed")) {
      setPokemonName("Paldean " + currentName + " (Aqua)");
    } else if (formName.includes("-paldea")) {
      setPokemonName("Paldean " + currentName);
    } else {
      setPokemonName(pokemonData.name);
    }
  };
  const forms = pokemonData.pokemons.map((form) => {
    // check for icon-less/unnecessary forms
    if (
      form.name.includes("koraidon-") ||
      form.name.includes("miraidon-") ||
      form.name.includes("-busted") ||
      form.name.includes("-orange-meteor") ||
      form.name.includes("-yellow-meteor") ||
      form.name.includes("-green-meteor") ||
      form.name.includes("-blue-meteor") ||
      form.name.includes("-indigo-meteor") ||
      form.name.includes("-violet-meteor") ||
      form.name.includes("-own-tempo") ||
      form.name.includes("-power-construct") ||
      form.name.includes("-battle-bond")
    ) {
      return;
    } else {
      return (
        <div
          key={form.pokemonId}
          onClick={() => {
            setBannerImage(form.officialArtwork);
            setGiph(form.giph);
            setGiphShiny(form.giphShiny);
            setGiphFemale(form.giphFemale);
            setGiphFemaleShiny(form.giphFemaleShiny);
            setPokemonNameSimple(form.name);
            setPokemonType1(form.type1.name);
            setPokemonType2(form.type2 ? form.type2.name : null);
            setBaseAttack(form.baseAttack);
            setBaseDefense(form.baseDefense);
            setBaseHp(form.baseHp);
            setBaseSpecialAttack(form.baseSpecialAttack);
            setBaseSpecialDefense(form.baseSpecialDefense);
            setBaseSpeed(form.baseSpeed);
            setLegacyCry(form.legacyCry);
            setLatestCry(form.latestCry);
            setMovesetData(form.movesets);
            setAbility1Data(form.ability1);
            setAbility2Data(form.ability2 ?? null);
            setAbility3Data(form.ability3 ?? null);
            setShowFemaleSprite(false);
            handlePokemonNameChange(pokemonData.name, form.name);
          }}
          className={`flex justify-center place-items-center h-10 md:h-12 w-10 md:w-12 bg-accent-gray-light border-2 md:border-[3px] border-accent-gray-dark rounded-lg drop-shadow-lg ${
            form.name === pokemonNameSimple
              ? "border-[3px] md:border-[4.5px] border-primary"
              : ""
          }`}
        >
          <img
            className="drop-shadow-lg"
            src={form.legacyIcon ?? form.latestIcon}
            alt={form.name}
          />
        </div>
      );
    }
  });

  return (
    <div
      className={`flex justify-center place-items-center gap-x-2 w-full ${
        forms.length >= 6 ? "grid grid-cols-6 gap-4" : ""
      }
      `}
    >
      {forms}
    </div>
  );
};

export default FormSelection;
