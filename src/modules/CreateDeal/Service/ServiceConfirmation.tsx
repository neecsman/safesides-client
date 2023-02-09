import { FilePreview } from "../../../components";

const ServiceConfirmation: React.FC<FormValue> = ({
  service,
  description,
  price,
  commission_paid_by,
  end_time,
  comment,
  file,
}) => {
  let accepter_comission = 0;
  let creator_commission = 0;

  if (commission_paid_by === "accepter") {
    accepter_comission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === "creator") {
    creator_commission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === "half") {
    accepter_comission = ((Number(price) / 100) * 10) / 2;
    creator_commission = ((Number(price) / 100) * 10) / 2;
  }

  return (
    <div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Об услуге</h3>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Наименование:</span>
            <span className="opacity-60">{service}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Описание:</span>
            <span className="opacity-60">{description}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Стоимость:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Дата завершения:</span>
            <span className="opacity-60">{end_time}</span>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Детали</h3>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Комиссию оплачивает:</span>
            <span className="opacity-60">
              {commission_paid_by === "accepter" && "исполнитель"}
              {commission_paid_by === "creator" && "заказчик"}
              {commission_paid_by === "half" && "50/50"}
            </span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Комментарий:</span>
            <span className="opacity-60">{comment}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Приложения:</span>
            <div className="flex mt-3">
              {file &&
                file.map((file, i) => <FilePreview key={i} file={file} />)}
            </div>
          </li>
        </ul>
      </div>
      {/* <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Доставка</h3>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Адрес отправления:</span>

            <span className="opacity-60">{sender?.value}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2"> Адрес доставки:</span>
            <span className="opacity-60">{recipient?.value}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Стоимость доставки:</span>
            <span className="opacity-60">500 ₽</span>
          </li>
        </ul>
      </div> */}
      <div className="mb-14">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium mb-6">
            Испольнитель получит всего:
          </h3>
          <h3 className="text-xl font-medium mb-6">{`${
            Number(price) - accepter_comission
          } ₽`}</h3>
        </div>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Стоимость услуги:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>

          <li className="mb-3">
            <span className="mr-2">Комиссия сервиса:</span>
            <span className="opacity-60">{accepter_comission} ₽</span>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium mb-6">Заказчик заплатит всего:</h3>
          <h3 className="text-xl font-medium mb-6">{`${
            Number(price) + creator_commission
          } ₽`}</h3>
        </div>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Стоимость услуги:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>

          <li className="mb-3">
            <span className="mr-2">Комиссия сервиса:</span>
            <span className="opacity-60">{creator_commission} ₽</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <h3 className="text-xl font-medium mb-6">Итого:</h3>
        <h3 className="text-xl font-medium mb-6">{`${
          Number(price) + creator_commission
        } ₽`}</h3>
      </div>
      <div className="text-center text-sm">
        <p className="opacity-30">
          Нажимая на кнопку “Подтвердить”, вы соглашаетесь с офертой сервиса
          Safe Side.
        </p>
      </div>
    </div>
  );
};

export default ServiceConfirmation;

interface CustomFile extends File {
  preview: string;
}

interface FormValue {
  service?: string;
  description?: string;
  commission_paid_by?: string;
  end_time?: string;
  price?: string;
  comment?: string;
  file?: CustomFile[];
}
