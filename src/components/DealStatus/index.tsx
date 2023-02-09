import React from "react";

interface IStatus {
  status: number;
}

const DealStatus: React.FC<IStatus> = ({ status }) => {
  return (
    <span
      className={`text-sm font-medium px-6 py-2 rounded-xl mr-5 ${
        status === 1
          ? "bg-gray-300"
          : status === 2
          ? "bg-yellow-400"
          : status === 3
          ? "bg-green-400"
          : status == 4
          ? "bg-red-400"
          : "bg-none"
      }`}
    >
      {status === 1
        ? "Создана"
        : status === 2
        ? "Выполняется"
        : status == 3
        ? "Выполнена"
        : status === 4
        ? "Отменена"
        : ""}
    </span>
  );
};

export default DealStatus;
