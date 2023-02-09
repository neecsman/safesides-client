import { HTMLInputTypeAttribute } from "react";

interface InputProps {
  lable?: string;
  errMsg?: string;
  register: any;
  errors?: any;
  required?: boolean;
  className?: string;
  name: string;
  placeholder: string;
  rows?: number;
  type?: HTMLInputTypeAttribute;
}

const Textarea: React.FC<InputProps> = ({
  lable,
  errMsg,
  register,
  errors,
  required,
  className,
  name,
  rows,
  type,
  placeholder,
}) => {
  return (
    <div className="mt-6 w-full px-3 mb-6">
      <label
        htmlFor="first_name"
        className="block text-gray-900 dark:text-white mb-4"
      >
        {lable}
      </label>
      <textarea
        {...register(name, {
          required,
        })}
        type={type}
        id={name}
        rows={rows}
        className="border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full px-4 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none no-scrollbar"
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-sm text-red-500">{errMsg}</p>}
    </div>
  );
};

export default Textarea;
