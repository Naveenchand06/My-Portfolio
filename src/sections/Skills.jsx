function Skills() {
  return (
    <section id="skills-section" className="py-8 bg-slate-200">
      <h3 className="text-center text-blue-600 text-2xl md:text-3xl mt-12 popin-font">
        Skills
      </h3>
      <div className="conatainer mx-auto p-10 flex flex-col space-y-8 md:flex-row md:space-x-8 justify-center">
        <div></div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">Flutter</div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">Node.js</div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">MongoDB</div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">Flask</div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">
          Express.js
        </div>
        <div className="p-10 give-shadow bg-slate-300 rounded-2xl">
          React.js
        </div>
      </div>
    </section>
  );
}

export default Skills;
