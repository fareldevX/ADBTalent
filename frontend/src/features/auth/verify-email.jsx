import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useNotification } from "../../hooks/use-notification";
import { userVerifyEmail } from "../../services/auth-service";
import LoadingSpinner from "../../components/common/loading-spinner";
import Button from "../../components/ui/button";
import {
  LuBadgeCheck,
  LuBadgeAlert,
  LuArrowLeft,
  LuMail,
} from "react-icons/lu";

function VerifyEmail() {
  const [status, setStatus] = useState("info");

  const navigate = useNavigate();
  const { token } = useParams();
  const { notify } = useNotification();

  useEffect(() => {
    const handleVerifyEmail = async () => {
      if (typeof token !== "string") {
        setStatus("error");
        notify({
          type: "error",
          message: "Invalid verification link.",
        });
        return;
      }

      setStatus("loading");
      try {
        const res = await userVerifyEmail(token);

        if (res.status === "success") {
          setStatus("success");
          notify({
            type: "success",
            message: "Email verified successfully",
          });
        }
      } catch (err) {
        setStatus("error");
        console.error("Email verification error", err);
        notify({
          type: "error",
          message: "Failed to verify email",
        });
      }
    };

    if (token) {
      handleVerifyEmail();
    }
  }, [token, notify]);

  return (
    <section className="h-auto py-18 px-4 flex items-center justify-center bg-primary-bg">
      <div className="w-full max-w-100">
        <div className="text-left pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            {status === "success" ? "All Set!" : "Verify your"}
          </h1>
          <h2 className="text-xl md:text-lg font-semibold text-foreground mt-1">
            ADBTalent Account
          </h2>
        </div>

        <div className="space-y-6">
          <div className="bg-surface border border-semibold rounded-2xl p-6 text-center">
            <div className="mx-auto w-16 h-16 bg-secondary rounded-2xl shadow-sm flex items-center justify-center mb-4">
              {status === "success" ? (
                <LuBadgeCheck className="w-8 h-8 text-white" />
              ) : status === "error" ? (
                <LuBadgeAlert className="w-8 h-8 text-white" />
              ) : (
                <LuMail className="w-8 h-8 text-white" />
              )}
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              {status === "success"
                ? "Email Verified"
                : status === "error"
                  ? "Invalid Link"
                  : "Check your inbox"}
            </h3>

            <p className="text-sm text-neutral leading-relaxed">
              {status === "success"
                ? "Your account is already active. Now you can enjoy all the features of ADBTalent."
                : status === "error"
                  ? "The verification link may have expired or is not valid. Please try resending it."
                  : "We have sent a verification link to your email. Please click the link to activate your account."}
            </p>
          </div>

          <div className="space-y-3">
            {status === "success" ? (
              <Button
                onClick={() => navigate("/login")}
                className="w-full h-11.5 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
              >
                Sign In Now
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => navigate("/resend-verify")}
                  disabled={status === "loading"}
                  className="w-full h-11.5 rounded-xl text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
                >
                  {status === "loading" ? (
                    <LoadingSpinner size="sm" className="text-white" />
                  ) : (
                    "Resend Verification Email"
                  )}
                </Button>

                <Button
                  variant="secondary"
                  className="w-full h-11.5 rounded-xl text-base font-semibold text-muted-foreground hover:bg-muted/50"
                >
                  <Link
                    to="/login"
                    className="flex items-center justify-center gap-2"
                  >
                    <LuArrowLeft size={18} />
                    Back to Login
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmail;
