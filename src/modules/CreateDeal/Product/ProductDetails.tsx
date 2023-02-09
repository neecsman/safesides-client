import { RadioGroup } from "@headlessui/react";
import { Input, Textarea } from "../../../components";

const ProductDetails = ({
  register,
  errors,
  Controller,
  control,
  watch,
}: any) => {
  const delivery_method = watch("delivery_method");

  return (
    <>
      <div className="mx-3 mb-5">
        <Controller
          name="commission_paid_by"
          control={control}
          defaultValue="seller"
          rules={{ required: true }}
          render={({ field: { onChange, value } }: any) => (
            <RadioGroup value={value} onChange={onChange}>
              <RadioGroup.Label>Комиссию сервиса оплачивает</RadioGroup.Label>
              <div className=" space-y-2 mt-5">
                <RadioGroup.Option
                  value="seller"
                  className={({ checked }) =>
                    `${checked ? "border-blue-500 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-xl px-5 py-4 border border-gray-300 focus:outline-none hover:bg-gray-100`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              Продавец
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                *оплачивает полную стоимость комиссии сервиса
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-blue">
                            <CheckIcon className="h-8 w-8 stroke-blue-500" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="buyer"
                  className={({ checked }) =>
                    `
                   ${checked ? "border-blue-500 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-xl px-5 py-4 border border-gray-300 focus:outline-none hover:bg-gray-100`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              Покупатель
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                *оплачивает полную стоимость комиссии сервиса
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-8 w-8 stroke-blue-500" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  value="half"
                  className={({ checked }) =>
                    `
                   ${checked ? "border-blue-500 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-xl px-5 py-4 border border-gray-300 focus:outline-none hover:bg-gray-100`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              Пополам
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                *продавец и покупатель оплачивают комиссию 50 на
                                50
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-8 w-8 stroke-blue-500" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          )}
        />
      </div>
      <div className="mx-3 mb-5">
        <Controller
          name="delivery_method"
          control={control}
          defaultValue={1}
          rules={{ required: true }}
          render={({ field: { onChange, value } }: any) => (
            <RadioGroup value={value} onChange={onChange}>
              <RadioGroup.Label>Способы доставки</RadioGroup.Label>
              <div className=" space-y-2 mt-5">
                <RadioGroup.Option
                  value={1}
                  className={({ checked }) =>
                    `${checked ? "border-blue-500 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-xl px-5 py-4 border border-gray-300 focus:outline-none hover:bg-gray-100`
                  }
                >
                  {({ checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              Доставлю сам
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                *продавец самостоятельно отправляет товар
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-blue">
                            <CheckIcon className="h-8 w-8 stroke-blue-500" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  value={2}
                  className={({ active, checked }) =>
                    `
                   ${checked ? "border-blue-500 text-white" : "bg-white"}
                     relative flex cursor-pointer rounded-xl px-5 py-4 border border-gray-300 focus:outline-none hover:bg-gray-100`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="p"
                              className={`font-medium  ${
                                checked ? "text-gray-900" : "text-gray-600"
                              }`}
                            >
                              Доставка Safe Sides
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                *осуществляется нашим партнером (в пределах
                                одного города)
                              </span>
                            </RadioGroup.Description>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <CheckIcon className="h-8 w-8 stroke-blue-500" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      {delivery_method == 2 && (
        <>
          <h3 className="text-2xl font-medium my-10 text-center mx-3">
            Отправление
          </h3>
          <div className="flex">
            <Input
              register={register}
              errors={errors}
              lable="Имя"
              name="sender_name"
              placeholder="Фёдор Достоевский"
              errMsg="Введите имя"
              required
              Controller={Controller}
              control={control}
            />

            <Input
              register={register}
              errors={errors}
              lable="Номер телефона"
              name="sender_phone"
              placeholder="+7 999 999 99 99"
              errMsg="Введите номер телефона"
              mask="+7 999 999 99 99"
              required
              Controller={Controller}
              control={control}
            />
          </div>

          <Input
            register={register}
            errors={errors}
            lable="Адрес отправления"
            name="sender_adress"
            placeholder="г. Москва, ул. Новый Арбат, д. 25"
            errMsg="Введите адрес отправления"
            required
            adress
            Controller={Controller}
            control={control}
          />

          <div className="flex">
            <Input
              register={register}
              errors={errors}
              lable="Подъезд"
              name="sender_entrance"
              placeholder="1"
              mask="99"
              Controller={Controller}
              control={control}
            />
            <Input
              register={register}
              errors={errors}
              lable="Этаж"
              name="sender_floor"
              placeholder="1"
              mask="99"
              Controller={Controller}
              control={control}
            />
            <Input
              register={register}
              errors={errors}
              lable="кв/офис"
              name="sender_appart"
              placeholder="1"
              mask="999"
              Controller={Controller}
              control={control}
            />
          </div>
          <Textarea
            register={register}
            errors={errors}
            rows={4}
            lable="Комментарий"
            name="sender_comment"
            placeholder="Комментарий для курьера"
          />

          <h3 className="text-2xl font-medium my-10 text-center mx-3">
            Получение
          </h3>

          <div className="flex">
            <Input
              register={register}
              errors={errors}
              lable="Имя"
              name="recipient_name"
              placeholder="Александр Пушкни"
              errMsg="Введите имя"
              required
              Controller={Controller}
              control={control}
            />

            <Input
              register={register}
              errors={errors}
              lable="Номер телефона"
              name="recipient_phone"
              placeholder="+7 999 999 99 99"
              errMsg="Введите номер телефона"
              mask="+7 999 999 99 99"
              required
              Controller={Controller}
              control={control}
            />
          </div>
          <Input
            register={register}
            errors={errors}
            lable="Адрес получения"
            name="recipient_adress"
            placeholder="г. Москва, ул. Новый Арбат, д. 8"
            errMsg="Введите адрес доставки"
            required
            adress
            Controller={Controller}
            control={control}
          />
          <div className="flex">
            <Input
              register={register}
              errors={errors}
              lable="Подъезд"
              name="recipient_entrance"
              placeholder="1"
              mask="99"
              Controller={Controller}
              control={control}
            />
            <Input
              register={register}
              errors={errors}
              lable="Этаж"
              name="recipient_floor"
              placeholder="1"
              mask="99"
              Controller={Controller}
              control={control}
            />
            <Input
              register={register}
              errors={errors}
              lable="кв/офис"
              name="recipient_appart"
              placeholder="1"
              mask="99"
              Controller={Controller}
              control={control}
            />
          </div>
          <Textarea
            register={register}
            errors={errors}
            rows={4}
            lable="Комментарий"
            name="recipient_comment"
            placeholder="Комментарий для курьера"
          />

          <div className="flex w-full">
            <Input
              register={register}
              errors={errors}
              lable="Габариты товара"
              name="size"
              placeholder="0 × 0 × 0 см"
              errMsg="Введите габариты товара"
              required
              mask="99 × 99 × 99 см"
            />
            <Input
              register={register}
              errors={errors}
              lable="Вес"
              name="weight"
              placeholder="0 кг"
              errMsg="Введите вес товара"
              required
              mask="999"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;

interface SvgProps {
  className: string;
}

function CheckIcon(props: SvgProps) {
  return (
    <svg viewBox="0 0 26 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={11} fill="current" opacity="1" />
      <path
        d="M7 13l3 3 7-7"
        stroke="current"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
