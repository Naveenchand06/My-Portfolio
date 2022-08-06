import dev from "../assets/dev-removebg.png";

function Hero() {
  return (
    <section id="hero-section" className="shadow-2xl">
      <div className="container mx-auto mt-2 px-8 py-32 flex flex-col items-center justify-center md:space-x-10  md:flex-row">
        {/* Left Item */}
        <div>
          <h1 className="make-hero-title text-center text-5xl md:text-6xl ">
            Hey, I'm Naveenchand
          </h1>
          <h3 className="text-xl text-center md:text-2xl mt-3">
            a <span className="underline underline-offset-1">Dev</span>eloper
          </h3>
        </div>
        {/* Right Item */}
        <div className="sm:h-1/2 md:w-1/2 p-5">
          <img src={dev} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
