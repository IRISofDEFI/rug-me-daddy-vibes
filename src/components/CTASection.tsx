
const CTASection = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-gradient-to-r from-red-900/95 via-purple-900/95 to-pink-900/95 backdrop-blur-sm rounded-3xl p-8 md:p-16 border-4 border-red-500 shadow-2xl transform -rotate-1">
          
          {/* Warning Section */}
          <div className="mb-12">
            <div className="bg-yellow-400 p-6 rounded-2xl border-4 border-black shadow-xl transform rotate-2">
              <h3 className="font-creepster text-2xl md:text-3xl text-black text-center mb-4">
                ⚠️ FINAL WARNING ⚠️
              </h3>
              <p className="font-bungee text-black text-center text-lg">
                So if you're looking for meaning, security, or financial advice —<br/>
                <span className="text-red-600 text-xl">RUN. NOW.</span>
              </p>
            </div>
          </div>
          
          {/* Main CTA Content */}
          <div className="text-center space-y-8">
            
            <h2 className="font-creepster text-5xl md:text-7xl text-red-400 drop-shadow-[4px_4px_0px_#000000]">
              JOIN THE RIDE
            </h2>
            
            <div className="bg-black/80 p-8 rounded-2xl border-4 border-yellow-400 shadow-xl">
              <p className="font-fredoka text-xl md:text-2xl text-white leading-relaxed">
                But if you're here to ride a rocket made of bad ideas and sexy memes,<br/>
                <span className="text-yellow-400 font-bungee">strap in, degen. Or better yet, don't.</span>
              </p>
            </div>
            
            {/* Rocket Animation Background */}
            <div className="relative py-12">
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-red-500 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
              
              {/* Main CTA Button */}
              <button className="relative z-10 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 hover:from-red-700 hover:via-pink-700 hover:to-purple-700 text-white font-bungee text-2xl md:text-4xl px-12 py-6 rounded-2xl border-4 border-yellow-400 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-2">
                <span className="block">🚀 RUG ME, DADDY 💦</span>
                <span className="block text-lg mt-2 text-yellow-300">
                  (You know you want to)
                </span>
              </button>
            </div>
            
            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              
              <div className="bg-blue-600 p-6 rounded-2xl border-4 border-white shadow-xl transform rotate-1 hover:rotate-3 transition-transform">
                <div className="text-center">
                  <div className="text-4xl mb-2">💬</div>
                  <p className="font-bungee text-white">JOIN TELEGRAM</p>
                  <p className="font-fredoka text-blue-200 text-sm">Where degeneracy lives</p>
                </div>
              </div>
              
              <div className="bg-black p-6 rounded-2xl border-4 border-white shadow-xl transform -rotate-1 hover:-rotate-3 transition-transform">
                <div className="text-center">
                  <div className="text-4xl mb-2">🐦</div>
                  <p className="font-bungee text-white">FOLLOW TWITTER</p>
                  <p className="font-fredoka text-gray-300 text-sm">For memes and chaos</p>
                </div>
              </div>
              
              <div className="bg-purple-600 p-6 rounded-2xl border-4 border-white shadow-xl transform rotate-1 hover:rotate-3 transition-transform">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="font-bungee text-white">CHART WATCHING</p>
                  <p className="font-fredoka text-purple-200 text-sm">For masochists only</p>
                </div>
              </div>
              
            </div>
            
            {/* Final Statement */}
            <div className="mt-12 bg-gradient-to-r from-yellow-600 to-orange-600 p-8 rounded-2xl border-4 border-black shadow-xl transform rotate-1">
              <p className="font-creepster text-2xl md:text-3xl text-black text-center leading-relaxed">
                Because this ride?<br/>
                <span className="text-red-800">Has no brakes.</span><br/>
                <span className="text-purple-800">Just vibes.</span><br/>
                <span className="text-blue-800">And rugs.</span><br/>
                <span className="text-pink-800 text-4xl">And daddy. 😈</span>
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Floating Elements for this section */}
      <div className="absolute top-10 left-10 text-6xl animate-float">🔥</div>
      <div className="absolute bottom-20 right-10 text-5xl animate-float-reverse">💎</div>
      <div className="absolute top-1/2 right-20 text-4xl animate-bounce-horizontal">🚀</div>
    </section>
  );
};

export default CTASection;
