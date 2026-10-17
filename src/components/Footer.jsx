export default function Footer() {
  return (
    <footer className="bg-[#090e1a] text-slate-500 py-5 text-xs border-t border-[#1e293b]">
      <div className="max-w-[1140px] mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-3 text-center">
        <p>&copy; {new Date().getFullYear()} Wanderlust Travel Agency. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}