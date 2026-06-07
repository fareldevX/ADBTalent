import {
  LuScale,
  LuUserX,
  LuShieldAlert,
  LuTerminal,
  LuFileSpreadsheet,
  LuArrowUpRight,
} from "react-icons/lu";

function TermsOfService() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      {/* HERO HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Legal Framework Boundary</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Terms of <span className="text-[#1d4ed8]">Service Agreement</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Last updated: June 2026. Please read these terms carefully before
          initializing your dynamic digital profile pipeline, hosting source
          assets, or parsing data structures inside our global platform network.
        </p>
      </div>

      {/* CORE TERMS OBJECTIVES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuTerminal size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Acceptable Code Deployments
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Users are strictly authorized to display production-ready
              portfolios, authentic full-stack frameworks, configurations, and
              verified technical credentials.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuUserX size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Account Sovereignty
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Maintaining data precision, protecting local system authentication
              access keys, and preventing illegitimate system injection falls
              completely under user accountability.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuShieldAlert size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Zero-Tolerance Exploit
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Any coordinated database infrastructure subversion, microservice
              cross-site boundary bypass, or scrapers targeting talent records
              triggers immediate permanent eviction.
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED AGREEMENT SECTIONS */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-xs relative overflow-hidden space-y-8">
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8]" />

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuScale size={14} className="text-[#1d4ed8]" />
            <span>1. Access Provisioning & Platform Node Authorization</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            By accessing or injecting configuration states into the system
            environment, you validate compliance boundaries with this structural
            code framework. We provision non-exclusive, revocable, isolated
            workspace allocations intended strictly to compile talent
            portfolios, organize structural tech stack indexes, and interact
            with matching directory systems.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuTerminal size={14} className="text-[#1d4ed8]" />
            <span>2. Intellectual Property Rights & Content Assets</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            You retain complete, undisputed ownership rights over your personal
            source repositories, portfolio logic scripts, and original textual
            descriptions. By saving asset states into our public-facing pipeline
            nodes, you grant the runtime platform a localized license parameter
            to render, index, and organize this technical metadata information
            safely within our talent system viewports.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuShieldAlert size={14} className="text-[#1d4ed8]" />
            <span>
              3. Automated Execution Limits & API Threshold Boundaries
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Users must not perform heavy systematic extraction techniques,
            automated crawling requests, or load-injection routines that disrupt
            standard server lifecycle runtimes. Portfolios interfacing with
            secondary compilation APIs (such as automated grading environments)
            must strictly execute authenticated, benign logic inputs within
            regular bandwidth thresholds.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuFileSpreadsheet size={14} className="text-[#1d4ed8]" />
            <span>
              4. Disclaimer of Architectural Warranties & Liability Ceilings
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            The database platform infrastructure performs data compilation
            completely "As Is" and "As Available" without binding guarantees. We
            do not guarantee continuous system uptime or immediate placement
            outcomes. The ecosystem architecture assumes zero liability for
            unexpected pipeline dropouts, network socket degradation, or remote
            code configuration loss.
          </p>
        </div>
      </div>

      {/* DISPATCH/LEGAL FOOTER */}
      <div className="bg-[#0d1323] rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto relative overflow-hidden shadow-md">
        <div className="space-y-4 max-w-md mx-auto relative z-10">
          <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
            Require formal corporate governance clarification?
          </h3>
          <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
            If you represent a corporate network node requiring custom
            compliance parameters, structural liability alignments, or isolated
            service-level SLAs, initialize a connection request.
          </p>
          <div className="pt-1">
            <button className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 bg-transparent border-0 p-0 cursor-pointer transition-colors group">
              Contact Enterprise General Counsel
              <LuArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
