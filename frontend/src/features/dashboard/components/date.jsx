function Date({
  label,
  category,
  categoryObj,
  index,
  field,
  handleArrayChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold text-slate-700">{label}</label>
      <input
        type="date"
        value={categoryObj[field] ? categoryObj[field].split("T")[0] : ""}
        disabled={field === "endDate" && categoryObj.isCurrent}
        onChange={(e) =>
          handleArrayChange(category, index, field, e.target.value)
        }
        className={`text-sm px-4 py-3 bg-white border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-primary 
          ${
            field === "endDate" && categoryObj.isCurrent
              ? "bg-slate-100 text-slate-400 border-slate-200"
              : "bg-white border-slate-200"
          }
          `}
      />
    </div>
  );
}

export default Date;
