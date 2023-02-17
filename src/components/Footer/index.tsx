import React from "react";
import Image from "next/image";
import logo from "../../img/logo.svg";
const Footer = () => {
  return (
    <footer className="flex justify-center bg-white items-center border-t p-6 mt-40">
      <div className="flex flex-wrap px-2 lg:px-4 w-[1320px]">
        <div className="flex flex-col flex-wrap lg:flex-row justify-between w-full">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="h-12 lg:h-14 w-auto hidden lg:block"
            />
          </div>
          <div className="hidden lg:block">
            <h3 className="text-xl font-medium">Навигация</h3>
            <ul className="flex flex-col mt-4 text-gray-800 text-sm text-opacity-60 leading-7">
              <li className="cursor-pointer hover:text-blue-500">О сервисе</li>
              <li className="cursor-pointer hover:text-blue-500">Для кого</li>
              <li className="cursor-pointer hover:text-blue-500">
                Как работает
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                Калькулятор
              </li>
              <li className="cursor-pointer hover:text-blue-500">Партнеры</li>
              <li className="cursor-pointer hover:text-blue-500">Гарантии</li>
              <li className="cursor-pointer hover:text-blue-500">Отзывы</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Документы</h3>
            <ul className="flex flex-col mt-4 text-gray-800 text-sm text-opacity-60 leading-7">
              <li className="cursor-pointer hover:text-blue-500">
                Политика конфиденциальности
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                Безопасная сделка
              </li>
              <li className="cursor-pointer hover:text-blue-500">Оферта</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Контакты</h3>
            <ul className="flex flex-col mt-4 text-gray-800 text-sm text-opacity-60 leading-7">
              <li className="cursor-pointer hover:text-blue-500">
                +7(495) 148-71-49
              </li>
              <li className="cursor-pointer hover:text-blue-500">
                info-digitalpartner@yandex.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Юридический адрес</h3>
            <ul className="flex flex-col mt-4 text-gray-800 text-sm text-opacity-60 leading-7">
              <li className="cursor-pointer hover:text-blue-500">
                г. Москва, ул. Авиамоторная, <br /> д.55, к.31, этаж 3, офис
                3610
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
