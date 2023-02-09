import Head from "next/head";
import { useRouter } from "next/router";

import Layouts from "../../layouts/Layouts";

import { ClickBoard, DealStatus } from "../../components";

const deal = () => {
  const { query } = useRouter();

  const deal = {
    id: "sd09vus0d9v0sv0s9dufgs",
    creator_id: "",
    accepter_id: "",
    deal_id: 523512,
    creation_date: "01.02.2023",
    acception_date: "01.02.2023",
    deadline_date: "01.05.2023",
    confirm_date: "01.05.2023",
    creator_adress: "г. Москва, ул. Академика Янгеля 14/2",
    accepter_adress: "г. Москва, Кутузовский проспект д. 12",
    category: "service",
    title: "Написать курсовую",
    description:
      "Тема курсовой - 'Исследование макро и микро экономики на фоне пандемии короновирусной инфеции'",
    shipping_method: 1,
    shipping_amount: 643,
    weight: 10,
    price: 42500,
    comment: "",
    terms: "условия",
    status: "completed",
    size: "10x02x10см",
  };

  return (
    <>
      <Head>
        <title>{`Сделка № ${deal.deal_id}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Настройки профиля на сервисе Safe Side"
        />
      </Head>
      <Layouts>
        <div className="px-32 py-24">
          <h1 className="text-4xl font-medium mb-14">
            Сделка № {deal.deal_id}
          </h1>
          <div className="flex justify-between mb-10">
            <h3 className="text-xl font-medium ">Статус:</h3>
            <DealStatus status={deal.status} />
          </div>
          {deal.status === "created" && (
            <p className="opacity-60 mb-14">
              Для осуществления сделки необходимо выслать приглашение по ссылке
              и получить подтверждения со стороны покупателя. При переходе по
              ссылке покупателю необходимо самостоятельно зарегистрироваться в
              личном кабинете. Сделка появится в разделе “Мои сделки”.
            </p>
          )}
          <ClickBoard />

          <div className="mt-14">
            <div className="mb-14">
              <h3 className="text-xl font-medium mb-6">Об услуге</h3>
              <ul>
                <li className="mb-3">
                  <span className="mr-2">Заголовок:</span>
                  <span className="opacity-60">{deal.title}</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Описание:</span>
                  <span className="opacity-60">{deal.description}</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Крайний срок:</span>
                  <span className="opacity-60">{deal.deadline_date}</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Стоимость товара:</span>
                  <span className="opacity-60">{deal.price} ₽</span>
                </li>
              </ul>
            </div>
            {/* <div className="mb-14">
              <h3 className="text-xl font-medium mb-6">Доставка</h3>
              <ul>
                <li className="mb-3">
                  <span className="mr-2">Адрес отправления:</span>

                  <span className="opacity-60">{deal.creator_adress}</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2"> Адрес доставки:</span>
                  <span className="opacity-60">{deal.accepter_adress}</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Стоимость доставки:</span>
                  <span className="opacity-60">500 ₽</span>
                </li>
              </ul>
            </div> */}
            <div className="mb-14">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium mb-6">
                  Продавец получит всего:
                </h3>
                <h3 className="text-xl font-medium mb-6">55 500 ₽</h3>
              </div>
              <ul>
                <li className="mb-3">
                  <span className="mr-2">Стоимость товара:</span>
                  <span className="opacity-60">{deal.price} ₽</span>
                </li>
              </ul>
            </div>
            <div className="mb-14">
              <div className="flex justify-between">
                <h3 className="text-xl font-medium mb-6">
                  Покупатель заплатит всего:
                </h3>
                <h3 className="text-xl font-medium mb-6">55 500 ₽</h3>
              </div>
              <ul>
                <li className="mb-3">
                  <span className="mr-2">Стоимость товара:</span>
                  <span className="opacity-60">{deal.price} ₽</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Стоимость доставки:</span>
                  <span className="opacity-60">500 ₽</span>
                </li>
                <li className="mb-3">
                  <span className="mr-2">Комиссия сервиса:</span>
                  <span className="opacity-60">150 ₽</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default deal;
