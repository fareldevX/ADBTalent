import Sidebar from "../../components/layouts/sidebar";
import TopNavbar from "../../components/layouts/top-navbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex h-screen w-full bg-secondary-bg">
      <Sidebar />

      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
