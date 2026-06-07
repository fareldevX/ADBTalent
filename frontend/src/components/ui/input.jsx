const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="block text-xs font-bold text-slate-700">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-600/5 outline-none transition-all text-sm"
    />
  </div>
);

export default Input;
