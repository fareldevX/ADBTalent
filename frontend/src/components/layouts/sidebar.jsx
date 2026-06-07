import { NavLink, useNavigate } from "react-router-dom";
import { useAccount } from "../../hooks/use-account";
import {
  LuLayoutDashboard,
  LuUser,
  LuSettings,
  LuLogOut,
  LuAppWindow,
  LuX,
} from "react-icons/lu";

function Sidebar({ isOpen = true, onClose }) {
  const navigate = useNavigate();

  const { account, setAccount } = useAccount();

  const isAdmin = account.user.role === "admin";
  const navItems = isAdmin
    ? [{ name: "Dashboard", href: "/admin", icon: LuLayoutDashboard }]
    : [
        { name: "Talent", href: "/talent", icon: LuUser },
        { name: "Settings", href: "/talent/settings", icon: LuSettings },
      ];

  const handleLogout = () => {
    setAccount(null);
    localStorage.removeItem("accessToken");
  };

  const handleNavClick = () => {
    if (onClose && window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed md:static top-16 md:top-0 left-0 right-0 md:w-64 h-[calc(100vh-64px)] md:h-screen p-4 bg-secondary-bg border-r border-semibold flex flex-col transition-all duration-300 ease-in-out md:translate-x-0 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="flex items-center py-2 px-4 rounded-xl bg-primary text-surface">
              <span className="text-lg font-bold">T</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold text-primary">
                {isAdmin ? "Talent Admin" : "Talent"}
              </h1>
              <p className="text-sm text-neutral">
                {isAdmin ? "Management Suite" : "Student Portal"}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="md:hidden p-1 hover:bg-surface rounded-lg transition-colors cursor-pointer"
          >
            <LuX size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end
              onClick={handleNavClick}
              className={({ isActive }) =>
                `flex items-center gap-4 py-2.5 px-3 text-sm font-medium ${isActive ? "border border-semibold rounded-md bg-surface text-inverse-text-active" : "rounded-md hover:bg-surface"} cursor-pointer transition-colors duration-300 ease`
              }
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-col gap-3 pt-4 px-3">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-4 text-sm font-medium text-inverse-text hover:text-primary transition-colors cursor-pointer"
          >
            <LuAppWindow size={18} />
            View Website
          </button>

          <div className="pt-3 border-t border-semibold">
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 text-sm font-medium text-inverse-text hover:text-primary transition-colors cursor-pointer"
            >
              <LuLogOut size={18} />
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
