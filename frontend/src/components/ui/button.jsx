function Button({
  children,
  variant = "primary",
  size = "sm",
  className = "",
  ...props
}) {
  const baseClass =
    "border-none font-medium rounded-md transition-colors duration-200 cursor-pointer";
  const variantClass = {
    primary: "bg-primary text-white hover:bg-primary/80",
    secondary: "bg-slate-100 text-primary",
  };
  const sizeClass = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-5 py-3.5 text-lg",
  };
  return (
    <button
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
