import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

function Pagination({ totalPages, currentPage, setCurrentPage }) {
  return (
    <div className="flex items-center justify-end gap-2 mt-4">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30"
      >
        <LuChevronLeft />
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${currentPage === i + 1 ? "bg-primary text-white" : "text-slate-400"}`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg hover:bg-slate-100 disabled:opacity-30"
      >
        <LuChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
