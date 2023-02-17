import { Input, Textarea, FileInput } from "../../../components";

const ProductInformation = ({
  register,
  errors,
  Controller,
  control,
  formData,
  setValue,
}: any) => {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        lable="Название товара"
        name="title"
        placeholder="Название"
        errMsg="Введите название товара"
        required
      />

      <Textarea
        register={register}
        errors={errors}
        rows={6}
        lable="Описание"
        name="description"
        placeholder="Опишите условия сделки и характеристики товара - так мы сможем вас защитить 
          в конфликтной ситуации"
        errMsg="Опишите условия сделки и характеристики товара"
        required
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
      <FileInput
        name="attachments"
        register={register}
        Controller={Controller}
        control={control}
        setValue={setValue}
        formData={formData}
        accept={{
          "image/*": [],
        }}
        label="Прикрепить фото товара"
        placeholder="Перенесите изображения сюда или нажмите (до 5 шт. не более 5 мб.)"
      />
    </>
  );
};

export default ProductInformation;
