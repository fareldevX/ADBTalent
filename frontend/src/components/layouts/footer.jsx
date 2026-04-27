import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="h-18 bg-surface border-t-subtle">
      <div className="max-w-300 h-full mx-auto py-14 md:py-4 px-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-3">
        <span className="text-sm font-medium text-neutral">
          &copy; Talent Inc. Engineering Human Potential.
        </span>

        <div className="flex items-center gap-4 text-neutral">
          <Link to="/" className="text-sm font-medium">
            Privacy
          </Link>
          <Link to="/" className="text-sm font-medium">
            Terms
          </Link>
          <Link to="/" className="text-sm font-medium">
            Security
          </Link>
          <Link to="/" className="text-sm font-medium">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
