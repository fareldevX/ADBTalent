import {
  LuShield,
  LuLock,
  LuEye,
  LuServer,
  LuFileText,
  LuArrowUpRight,
} from "react-icons/lu";

function Privacy() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      {/* HERO HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Data Protection Boundary</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Privacy Policy &{" "}
          <span className="text-[#1d4ed8]">Data Integrity</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Last updated: June 2026. Review our strict boundaries regarding how
          technical profiles, portfolio assets, and authentication parameters
          are securely handled within our system architecture.
        </p>
      </div>

      {/* CORE PRIVACY PILLARS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuLock size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Secure Encryption
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              All credential payloads, authorization tokens, and personal data
              checkpoints are strictly encrypted at rest and in transit across
              system nodes.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuEye size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Zero-Data Sharing
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              We never monetize or distribute your full-stack repository
              configurations, email logs, or profile vectors to unverified
              third-party trackers.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuServer size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Infrastructure Isolation
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Portfolios and telemetry data operate inside isolated database
              structures protected by robust backend firewall layers and
              authorization checks.
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED POLICY SECTIONS */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-xs relative overflow-hidden space-y-8">
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8]" />

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuFileText size={14} className="text-[#1d4ed8]" />
            <span>1. Data Collection & Injection Gateway</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            When you initialize a dynamic portfolio layout, we safely ingest
            metadata tags including full names, structural training backgrounds,
            specialized tech stack preferences, and functional project
            repository links. This information is utilized strictly to render
            your enterprise identity profile and compile public analytic
            benchmark matrices.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuShield size={14} className="text-[#1d4ed8]" />
            <span>2. Role-Based Access Control (RBAC) Protection</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Personal profiles and technical metrics are shielded behind a
            unified verification framework. Public talent directory lookups are
            restricted to parameters permitted by your profile status
            visibility. Higher privilege access levels require verified
            corporate token handshakes through specialized authorization gating.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuServer size={14} className="text-[#1d4ed8]" />
            <span>3. Cookies & Analytical Telemetry</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Our infrastructure deploys lightweight local storage keys strictly
            necessary to manage session persistence, validation states, and
            interface theme consistency. We completely omit bloated telemetry
            scripts to maintain efficient page rendering execution times and
            secure privacy parameters.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuLock size={14} className="text-[#1d4ed8]" />
            <span>4. Profile Purging & Node Erasure Rights</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            You maintain absolute sovereignty over your digital records. Users
            can trigger an irreversible profile purge function directly from
            their dashboard system module to eliminate their record pipelines,
            portfolio schemas, and tracking cache structures permanently from
            our active system memory.
          </p>
        </div>
      </div>

      {/* COOKIE NOTICE / COMPLIANCE FOOTER */}
      <div className="bg-[#0d1323] rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto relative overflow-hidden shadow-md">
        <div className="space-y-4 max-w-md mx-auto relative z-10">
          <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
            Questions regarding our security architecture?
          </h3>
          <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
            If you have questions about data processing nodes, firewall
            controls, or want to audit encryption mechanisms, dispatch an
            inquiry immediately.
          </p>
          <div className="pt-1">
            <button className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 bg-transparent border-0 p-0 cursor-pointer transition-colors group">
              Contact Privacy Compliance Officers
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

export default Privacy;
