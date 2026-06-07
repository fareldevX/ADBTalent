import { Link } from "react-router-dom";
import { LuGlobe, LuGithub, LuLinkedin, LuTwitter } from "react-icons/lu";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-black text-[#0d1323] tracking-tight">
                ADB<span className="text-[#1d4ed8]">Talent.</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed font-normal">
              Connecting exceptional developers, sysadmins, and cloud
              practitioners with leading global technology industries.
            </p>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-[#0d1323] uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/talent-pool"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Talent Pool
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/showcase"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-[#0d1323] uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3.5">
            <h4 className="text-xs font-bold text-[#0d1323] uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className="text-sm text-slate-500 hover:text-[#1d4ed8] transition-colors font-normal"
                >
                  Security Data
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-xs font-normal text-slate-400 order-3 sm:order-1">
            <span>&copy; {currentYear} ADBTalent.</span>
            <span className="hidden sm:inline">|</span>
            <span>Engineering Human Potential. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1.5 order-2">
            <LuGlobe size={13} className="text-slate-400" />
            <span>Indonesia (English)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 order-1 sm:order-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#0d1323] transition-colors"
            >
              <LuGithub size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1d4ed8] transition-colors"
            >
              <LuLinkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1d4ed8] transition-colors"
            >
              <LuTwitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
