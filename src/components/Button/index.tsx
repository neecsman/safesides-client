import React from "react";

interface Props {
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<Props> = ({
  color,
  children,
  onClick,
  className,
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`border rounded-xl px-8 py-3 transition-all disabled:cursor-not-allowed disabled:bg-gray-300 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
