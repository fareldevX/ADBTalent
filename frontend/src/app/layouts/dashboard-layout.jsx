import Sidebar from "../../components/layouts/sidebar";
import TopNavbar from "../../components/layouts/top-navbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen w-full bg-secondary-bg">
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
