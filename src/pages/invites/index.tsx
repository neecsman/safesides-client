import { Fragment } from "react";
import Head from "next/head";
import Layouts from "../../layouts/Layouts";
import { Tab } from "@headlessui/react";

import { DealCard } from "../../components";

const userId = "123123";

const Deals = () => {
  let deals = [
    {
      id: 523512,
      creator_id: "",
      accepter_id: "123123",
      creation_date: new Date(),
      acception_date: new Date(),
      deadline_date: new Date(),
      confirm_date: new Date(),
      creator_adress: "",
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
      status: "active",
      size: "10x02x10см",
    },
    {
      id: 589395,
      creator_id: "",
      accepter_id: "",
      creation_date: new Date(),
      acception_date: new Date(),
      deadline_date: new Date(),
      confirm_date: new Date(),
      creator_adress: "",
      accepter_adress: "г. Москва, Кутузовский проспект д. 12",
      category: "product",
      title: "iPhone 12 pro max",
      description: "",
      shipping_method: 1,
      shipping_amount: 0,
      weight: 10,
      price: 42500,
      comment: "",
      terms: "условия",
      status: "created",
      size: "10x02x10см",
    },
    {
      id: 582395,
      creator_id: "",
      accepter_id: "",
      creation_date: new Date(),
      acception_date: new Date(),
      deadline_date: new Date(),
      confirm_date: new Date(),
      creator_adress: "",
      accepter_adress: "г. Москва, Новый арбат 6",
      category: "product",
      title: "Фен Dayson PRO",
      description:
        "Фен в отличном состоянии без сколов и царапин. Пользовались аккуратно, ",
      shipping_method: 2,
      shipping_amount: 643,
      weight: 10,
      price: 42500,
      comment: "",
      terms: "условия",
      status: "completed",
      size: "10x02x10см",
    },
  ];

  const invites = deals.filter((item) => item.accepter_id === userId);

  return (
    <>
      <Head>
        <title>Приглашения</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Мои приглашения к участию в сделке на сервисе Safe Side"
        />
      </Head>
      <Layouts>
        <div className="px-32 py-24">
          <h1 className="text-4xl font-medium mb-14">Приглашения</h1>
          <Tab.Group>
            <Tab.List>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-black border-b-2 border-gray-800 mr-6 pb-2 outline-none"
                        : "mr-6 pb-2 opacity-60 hover:opacity-100 outline-none"
                    }
                  >
                    {`Всего ${invites.length}`}
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-black border-b-2 border-gray-800 mr-6 pb-2 outline-none"
                        : "mr-6 pb-2 opacity-60 hover:opacity-100 outline-none"
                    }
                  >
                    Активные
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? "text-black border-b-2 border-gray-800 mr-6 pb-2 outline-none"
                        : "mr-6 pb-2 opacity-60 hover:opacity-100 outline-none"
                    }
                  >
                    Завершенные
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-10 w-full">
              <Tab.Panel>
                {invites.map((props) => {
                  return <DealCard key={props.id} {...props} />;
                })}
              </Tab.Panel>
              <Tab.Panel>
                {invites
                  .filter((item) => item.status === "active")
                  .map((props) => (
                    <DealCard key={props.id} {...props} />
                  ))}
              </Tab.Panel>
              <Tab.Panel>
                {invites
                  .filter((item) => item.status === "completed")
                  .map((props) => (
                    <DealCard key={props.id} {...props} />
                  ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Layouts>
    </>
  );
};

export default Deals;
