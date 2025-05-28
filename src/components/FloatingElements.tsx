
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Floating Dollar Bills */}
      <div className="absolute top-10 left-10 text-6xl animate-float">💵</div>
      <div className="absolute top-32 right-20 text-4xl animate-float-reverse">💰</div>
      <div className="absolute top-64 left-1/4 text-5xl animate-float">💸</div>
      <div className="absolute top-96 right-1/3 text-3xl animate-float-reverse">🤑</div>
      <div className="absolute bottom-32 left-16 text-4xl animate-float">💎</div>
      <div className="absolute bottom-64 right-12 text-5xl animate-float-reverse">🚀</div>
      <div className="absolute top-1/2 left-12 text-3xl animate-bounce-horizontal">🔥</div>
      <div className="absolute top-1/3 right-8 text-4xl animate-float">💯</div>
      
      {/* More scattered money elements */}
      <div className="absolute top-20 left-1/2 text-2xl animate-float-reverse">💵</div>
      <div className="absolute bottom-40 left-1/3 text-3xl animate-float">💰</div>
      <div className="absolute top-80 right-1/4 text-2xl animate-bounce-horizontal">💸</div>
      <div className="absolute bottom-20 right-1/2 text-4xl animate-float-reverse">🎯</div>
    </div>
  );
};

export default FloatingElements;
