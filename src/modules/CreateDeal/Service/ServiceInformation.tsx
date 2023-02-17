import { Input, Textarea } from "../../../components";

const ServiceInformation = ({ register, errors }: any) => {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        lable="Название услуги"
        name="title"
        placeholder="Название"
        errMsg="Введите название услуги"
        required
      />
      <Textarea
        register={register}
        errors={errors}
        lable="Описание услуги"
        name="description"
        placeholder="Опишите услугу, которую собираетесь оказать заказчику"
        errMsg="Опишите пожалуйста услугу"
        rows={5}
        required
      />
      <div className="flex w-full">
        <Input
          register={register}
          errors={errors}
          lable="Дата оказания услуги"
          name="deadline_date"
          placeholder="01.01.2023"
          errMsg="Укажите дату оказания услуги"
          required
          mask="99.99.9999"
        />
        <Input
          register={register}
          errors={errors}
          lable="Стоимость"
          name="price"
          placeholder="0 ₽"
          errMsg="Введите стоимость товара"
          required
          mask="99999999"
        />
      </div>
    </>
  );
};

export default ServiceInformation;
