import { LuCheck } from "react-icons/lu";

const InputWithCheck = ({ label, value, ...props }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label className="text-xs font-bold text-slate-700">{label}</label>
      {value && <LuCheck className="text-green-500" size={12} />}
    </div>
    <input
      {...props}
      value={value}
      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-600/5 outline-none transition-all text-sm"
    />
  </div>
);

export default InputWithCheck;
