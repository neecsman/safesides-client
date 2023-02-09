import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Hamburger = () => {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="relative inline-flex items-center p-2 ml-1 text-sm text-gray-700 hover:text-white rounded-lg lg:hidden active:scale-95 hover:bg-blue-500 focus:outline-none ring-2 ring-gray-200 focus:ring-2  focus:ring-gray-400">
            <span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 p-2 mt-5 w-60 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-lg px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    О сервисе
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Для кого
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex justify-between w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    <div className="flex">Сделки</div>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Как работает
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Калькулятор
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Партнеры
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Гарантии
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-blue-500 text-white" : "text-gray-700"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                  >
                    Отзывы
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Hamburger;
