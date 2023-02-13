import { RadioGroup } from "@headlessui/react";
import { Textarea, FileInput } from "../../../components";
const ServiceDetails = ({
  register,
  errors,
  Controller,
  control,
  setValue,
  formData,
}: any) => {
  return (
    <>
      <div className="mx-3 mb-5">
        <Controller
          name="commission_paid_by"
          control={control}
          defaultValue={1}
          rules={{ required: true }}
          render={({ field: { onChange, value } }: any) => (
            <RadioGroup value={value} onChange={onChange}>
              <RadioGroup.Label>Комиссию сервиса оплачивает</RadioGroup.Label>
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
                              Заказчик
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                оплачивает полную стоимость комиссии сервиса
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
                              Исполнитель
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                оплачивает полную стоимость комиссии сервиса
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
                  value={3}
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
                              Пополам
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className={`inline ${
                                checked ? "text-gray-700" : "text-gray-400"
                              }`}
                            >
                              <span>
                                исполнитель и заказчик платят комиссию 50 на 50
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
      <Textarea
        register={register}
        errors={errors}
        rows={6}
        lable="Комментарий"
        name="terms"
        placeholder="Опишите условия сделки и что включает в себя оказываемая услуга - так мы сможем вас защитить в конфликтной ситуации"
        errMsg="Опишите условия сделки"
        required
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
          "application/zip": [],
          "application/pdf": [],
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            [],
        }}
        label="Прикрепить файлы"
        placeholder="Перенесите файлы сюда или нажмите (до 5 шт., до 5 мб.)"
      />
    </>
  );
};

export default ServiceDetails;

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
