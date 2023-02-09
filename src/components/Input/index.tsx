import { RadioGroup } from "@headlessui/react";
import { HTMLInputTypeAttribute } from "react";
import InputMask from "react-input-mask-next";
import { AddressSuggestions } from "react-dadata";

interface InputProps {
  lable?: string;
  errMsg?: string;
  register?: any;
  errors?: any;
  required?: boolean;
  className?: string;
  name: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  mask?: string;
  adress?: boolean;
  Controller?: any;
  control?: any;
  disabled?: boolean;
  value?: string;
  edit?: boolean;
  id?: string;
  defaultChecked?: boolean;
  radioTitle?: string;
  radioText?: string;
  onChange?: any;
}

const AdressInput: React.FC<InputProps> = ({
  register,
  placeholder,
  control,
  Controller,
  name,
  required,
}: any) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, name } }: any) => (
        <AddressSuggestions
          {...register(name, {
            required,
          })}
          count={5}
          onChange={onChange}
          value={value}
          delay={500}
          token="eb9dbc9d8b76b68399bd5aa3a3e5c7c31557e11d"
          inputProps={{
            className:
              "border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full px-4 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none",
            placeholder,
            onBlur,
          }}
          suggestionsClassName="border p-4 shadow-md rounded-lg mt-1 bg-white flex flex-col items-start absolute w-full z-50"
          suggestionClassName="hover:bg-blue-400 hover:text-white rounded px-4 py-2 w-full text-start"
          highlightClassName=" bg-blue-100 rounded p-0.5"
        />
      )}
    />
  );
};

const Input: React.FC<InputProps> = ({
  lable,
  errMsg,
  register,
  errors,
  required,
  className,
  name,
  type,
  placeholder,
  mask,
  adress,
  Controller,
  control,
  disabled,
  value,
  edit,
  id,
  defaultChecked,
  radioTitle,
  radioText,
  onChange,
}) => {
  return (
    <div className="mb-6 w-full px-3 relative">
      <label className="block text-gray-900 dark:text-white mb-4">
        {lable}
      </label>
      {mask ? (
        <InputMask
          {...register(name, {
            required,
          })}
          type={type}
          mask={mask}
          maskPlaceholder=""
          id={name}
          name={name}
          className="border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full px-4 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={value}
        />
      ) : adress ? (
        <AdressInput
          name={name}
          placeholder={placeholder}
          register={register}
          control={control}
          Controller={Controller}
          required
        />
      ) : type === "radio" ? (
        <div>
          <input
            {...register(name, {
              required,
            })}
            type={type}
            id={id}
            name={name}
            value={value}
            className="hidden peer"
            defaultChecked={defaultChecked}
            onChange={onChange}
          />
          <label
            htmlFor={id}
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <div className="block">
              <div className="w-full text-lg font-semibold">{radioTitle}</div>
              <div className="w-full">{radioText}</div>
            </div>
            <svg
              aria-hidden="true"
              className="w-6 h-6 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </label>
        </div>
      ) : (
        <div className="relative">
          <input
            {...register(name, {
              required,
            })}
            type={type}
            id={name}
            className="border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full px-4 py-4 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
            placeholder={placeholder}
            disabled={disabled}
            defaultValue={value}
          />
          {!disabled && edit && (
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.87002 1.79642C8.04333 1.62311 8.04333 1.33426 7.87002 1.16984L6.83016 0.129982C6.66574 -0.0433273 6.37689 -0.0433273 6.20358 0.129982L5.38592 0.943202L7.05235 2.60964M0 6.33356V8H1.66644L6.58131 3.08068L4.91487 1.41425L0 6.33356Z"
                fill="black"
              />
            </svg>
          )}
        </div>
      )}

      {errors[name] && <p className="text-sm text-red-500">{errMsg}</p>}
    </div>
  );
};

export default Input;
