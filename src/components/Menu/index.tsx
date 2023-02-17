import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Avatar } from "..";
const Menu = () => {
  const router = useRouter();
  return (
    <aside className="hidden lg:flex flex-col w-[420px] h-full mb-36">
      <div className="sticky top-48">
        <div className="flex items-center">
          <Avatar
            src="https://sun1-16.userapi.com/s/v1/ig2/LO8qrQ6TbA87I4ipjg5O0g0dTMeiiQ5A5gNcKpXCmlz_x96h1emfwzTi_Ymdoyq5S5KhmnSOk8ydg2-aCzrDDek2.jpg?size=400x400&quality=96&crop=129,226,1240,1240&ava=1"
            firstname="Никита"
            className="w-16 h-16 text-3xl"
          />

          <div className="flex flex-col px-4">
            <h3 className="text-xl font-bold">Никита Колесников</h3>
            <span className="mt-3">+7 (999) 999-99-99</span>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-4 border rounded-xl my-10">
          <div className="flex">
            <span>Баланс</span>
            <span className="font-medium px-3">1000 ₽</span>
          </div>
          <div className="cursor-pointer active:scale-95 transition-all hover:bg-blue-500 fill-black hover:fill-white p-2 rounded">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="current" />
            </svg>
          </div>
        </div>
        <div>
          <ul className="flex flex-col text-gray-800 text-sm leading-10">
            <Link href="/create">
              <li
                className={`flex items-center cursor-pointer ${
                  router.pathname == "/create" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                <CreateIcon className="stroke-current fill-current w-5 h-5 mr-5" />
                Создать сделку
              </li>
            </Link>
            <Link href="/deals">
              <li
                className={`flex items-center cursor-pointer ${
                  router.pathname == "/deals" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                <DealsIcon className="stroke-current fill-current w-5 h-5 mr-5" />
                Мои сделки
              </li>
            </Link>
            <Link href="/invites">
              <li
                className={`flex items-center cursor-pointer ${
                  router.pathname == "/invites" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                <Invite className="stroke-current w-5 h-5 mr-5" />
                Приглашения
              </li>
            </Link>
            <Link href="/profile">
              <li
                className={`flex items-center cursor-pointer ${
                  router.pathname == "/profile" ? "text-blue-500" : ""
                } hover:text-blue-500`}
              >
                <SettingsIcon className="stroke-current fill-current w-5 h-5 mr-5" />
                Настройки профиля
              </li>
            </Link>
            <Link href="/">
              <li className="flex items-center cursor-pointer hover:text-red-400">
                <ExitIcon className="stroke-current fill-current w-5 h-5 mr-5" />
                Выход
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Menu;

interface SvgProps {
  className: string;
}

function CreateIcon(props: SvgProps) {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.625 7.7625V16.1719C15.625 16.4119 15.5777 16.6497 15.4858 16.8715C15.394 17.0933 15.2593 17.2948 15.0896 17.4646C14.9198 17.6343 14.7183 17.769 14.4965 17.8608C14.2747 17.9527 14.0369 18 13.7969 18H2.82812C2.34328 18 1.87829 17.8074 1.53545 17.4646C1.19261 17.1217 1 16.6567 1 16.1719V5.20312C1 4.71828 1.19261 4.25329 1.53545 3.91045C1.87829 3.56761 2.34328 3.375 2.82812 3.375H10.4825"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8215 0.230706C18.7573 0.160154 18.6795 0.103353 18.5927 0.063735C18.5059 0.024117 18.412 0.00250518 18.3166 0.000205157C18.2212 -0.00209486 18.1264 0.0149647 18.0378 0.0503532C17.9492 0.0857417 17.8687 0.138724 17.8011 0.206099L17.2575 0.74702C17.1917 0.812939 17.1547 0.902318 17.1547 0.99551C17.1547 1.0887 17.1917 1.17808 17.2575 1.244L17.7559 1.74142C17.7885 1.77424 17.8274 1.80028 17.8701 1.81804C17.9129 1.83581 17.9587 1.84496 18.005 1.84496C18.0514 1.84496 18.0972 1.83581 18.14 1.81804C18.1827 1.80028 18.2215 1.77424 18.2542 1.74142L18.7842 1.21412C19.0523 0.946515 19.0773 0.510615 18.8215 0.230706ZM16.1585 1.84556L8.22554 9.76384C8.17744 9.81174 8.14248 9.87121 8.12403 9.93653L7.75709 11.0294C7.74829 11.059 7.74767 11.0905 7.75528 11.1205C7.76289 11.1504 7.77846 11.1778 7.80033 11.1997C7.8222 11.2215 7.84957 11.2371 7.87955 11.2447C7.90953 11.2523 7.941 11.2517 7.97066 11.2429L9.06269 10.876C9.12802 10.8575 9.18749 10.8226 9.23539 10.7745L17.1543 2.84128C17.2275 2.76724 17.2686 2.66728 17.2686 2.56313C17.2686 2.45897 17.2275 2.35902 17.1543 2.28498L16.717 1.84556C16.6429 1.77164 16.5425 1.73012 16.4378 1.73012C16.3331 1.73012 16.2326 1.77164 16.1585 1.84556Z"
        strokeWidth="0.2"
      />
    </svg>
  );
}

function DealsIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 13.4444C19 13.857 18.8104 14.2527 18.4728 14.5444C18.1352 14.8361 17.6774 15 17.2 15H2.8C2.32261 15 1.86477 14.8361 1.52721 14.5444C1.18964 14.2527 1 13.857 1 13.4444V2.55556C1 2.143 1.18964 1.74733 1.52721 1.45561C1.86477 1.16389 2.32261 1 2.8 1H7.3L9.1 3.33333H17.2C17.6774 3.33333 18.1352 3.49722 18.4728 3.78894C18.8104 4.08067 19 4.47633 19 4.88889V13.4444Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SettingsIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0826 5.07607C11.909 5.25311 11.8118 5.49114 11.8118 5.73906C11.8118 5.98697 11.909 6.225 12.0826 6.40204L13.598 7.91743C13.775 8.09097 14.013 8.18818 14.2609 8.18818C14.5089 8.18818 14.7469 8.09097 14.9239 7.91743L18.4946 4.34679C18.9708 5.39922 19.115 6.5718 18.908 7.70826C18.7009 8.84472 18.1524 9.89109 17.3356 10.7079C16.5187 11.5247 15.4724 12.0732 14.3359 12.2803C13.1994 12.4874 12.0269 12.3432 10.9744 11.8669L4.42983 18.4115C4.05304 18.7883 3.54201 19 3.00915 19C2.47629 19 1.96525 18.7883 1.58847 18.4115C1.21168 18.0347 1 17.5237 1 16.9909C1 16.458 1.21168 15.947 1.58847 15.5702L8.13307 9.02557C7.65683 7.97314 7.51263 6.80056 7.71969 5.66409C7.92676 4.52763 8.47525 3.48127 9.29208 2.66444C10.1089 1.84761 11.1553 1.29911 12.2917 1.09205C13.4282 0.884979 14.6008 1.02918 15.6532 1.50542L12.092 5.0666L12.0826 5.07607Z"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExitIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99988 17H2.99996C2.46954 17 1.96084 16.8127 1.58577 16.4793C1.21071 16.1459 1 15.6937 1 15.2222V2.77778C1 2.30628 1.21071 1.8541 1.58577 1.5207C1.96084 1.1873 2.46954 1 2.99996 1H6.99988"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M13.998 13.4446L18.9979 9.00011L13.998 4.55566"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18.9998 9H7"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Invite(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7.23047L10 12.7689L19 7.23047"
        stroke="current"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.76953 8.96154V2.38462C3.76953 1.62308 4.39261 1 5.15415 1H14.8465C15.608 1 16.2311 1.62308 16.2311 2.38462V8.96154"
        stroke="current"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.2308 3.76953C17.7538 3.76953 19 5.01569 19 6.53876V16.2311C19 17.7541 17.7538 19.0003 16.2308 19.0003H3.76923C2.24615 19.0003 1 17.7541 1 16.2311V6.53876C1 5.01569 2.24615 3.76953 3.76923 3.76953"
        stroke="current"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
