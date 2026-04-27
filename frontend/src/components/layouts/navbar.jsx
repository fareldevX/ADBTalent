import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/button";
import { FaBars } from "react-icons/fa";
import { FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 border-b border-subtle h-16 bg-surface/60 backdrop-blur-md shadow-md z-9999">
      <div className="max-w-300 h-full mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-[1.2rem] md:text-2xl font-bold text-primary"
        >
          ADBTalent.
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="font-medium rounded-md transition-colors duration-200 cursor-pointer bg-primary text-white hover:bg-primary/80 px-4 py-2.5 text-sm"
          >
            Sign In
          </Link>
          <button
            className="md:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <div
          className={`md:hidden absolute top-18 right-3 w-30 h-auto bg-surface shadow-xl rounded-md z-9999 ${isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-4 scale-90 pointer-events-none"} transition-all duration-300 ease`}
        >
          <div className="flex flex-col p-1 gap-1">
            <NavLinks onClick={toggleMenu} isMobile />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavLinks = ({ onClick, isMobile }) => {
  const linkClass = ({ isActive }) => `
    relative text-sm font-medium p-2.5 transition-colors duration-300
    ${isMobile && isActive ? "text-white bg-primary rounded-md" : "text-neutral hover:text-primary"}
    ${isActive ? "text-primary after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.75 after:bg-primary" : ""}
  `;

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
