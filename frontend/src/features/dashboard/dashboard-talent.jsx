import { useState, useMemo } from "react";
import { useAccount } from "../../hooks/use-account";
import { calculateCompletion } from "../../utils/calculateCompletion";
import { calculateRecentStats } from "../../utils/calculateStats";
import { getPendingTasks } from "../../utils/getPendingTasks";
import TaskModal from "./components/task-modal";
import NotificationModal from "./components/notification-modal";
import {
  LuBell,
  LuBriefcase,
  LuMedal,
  LuAppWindow,
  LuCircle,
  LuLightbulb,
  LuCheck,
  LuTrendingUp,
} from "react-icons/lu";

function DashboardTalent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const { account } = useAccount();
  const user = account.user;

  const completion = useMemo(
    () => calculateCompletion(user.profile),
    [user.profile],
  );

  const recentStats = useMemo(
    () => calculateRecentStats(user.profile),
    [user.profile],
  );

  const allPossibleTasks = getPendingTasks(user.profile);
  const pendingTasks = allPossibleTasks.filter((t) => !t.isDone);
  const displayTasks = pendingTasks.slice(0, 2);

  const notifications = [
    {
      title: "Profile Review Completed",
      message: "Your profile has been reviewed. Great work on your portfolio!",
      timestamp: "2 hours ago",
      type: "success",
      read: false,
    },
    {
      title: "New Opportunity Available",
      message: "A new project opportunity matches your skills",
      timestamp: "5 hours ago",
      type: "info",
      read: false,
    },
    {
      title: "Certificate Verified",
      message:
        "Your AWS certification has been verified and added to your profile",
      timestamp: "1 day ago",
      type: "success",
      read: true,
    },
    {
      title: "Profile View",
      message: "Someone viewed your profile today",
      timestamp: "2 days ago",
      type: "info",
      read: true,
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-8 pt-16 md:pt-6">
      <div className="flex flex-row items-center justify-between gap-3">
        <header className="px-2 md:px-0 flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0d1323]">
            Welcome Back, {user.username}
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Here is a snapshot of your academic and professional profile.
          </p>
        </header>

        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setIsNotificationOpen(true)}
            className="relative p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer text-slate-600 border border-transparent active:scale-95"
            title="View notifications"
          >
            <LuBell size={20} />
            {pendingTasks.length > 0 && (
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
            )}
          </button>
          <img
            src={user.avatar}
            alt={
              user.role === "admin" ? "Profile Admin" : "Profile User Talent"
            }
            className="w-10 h-10 object-cover rounded-full border border-slate-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-start">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:col-span-12 gap-4 md:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm h-full flex flex-col justify-between">
              <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-4 md:gap-6">
                <div className="w-16 md:w-24 h-16 md:h-24 rounded-full overflow-hidden border border-slate-100 bg-slate-50 shrink-0 shadow-xs">
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2 flex-1">
                  <h2 className="text-xl md:text-3xl font-bold text-[#0d1323]">
                    {user.fullName}
                  </h2>
                  <p className="text-sm md:text-base text-slate-600 font-medium">
                    {user.profile.title}
                  </p>
                  {user.profile.badgeStatus &&
                    user.profile.badgeStatus.length > 0 && (
                      <div className="flex gap-2 pt-1 flex-wrap">
                        {user.profile.badgeStatus.map((badge, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-md border border-blue-100"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
              </div>

              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-slate-100">
                <div className="flex justify-between items-end mb-3">
                  <span className="text-xs md:text-sm font-bold text-slate-800">
                    Profile Completion
                  </span>
                  <span className="text-lg md:text-2xl font-bold text-[#0d1323]">
                    {completion}%
                  </span>
                </div>
                <div className="w-full bg-blue-50 rounded-full h-3 border border-blue-100/50">
                  <div
                    className="bg-[#1d4ed8] h-full rounded-full transition-all duration-500"
                    style={{ width: `${completion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-[#0d1323] text-white p-6 rounded-3xl shadow-sm border border-slate-800 flex flex-col h-full">
              <div className="flex items-center gap-2 mb-6 text-emerald-400">
                <LuLightbulb className="w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Next Steps
                </h3>
              </div>

              <div className="space-y-4 flex-1">
                {pendingTasks.length > 0 ? (
                  displayTasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <LuCircle
                        className="text-emerald-400 mt-1 shrink-0"
                        size={20}
                      />
                      <div className="min-w-0 flex-1">
                        <p className="font-bold text-sm wrap-break-words">
                          {task.title}
                        </p>
                        <p className="text-xs text-slate-400 wrap-break-words mt-0.5">
                          {task.desc}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-4">
                    <LuCheck className="text-emerald-400 mb-2" size={40} />
                    <p className="font-bold text-sm">All caught up!</p>
                    <p className="text-xs text-slate-400 mt-1">
                      Your profile is looking great.
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 py-3 bg-white hover:bg-slate-50 text-[#0d1323] font-bold rounded-2xl transition-all cursor-pointer text-sm active:scale-[0.98]"
              >
                View All Tasks
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:col-span-12 gap-4 md:gap-6 lg:gap-8">
          <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <LuAppWindow size={20} />
              </div>
              {recentStats.projectsRecent > 0 && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <LuTrendingUp size={12} />+{recentStats.projectsRecent} this
                  term
                </span>
              )}
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">
                Total Projects
              </p>
              <h4 className="text-3xl md:text-4xl font-bold text-[#0d1323]">
                {user.profile.projects.length}
              </h4>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <LuMedal size={20} />
              </div>
              {recentStats.awardRecent > 0 && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <LuTrendingUp size={12} />+{recentStats.awardRecent} this term
                </span>
              )}
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">
                Total Awards
              </p>
              <h4 className="text-3xl md:text-4xl font-bold text-[#0d1323]">
                {user.profile.awards.length}
              </h4>
            </div>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <LuBriefcase size={20} />
              </div>
              {recentStats.experienceRecent > 0 && (
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                  <LuTrendingUp size={12} />+{recentStats.experienceRecent} this
                  term
                </span>
              )}
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">
                Total Experience
              </p>
              <h4 className="text-3xl md:text-4xl font-bold text-[#0d1323]">
                {user.profile.experiences.length}
              </h4>
            </div>
          </div>
        </div>

        <TaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tasks={pendingTasks}
          totalTasks={allPossibleTasks.length}
        />

        <NotificationModal
          isOpen={isNotificationOpen}
          onClose={() => setIsNotificationOpen(false)}
          notifications={notifications}
        />
      </div>
    </div>
  );
}

export default DashboardTalent;
