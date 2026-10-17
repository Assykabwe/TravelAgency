import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm h-[70px] flex items-center">
      <div className="max-w-[1140px] w-full mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#1790d0]">
          Wanderlust
        </a>

        {/* Hamburger Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle navigation"
        >
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm"></span>
          <span className="w-6 h-0.5 bg-slate-800 rounded-sm"></span>
        </button>

        {/* Navigation overlay / desktop menu */}
        <nav
          className={`fixed inset-0 bg-white flex flex-col justify-center items-center gap-6 z-50 transition-all duration-300 
          md:static md:bg-transparent md:flex-row md:gap-6 md:opacity-100 md:visible md:translate-y-0
          ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full md:opacity-100"}`}
        >
          {/* Close button inside mobile menu */}
          <button
            className="absolute top-4 right-6 text-3xl text-slate-800 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-base md:text-sm font-semibold md:font-normal text-slate-700 hover:text-[#1790d0] transition-colors"
          >
            Home
          </a>
          <a
            href="#packages"
            onClick={() => setIsOpen(false)}
            className="text-base md:text-sm font-semibold md:font-normal text-slate-700 hover:text-[#1790d0] transition-colors"
          >
            Packages
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="text-base md:text-sm font-semibold md:font-normal text-slate-700 hover:text-[#1790d0] transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#1790d0] hover:bg-[#1274a8] text-white px-5 py-2 rounded-md font-medium text-sm transition-colors text-center w-48 md:w-auto"
          >
            Plan Your Trip
          </a>
        </nav>
      </div>
    </header>
  );
}