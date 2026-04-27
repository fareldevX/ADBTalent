import Navbar from "../../components/layouts/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
