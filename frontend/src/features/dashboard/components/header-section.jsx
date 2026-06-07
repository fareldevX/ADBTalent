export const HeaderSection = ({ title, desc, icon }) => (
  <div className="mb-8 pb-6 border-b border-slate-100">
    <div className="flex items-center gap-3 mb-2">
      <div className="text-[#0d1323] p-2 bg-slate-100 rounded-lg">{icon}</div>
      <h2 className="text-2xl font-bold text-[#0d1323] tracking-tight">
        {title}
      </h2>
    </div>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default HeaderSection;
