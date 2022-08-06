function AboutMe() {
  return (
    <section id="about-section">
      <div className="bg-slate-200 container mx-auto flex flex-col items-center my-28 py-24 px-24 rounded-3xl shadow-2xl">
        <h3 className="text-blue-600 text-2xl md:text-3xl mt-12 popin-font">
          About Me
        </h3>
        <h2 className="text-3xl md:text-4xl mt-6 popin-black">Who am I?</h2>
        <div className="md:px-24">
          <p className="mt-16 text-xl md:text-2xl about-bio">
          <p>As an energetic individual i got keen interest towards mobile and web development.</p>
            {/* <p>
              I'm an energetic individual with a passion for mobile and web
              development.
            </p>
            <p>
              I'm a self-taught developer based in India but I am open to take
              on remote freelance jobs for the clients around the world.
            </p>
            <p>
              I have a strong knowledge of Flutter, Node.js, MongoDB, React.js,
              REST APIs, HTML, CSS, Express.js, Blockchain, Solidity. I also
              teach about these technologies to my juniors.
            </p>
            <p>
              I have a strong interest in learning new technologies and I am
              always looking to learn new things.
            </p> */}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
