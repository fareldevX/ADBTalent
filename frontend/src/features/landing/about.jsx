import {
  LuAward,
  LuCpu,
  LuLayers,
  LuGlobe,
  LuUsers,
  LuCompass,
  LuExternalLink,
} from "react-icons/lu";

function About() {
  const coreValues = [
    {
      icon: <LuLayers size={20} />,
      title: "Full-Stack Integrity",
      description:
        "We believe in validating complete technical capability—from high-performance frontend interactivity to decoupled backend APIs and efficient data runtimes.",
    },
    {
      icon: <LuCpu size={20} />,
      title: "Infrastructure Validation",
      description:
        "Exceptional code requires a bulletproof foundation. We champion systems and environments optimized through disciplined server configuration and cloud architecture practices.",
    },
    {
      icon: <LuAward size={20} />,
      title: "Merit-Based Discovery",
      description:
        "Our platform levels the playing field, utilizing data-driven profiles, verified asset portfolios, and metric indicators to connect builders directly with opportunities.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Our Manifesto</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[#0d1323] tracking-tight leading-tight">
          Engineering the Future of <br className="hidden sm:inline" />
          <span className="text-[#1d4ed8]">Technical Talent Discovery</span>
        </h1>
        <p className="text-sm md:text-base text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
          ADBTalent is an industry-grade talent exhibition pipeline built to
          authenticate, structuralize, and elevate next-generation web
          developers, systems administrators, and cloud engineering
          practitioners.
        </p>
      </div>

      {/* CORE VALUE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[#1d4ed8] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#0d1323] flex items-center justify-center transition-colors group-hover:bg-blue-50 group-hover:text-[#1d4ed8] group-hover:border-blue-100 shrink-0">
                {value.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-[#0d1323] tracking-tight group-hover:text-[#1d4ed8] transition-colors">
                  {value.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MISSION SPLIT BLOCK */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8]" />

        <div className="lg:col-span-7 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#0d1323] tracking-tight">
            Bridging Academic Potential and Production Reality
          </h2>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Traditional resumes fail to showcase the true capabilities of modern
            technicians. Grades do not reflect a developer's ability to
            orchestrate an Elysia or Bun runtime server, nor do they prove a
            sysadmin's competence in hardening Nginx boundaries and Dovecot
            protocols.
          </p>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            ADBTalent changes the paradigm. We provide an authenticated sandbox
            where developers display production-ready portfolios, analytics
            matrices, and system integrations—making capabilities instantly
            readable to global technical recruiters.
          </p>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50/60 rounded-xl border border-slate-100 space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <LuUsers size={12} className="text-[#1d4ed8]" /> Network
            </div>
            <p className="text-xl font-black text-[#0d1323]">Enterprise</p>
            <p className="text-[10px] text-slate-500 font-medium">
              Ready alignment pipelines
            </p>
          </div>
          <div className="p-4 bg-slate-50/60 rounded-xl border border-slate-100 space-y-1">
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <LuGlobe size={12} className="text-[#1d4ed8]" /> Framework
            </div>
            <p className="text-xl font-black text-[#0d1323]">Modern Stack</p>
            <p className="text-[10px] text-slate-500 font-medium">
              React, TypeScript & Cloud
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER CALL-TO-ACTION */}
      <div className="text-center space-y-4 max-w-md mx-auto pt-4">
        <h3 className="text-base font-bold text-[#0d1323] tracking-tight">
          Want to audit our technical infrastructure blueprints?
        </h3>
        <p className="text-xs text-slate-400 font-normal leading-relaxed">
          Read through our documented features ecosystem or check active
          deployments directly in the live system pool directory.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0d1323] text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors cursor-pointer shadow-xs">
            Explore Capabilities <LuCompass size={14} />
          </button>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-xl hover:bg-slate-50 hover:text-[#0d1323] hover:border-slate-300 transition-all cursor-pointer">
            View Live Directory <LuExternalLink size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
