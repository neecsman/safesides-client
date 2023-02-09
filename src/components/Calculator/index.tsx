import React from "react";

const Calculator = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-black bg-opacity-90 rounded-3xl px-2 py-6 lg:p-12 w-full">
        <form action="">
          <div className="flex flex-col ">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Откуда
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Москва, Новый Арбат 8"
                  required
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Куда
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Москва, Кутузовский проспект 30"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row mt-3 lg:mt-14">
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Длина (см.)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="см"
                  required
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Ширина (см.)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="см"
                  required
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Высота (см.)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="см"
                  required
                />
              </div>
              <div className="w-full px-3 my-2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm lg:text-xl font-medium text-white dark:text-white"
                >
                  Оценочная стоимость (₽)
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-white placeholder-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 lg:p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="₽"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center px-3 mt-5 lg:mt-12">
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-500 active:scale-95 transition-all  font-medium rounded-lg text-sm lg:text-xl w-full sm:w-auto px-8 py-2 lg:px-12 lg:py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Расчитать
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
