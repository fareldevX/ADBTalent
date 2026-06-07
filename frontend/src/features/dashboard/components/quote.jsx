import { LuGlobe } from "react-icons/lu";

function Quote() {
  return (
    <div className="bg-[#0d1323] p-6 rounded-3xl text-white relative overflow-hidden group">
      <div className="relative z-10 space-y-4">
        <p className="text-sm font-medium italic opacity-90">
          "Precision is the foundation of excellence."
        </p>
        <div className="pt-2">
          <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">
            Guidelines
          </p>
          <p className="text-xs font-bold">Talent Profile Standards</p>
        </div>
      </div>
      <LuGlobe
        className="absolute -bottom-4 -right-4 text-white/10"
        size={100}
      />
    </div>
  );
}

export default Quote;
