export default function ContactCTA() {
  return (
    <section id="contact" className="bg-[#0d1527] text-white py-14 text-center">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="max-w-[600px] mx-auto mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Ready to Start Planning Your Next Trip?</h2>
          <p className="text-xs md:text-sm text-slate-400">
            Tell us where you want to go and our travel experts will craft the perfect itinerary tailored to your preferences.
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="max-w-[550px] mx-auto flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-md text-white text-xs outline-none placeholder:text-slate-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-md text-white text-xs outline-none placeholder:text-slate-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Select Destination"
              required
              className="w-full px-4 py-3 bg-[#1e293b] border border-[#334155] rounded-md text-white text-xs outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="w-full bg-[#1790d0] hover:bg-[#1274a8] text-white py-3 rounded-md text-xs font-semibold transition-colors"
            >
              Plan My Trip
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}