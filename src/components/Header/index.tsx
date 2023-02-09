import React from "react";
import { Dropdown, Hamburger } from "..";
import Image from "next/image";
import logo from "../../img/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center bg-white items-center shadow-sm shadow-gray-200 h-16 lg:h-18 sticky top-0 z-10">
      <nav className=" px-2 lg:px-4 py-2.5 w-[1320px]">
        <div className="flex flex-wrap justify-between items-center mx-auto w-full">
          <a href="/">
            <Image
              src={logo}
              alt="Logo"
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </a>
          <div className="flex items-center lg:order-2">
            <Dropdown
              auth={true}
              avatarPath="https://sun1-16.userapi.com/s/v1/ig2/LO8qrQ6TbA87I4ipjg5O0g0dTMeiiQ5A5gNcKpXCmlz_x96h1emfwzTi_Ymdoyq5S5KhmnSOk8ydg2-aCzrDDek2.jpg?size=400x400&quality=96&crop=129,226,1240,1240&ava=1"
              firstname={"Никита"}
              lastname={"Колесников"}
              deals={[{ a: 1 }]}
            />
            <Hamburger />
          </div>
          <div className="hidden justify-between items-center text-opacity-60 w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 text-gray-800 text-sm lg:flex-row lg:space-x-8 lg:mt-0">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
