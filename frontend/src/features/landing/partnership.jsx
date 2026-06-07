import { useState } from "react";
import {
  LuHandshake,
  LuBuilding2,
  LuShieldCheck,
  LuCpu,
  LuAward,
  LuArrowRight,
  LuCheck,
} from "react-icons/lu";

function Partnership() {
  const [isJoined, setIsJoined] = useState(false);
  const [companyName, setCompanyName] = useState("");

  const corporateTiers = [
    {
      icon: <LuBuilding2 size={22} />,
      title: "Industry Enterprise",
      description:
        "Designed for global technology companies seeking programmatic pipeline streams and direct sourcing infrastructure.",
      benefits: [
        "Unlimited access to the Top 5% Talent Pool",
        "Automated technical vetting reports",
        "Priority dedicated placement alignment",
      ],
    },
    {
      icon: <LuHandshake size={22} />,
      title: "Strategic Academic Node",
      description:
        "For educational institutions looking to transition specialized students from internal ecosystems into industry channels.",
      benefits: [
        "Direct student portfolio showcasing",
        "Unified credential authentication maps",
        "Platform validation benchmarking dashboards",
      ],
    },
  ];

  const handleJoinNetwork = (e) => {
    e.preventDefault();
    if (companyName.trim()) {
      setIsJoined(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      {/* HERO HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Enterprise Alignment</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Synergize with the Next{" "}
          <span className="text-[#1d4ed8]">Tech Generation</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Bridge organizational demand with verified full-stack developers,
          cloud practitioners, and systems administrators through an absolute
          corporate partnership network.
        </p>
      </div>

      {/* VALUE TIERS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {corporateTiers.map((tier, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs relative flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8] scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center transition-colors group-hover:bg-blue-50 group-hover:text-[#1d4ed8] group-hover:border-blue-100 shrink-0">
                {tier.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0d1323] tracking-tight">
                  {tier.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-50">
                <h4 className="text-xs font-bold text-[#0d1323] uppercase tracking-wider">
                  Program Features & SLA
                </h4>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, bIdx) => (
                    <li
                      key={bIdx}
                      className="text-xs text-slate-600 flex items-center gap-2"
                    >
                      <LuShieldCheck
                        size={14}
                        className="text-[#1d4ed8] shrink-0"
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE ALIGNMENT PORTAL */}
      <div className="bg-[#0d1323] rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden text-center max-w-3xl mx-auto">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        </div>

        {isJoined ? (
          <div className="space-y-4 py-6">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center mx-auto">
              <LuCheck size={26} />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-white tracking-tight">
                Integration Request Cached
              </h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto font-normal leading-relaxed">
                Thank you for initializing. Our network coordination team will
                process security authorization protocols for your entry.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 relative z-10 max-w-xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                Initialize Network Partnership
              </h3>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Input your corporate entity parameters below to dispatch a
                secure access authorization pipeline request to our engineers.
              </p>
            </div>

            <form
              onSubmit={handleJoinNetwork}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="text"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter Organization / Institution Name"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-normal text-white placeholder-slate-500 focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white/10 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1d4ed8] text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-sm shrink-0 cursor-pointer"
              >
                Join Network
                <LuArrowRight size={14} />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* BOTTOM TRUST SIGNALS */}
      <div className="border-t border-slate-100/80 pt-10 text-center space-y-4">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center justify-center gap-2">
          <LuCpu size={12} className="text-[#1d4ed8]" /> Verified Infrastructure
          Compliant
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-bold text-slate-300">
          <span className="tracking-wider">SYSADMIN CORE</span>
          <span className="tracking-wider">CLOUD ALIGNED</span>
          <span className="tracking-wider">FULL-STACK NODE</span>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
