import { useState, useEffect } from "react";
import {
  getUserDashboard,
  approveVerify,
  rejectVerify,
  editTalent,
} from "../../services/admin-service";
import { useNotification } from "../../hooks/use-notification";
import LoadingSpinner from "../../components/common/loading-spinner";
import {
  LuUsers,
  LuFileCheck,
  LuTrendingUp,
  LuSearch,
  LuFilter,
  LuPlus,
  LuCheck,
  LuX,
  LuBuilding2,
  LuSave,
} from "react-icons/lu";

function DashboardAdmin() {
  const [data, setData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [editForm, setEditForm] = useState({
    id: "",
    fullName: "",
    title: "",
    isVerified: false,
  });
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const { notify } = useNotification();

  useEffect(() => {
    let isMounted = true;

    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        const res = await getUserDashboard();

        if (res.status === "success" && isMounted) {
          setData(res.data);
        }
      } catch (err) {
        if (!isMounted) return;

        const message =
          err.response?.data?.message ||
          "Something went wrong. Please try again.";

        notify({
          type: "error",
          message,
        });
        console.error("Failed fetch data", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchDashboardData();

    return () => {
      isMounted = false;
    };
  }, [notify]);

  const handleApprove = async (id) => {
    try {
      const res = await approveVerify(id);
      if (res.status === "success") {
        setData((prev) => ({
          ...prev,
          pendingApprovals: prev.pendingApprovals.filter(
            (item) => item._id !== id,
          ),
        }));
      }
    } catch (err) {
      console.error("Error approving profile:", err);
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await rejectVerify(id);
      if (res.status === "success") {
        setData((prev) => ({
          ...prev,
          pendingApprovals: prev.pendingApprovals.filter(
            (item) => item._id !== id,
          ),
        }));
      }
    } catch (err) {
      console.error("Error approving profile:", err);
    }
  };

  const openEditModal = (talent) => {
    setSelectedTalent(talent);
    setEditForm({
      id: talent._id,
      fullName: talent.fullName || "",
      title: talent.profile?.title || "",
      isVerified: talent.isVerified || false,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await editTalent(editForm.id, {
        fullName: editForm.fullName,
        title: editForm.title,
        isVerified: editForm.isVerified,
      });

      if (res.status === "success") {
        setData((prev) => ({
          ...prev,
          talents: prev.talents.map((t) =>
            t._id === editForm.id ? res.updatedUser : t,
          ),
        }));

        setSelectedTalent(null);

        notify({
          type: "success",
          message: "Update talent successfully",
        });
      }
    } catch (err) {
      console.error("Failed to update talent", err);
    }
  };

  const filteredTalents = data?.talents?.filter((talent) => {
    const matchesSearch = talent.fullName
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());

    let matchesStatus = true;
    if (statusFilter === "verified") {
      matchesStatus = talent.isVerified === true;
    } else if (statusFilter === "pending") {
      matchesStatus = talent.isVerified === false;
    }

    return matchesSearch && matchesStatus;
  });

  if (isLoading) {
    return (
      <LoadingSpinner
        size="md"
        label="Loading..."
        className="min-h-145 h-full text-primary"
      />
    );
  }

  const stats = [
    {
      label: "Total Students",
      value: data?.stats?.totalStudents || 0,
      icon: LuUsers,
      change: "Live sync database",
    },
    {
      label: "Verified CVs",
      value: data?.stats?.verifiedCVs || 0,
      icon: LuFileCheck,
      change: "Approved portfolios",
    },
    {
      label: "Active Partners",
      value: data?.stats?.activePartners || 0,
      icon: LuBuilding2,
      change: "Hiring entities",
    },
    {
      label: "Placement Rate",
      value: "78.4%",
      icon: LuTrendingUp,
      change: "Platform average",
    },
  ];

  return (
    <div className="flex-1 flex flex-col lg:flex-row min-w-0 bg-slate-50 min-h-screen">
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 md:space-y-8 overflow-y-auto">
        {selectedTalent && (
          <div className="fixed inset-0 h-full bg-black/40 backdrop-blur-xs z-99 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div>
                  <h3 className="text-sm font-bold text-[#0d1323]">
                    Edit Student Profile
                  </h3>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Modify credentials for @{selectedTalent.username}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTalent(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  <LuX size={16} />
                </button>
              </div>

              <form onSubmit={handleEditSubmit} className="p-5 space-y-4">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editForm.fullName}
                    onChange={(e) =>
                      setEditForm({ ...editForm, fullName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white text-slate-700 font-semibold transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Specialization / Title
                  </label>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white text-slate-700 font-semibold transition-all"
                    placeholder="e.g. Full-Stack Developer"
                  />
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#0d1323]">
                      Profile Verification
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      Grant verified badge status
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={editForm.isVerified}
                    onChange={(e) =>
                      setEditForm({ ...editForm, isVerified: e.target.checked })
                    }
                    className="w-4 h-4 rounded-sm text-[#1d4ed8] border-slate-300 focus:ring-[#1d4ed8] cursor-pointer"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setSelectedTalent(null)}
                    className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-50 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1d4ed8] hover:bg-[#0d1323] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer"
                  >
                    <LuSave size={14} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-[#0d1323] tracking-tight">
              Management Suite
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-0.5">
              Welcome back, Admin. Monitor platform growth here.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0d1323] hover:bg-[#1d4ed8] text-white text-xs md:text-sm font-bold rounded-xl transition-all shadow-xs active:scale-95 cursor-pointer self-start sm:self-auto">
            <LuPlus size={16} />
            <span>Broadcast Job Vacancy</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-2xs flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 text-[#0d1323] border border-slate-100">
                    <IconComponent size={18} />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-2xl md:text-3xl font-black text-[#0d1323] tracking-tight">
                    {item.value}
                  </span>
                  <p className="text-[11px] font-semibold mt-1 text-slate-400">
                    {item.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/60 shadow-2xs overflow-hidden">
          <div className="p-4 md:p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <LuSearch
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                placeholder="Search talents by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1d4ed8] focus:bg-white transition-all text-slate-700 font-medium"
              />
            </div>
            <div className="relative w-full sm:w-auto">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  statusFilter !== "all"
                    ? "border-[#1d4ed8] bg-blue-50 text-[#1d4ed8]"
                    : "border-slate-200 hover:border-slate-300 text-slate-600 bg-white"
                }`}
              >
                <LuFilter size={14} />
                <span>
                  {statusFilter === "all" && "Filters"}
                  {statusFilter === "verified" && "Status: Verified"}
                  {statusFilter === "pending" && "Status: Pending"}
                </span>
              </button>

              {showFilterDropdown && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowFilterDropdown(false)}
                  />

                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200/60 rounded-xl shadow-lg py-1 z-20 animate-in fade-in slide-in-from-top-2 duration-150">
                    <span className="block px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Filter by Status
                    </span>

                    <button
                      onClick={() => {
                        setStatusFilter("all");
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold block hover:bg-slate-50 ${statusFilter === "all" ? "text-[#1d4ed8] bg-blue-50/50" : "text-slate-600"}`}
                    >
                      All Talents
                    </button>

                    <button
                      onClick={() => {
                        setStatusFilter("verified");
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold block hover:bg-slate-50 ${statusFilter === "verified" ? "text-[#1d4ed8] bg-blue-50/50" : "text-slate-600"}`}
                    >
                      Verified Profiles
                    </button>

                    <button
                      onClick={() => {
                        setStatusFilter("pending");
                        setShowFilterDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-semibold block hover:bg-slate-50 ${statusFilter === "pending" ? "text-[#1d4ed8] bg-blue-50/50" : "text-slate-600"}`}
                    >
                      Pending Review
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-5">Student Information</th>
                  <th className="py-3 px-5">Specialization</th>
                  <th className="py-3 px-5">Status Profile</th>
                  <th className="py-3 px-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                {filteredTalents && filteredTalents.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="py-8 text-center text-xs font-medium text-slate-400"
                    >
                      No talents found matching the criteria.
                    </td>
                  </tr>
                ) : (
                  filteredTalents?.map((talent) => (
                    <tr
                      key={talent._id}
                      className="hover:bg-slate-50/50 transition-colors"
                    >
                      <td className="py-4 px-5">
                        <div className="flex flex-col">
                          <span className="font-bold text-[#0d1323] text-sm">
                            {talent.fullName}
                          </span>
                          <span className="text-[11px] text-slate-400 font-normal mt-0.5">
                            @{talent.username}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#1d4ed8] text-[11px] font-bold border border-blue-100/50">
                          {talent.profile?.title || "No Title Set"}
                        </span>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${talent.isVerified ? "bg-emerald-500" : "bg-amber-500"}`}
                          />
                          <span
                            className={`font-bold text-[11px] ${talent.isVerified ? "text-emerald-600" : "text-amber-600"}`}
                          >
                            {talent.isVerified
                              ? "Verified Profile"
                              : "Pending Review"}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-5 text-right">
                        <button
                          onClick={() => openEditModal(talent)}
                          className="text-xs font-bold text-[#1d4ed8] hover:underline cursor-pointer"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <aside className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-slate-200/60 p-4 sm:p-6 lg:p-8 shrink-0 space-y-6">
        <div>
          <h3 className="text-md font-bold text-[#0d1323] tracking-tight">
            Verification Queue
          </h3>
          <p className="text-xs font-medium text-slate-400 mt-0.5">
            Requires manual approval.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {data?.pendingApprovals?.map((item) => (
            <div
              key={item._id}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between gap-3 group hover:border-slate-200 transition-colors"
            >
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-[#0d1323] truncate">
                  {item.fullName}
                </span>
                <span className="text-[11px] font-medium text-slate-400 mt-0.5 truncate">
                  {item.profile?.title || "Fresh Graduate"} •{" "}
                  {item.profile?.location || "No Location"}
                </span>
              </div>

              <div className="flex items-center gap-2 self-end">
                <button
                  onClick={() => handleReject(item._id)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-400 hover:text-rose-500 hover:border-rose-100 transition-colors cursor-pointer"
                  title="Reject Profile"
                >
                  <LuX size={14} />
                </button>
                <button
                  onClick={() => handleApprove(item._id)}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#1d4ed8] hover:bg-[#0d1323] text-white text-[10px] font-bold transition-all cursor-pointer shadow-2xs"
                  title="Approve Profile"
                >
                  <LuCheck size={12} />
                  <span>Approve</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default DashboardAdmin;
