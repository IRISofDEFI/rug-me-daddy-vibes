
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(/lovable-uploads/dd8a5045-9464-4d62-ae67-6b320b61a59c.png)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="font-creepster text-6xl md:text-8xl lg:text-9xl text-black mb-6 drop-shadow-[6px_6px_0px_#ff0000] transform rotate-1">
          🧨 RUG ME
        </h1>
        <h1 className="font-creepster text-6xl md:text-8xl lg:text-9xl text-red-600 mb-8 drop-shadow-[6px_6px_0px_#000000] transform -rotate-1">
          DADDY
        </h1>
        
        {/* Subtitle */}
        <div className="bg-black/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 border-4 border-yellow-400 transform rotate-1 shadow-2xl">
          <p className="font-bungee text-xl md:text-3xl text-yellow-400 leading-relaxed">
            Where logic dies, memes thrive,<br />
            and the floor is always lava. 🌋
          </p>
        </div>
        
        {/* Character Showcase */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="relative">
            <img 
              src="/lovable-uploads/dd8a5045-9464-4d62-ae67-6b320b61a59c.png"
              alt="Rug Me Daddy Characters"
              className="w-full h-64 object-cover rounded-2xl border-4 border-purple-500 shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bungee text-sm transform rotate-12">
              THICC VIBES 🍑
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/805921a1-1b49-419d-8fba-fd1fc6cafa5f.png"
              alt="More Rug Me Daddy"
              className="w-full h-64 object-cover rounded-2xl border-4 border-green-500 shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -top-4 -left-4 bg-yellow-500 text-black px-4 py-2 rounded-full font-bungee text-sm transform -rotate-12">
              DADDY ENERGY 💪
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <p className="font-fredoka text-2xl text-black mb-4">
            ⬇️ ENTER THE CHAOS ⬇️
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
