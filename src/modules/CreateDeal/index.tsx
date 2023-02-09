import { useState } from "react";
import Link from "next/link";
import { RadioGroup } from "@headlessui/react";
import { useForm, Controller } from "react-hook-form";

import { Button, Stepper } from "../../components";

import {
  ProductInformation,
  ProductDetails,
  ProductConfirmation,
} from "./Product";

import {
  ServiceInformation,
  ServiceDetails,
  ServiceConfirmation,
} from "./Service";

const CreateDeal = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    watch,

    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const object = watch("object");
  const formData = getValues();

  const serviceForm = [
    <ServiceInformation
      Controller={Controller}
      control={control}
      register={register}
      errors={errors}
    />,
    <ServiceDetails
      Controller={Controller}
      control={control}
      register={register}
      errors={errors}
      setValue={setValue}
      formData={formData}
    />,
    <ServiceConfirmation {...formData} />,
  ];

  const productForm = [
    <ProductInformation
      Controller={Controller}
      control={control}
      register={register}
      errors={errors}
      setValue={setValue}
      formData={formData}
    />,
    <ProductDetails
      Controller={Controller}
      control={control}
      register={register}
      errors={errors}
      watch={watch}
    />,
    <ProductConfirmation {...formData} />,
  ];

  const onSubmit = (data: {}) => console.log(data);

  return (
    <form className="max-w-[636px]" onSubmit={handleSubmit(onSubmit)}>
      <Stepper category={object} step={step} />

      {step === 1 && (
        <div className="mx-3 mb-5">
          <Controller
            name="object"
            control={control}
            defaultValue="service"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={(e) => {
                  onChange(e);
                  reset({ object: e });
                }}
              >
                <RadioGroup.Label>Выберите категорию сделки</RadioGroup.Label>
                <div className="space-y-2 mt-5">
                  <RadioGroup.Option
                    value="service"
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
                                Услуги
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-gray-700" : "text-gray-400"
                                }`}
                              >
                                <span>Что-то не материальное</span>
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
                    value="product"
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
                                Товар
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-gray-700" : "text-gray-400"
                                }`}
                              >
                                <span>Материальные ценности</span>
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
          {errors["object"] && <p>Выбери</p>}
        </div>
      )}
      {object === "product" && productForm[step - 1]}
      {object === "service" && serviceForm[step - 1]}

      <div className="flex justify-between mt-10 px-3">
        {step === 1 && (
          <Link href="/deals">
            <Button className="hover:bg-red-400 hover:text-white" type="button">
              Отменить
            </Button>
          </Link>
        )}
        {step > 1 && (
          <Button type="button" onClick={() => setStep(step - 1)}>
            Назад
          </Button>
        )}
        {step <= 2 && (
          <Button
            type="button"
            onClick={() => setStep(step + 1)}
            disabled={!isValid}
            className="text-white bg-blue-500 hover:bg-blue-400"
          >
            <div className="flex items-center">
              <span>Продолжить</span>
              <svg
                width="14"
                height="10"
                className="stroke-current -rotate-90 ml-2"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Button>
        )}
        {step === 3 && (
          <Button
            className="text-white bg-blue-500 hover:bg-blue-400"
            type="submit"
            disabled={!isValid}
          >
            <div className="flex items-center">
              <span>Подтвердить</span>
              <svg
                width="14"
                height="10"
                className="stroke-current -rotate-90 ml-2"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L5 5L1 1"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Button>
        )}
      </div>
    </form>
  );
};

export default CreateDeal;

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
