import React, { useState } from "react";
import { toast } from "react-toastify";

const ClickBoard = () => {
  const url = "deals/scASxqwW1";

  const copyToClipBoard = async (url: string) => {
    console.log(url);

    try {
      await navigator.clipboard.writeText(url);
      toast("Ссылка скопирована!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {
      toast("Произошла ошибка!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <label className="opacity-80">Поделиться ссылкой</label>
      <div className="relative mt-2">
        <input
          type="text"
          disabled
          value={url}
          className="border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full px-4 py-4 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
        />
        <div
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2"
          onClick={() => copyToClipBoard(url)}
        >
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5263 14.5455H4.42105V4.36364H12.5263M12.5263 2.90909H4.42105C4.03021 2.90909 3.65537 3.06234 3.379 3.33512C3.10263 3.6079 2.94737 3.97787 2.94737 4.36364V14.5455C2.94737 14.9312 3.10263 15.3012 3.379 15.574C3.65537 15.8468 4.03021 16 4.42105 16H12.5263C12.9172 16 13.292 15.8468 13.5684 15.574C13.8447 15.3012 14 14.9312 14 14.5455V4.36364C14 3.97787 13.8447 3.6079 13.5684 3.33512C13.292 3.06234 12.9172 2.90909 12.5263 2.90909ZM10.3158 0H1.47368C1.08284 0 0.708001 0.153246 0.431632 0.426027C0.155263 0.698807 0 1.06878 0 1.45455V11.6364H1.47368V1.45455H10.3158V0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ClickBoard;
