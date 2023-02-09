import React, { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { DealStatus } from "..";
import { IDeal } from "../../interfaces";

const DealCard: React.FC<IDeal> = ({
  id,
  status,
  creator_id,
  category,
  title,
  description,
  price,
  accepter_adress,
}) => {
  return (
    <div className="flex flex-col p-6 shadow-sm border rounded-2xl max-w-2xl mb-6">
      <div className="flex justify-between">
        <h3 className="text-xl font-medium">{`Сделка № ${id}`}</h3>
        <div className="flex items-center">
          <DealStatus status={status} />
          <Menu
            as="div"
            className="relative inline-block text-left px-4 pt-2 lg:px-0 lg:py-0"
          >
            <Menu.Button className="inline-flex w-full justify-center items-center rounded-full  text-base font-medium text-gray-800 hover:text-blue-500 hover:bg-opacity-30 focus:outline-none ring-2 ring-gray-200 focus:ring-2  focus:ring-gray-400 outline-none lg:ring-0 lg:focus:ring-0">
              <div className="hidden items-center lg:flex ml-2">
                <div className="cursor-pointer fill-gray-400 hover:fill-gray-700">
                  <svg
                    width="16"
                    height="32"
                    viewBox="0 0 16 32"
                    fill="current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="16" r="2" fill="current" />
                    <circle cx="8" cy="8" r="2" fill="current" />
                    <circle cx="8" cy="24" r="2" fill="current" />
                  </svg>
                </div>
              </div>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 p-2 mt-3 w-60 origin-top-right divide-y divide-gray-100 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href={`/deals/${id}`}>
                        <button
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-700"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all`}
                        >
                          {active ? (
                            <CreateActiveIcon className="mr-2 h-5 w-5" />
                          ) : (
                            <CreateIncativeIcon className="mr-2 h-5 w-5 " />
                          )}
                          Редактировать
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        disabled={status === 2}
                        className={`${
                          active ? "bg-red-400 text-white" : "text-gray-700"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm active:scale-95 active:transition-all disabled:bg-gray-100 disabled:cursor-not-allowed`}
                      >
                        {active ? (
                          <RemoveIcon className="mr-2 h-6 w-6 stroke-white" />
                        ) : (
                          <RemoveIcon className="mr-2 h-6 w-6 stroke-gray-800" />
                        )}
                        Удалить
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      <div>
        <ul className="leading-8">
          <li className="flex">
            <span className="whitespace-nowrap">
              {category === 2 && "Товар:"}
              {category === 1 && "Услуга:"}
            </span>
            <p className="opacity-30 ml-2 truncate ...">{title}</p>
          </li>
          {category === 1 && (
            <li className="flex">
              <span className="whitespace-nowrap"> Краткое описание:</span>
              <p className="opacity-30 ml-2 truncate ...">{description}</p>
            </li>
          )}
          {category === 2 && (
            <li className="flex">
              <span className="whitespace-nowrap">Адрес доставки:</span>
              <p className="opacity-30 ml-2 truncate ...">
                {accepter_adress?.value}
              </p>
            </li>
          )}
          <li className="flex">
            <span className="whitespace-nowrap">Стоимость:</span>
            <p className="opacity-30 ml-2 truncate ..."> {price + " ₽"}</p>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-end mt-8">
        <Link
          className="font-medium"
          href={creator_id === "111" ? `/deals/${id}` : `/invites/${id}`}
        >
          Подробнее
        </Link>
        <svg
          className="-rotate-90 ml-2 w-4 h-2"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L5 5L1 1"
            stroke="#010101"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default DealCard;

interface SvgProps {
  className: string;
}

function RemoveIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      viewBox="4 2 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16"
        stroke="current"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CreateIncativeIcon(props: SvgProps) {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.625 7.7625V16.1719C15.625 16.4119 15.5777 16.6497 15.4858 16.8715C15.394 17.0933 15.2593 17.2948 15.0896 17.4646C14.9198 17.6343 14.7183 17.769 14.4965 17.8608C14.2747 17.9527 14.0369 18 13.7969 18H2.82812C2.34328 18 1.87829 17.8074 1.53545 17.4646C1.19261 17.1217 1 16.6567 1 16.1719V5.20312C1 4.71828 1.19261 4.25329 1.53545 3.91045C1.87829 3.56761 2.34328 3.375 2.82812 3.375H10.4825"
        stroke="#010101"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8215 0.230706C18.7573 0.160154 18.6795 0.103353 18.5927 0.063735C18.5059 0.024117 18.412 0.00250518 18.3166 0.000205157C18.2212 -0.00209486 18.1264 0.0149647 18.0378 0.0503532C17.9492 0.0857417 17.8687 0.138724 17.8011 0.206099L17.2575 0.74702C17.1917 0.812939 17.1547 0.902318 17.1547 0.99551C17.1547 1.0887 17.1917 1.17808 17.2575 1.244L17.7559 1.74142C17.7885 1.77424 17.8274 1.80028 17.8701 1.81804C17.9129 1.83581 17.9587 1.84496 18.005 1.84496C18.0514 1.84496 18.0972 1.83581 18.14 1.81804C18.1827 1.80028 18.2215 1.77424 18.2542 1.74142L18.7842 1.21412C19.0523 0.946515 19.0773 0.510615 18.8215 0.230706ZM16.1585 1.84556L8.22554 9.76384C8.17744 9.81174 8.14248 9.87121 8.12403 9.93653L7.75709 11.0294C7.74829 11.059 7.74767 11.0905 7.75528 11.1205C7.76289 11.1504 7.77846 11.1778 7.80033 11.1997C7.8222 11.2215 7.84957 11.2371 7.87955 11.2447C7.90953 11.2523 7.941 11.2517 7.97066 11.2429L9.06269 10.876C9.12802 10.8575 9.18749 10.8226 9.23539 10.7745L17.1543 2.84128C17.2275 2.76724 17.2686 2.66728 17.2686 2.56313C17.2686 2.45897 17.2275 2.35902 17.1543 2.28498L16.717 1.84556C16.6429 1.77164 16.5425 1.73012 16.4378 1.73012C16.3331 1.73012 16.2326 1.77164 16.1585 1.84556Z"
        fill="#010101"
        fillOpacity="0.8"
      />
    </svg>
  );
}

function CreateActiveIcon(props: SvgProps) {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.625 7.7625V16.1719C15.625 16.4119 15.5777 16.6497 15.4858 16.8715C15.394 17.0933 15.2593 17.2948 15.0896 17.4646C14.9198 17.6343 14.7183 17.769 14.4965 17.8608C14.2747 17.9527 14.0369 18 13.7969 18H2.82812C2.34328 18 1.87829 17.8074 1.53545 17.4646C1.19261 17.1217 1 16.6567 1 16.1719V5.20312C1 4.71828 1.19261 4.25329 1.53545 3.91045C1.87829 3.56761 2.34328 3.375 2.82812 3.375H10.4825"
        stroke="#ffffff"
        strokeOpacity="0.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8215 0.230706C18.7573 0.160154 18.6795 0.103353 18.5927 0.063735C18.5059 0.024117 18.412 0.00250518 18.3166 0.000205157C18.2212 -0.00209486 18.1264 0.0149647 18.0378 0.0503532C17.9492 0.0857417 17.8687 0.138724 17.8011 0.206099L17.2575 0.74702C17.1917 0.812939 17.1547 0.902318 17.1547 0.99551C17.1547 1.0887 17.1917 1.17808 17.2575 1.244L17.7559 1.74142C17.7885 1.77424 17.8274 1.80028 17.8701 1.81804C17.9129 1.83581 17.9587 1.84496 18.005 1.84496C18.0514 1.84496 18.0972 1.83581 18.14 1.81804C18.1827 1.80028 18.2215 1.77424 18.2542 1.74142L18.7842 1.21412C19.0523 0.946515 19.0773 0.510615 18.8215 0.230706ZM16.1585 1.84556L8.22554 9.76384C8.17744 9.81174 8.14248 9.87121 8.12403 9.93653L7.75709 11.0294C7.74829 11.059 7.74767 11.0905 7.75528 11.1205C7.76289 11.1504 7.77846 11.1778 7.80033 11.1997C7.8222 11.2215 7.84957 11.2371 7.87955 11.2447C7.90953 11.2523 7.941 11.2517 7.97066 11.2429L9.06269 10.876C9.12802 10.8575 9.18749 10.8226 9.23539 10.7745L17.1543 2.84128C17.2275 2.76724 17.2686 2.66728 17.2686 2.56313C17.2686 2.45897 17.2275 2.35902 17.1543 2.28498L16.717 1.84556C16.6429 1.77164 16.5425 1.73012 16.4378 1.73012C16.3331 1.73012 16.2326 1.77164 16.1585 1.84556Z"
        fill="#ffffff"
        fillOpacity="0.8"
      />
    </svg>
  );
}
