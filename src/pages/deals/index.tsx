import { Fragment } from "react";
import Head from "next/head";
import Layouts from "../../layouts/Layouts";
import { Tab } from "@headlessui/react";
import { IDeal } from "../../interfaces";
import { DealCard } from "../../components";

import deals from "../../../data.json";

const Deals: React.FC = () => {
  const myDeals = deals.filter(
    (item) => item.creator_id === "63e3b5c0e2cee19e45600aae"
  );

  return (
    <>
      <Head>
        <title>Мои сделки</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Мои сделки на сервисе Safe Side" />
      </Head>
      <Layouts>
        <div className="px-32 py-24">
          <h1 className="text-4xl font-medium mb-14">Сделки</h1>
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
                    {`Всего ${myDeals.length}`}
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
                {myDeals.map((props) => {
                  return <DealCard key={props.id} {...props} />;
                })}
              </Tab.Panel>
              <Tab.Panel>
                {myDeals
                  .filter((item) => item.status === 2)
                  .map((props) => (
                    <DealCard key={props.id} {...props} />
                  ))}
              </Tab.Panel>
              <Tab.Panel>
                {myDeals
                  .filter((item) => item.status === 3)
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
