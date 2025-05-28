
const ManifestoSection = () => {
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
        
        {/* Welcome Home Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-red-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-red-500 shadow-2xl transform rotate-1">
            
            <h2 className="font-creepster text-5xl md:text-7xl text-red-400 text-center mb-8 drop-shadow-[4px_4px_0px_#000000]">
              WELCOME HOME, DEGEN
            </h2>
            
            <div className="space-y-6">
              <div className="bg-black/80 p-6 rounded-2xl border-4 border-yellow-400 transform -rotate-1">
                <p className="font-bungee text-lg md:text-xl text-yellow-400 text-center">
                  Ever kissed your liquidity goodbye with a smile on your face? 💋<br/>
                  Ever aped so hard, your ancestors felt it? 🦍<br/>
                  Ever begged to be rugged… and liked it? 😈
                </p>
              </div>
              
              <div className="text-center">
                <p className="font-fredoka text-3xl md:text-4xl text-white">
                  Yeah. <span className="text-red-400 font-creepster text-5xl">Welcome home.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Manifesto */}
        <div className="bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-4 border-purple-500 shadow-2xl transform -rotate-1">
          
          <div className="space-y-8 text-white">
            
            {/* Core Statement */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-2xl border-4 border-yellow-400 shadow-xl">
                <p className="font-bungee text-xl md:text-2xl">
                  This ain't your grandma's crypto.<br/>
                  This is <span className="text-yellow-300">raw, unfiltered meme mayhem</span>
                </p>
              </div>
            </div>
            
            {/* Three Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-red-600/80 p-6 rounded-2xl border-4 border-white transform rotate-2 shadow-xl">
                <p className="font-fredoka text-lg text-center text-white">
                  <span className="font-bungee text-xl">Part casino,</span><br/>
                  where your money goes to die 🎰
                </p>
              </div>
              
              <div className="bg-purple-600/80 p-6 rounded-2xl border-4 border-white transform -rotate-2 shadow-xl">
                <p className="font-fredoka text-lg text-center text-white">
                  <span className="font-bungee text-xl">Part fever dream,</span><br/>
                  that makes no sense 🌙
                </p>
              </div>
              
              <div className="bg-pink-600/80 p-6 rounded-2xl border-4 border-white transform rotate-1 shadow-xl">
                <p className="font-fredoka text-lg text-center text-white">
                  <span className="font-bungee text-xl">100% zero regrets</span><br/>
                  (okay maybe some) 😅
                </p>
              </div>
            </div>
            
            {/* The Rules */}
            <div className="bg-yellow-400 p-8 rounded-2xl border-4 border-black shadow-xl">
              <h3 className="font-creepster text-3xl md:text-4xl text-black text-center mb-6">
                THE DEGEN COMMANDMENTS
              </h3>
              
              <div className="space-y-4 text-black">
                <div className="font-bungee text-lg md:text-xl text-center">
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full">No roadmap.</span>
                  <span className="bg-purple-500 text-white px-4 py-2 rounded-full ml-2">No promises.</span>
                  <span className="bg-pink-500 text-white px-4 py-2 rounded-full ml-2">No pants.</span>
                </div>
                
                <p className="font-fredoka text-lg text-center">
                  Just pure degeneracy, horny volatility, and the sweet scent of instant regret. 🔥
                </p>
              </div>
            </div>
            
            {/* Final Statement */}
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6 rounded-2xl border-4 border-white transform rotate-1 shadow-xl">
                <p className="font-bungee text-xl md:text-2xl text-white">
                  We don't moon. <span className="text-yellow-300">We detonate.</span> 💥<br/>
                  We don't HODL. <span className="text-yellow-300">We fondle charts like they owe us ETH.</span> 📈<br/>
                  And when the floor drops out?<br/>
                  <span className="text-yellow-300 text-3xl">We moan… "Rug me, daddy." 🥵</span>
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
