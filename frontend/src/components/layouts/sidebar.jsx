import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuLogOut } from "react-icons/lu";

function Sidebar() {
  return (
    <aside className="w-64 h-screen p-4 bg-secondary-bg border-r border-semibold flex flex-col">
      <div className="flex items-center gap-3 p-4 mb-8">
        <div className="flex items-center py-2 px-4 rounded-xl bg-primary text-surface">
          <span className="text-lg font-bold">T</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-bold text-primary">Talent Admin</h1>
          <p className="text-sm text-neutral">Management Suite</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        <NavLink className="flex items-center gap-4 py-2.5 px-3 text-sm font-medium border border-semibold rounded-md bg-surface text-inverse-text-active">
          <LuLayoutDashboard size={18} />
          Dashboard
        </NavLink>
      </nav>

      <div className="pt-4 px-3 border-t border-semibold">
        <button className="flex items-center gap-4 text-sm font-medium text-inverse-text hover:text-primary transition-colors">
          <LuLogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
