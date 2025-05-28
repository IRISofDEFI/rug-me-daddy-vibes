
const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-900/90 via-pink-900/90 to-red-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-yellow-400 shadow-2xl transform -rotate-1">
          
          {/* Section Title */}
          <h2 className="font-creepster text-4xl md:text-6xl text-yellow-400 text-center mb-12 drop-shadow-[4px_4px_0px_#000000]">
            THE DEGEN ORIGIN STORY
          </h2>
          
          {/* Main Content - Dramatic Monologue Style */}
          <div className="space-y-8 text-white">
            
            {/* Opening Hook */}
            <div className="bg-black/70 p-6 rounded-2xl border-l-8 border-red-500 transform rotate-1">
              <p className="font-fredoka text-xl md:text-2xl leading-relaxed">
                They told you not to do it.<br/>
                Your wallet begged you to stop.<br/>
                Even your dog gave you the side-eye…<br/>
                <span className="text-yellow-400 font-bungee text-2xl">But you? You clicked buy anyway.</span>
              </p>
            </div>
            
            {/* Key Message */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-6 rounded-2xl border-4 border-yellow-400 transform -rotate-1 shadow-xl">
                <p className="font-bungee text-2xl md:text-3xl text-white">
                  Because deep down, you're not here for slow gains.<br/>
                  <span className="text-yellow-300">You're here for the thrill of the rug.</span>
                </p>
              </div>
            </div>
            
            {/* Main Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-black/70 p-6 rounded-2xl border-r-8 border-blue-500">
                <p className="font-fredoka text-lg leading-relaxed">
                  This is not just a coin. This is a <span className="text-red-400 font-bungee">full-blown Degen Simulation.</span>
                  <br/><br/>
                  A beautiful disaster, wrapped in memes, soaked in volatility, and launched straight from the basement of crypto chaos.
                </p>
              </div>
              
              <div className="bg-black/70 p-6 rounded-2xl border-l-8 border-green-500">
                <p className="font-fredoka text-lg leading-relaxed">
                  Built on nothing but pure internet energy, "Rug Me Daddy" is the coin your financial advisor has nightmares about.
                  <br/><br/>
                  <span className="text-yellow-400 font-bungee">No utility. No roadmap. Just raw, unfiltered madness.</span>
                </p>
              </div>
            </div>
            
            {/* Closing Statement */}
            <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-8 rounded-2xl border-4 border-black transform rotate-1 shadow-xl">
              <p className="font-bungee text-xl md:text-2xl text-black text-center leading-relaxed">
                So strap in. Or don't.<br/>
                Because either way, this ride has no seatbelts.<br/>
                <span className="text-red-800">Just vibes, memes, and maybe a rug waiting at the bottom.</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
