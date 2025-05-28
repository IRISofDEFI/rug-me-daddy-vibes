
const RoadmapSection = () => {
  const phases = [
    { phase: "Phase 1", title: "Buy", description: "FOMO in with life savings 💸", icon: "🚀" },
    { phase: "Phase 2", title: "Cry", description: "Watch portfolio implode 😭", icon: "📉" },
    { phase: "Phase 3", title: "Pump", description: "Hopium injection directly to veins 💉", icon: "📈" },
    { phase: "Phase 4", title: "Regret", description: "Question all life choices 🤡", icon: "💀" },
    { phase: "Phase 5", title: "Repeat", description: "Do it all over again tomorrow 🔄", icon: "🎭" }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 rounded-3xl"
        style={{
          backgroundImage: 'url(/lovable-uploads/576b27f6-07de-4831-b2ce-93dd6130309d.png)'
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="bg-gradient-to-r from-green-900/90 via-blue-900/90 to-purple-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-green-400 shadow-2xl transform rotate-1">
          
          {/* Section Title */}
          <h2 className="font-creepster text-4xl md:text-6xl text-green-400 text-center mb-4 drop-shadow-[4px_4px_0px_#000000]">
            THE "ROADMAP" 🗺️
          </h2>
          
          <p className="font-bungee text-lg md:text-xl text-center text-yellow-400 mb-12">
            (More like a path to financial ruin, but with style)
          </p>
          
          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`bg-black/80 p-6 rounded-2xl border-4 shadow-xl transform transition-transform hover:scale-105 ${
                  index % 2 === 0 ? 'rotate-2 border-red-400' : '-rotate-2 border-blue-400'
                }`}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">{phase.icon}</div>
                  
                  <div className={`inline-block px-4 py-2 rounded-full mb-4 font-bungee text-sm ${
                    index % 2 === 0 ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
                  }`}>
                    {phase.phase}
                  </div>
                  
                  <h3 className="font-creepster text-2xl md:text-3xl text-yellow-400 mb-4">
                    {phase.title}
                  </h3>
                  
                  <p className="font-fredoka text-white leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Bonus Phase */}
            <div className="md:col-span-2 lg:col-span-3">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 p-8 rounded-2xl border-4 border-yellow-400 shadow-xl transform -rotate-1">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎯</div>
                  <h3 className="font-creepster text-3xl md:text-4xl text-yellow-400 mb-4">
                    BONUS PHASE: ENLIGHTENMENT
                  </h3>
                  <p className="font-bungee text-xl text-white">
                    Realize this was all just a beautiful simulation of financial self-destruction 🧘‍♂️<br/>
                    <span className="text-yellow-300">Achieve peak degen consciousness</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-12 bg-yellow-400 p-6 rounded-2xl border-4 border-black transform rotate-1 shadow-xl">
            <p className="font-fredoka text-black text-center text-lg">
              <span className="font-bungee">DISCLAIMER:</span> This roadmap is about as reliable as a chocolate teapot. 
              Past performance does not indicate future results. Side effects may include: addiction to charts, 
              compulsive emoji usage, and the inability to explain your investment strategy to normal humans. 🤡
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
