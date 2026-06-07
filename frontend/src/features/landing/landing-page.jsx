import { useAccount } from "../../hooks/use-account";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/button";
import { FiStar, FiArrowRight, FiTrendingUp } from "react-icons/fi";
import {
  LuFileBadge,
  LuTrophy,
  LuBriefcase,
  LuCode,
  LuArrowUpRight,
} from "react-icons/lu";

function LandingPage() {
  const { account } = useAccount();
  const navigate = useNavigate();

  const handleCTA = () => {
    if (account) {
      if (account.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/talent");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <section className="relative min-h-[85vh] bg-white flex items-center justify-center py-20 overflow-hidden isolate">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-160 h-120 bg-linear-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-[100px] animate-pulse duration-8000" />
          <div className="absolute top-2/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-linear-to-tr from-indigo-300/25 via-purple-400/20 to-transparent rounded-full blur-[120px] animate-pulse duration-12000 delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-linear-to-r from-blue-100/40 via-slate-100/50 to-indigo-100/30 rounded-full blur-[90px] animate-pulse duration-10000 delay-1000" />
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200/60 to-transparent" />
        </div>

        <div className="max-w-4xl w-full mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-white/80 backdrop-blur-xs border border-slate-200/80 text-xs font-semibold text-slate-600 tracking-wide mx-auto shadow-xs">
            <FiStar size={13} className="text-[#1d4ed8] fill-blue-50" />
            <span>Empowering the next generation of creators</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0d1323] tracking-tight leading-[1.15] max-w-3xl mx-auto">
              Showcase Your True{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#1d4ed8] via-blue-600 to-indigo-600">
                Talent Potential
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-2xl mx-auto">
              Build a dynamic digital portfolio that goes beyond traditional
              metrics. Highlight your unique full-stack projects, core
              experiences, and verified achievements to connect with global
              industry opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
            <button
              onClick={() =>
                account
                  ? account.user.role === "admin"
                    ? navigate("/admin")
                    : navigate("/talent")
                  : navigate("/login")
              }
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary/90 active:bg-primary/85 transition-all shadow-md shadow-blue-500/10 group cursor-pointer"
            >
              Get Started
              <FiArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            <button
              onClick={() => navigate("/talent-pool")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white/80 backdrop-blur-xs border border-slate-200 text-[#0d1323] text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-colors cursor-pointer shadow-xs"
            >
              Explore Talent Pool
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24 lg:py-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1323] tracking-tight">
              Build a Comprehensive Digital CV
            </h2>
            <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              Move beyond traditional resumes. ADBTalent allows you to construct
              a multifaceted profile that accurately reflects your capabilities,
              readiness, and drive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              {/* Core Biodata */}
              <div className="flex-1 flex flex-col items-start p-6 md:p-8 rounded-3xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center p-3 mb-5 rounded-2xl bg-blue-50 text-[#1d4ed8] group-hover:bg-[#1d4ed8] group-hover:text-white transition-colors duration-300">
                  <LuFileBadge size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0d1323] mb-3">
                  Core Biodata
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  Establish your professional identity with a verified academic
                  background, skills matrix, and career objectives tailored to
                  your target industry.
                </p>
              </div>

              <div className="flex-1 flex flex-col items-start p-6 md:p-8 rounded-3xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center p-3 mb-5 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <LuTrophy size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#0d1323] mb-3">
                  Awards & Recognition
                </h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                  Highlight academic honors, hackathon victories, and leadership
                  awards to differentiate your profile in the competitive talent
                  pool.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
              <div className="flex-1 flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-white border border-slate-200/60 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center p-3 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <LuBriefcase size={22} />
                    </div>
                    <span className="py-1 px-3 text-xs font-bold rounded-full bg-slate-100 text-slate-700 tracking-wide border border-slate-200/40">
                      High Impact
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0d1323] mb-3">
                    Experience & Applied Projects
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
                    Detail your internships, volunteer work, and academic
                    projects. Use structured portfolios to demonstrate practical
                    application of theoretical knowledge.
                  </p>
                </div>

                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="p-3 bg-white text-[#1d4ed8] rounded-xl border border-slate-200/60 shadow-2xs shrink-0">
                    <LuCode size={20} />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-sm font-bold text-[#0d1323] truncate">
                      Data Analysis Capstone
                    </span>
                    <span className="text-xs font-medium text-slate-400 truncate mt-0.5">
                      Python, Pandas, ML
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 md:p-8 rounded-3xl bg-[#0d1323] shadow-lg relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1d4ed8] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3 z-10">
                  Ready to stand out?
                </h3>
                <p className="max-w-xs text-sm text-slate-400 font-medium leading-relaxed mb-6 z-10">
                  Join thousands of students already building their professional
                  future on ADBTalent.
                </p>

                <button
                  onClick={handleCTA}
                  className="z-10 flex items-center gap-2 py-3 px-6 text-xs md:text-sm font-bold rounded-xl bg-white hover:bg-slate-50 text-[#0d1323] shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <span>
                    {account ? "Go to Dashboard" : "Create Your Profile"}
                  </span>
                  <LuArrowUpRight size={16} className="text-[#1d4ed8]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
