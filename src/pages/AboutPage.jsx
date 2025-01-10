const AboutPage = () => {
  return (
    <div className="flex justify-center place-items-center w-full h-fit">
      <div className="flex flex-col justify-center place-items-center gap-y-3 w-full lg:w-3/4 2xl:w-3/5 3xl:w-1/2 h-fit px-5 lg:px-10 pt-5">
        <p className="text-2xl xl:text-3xl font-semibold drop-shadow-lg">
          About
        </p>
        <div className="flex flex-col justify-start place-items-center gap-y-1 w-full h-full">
          <p className="place-self-start text-xl xl:text-2xl font-semibold drop-shadow-lg">
            The App:
          </p>
          <div className="place-self-start w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              NationalDex.net is an independently developed application that
              functions like a Pokédex from the beloved Pokémon franchise and
              allows users to build their own Pokémon teams.
            </p>
          </div>
          <div className="place-self-end w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              What started out as a simple portfolio builder has evolved into
              something I wish to share with the world.
            </p>
          </div>
          <div className="place-self-start w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              Whether you're just starting your Pokémon journey, or you're a
              seasoned veteran, NationalDex.net has something for you.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start place-items-start gap-y-1 w-full h-full">
          <p className="text-xl xl:text-2xl font-semibold drop-shadow-lg">
            Donations:
          </p>
          <div className="place-self-start w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              Donations on{" "}
              <a
                href="https://buymeacoffee.com/joshuagrayu"
                target="_blank"
                className="hover:underline underline-offset-2"
              >
                BuyMeACoffee
              </a>{" "}
              are always appreciated, but never expected. NationalDex.net will
              always be free to use.
            </p>
          </div>
          <div className="place-self-end w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              Should this project ever take off, donations will be used to cover
              operating costs to help keep the website ad-free. My aim is to
              provide a good user experience first and foremost.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start place-items-start gap-y-1 w-full h-full">
          <p className="text-xl xl:text-2xl font-semibold drop-shadow-lg">
            Contact:
          </p>
          <div className="w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              Have any questions, suggestions, or any bugs to report? Shoot an
              email to nationaldex.official@gmail.com
            </p>
          </div>
          <div className="place-self-end w-11/12 p-2 bg-primary border-2 border-text-dark rounded-lg drop-shadow-lg">
            <p className="xl:text-lg text-text-light drop-shadow-lg">
              (For bug reports, please include a screenshot if you can. A
              detailed description of the bug can be used in lieu of a
              screenshot.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
