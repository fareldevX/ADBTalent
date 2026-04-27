import { LuLoaderCircle } from "react-icons/lu";

function LoadingSpinner({ size = "md", className, label }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <LuLoaderCircle className={`animate-spin ${sizeClasses[size]}`} />
      {label && (
        <p className="text-sm font-medium text-neutral animate-pulse">
          {label}
        </p>
      )}
    </div>
  );
}

export default LoadingSpinner;
