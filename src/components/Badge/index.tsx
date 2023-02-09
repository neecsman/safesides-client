import React from "react";

interface BadgeProps {
  count?: number;
}
const Badge = ({ count }: BadgeProps) => {
  return (
    <>
      {count ? (
        <div
          style={{ minWidth: "20px", fontSize: "10px" }}
          className="absolute inline-flex items-center justify-center h-5 font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -right-2 p-1"
        >
          {count}
        </div>
      ) : null}
    </>
  );
};

export default Badge;
