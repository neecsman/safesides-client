import { FilePreview } from "../../../components";

const ProductConfirmation: React.FC<FormValue> = ({
  delivery_method,
  title,
  description,
  attachments,
  commission_paid_by,
  sender_name,
  sender_phone,
  sender_adress,
  sender_entrance,
  sender_floor,
  sender_appart,
  sender_comment,
  recipient_name,
  recipient_phone,
  recipient_adress,
  recipient_entrance,
  recipient_floor,
  recipient_appart,
  recipient_comment,
  size,
  weight,
  price,
}) => {
  let buyer_commission = 0;
  let seller_commission = 0;

  if (commission_paid_by === "buyer") {
    buyer_commission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === "seller") {
    seller_commission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === "half") {
    buyer_commission = ((Number(price) / 100) * 10) / 2;
    seller_commission = ((Number(price) / 100) * 10) / 2;
  }
  return (
    <div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">О товаре</h3>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Товар:</span>
            <span className="opacity-60">{title}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Описание:</span>
            <span className="opacity-60">{description}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Габариты:</span>
            <span className="opacity-60">{size}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Вес:</span>
            <span className="opacity-60">{weight}</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Цена:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>
          <li className="mb-3">
            <span className="mr-2">Фото:</span>
            <div className="flex mt-3">
              {attachments &&
                attachments.map((item: any, i: number) => (
                  <FilePreview key={i} file={item} />
                ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Информация о доставке</h3>
        {delivery_method === 1 && (
          <ul>
            <li className="mb-3">
              <span className="mr-2">Способ доставки:</span>
              <span className="opacity-60">продавец сам отправит товар</span>
            </li>
          </ul>
        )}
        {delivery_method === 2 && (
          <>
            <h2 className="font-bold mb-4">Отправление:</h2>
            <ul>
              <li className="mb-3">
                <span className="mr-2">Имя:</span>
                <span className="opacity-60">{sender_name}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2">Номер телефона:</span>
                <span className="opacity-60">{sender_phone}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2"> Адрес отправления:</span>
                <span className="opacity-60">{`${sender_adress?.value}, ${
                  sender_entrance && `подъезд ${sender_entrance}`
                }, ${sender_floor && `этаж №${sender_floor}`}, ${
                  sender_appart && `квартира № ${sender_appart}`
                } ${sender_comment && `(${sender_comment})`}`}</span>
              </li>
            </ul>
            <h2 className="font-bold mb-4 mt-10">Получение:</h2>
            <ul>
              <li className="mb-3">
                <span className="mr-2">Имя:</span>
                <span className="opacity-60">{recipient_name}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2">Номер телефона:</span>
                <span className="opacity-60">{recipient_phone}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2"> Адрес получения:</span>
                <span className="opacity-60">{`${recipient_adress?.value}, ${
                  recipient_entrance && `подъезд ${recipient_entrance}`
                }, ${recipient_floor && `этаж №${recipient_floor}`}, ${
                  recipient_appart && `квартира № ${recipient_appart}`
                } ${recipient_comment && `(${recipient_comment})`}`}</span>
              </li>
            </ul>
          </>
        )}
        <ul>
          <li className="mb-3">
            <span className="mr-2 font-bold">Стоимость доставки:</span>
            <span className="opacity-60">500 ₽</span>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium mb-6">Продавец получит всего:</h3>
          <h3 className="text-xl font-medium mb-6">{`${
            Number(price) - seller_commission
          } ₽`}</h3>
        </div>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Стоимость товара:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>

          <li className="mb-3">
            <span className="mr-2">Комиссия сервиса:</span>
            <span className="opacity-60">{seller_commission} ₽</span>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <div className="flex justify-between">
          <h3 className="text-xl font-medium mb-6">
            Покупатель заплатит всего:
          </h3>
          <h3 className="text-xl font-medium mb-6">{`${
            Number(price) + buyer_commission
          } ₽`}</h3>
        </div>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Стоимость товара:</span>
            <span className="opacity-60">{price} ₽</span>
          </li>

          <li className="mb-3">
            <span className="mr-2">Комиссия сервиса:</span>
            <span className="opacity-60">{buyer_commission} ₽</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <h3 className="text-xl font-medium mb-6">Итого:</h3>
        <h3 className="text-xl font-medium mb-6">{`${
          Number(price) - seller_commission
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

export default ProductConfirmation;

interface Adress {
  data?: {};
  unrestricted_value?: string;
  value?: string;
}

interface CustomFile extends File {
  preview?: string;
}

interface FormValue {
  delivery_method?: number;
  title?: string;
  description?: string;
  attachments?: CustomFile[];
  commission_paid_by?: string;
  sender_name?: string;
  sender_phone?: string;
  sender_adress?: Adress;
  sender_entrance?: number;
  sender_floor?: number;
  sender_appart?: number;
  sender_comment?: string;
  recipient_name?: string;
  recipient_phone?: string;
  recipient_adress?: Adress;
  recipient_entrance?: string;
  recipient_floor?: string;
  recipient_appart?: string;
  recipient_comment?: string;
  size?: string;
  weight?: string;
  price?: number;
}
