import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  to,
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    dark: "bg-gray-950 text-white hover:bg-gray-800",
    outline: "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const buttonClass = `
    inline-flex items-center justify-center
    rounded-full
    font-semibold
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary/30
    disabled:pointer-events-none disabled:opacity-50
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (to) {
    return (
      <Link
        to={to}
        className={buttonClass}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;