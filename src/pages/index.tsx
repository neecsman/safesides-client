import Head from "next/head";
import { Header, Calculator, Footer } from "../components";
import Image from "next/image";

import main from "../img/main.png";
import marketplace from "../img/useful/marketplace.png";
import seller from "../img/useful/seller.png";
import buyer from "../img/useful/buyer.png";
import dostavista from "../img/dostavista.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Safe Sides - Безопасная сделка</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Сервис гарантирует защиту денежных средств и предоставляет возможность договариться об условиях сделки."
        />
      </Head>
      <Header />
      <main className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-6 m-auto">
        <div className="flex justify-between bg-black bg-opacity-90 rounded-3xl w-full">
          <div className="flex flex-col w-full lg:w-2/3 justify-around items-center lg:items-start text-white p-10 lg:p-28">
            <h1 className="font-medium text-2xl lg:text-[56px] leading-none">
              Безопасная сделка
            </h1>
            <p className="w-full lg:max-w-[416px] opacity-60 text-md lg:text-xl lg:text-start text-center my-4 lg:my-0">
              Сервис гарантирует защиту денежных средств и предоставляет
              возможность договариться об условиях сделки.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 active:bg-blue-500 active:scale-95 transition-all rounded-xl px-6 py-2 text-md lg:px-12 lg:py-4 lg:text-xl">
              Создать сделку
            </button>
          </div>
          <div className="hidden lg:block">
            <Image src={main} alt="Main image" width={525} priority />
          </div>
        </div>
      </main>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-2xl lg:text-4xl font-medium">
            О сервисе Safe Side
          </h2>
          <p className="text-center max-w-2xl text-md lg:text-xl py-6 lg:py-14">
            Сервис обеспечивает 100% предоплату, которая резервируется на счёте
            Safe Side, пока продавец не выполнит свои обязательства, а
            покупатель не получит товар.
          </p>
          <div className="flex flex-wrap justify-around">
            <div className="flex items-center justify-center bg-blue-600 text-white py-3 px-9 rounded-2xl m-3 min-w-[312px] hover:scale-105 transition-all">
              <div className="flex items-center justify-center group">
                <div className="p-3 group-hover:animate-bounce">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0C22.6522 0 25.1957 1.05357 27.0711 2.92893C28.9464 4.8043 30 7.34784 30 10C30 12.6522 28.9464 15.1957 27.0711 17.0711C25.1957 18.9464 22.6522 20 20 20C17.3478 20 14.8043 18.9464 12.9289 17.0711C11.0536 15.1957 10 12.6522 10 10C10 7.34784 11.0536 4.8043 12.9289 2.92893C14.8043 1.05357 17.3478 0 20 0ZM20 25C31.05 25 40 29.475 40 35V40H0V35C0 29.475 8.95 25 20 25Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="p-3">
                  <h3 className="text-2xl font-medium leading-9">30 тыс.</h3>
                  <span className="text-xl opacity-60">Пользователей</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center bg-blue-600 text-white py-3 px-9 rounded-2xl m-3 min-w-[312px] hover:scale-105 transition-all">
              <div className="flex items-center justify-center group">
                <div className="p-3 group-hover:animate-spin">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M40 4.72847V14.3305C40 14.9672 39.7663 15.5777 39.3503 16.0279C38.9344 16.4781 38.3702 16.731 37.7819 16.731H28.9094C28.3211 16.731 27.757 16.4781 27.341 16.0279C26.925 15.5777 26.6913 14.9672 26.6913 14.3305C26.6913 13.6939 26.925 13.0833 27.341 12.6331C27.757 12.1829 28.3211 11.93 28.9094 11.93H32.4214L29.9261 9.24943C28.6231 7.8377 27.0758 6.71777 25.3726 5.95365C23.6694 5.18954 21.8437 4.79624 20 4.79624C18.1563 4.79624 16.3306 5.18954 14.6274 5.95365C12.9242 6.71777 11.3769 7.8377 10.0739 9.24943C9.65307 9.69181 9.08947 9.93926 8.50277 9.93926C7.91607 9.93926 7.35247 9.69181 6.93161 9.24943C6.72482 9.02642 6.56075 8.76142 6.44879 8.46963C6.33684 8.17785 6.27921 7.86501 6.27921 7.54907C6.27921 7.23313 6.33684 6.9203 6.44879 6.62851C6.56075 6.33672 6.72482 6.07172 6.93161 5.84871C10.4003 2.10338 15.1001 0 20 0C24.8999 0 29.5997 2.10338 33.0684 5.84871L35.5638 8.52928V4.72847C35.5638 4.09181 35.7975 3.48123 36.2134 3.03105C36.6294 2.58087 37.1936 2.32796 37.7819 2.32796C38.3702 2.32796 38.9344 2.58087 39.3503 3.03105C39.7663 3.48123 40 4.09181 40 4.72847ZM29.9261 30.734C28.6231 32.1457 27.0758 33.2657 25.3726 34.0298C23.6694 34.7939 21.8437 35.1872 20 35.1872C18.1563 35.1872 16.3306 34.7939 14.6274 34.0298C12.9242 33.2657 11.3769 32.1457 10.0739 30.734L7.57856 28.0534H11.0906C11.6789 28.0534 12.243 27.8005 12.659 27.3503C13.075 26.9002 13.3087 26.2896 13.3087 25.6529C13.3087 25.0163 13.075 24.4057 12.659 23.9555C12.243 23.5053 11.6789 23.2524 11.0906 23.2524H2.21811C1.62983 23.2524 1.06565 23.5053 0.649671 23.9555C0.233694 24.4057 0 25.0163 0 25.6529V35.255C0 35.8916 0.233694 36.5022 0.649671 36.9524C1.06565 37.4026 1.62983 37.6555 2.21811 37.6555C2.8064 37.6555 3.37058 37.4026 3.78656 36.9524C4.20254 36.5022 4.43623 35.8916 4.43623 35.255V31.4542L6.93161 34.1347C8.64672 35.994 10.6838 37.4691 12.9262 38.4755C15.1686 39.482 17.5724 40 20 40C22.4276 40 24.8314 39.482 27.0738 38.4755C29.3162 37.4691 31.3533 35.994 33.0684 34.1347C33.2752 33.9117 33.4393 33.6467 33.5512 33.3549C33.6632 33.0631 33.7208 32.7503 33.7208 32.4344C33.7208 32.1184 33.6632 31.8056 33.5512 31.5138C33.4393 31.222 33.2752 30.957 33.0684 30.734C32.6475 30.2916 32.0839 30.0442 31.4972 30.0442C30.9105 30.0442 30.3469 30.2916 29.9261 30.734Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="p-3">
                  <h3 className="text-2xl font-medium leading-9">550 тыс. ₽</h3>
                  <span className="text-xl opacity-60">Сумма сделок</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-blue-600 text-white py-3 px-9 rounded-2xl m-3 min-w-[312px] hover:scale-105 transition-all">
              <div className="flex items-center justify-center group">
                <div className="p-3 group-hover:animate-ping">
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9877 32L0 16.8316L3.49693 13.0395L13.9877 24.4158L36.5031 0L40 3.7921L13.9877 32Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="p-3">
                  <h3 className="text-2xl font-medium leading-9">15 тыс. ₽</h3>
                  <span className="text-xl opacity-60">Cделок</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <h2 className="text-2xl lg:text-4xl font-medium text-center">
          Кому полезен сервис Safe Side?
        </h2>
        <div className="flex flex-wrap justify-center lg:justify-between mt-10 lg:mt-14 text-white">
          <div className=" bg-black bg-opacity-90 rounded-3xl max-w-[416px] my-3">
            <Image src={seller} alt="Seller" />

            <div className="flex flex-col justify-between items-center px-14 py-14">
              <h3 className="text-xl lg:text-2xl font-medium">Продавцам</h3>
              <p className="text-center opacity-60 text-md lg:text-xl leading-5 lg:leading-8 mt-4">
                Получайте 100% предоплату и выгодные условия по доставке
                товаров.
              </p>
            </div>
          </div>
          <div className=" bg-black bg-opacity-90 rounded-3xl max-w-[416px] my-3">
            <Image src={buyer} alt="Buyer" />

            <div className="flex flex-col justify-between items-center px-14 py-14">
              <h3 className="text-xl lg:text-2xl font-medium">Покупателям</h3>
              <p className="text-center opacity-60 text-md lg:text-xl leading-5 lg:leading-8 mt-4">
                Создавайте безопасную сделку, если вы не до конца доверяете
                продавцу.
              </p>
            </div>
          </div>
          <div className=" bg-black bg-opacity-90 rounded-3xl max-w-[416px] my-3">
            <Image src={marketplace} alt="Marketplace" />

            <div className="flex flex-col justify-between items-center px-14 py-14">
              <h3 className="text-xl lg:text-2xl font-medium">
                Торговым площадкам
              </h3>
              <p className="text-center opacity-60 text-md lg:text-xl leading-5 lg:leading-8 mt-4">
                Повышайте процент выкупаемости заказов, подключив систему защиты
                сделки.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <h2 className="text-2xl lg:text-4xl font-medium text-center">
          Как работает сервис?
        </h2>
        <div className="flex justify-center mt-10 lg:mt-14 px-4">
          <ol className="relative  text-gray-800 border-l-2 border-gray-800 border-dashed max-w-xl">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 "></span>
              <h3 className="text-lg lg:text-2xl font-medium leading-tight">
                Создание сделки
              </h3>
              <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
                Продавец и покупатель договариваются о сделке и заполняют
                информацию в личном кабинете. После ввода и проверки данных
                продавец и покупатель подтверждают сделку.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 "></span>
              <h3 className="text-lg lg:text-2xl font-medium leading-tight">
                Резервирование денежных средств
              </h3>
              <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
                Покупатель переводит деньги на безопасный счет Safe Side.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4"></span>
              <h3 className="text-lg lg:text-2xl font-medium leading-tight">
                Доставка товара
              </h3>
              <p className="ttext-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
                Продавец осуществляет передачу товара курьеру Safe Side.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4"></span>
              <h3 className="text-lg lg:text-2xl font-medium leading-tight">
                Проверка получателем
              </h3>
              <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
                Покупатель принимает товар, проверяет его соответствие условиям
                сделки.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full -left-4 bottom-0"></span>
              <h3 className="text-lg lg:text-2xl font-medium leading-tight">
                Перевод средств продавцу
              </h3>
              <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
                Safe Side переводит деньги продавцу и завершает безопасную
                сделку.
              </p>
            </li>
          </ol>
        </div>
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <h2 className="text-2xl lg:text-4xl font-medium text-center mb-6 lg:mb-14">
          Калькулятор сделки
        </h2>
        <Calculator />
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <h2 className="text-2xl lg:text-4xl font-medium text-center mb-6 lg:mb-14">
          Гарантии
        </h2>
        <div className="flex flex-wrap justify-around lg:justify-between">
          <div className="flex flex-col items-center max-w-xs text-center px-4 mb-12">
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="52" cy="52" r="52" fill="#286CEB" />
              <path
                d="M52 41C55.6775 40.9878 59.2838 42.0136 62.4042 43.9595C65.5247 45.9053 68.0328 48.6923 69.64 52C66.34 58.74 59.6 63 52 63C44.4 63 37.66 58.74 34.36 52C35.9672 48.6923 38.4753 45.9053 41.5958 43.9595C44.7163 42.0136 48.3225 40.9878 52 41ZM52 37C42 37 33.46 43.22 30 52C33.46 60.78 42 67 52 67C62 67 70.54 60.78 74 52C70.54 43.22 62 37 52 37ZM52 47C53.3261 47 54.5979 47.5268 55.5355 48.4645C56.4732 49.4021 57 50.6739 57 52C57 53.3261 56.4732 54.5979 55.5355 55.5355C54.5979 56.4732 53.3261 57 52 57C50.6739 57 49.4022 56.4732 48.4645 55.5355C47.5268 54.5979 47 53.3261 47 52C47 50.6739 47.5268 49.4021 48.4645 48.4645C49.4022 47.5268 50.6739 47 52 47ZM52 43C47.04 43 43 47.04 43 52C43 56.96 47.04 61 52 61C56.96 61 61 56.96 61 52C61 47.04 56.96 43 52 43Z"
                fill="white"
              />
            </svg>
            <h3 className="text-xl lg:text-2xl font-medium mt-8">
              Сохранность
            </h3>
            <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
              Оплата от покупателя размещается на безопасный счет Safe Side.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center px-4 mb-12">
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="52" cy="52" r="52" fill="#286CEB" />
              <path
                d="M52 41C55.6775 40.9878 59.2838 42.0136 62.4042 43.9595C65.5247 45.9053 68.0328 48.6923 69.64 52C66.34 58.74 59.6 63 52 63C44.4 63 37.66 58.74 34.36 52C35.9672 48.6923 38.4753 45.9053 41.5958 43.9595C44.7163 42.0136 48.3225 40.9878 52 41ZM52 37C42 37 33.46 43.22 30 52C33.46 60.78 42 67 52 67C62 67 70.54 60.78 74 52C70.54 43.22 62 37 52 37ZM52 47C53.3261 47 54.5979 47.5268 55.5355 48.4645C56.4732 49.4021 57 50.6739 57 52C57 53.3261 56.4732 54.5979 55.5355 55.5355C54.5979 56.4732 53.3261 57 52 57C50.6739 57 49.4022 56.4732 48.4645 55.5355C47.5268 54.5979 47 53.3261 47 52C47 50.6739 47.5268 49.4021 48.4645 48.4645C49.4022 47.5268 50.6739 47 52 47ZM52 43C47.04 43 43 47.04 43 52C43 56.96 47.04 61 52 61C56.96 61 61 56.96 61 52C61 47.04 56.96 43 52 43Z"
                fill="white"
              />
            </svg>
            <h3 className="text-xl lg:text-2xl font-medium mt-8">Скорость</h3>
            <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
              Сервис предоставляет покупателям и продавцам лучшие условия по
              доставке.
            </p>
          </div>
          <div className="flex flex-col items-center max-w-xs text-center px-2 mb-12">
            <svg
              width="104"
              height="104"
              viewBox="0 0 104 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="52" cy="52" r="52" fill="#286CEB" />
              <path
                d="M52 41C55.6775 40.9878 59.2838 42.0136 62.4042 43.9595C65.5247 45.9053 68.0328 48.6923 69.64 52C66.34 58.74 59.6 63 52 63C44.4 63 37.66 58.74 34.36 52C35.9672 48.6923 38.4753 45.9053 41.5958 43.9595C44.7163 42.0136 48.3225 40.9878 52 41ZM52 37C42 37 33.46 43.22 30 52C33.46 60.78 42 67 52 67C62 67 70.54 60.78 74 52C70.54 43.22 62 37 52 37ZM52 47C53.3261 47 54.5979 47.5268 55.5355 48.4645C56.4732 49.4021 57 50.6739 57 52C57 53.3261 56.4732 54.5979 55.5355 55.5355C54.5979 56.4732 53.3261 57 52 57C50.6739 57 49.4022 56.4732 48.4645 55.5355C47.5268 54.5979 47 53.3261 47 52C47 50.6739 47.5268 49.4021 48.4645 48.4645C49.4022 47.5268 50.6739 47 52 47ZM52 43C47.04 43 43 47.04 43 52C43 56.96 47.04 61 52 61C56.96 61 61 56.96 61 52C61 47.04 56.96 43 52 43Z"
                fill="white"
              />
            </svg>
            <h3 className="text-xl lg:text-2xl font-medium mt-8">Поддержка</h3>
            <p className="text-sm lg:text-xl opacity-60 mt-4 leading-5 lg:leading-8">
              Сервис контролирует условия, этапы сделки и предоставляет
              поддержку от сервиса.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <div className="bg-black bg-opacity-90 rounded-3xl px-2 py-6 lg:p-12 w-full">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col text-center lg:text-start justify-center lg:max-w-[300px]">
              <h3 className="text-white text-3xl lg:text-5xl font-medium">
                Отзывы
              </h3>
              <p className="text-white opacity-60 text-md lg:text-xl mt-4 lg:mt-14 leading-5 lg:leading-8">
                Нам доверяют пользователи. Мы открыто делимся информацией о
                себе.
              </p>
            </div>
            <div className="flex flex-wrap max-w-3xl justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-6 m-3 max-w-xs">
                <h3 className="text-xl font-medium">Виталий Васильев</h3>
                <p className="opacity-60 mt-6">
                  Первый раз решил попробовал сервис. Все супер! Сделка прошла
                  отлично. Рекомендую!
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 m-3 max-w-xs">
                <h3 className="text-xl font-medium">Ирина Знахарева</h3>
                <p className="opacity-60 mt-6">
                  Быстро, удобно и самое главное безопасно! В наши времена это
                  очень важно. Ставлю класс!
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 m-3 max-w-xs">
                <h3 className="text-xl font-medium">Сергей Гоголев</h3>
                <p className="opacity-60 mt-6">
                  Завершил уже 3 сделки. Покупатели все довольны сервисом и
                  доставкой.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 m-3 max-w-xs">
                <h3 className="text-xl font-medium">Зоя Бобылева</h3>
                <p className="opacity-60 mt-6">
                  Все быстро, прозрачно, выгодно. Буду пользоваться вашим
                  сервисом. Спасибо.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1320px] py-4 px-2 lg:px-4 lg:py-20 m-auto text-gray-900">
        <h2 className="text-2xl lg:text-4xl font-medium text-center mb-6 lg:mb-14">
          Наши партнеры
        </h2>
        <div className="flex justify-center">
          <Image src={dostavista} alt="Dostavista" />
        </div>
      </section>
      <Footer />
    </>
  );
}
