import { testimonialsData } from "../data/packages";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 bg-[#f8fafc]">
      <div className="max-w-[1140px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-900">What Our Travelers Say</h2>
          <div className="flex justify-center gap-1.5 mt-2.5">
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
            <span className="w-2 h-2 rounded-full bg-[#d63384]"></span>
            <span className="w-2 h-2 rounded-full bg-slate-300"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[850px] mx-auto">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <p className="text-xs text-slate-600 italic mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-semibold text-slate-900">{t.author}</h4>
                  <p className="text-[11px] text-slate-400">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}