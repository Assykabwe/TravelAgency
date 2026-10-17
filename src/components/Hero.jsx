export default function Hero() {
  return (
    <section id="home" className="relative h-[400px] md:h-[480px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url('Images/BackgeoundImage.avif')" }}
      />
      
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* Hero content */}
      <div className="relative z-20 max-w-[650px] px-5">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-3">
          Discover Your Next<br />Unforgettable Journey
        </h1>
        <p className="text-sm md:text-base opacity-90 mb-6 font-light">
          Explore top destinations, exclusive packages, and unique travel experiences tailored just for you.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#1790d0] hover:bg-[#1274a8] text-white px-6 py-2.5 rounded-md font-medium text-sm transition-colors"
        >
          Plan Your Trip
        </a>
      </div>
    </section>
  );
}