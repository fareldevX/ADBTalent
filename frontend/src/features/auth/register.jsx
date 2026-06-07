import { useState } from "react";
import { Link } from "react-router-dom";
import { userRegister } from "../../services/auth-service";
import { useNotification } from "../../hooks/use-notification";
import Button from "../../components/ui/button";
import LoadingSpinner from "../../components/common/loading-spinner";
import { LuBadgeCheck, LuChartLine } from "react-icons/lu";
import screenRegister from "../../assets/img/screen-register.png";

function Register() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { notify } = useNotification();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (password.length < 6) {
      notify({
        type: "error",
        message: "Password must be at least 6 characters long!",
      });
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        username: name,
        fullName,
        headline,
        location,
        about,
        email,
        password,
      };

      const result = await userRegister(payload);

      if (result.status === "success") {
        notify({
          type: "success",
          message: "Registered successful.",
        });

        setName("");
        setFullName("");
        setHeadline("");
        setLocation("");
        setAbout("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          notify({
            type: "info",
            message: "Please check your email to verify your account.",
          });
        }, 1500);
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      notify({
        type: "error",
        message,
      });
      console.error("Registration Error", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading)
    return (
      <LoadingSpinner
        size="md"
        label="Loading..."
        className="min-h-145 h-full text-primary"
      />
    );

  return (
    <section className="h-auto py-18 px-4 bg-primary-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch border border-subtle rounded-xl shadow-md overflow-hidden">
        <div className="relative h-full after:absolute after:content-[''] after:top-0 after:left-0 after:right-0 after:h-full after:bg-primary/60">
          <img
            src={screenRegister}
            alt="Picture Register"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-6 left-6 z-99">
            <h3 className="text-base font-medium mb-4 text-white">
              Empowering Organizational Stability.
            </h3>
            <p className="max-w-100 text-sm text-neutral-400 mb-4">
              Join the platform designed for HR excellence and talent
              optimization.
            </p>

            <div className="flex items-center gap-2 md:gap-3">
              <div className="flex items-center gap-1.5 py-1.5 px-2.5 md:py-2.5 md:px-3.5 border border-semibold rounded-md bg-primary text-[#0ba87e]">
                <LuBadgeCheck size={20} />
                <span className="text-xs text-white">Secure Data</span>
              </div>

              <div className="flex items-center gap-1.5 py-1.5 px-2.5 md:py-2.5 md:px-3.5 border border-semibold rounded-md bg-primary text-[#0ba87e]">
                <LuChartLine size={20} />
                <span className="text-xs text-white">Talent Analytics</span>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="h-full flex flex-col gap-4 py-8 px-6 bg-surface"
        >
          <div className="flex flex-col items-stretch gap-2">
            <h3 className="text-lg font-medium text-primary">Create Account</h3>
            <p className="text-sm text-neutral">
              Start managing your organization's potential today.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label htmlFor="name" className="text-sm font-medium text-primary">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label
              htmlFor="fullName"
              className="text-sm font-medium text-primary"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label
              htmlFor="headline"
              className="text-sm font-medium text-primary"
            >
              Headline / Title
            </label>
            <input
              type="text"
              name="headline"
              id="headline"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Full-Stack Web Developer"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label
              htmlFor="location"
              className="text-sm font-medium text-primary"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Tegal, Indonesia"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label htmlFor="about" className="text-sm font-medium text-primary">
              About
            </label>
            <textarea
              name="about"
              id="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              rows="3"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Tell briefly about yourself..."
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label htmlFor="email" className="text-sm font-medium text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="jhon@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col items-stretch gap-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-primary"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="py-2.5 px-4 text-sm border border-semibold rounded-md focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            variant="primary"
            size="md"
            className="mb-4 border-b border-semibold"
          >
            Sign Up
          </Button>

          <div className="text-center">
            <p className="text-sm text-neutral">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-secondary">
                Log In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;
