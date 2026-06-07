import { useNavigate } from "react-router-dom";
import { LuX, LuCheckCheck, LuCircle } from "react-icons/lu";

const TaskModal = ({ isOpen, onClose, tasks, totalTasks }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const completedCount = totalTasks - tasks.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);

  const handleGoToEdit = () => {
    onClose();
    navigate("/talent/settings");
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              All Profile Tasks
            </h2>
            <p className="text-sm text-gray-500">
              {completedCount} of {totalTasks} tasks completed
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 cursor-pointer"
          >
            <LuX size={24} />
          </button>
        </div>

        <div className="px-6 py-4 bg-white">
          <div className="w-full bg-blue-50 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-700"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 pt-2 space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-gray-50/30 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
              >
                <LuCircle className="text-gray-300 shrink-0" size={22} />
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    {task.title}
                  </h4>
                  <p className="text-xs text-gray-500">{task.desc}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <LuCheckCheck size={48} className="text-green-500 mx-auto mb-3" />
              <p className="font-bold text-gray-900">You're all set!</p>
              <p className="text-sm text-gray-500">
                Your talent profile is 100% complete.
              </p>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-all cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={handleGoToEdit}
            className="flex-1 py-3 px-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer"
          >
            Go to Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
