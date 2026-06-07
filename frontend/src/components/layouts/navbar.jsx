import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAccount } from "../../hooks/use-account";
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { account } = useAccount();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 border-b border-slate-100 h-16 bg-white/80 backdrop-blur-md z-50 shadow-xs">
      <div className="max-w-7xl h-full mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl md:text-2xl font-black text-[#0d1323] tracking-tight shrink-0"
        >
          ADB<span className="text-[#1d4ed8]">Talent.</span>
        </Link>

        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLinks />
        </div>

        <div className="flex items-center gap-3">
          <Link
            to={
              account
                ? account.user.role === "admin"
                  ? "/admin"
                  : "/talent"
                : "/login"
            }
            className="font-bold rounded-xl transition-all duration-200 cursor-pointer bg-primary text-white hover:bg-primary/85 px-4 py-2 text-xs md:text-sm shadow-xs active:scale-95"
          >
            {account ? "Dashboard" : "Log In"}
          </Link>

          <button
            className="md:hidden p-2 text-slate-500 hover:text-[#0d1323] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <LuX size={20} /> : <LuMenu size={20} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-16 right-4 w-56 bg-white border border-slate-100 shadow-xl rounded-2xl p-1.5 z-50 transition-all duration-300 origin-top-right ${
            isOpen
              ? "opacity-100 translate-y-2 scale-100"
              : "opacity-0 translate-y-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1">
            <NavLinks onClick={toggleMenu} isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLinks = ({ onClick, isMobile }) => {
  const linkClass = ({ isActive }) => {
    if (isMobile) {
      return `block w-full text-left text-sm font-bold px-4 py-3 rounded-xl transition-all
        ${isActive ? "bg-[#1d4ed8] text-white" : "text-slate-600 hover:bg-slate-50 hover:text-[#0d1323]"}`;
    }

    return `relative text-sm font-bold px-3 py-2 text-slate-500 hover:text-[#0d1323] transition-colors duration-200 h-16 flex items-center
      ${isActive ? "text-[#1d4ed8] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1d4ed8]" : ""}`;
  };

  return (
    <>
      <NavLink to="/" onClick={onClick} className={linkClass}>
        Solutions
      </NavLink>
      <NavLink to="/talent-pool" onClick={onClick} className={linkClass}>
        Talent Pool
      </NavLink>
      <NavLink to="/resources" onClick={onClick} className={linkClass}>
        Resources
      </NavLink>
    </>
  );
};

export default Navbar;
