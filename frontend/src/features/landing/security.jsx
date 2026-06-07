import {
  LuShieldAlert,
  LuCheck,
  LuKey,
  LuNetwork,
  LuRadio,
  LuArrowUpRight,
} from "react-icons/lu";

function SecurityData() {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-16 bg-slate-50/30 min-h-screen">
      {/* HERO HEADER */}
      <div className="text-center max-w-2xl mx-auto space-y-4 pt-12">
        <div className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-[#1d4ed8] tracking-wide">
          <span>Infrastructure Hardening Report</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
          Data Security &{" "}
          <span className="text-[#1d4ed8]">Perimeter Defense</span>
        </h1>
        <p className="text-sm text-slate-500 leading-relaxed font-normal">
          Explore the defense-in-depth architectural measures engineered to
          safeguard core user records, full-stack deployment telemetry, and
          cloud integration boundaries.
        </p>
      </div>

      {/* THREE COLUMN ARCHITECTURE TIERS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuKey size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Identity & Access Gating
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Enforcing strong cryptographic password hashing, strict
              authorization controls, and token-based state verification to
              prevent unauthorized access pipelines.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuNetwork size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Network Layer Hardening
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Deploying reverse-proxy routing layouts and automated
              rate-limiting policies to isolate core services from multi-vector
              malicious traffic injection.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 text-[#1d4ed8] flex items-center justify-center">
            <LuRadio size={20} />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-sm font-bold text-[#0d1323] tracking-tight">
              Continuous Node Auditing
            </h3>
            <p className="text-xs text-slate-500 font-normal leading-relaxed">
              Real-time transaction tracking and isolated execution runtime
              sandboxes ensure foreign script modules operate safely without
              impacting the main system schema.
            </p>
          </div>
        </div>
      </div>

      {/* DETAILED INFRASTRUCTURE PROTOCOLS */}
      <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-10 shadow-xs relative overflow-hidden space-y-8">
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#1d4ed8]" />

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuCheck size={14} className="text-[#1d4ed8]" />
            <span>1. Database Encryption & Payload Persistence</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            All user attributes, system analytics metadata, and private
            portfolio mappings are persistently compiled inside hardened
            database matrices. Structural fields are encrypted using
            authenticated standards to guarantee data confidentiality. Automated
            snapshots are compiled daily into secure storage layers to prevent
            accidental loss.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuShieldAlert size={14} className="text-[#1d4ed8]" />
            <span>2. Sandbox Execution & API Isolation</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Automated code testing functions or external compilation pipelines
            (such as evaluating live project logic inputs) interface with
            decoupled execution networks. This isolates untrusted inputs from
            the core environment architecture, neutralizing potential path
            traversal or remote shell commands.
          </p>
        </div>

        <div className="space-y-3 pt-4 border-t border-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0d1323] uppercase tracking-wider">
            <LuNetwork size={14} className="text-[#1d4ed8]" />
            <span>3. Session Token Governance & Token Expiry</span>
          </div>
          <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed">
            Authentication sessions leverage signed token payloads configured
            with explicit, low-duration validation parameters. Cross-Origin
            Resource Sharing (CORS) rules strictly whitelist trusted web
            clients, blocking unexpected API requests attempting to extract
            information from unauthorized endpoints.
          </p>
        </div>
      </div>

      {/* SECURITY COMPLIANCE CTA */}
      <div className="bg-[#0d1323] rounded-2xl p-6 md:p-8 text-center max-w-2xl mx-auto relative overflow-hidden shadow-md">
        <div className="space-y-4 max-w-md mx-auto relative z-10">
          <h3 className="text-sm md:text-base font-bold text-white tracking-tight">
            Encountered a potential zero-day vulnerability?
          </h3>
          <p className="text-[11px] text-slate-400 font-normal leading-relaxed">
            We prioritize strict system validation. If you discover an
            algorithmic defect or network boundary leak within our platform,
            report the coordinates immediately to our engineering response
            group.
          </p>
          <div className="pt-1">
            <button className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 bg-transparent border-0 p-0 cursor-pointer transition-colors group">
              Open a Secure Disclosure Ticket
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

export default SecurityData;
