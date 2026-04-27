import { useState, useEffect, useMemo } from "react";
import { AccountContext } from "../context/account";
import { getUserProfile } from "../service/user-service";
import LoadingSpinner from "../components/common/loading-spinner";

export function AccountProvider({ children }) {
  const [account, setAccount] = useState(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const fetchUserOnRefresh = async () => {
      const token = localStorage.getItem("accessToken");

      if (token && !account) {
        try {
          const res = await getUserProfile();
          if (res.status === "success") {
            setAccount(res.data);
          } else {
            localStorage.removeItem("accessToken");
            setAccount(null);
          }
        } catch (err) {
          console.error("Session expired or unauthorized", err);
          localStorage.removeItem("accessToken");
          setAccount(null);
        }
      }
      setIsInitialLoading(false);
    };

    fetchUserOnRefresh();
  }, [account]);

  const value = useMemo(() => ({ account, setAccount }), [account]);

  if (isInitialLoading)
    return <LoadingSpinner label="Loading application..." />;

  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}
