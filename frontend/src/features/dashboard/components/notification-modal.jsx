import { LuX, LuBell, LuCheck } from "react-icons/lu";

const NotificationModal = ({ isOpen, onClose, notifications = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-end md:items-center justify-end md:justify-center p-4">
      <div
        className="fixed inset-0 bg-black/40 md:bg-black/60"
        onClick={onClose}
      ></div>
      <div className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] relative z-101">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <LuBell size={24} className="text-blue-600" />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
              <p className="text-xs text-gray-500">
                {notifications.length} notification
                {notifications.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 cursor-pointer"
          >
            <LuX size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                  notification.read
                    ? "border-gray-100 bg-gray-50/30"
                    : "border-blue-200 bg-blue-50/50 hover:bg-blue-100/50"
                }`}
              >
                <div
                  className={`p-2 rounded-lg shrink-0 ${
                    notification.read ? "bg-gray-100" : "bg-blue-100"
                  }`}
                >
                  {notification.type === "success" ? (
                    <LuCheck className="text-green-600" size={20} />
                  ) : (
                    <LuBell
                      className={
                        notification.read ? "text-gray-400" : "text-blue-600"
                      }
                      size={20}
                    />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm line-clamp-2">
                    {notification.title}
                  </h4>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    {notification.timestamp}
                  </p>
                </div>
                {!notification.read && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-2"></div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <div className="p-4 bg-gray-100 rounded-full mb-4">
                <LuBell size={32} className="text-gray-400" />
              </div>
              <p className="font-bold text-gray-900">No notifications</p>
              <p className="text-sm text-gray-500">You're all caught up!</p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all cursor-pointer text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
