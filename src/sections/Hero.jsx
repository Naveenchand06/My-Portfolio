import dev from "../assets/dev.jpg";

function Hero() {
  return (
    <section id="hero-section">
      <div className="h-screen w-screen">
        {/* Flex Container */}
        <div className="container mx-auto py-8 flex flex-col space-y-10 items-center md:flex-row md:space-x-0 h-max ">
          {/* Left Item */}
          <div className="text-center px-12 md:w-1/2 align-middle">
            <h1 className="make-hero-title mt-12 text-5xl md:text-6xl ">
              Hey, I'm Naveenchand
            </h1>
            <h3 className="text-xl md:text-2xl mt-3">
              a <span className="underline underline-offset-1">Dev</span>eloper
            </h3>
          </div>
          {/* Right Item (Image) */}
          <div className="md:w-1/2 p-5 align-middle">
            <img src={dev} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
