import { useAccount } from "../../hooks/use-account";
import { LuAlignLeft, LuShieldCheck } from "react-icons/lu";

function TopNavbar({ onMenuClick }) {
  const { account } = useAccount();
  const isAdmin = account?.user?.role === "admin";

  return (
    <nav className="fixed top-0 left-0 border-b border-slate-100 w-full h-16 bg-white z-50 flex items-center justify-between px-4 sm:px-6 md:hidden shadow-xs">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-[#1d4ed8] flex items-center justify-center shadow-sm rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="w-3 h-3 bg-white rounded-xs -rotate-3" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base font-black tracking-tight text-[#0d1323]">
            ADB<span className="text-[#1d4ed8]">Talent</span>
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
              isAdmin
                ? "bg-amber-50 text-amber-700 border-amber-100 flex items-center gap-1"
                : "bg-slate-50 text-slate-600 border-slate-200/60"
            }`}
          >
            {isAdmin && <LuShieldCheck size={10} />}
            {isAdmin ? "Admin" : "Portal"}
          </span>
        </div>
      </div>

      <button
        onClick={onMenuClick}
        className="p-2 text-slate-500 hover:text-[#0d1323] hover:bg-slate-50 rounded-xl transition-all active:scale-95 cursor-pointer"
        title="Toggle sidebar"
      >
        <LuAlignLeft size={22} />
      </button>
    </nav>
  );
}

export default TopNavbar;
