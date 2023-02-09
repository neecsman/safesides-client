import React from "react";
import Head from "next/head";
import Layouts from "../../layouts/Layouts";
import { CreateDeal } from "../../modules";

const Create = () => {
  return (
    <>
      <Head>
        <title>Создать сделку</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Создание безопасной сделки на сервисе Safe Side"
        />
      </Head>
      <Layouts>
        <div className="flex flex-col px-24 pt-24">
          <h1 className="text-3xl font-medium">Создание сделки</h1>
          <div className="mt-16">
            <CreateDeal />
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Create;
