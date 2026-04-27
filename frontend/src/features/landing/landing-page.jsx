import Button from "../../components/ui/button";
import image1 from "../../assets/img/image1.png";
import image2 from "../../assets/img/image2.png";
import { FiStar, FiArrowRight, FiTrendingUp } from "react-icons/fi";
import { FaAddressCard, FaTrophy, FaBriefcase, FaCode } from "react-icons/fa";

function LandingPage() {
  return (
    <div>
      <section className="h-auto md:h-screen pb-20 md:py-16">
        <div className="max-w-300 flex items-center justify-center mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-10 md:gap-14">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 py-1 px-2 mb-6 md:mb-8 text-xs font-medium rounded-full bg-sky-100 text-secondary">
                <FiStar size={12} />
                <span>Empowering the next generation</span>
              </div>

              <h1 className="max-w-100 md:max-w-200 text-4xl sm:text-5xl md:leading-14 font-semibold mb-4 tracking-tight text-primary">
                Showcase Your True{" "}
                <span className="text-secondary italic">Student Potential</span>
              </h1>

              <p className="text-base mb-6 text-neutral">
                Build a dynamic digital CV that goes beyond grades. Highlight
                your unique experiences, projects, and achievements to connect
                with top organizational opportunities.
              </p>

              <div className="flex items-center gap-4">
                <Button
                  variant="primary"
                  size="md"
                  className="flex items-center gap-2"
                >
                  Get Started <FiArrowRight size={12} />
                </Button>
                <Button variant="secondary" size="md">
                  Explore Talent
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 items-stretch gap-4 h-full min-h-100">
              <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10">
                <img
                  src={image1}
                  alt="Students Collaborating"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 items-stretch">
                <div className="flex-1 p-6 rounded-3xl bg-primary-bg border border-[#E2E8F0] shadow-md flex flex-col justify-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center">
                    <FiTrendingUp size={16} />
                  </div>
                  <div>
                    <h4 className="text-md font-semibold text-primary">
                      Top 5% Talent
                    </h4>
                    <p className="text-sm text-neutral">Matched Instantly</p>
                  </div>
                </div>

                <div className="flex-1 rounded-3xl bg-slate-100 overflow-hidden shadow-md">
                  <img
                    src={image2}
                    alt="Woman Typing Illustration"
                    className="w-full h-full object-cover object-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-bg py-20">
        <div className="max-w-300 h-auto lg:h-screen flex flex-col items-center justify-center mx-auto py-8 px-4">
          <div className="flex flex-col text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Build a Comprehensive Digital CV
            </h2>
            <p className="max-w-200 text-base text-neutral">
              Move beyond traditional resumes. Talenta allows you to construct a
              multifaceted profile that accurately reflects your capabilities,
              readiness, and drive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 items-stretch">
            <div className="flex flex-col gap-4">
              <div className="flex-1 flex flex-col items-start p-8 rounded-xl bg-surface shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease">
                <div className="flex items-center p-2 mb-4 rounded-md bg-primary text-white">
                  <FaAddressCard size={20} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Core Biodata
                </h3>
                <p className="text-base text-neutral">
                  Establish your professional identity with a verified academic
                  background, skills matrix, and career objectives tailored to
                  your target industry.
                </p>
              </div>

              <div className="flex-1 flex flex-col items-start p-8 rounded-xl bg-surface shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease">
                <div className="flex items-center p-2 mb-4 rounded-md bg-[#064e3b] text-[#0ba87e]">
                  <FaTrophy size={20} />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Awards & Recognition
                </h3>
                <p className="text-base text-neutral">
                  Highlight academic honors, hackathon victories, and leadership
                  awards to differentiate your profile in the competitive talent
                  pool.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex-1 flex flex-col items-stretch p-8 rounded-xl bg-surface shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ease">
                <div className="flex items-center justify-between">
                  <div className="flex items-center p-2 mb-4 rounded-md bg-[#2563eb] text-white">
                    <FaBriefcase size={20} />
                  </div>
                  <span className="py-0.5 px-2.5 text-xs font-medium rounded-full bg-primary-bg">
                    High Impact
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  Experience & Applied Projects
                </h3>
                <p className="max-w-150 text-base text-neutral mb-6">
                  Detail your internships, volunteer work, and academic
                  projects. Use structured portfolios to demonstrate practical
                  application of theoretical knowledge.
                </p>
                <div className="flex items-center gap-4 p-4 bg-primary-bg">
                  <div className="p-3 bg-surface text-neutral rounded-md">
                    <FaCode size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-md font-medium text-primary">
                      Data Analysis Capstone
                    </span>
                    <span className="text-sm text-neutral">
                      Python, Pandas, ML
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 rounded-xl bg-[#0f172a] shadow-sm">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to stand out?
                </h3>
                <p className="max-w-100 text-base mb-6 text-slate-300">
                  Join thousands of students already building their professional
                  future on Talenta.
                </p>
                <button className="py-3 px-4 text-sm border-none rounded-md bg-surface cursor-pointer hover:bg-surface/80 hover:-translate-y-0.5 transition-all duration-300 ease">
                  Create Your Profile
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
