import { useState } from "react";
import { tourPackages } from "../data/packages";
import GuestStepper from "./GuestStepper";

export default function PackageGrid() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Europe", "Asia"];

  const filteredPackages = filter === "All" 
    ? tourPackages 
    : tourPackages.filter(item => item.category === filter);

  return (
    <section id="packages" className="py-14 bg-[#fdfdfd]">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-1.5">Popular Tour Packages</h2>
          <p className="text-slate-500 text-sm">Choose from our top-rated destinations for your next vacation.</p>
          
          {/* Category Filter Buttons */}
          <div className="flex justify-center gap-2 mt-5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                  filter === cat
                    ? "bg-[#1790d0] text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
              <div className="h-[180px] w-full overflow-hidden bg-slate-200">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-slate-800 text-base mb-2">{pkg.title}</h3>
                <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
                  <span>⏱ {pkg.duration}</span>
                  <span className="text-[#1790d0] font-bold text-base">${pkg.price.toLocaleString()}</span>
                </div>
                <p className="text-xs text-slate-500 mb-4 min-h-[38px]">{pkg.description}</p>
                
                {/* Reused Controlled Stepper Component */}
                <GuestStepper />

                <button className="w-full border-1.5 border-[#1790d0] text-[#1790d0] hover:bg-[#1790d0] hover:text-white py-2 rounded-md text-sm font-medium transition-colors">
                  Explore Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}