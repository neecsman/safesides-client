import React from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";

import Layouts from "../../layouts/Layouts";
import { Avatar, Input, Button } from "../../components";

const profile = () => {
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data: {}) => console.log(data);

  const user = {
    id: "1",
    firstname: "Никита",
    lastname: "Колесников",
    phone: "9999765159",
    email: "nikappleid@yandex.ru",
    password: "qweqwe123123",
    avatarPath: "",
    balance: 1000,
  };

  return (
    <>
      <Head>
        <title>Настройки профиля</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Настройки профиля на сервисе Safe Side"
        />
      </Head>
      <Layouts>
        <div className="px-32 py-24">
          <h1 className="text-4xl font-medium mb-14">Настройки профиля</h1>
          <Avatar
            firstname="Никита"
            upload
            className="w-16 h-16 cursor-pointer"
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <Input
                name="firstname"
                register={register}
                errors={errors}
                lable="Имя"
                value={user.firstname}
                required
                errMsg="Введите имя"
                edit
              />
              <Input
                name="lastname"
                register={register}
                errors={errors}
                lable="Фамилия"
                value={user.lastname}
                required
                errMsg="Введите фамилию"
                edit
              />
            </div>
            <div className="flex">
              <Input
                mask="+7 (999) 999-99-99"
                name="phone"
                register={register}
                errors={errors}
                lable="Телефон"
                disabled
                value={user.phone}
              />
              <Input
                name="email"
                register={register}
                errors={errors}
                lable="Email"
                disabled
                value={user.email}
              />
            </div>
            <Input
              lable="Пароль"
              name="password"
              type="password"
              register={register}
              errors={errors}
              value={user.password}
              required
              errMsg="Введите пароль"
              edit
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-blue-500 text-white mx-3 mt-8"
              >
                Сохранить
              </Button>
            </div>
          </form>
        </div>
      </Layouts>
    </>
  );
};

export default profile;
