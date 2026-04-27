import React from "react";

const NotificationItem = ({ type, message }) => {
  const typeStyles = {
    info: "bg-blue-500",
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-amber-500",
  };

  return (
    <div
      className={`
        min-w-70 px-4.5 py-3.5 rounded-xl text-white text-sm 
        shadow-[0_10px_30px_rgba(0,0,0,0.2)] 
        transition-all duration-300 ease-out
        animate-slide-in
        ${typeStyles[type]}
      `}
    >
      {message}
    </div>
  );
};

export default NotificationItem;
