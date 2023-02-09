interface StepProps {
  step: number;
  category: string;
}
const Stepper = ({ step, category }: StepProps) => {
  return (
    <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mb-14">
      <li
        className={`flex items-center space-x-2.5 ${
          step >= 1 ? "text-gray-800" : "text-gray-300"
        }`}
      >
        <span
          className={`flex items-center text-white justify-center w-8 h-8 rounded-full shrink-0 ${
            step === 1 ? "bg-blue-500" : "bg-black"
          }`}
        >
          {step > 1 ? (
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.1566L4.4 11L0 6.48844L1.128 5.33184L4.4 8.6786L12.872 0L14 1.1566Z"
                fill="white"
              />
            </svg>
          ) : (
            1
          )}
        </span>
        <span>
          {category === "service" && <p>Информация об услуге</p>}
          {category === "product" && <p>Информация о товаре</p>}
        </span>
      </li>
      <li
        className={`flex items-center space-x-2.5 ${
          step >= 2 ? "text-gray-800" : "text-gray-300"
        }`}
      >
        <span
          className={`flex items-center text-white justify-center w-8 h-8 rounded-full shrink-0 ${
            step === 2 ? "bg-blue-500" : step > 2 ? "bg-black" : "bg-gray-300"
          }`}
        >
          {step > 2 ? (
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.1566L4.4 11L0 6.48844L1.128 5.33184L4.4 8.6786L12.872 0L14 1.1566Z"
                fill="white"
              />
            </svg>
          ) : (
            2
          )}
        </span>
        <span>
          <p>Детали сделки</p>
        </span>
      </li>
      <li
        className={`flex items-center space-x-2.5 ${
          step >= 3 ? "text-gray-800" : "text-gray-300"
        }`}
      >
        <span
          className={`flex items-center text-white justify-center w-8 h-8 rounded-full shrink-0 ${
            step >= 3 ? "bg-blue-500" : "bg-gray-300"
          }`}
        >
          3
        </span>
        <span>
          <p>Подтверждение</p>
        </span>
      </li>
    </ol>
  );
};

export default Stepper;
