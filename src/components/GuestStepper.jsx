import { useState } from "react";

export default function GuestStepper() {
  const [guests, setGuests] = useState(1);

  return (
    <div className="flex items-center justify-between bg-slate-100 px-3 py-1.5 rounded-md mb-4 text-xs font-medium text-slate-700">
      <span>Travelers:</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
          className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded hover:bg-slate-200 transition-colors font-bold"
        >
          -
        </button>
        <span className="w-4 text-center">{guests}</span>
        <button
          type="button"
          onClick={() => setGuests((prev) => prev + 1)}
          className="w-6 h-6 flex items-center justify-center bg-white border border-slate-300 rounded hover:bg-slate-200 transition-colors font-bold"
        >
          +
        </button>
      </div>
    </div>
  );
}