function Current({ category, categoryObj, index, handleArrayChange }) {
  return (
    <div className="col-span-2 flex items-center gap-3 mt-2 ml-2">
      <input
        type="checkbox"
        id={`current-${index}`}
        checked={categoryObj.isCurrent}
        onChange={(e) =>
          handleArrayChange(category, index, "isCurrent", e.target.checked)
        }
        className="w-4 h-4 rounded border-slate-300 text-white focus:ring-primary"
      />
      <label
        htmlFor={`current-${index}`}
        className="text-xs text-slate-600 font-medium"
      >
        I am currently working on it
      </label>
    </div>
  );
}

export default Current;
