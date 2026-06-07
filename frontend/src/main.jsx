import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes/app-routes";
import NotificationProvider from "./provider/notification";
import { AccountProvider } from "./provider/account";
import ScrollToTop from "./components/common/scroll-to-top";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <AccountProvider>
    <NotificationProvider>
      <BrowserRouter>
        <StrictMode>
          <ScrollToTop />
          <AppRoutes />
        </StrictMode>
      </BrowserRouter>
    </NotificationProvider>
  </AccountProvider>,
);
