import React from "react";
import NotificationItem from "./notification-item";

const NotificationContainer = ({ notifications }) => {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-3 z-9999 pointer-events-none">
      {notifications.map((n) => (
        <div key={n.id} className="pointer-events-auto">
          <NotificationItem {...n} />
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
