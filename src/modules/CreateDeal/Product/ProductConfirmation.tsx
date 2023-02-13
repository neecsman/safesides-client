import { FilePreview } from "../../../components";
import { IDeal } from "../../../interfaces";
const ProductConfirmation: React.FC<IDeal> = ({
  shipping_method,
  title,
  description,
  attachments,
  commission_paid_by,
  creator_name,
  creator_phone,
  creator_adress,
  creator_entrance,
  creator_floor,
  creator_appart,
  creator_comment,
  accepter_name,
  accepter_phone,
  accepter_adress,
  accepter_entrance,
  accepter_floor,
  accepter_appart,
  accepter_comment,
  terms,
  size,
  weight,
  price,
}) => {
  let buyer_commission = 0;
  let seller_commission = 0;

  if (commission_paid_by === 2) {
    buyer_commission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === 1) {
    seller_commission = (Number(price) / 100) * 10;
  }

  if (commission_paid_by === 3) {
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
          {/* <li className="mb-3">
            <span className="mr-2">Фото:</span>
            <div className="flex mt-3">
              {attachments &&
                attachments.map((item: any, i: number) => (
                  <FilePreview key={i} attachments={item} />
                ))}
            </div>
          </li> */}
        </ul>
      </div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Детали</h3>
        <ul>
          <li className="mb-3">
            <span className="mr-2">Комиссию оплачивает:</span>
            <span className="opacity-60">
              {commission_paid_by === 2 && "покупатель"}
              {commission_paid_by === 1 && "продавец"}
              {commission_paid_by === 3 && "50/50"}
            </span>
          </li>

          <li className="mb-3">
            <span className="mr-2">Фото:</span>
            <div className="flex mt-3">
              {attachments &&
                attachments.map((file, i) => (
                  <FilePreview key={i} attachments={file} />
                ))}
            </div>
          </li>
        </ul>
      </div>
      <div className="mb-14">
        <h3 className="text-xl font-medium mb-6">Информация о доставке</h3>
        {shipping_method === 1 && (
          <ul>
            <li className="mb-3">
              <span className="mr-2">Способ доставки:</span>
              <span className="opacity-60">продавец сам отправит товар</span>
            </li>
          </ul>
        )}
        {shipping_method === 2 && (
          <>
            <h2 className="font-bold mb-4">Отправление:</h2>
            <ul>
              <li className="mb-3">
                <span className="mr-2">Имя:</span>
                <span className="opacity-60">{creator_name}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2">Номер телефона:</span>
                <span className="opacity-60">{creator_phone}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2"> Адрес отправления:</span>
                <span className="opacity-60">{`${creator_adress?.value}, ${
                  creator_entrance && `подъезд ${creator_entrance}`
                }, ${creator_floor && `этаж №${creator_floor}`}, ${
                  creator_appart && `квартира № ${creator_appart}`
                } ${creator_comment && `(${creator_comment})`}`}</span>
              </li>
            </ul>
            <h2 className="font-bold mb-4 mt-10">Получение:</h2>
            <ul>
              <li className="mb-3">
                <span className="mr-2">Имя:</span>
                <span className="opacity-60">{accepter_name}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2">Номер телефона:</span>
                <span className="opacity-60">{accepter_phone}</span>
              </li>
              <li className="mb-3">
                <span className="mr-2"> Адрес получения:</span>
                <span className="opacity-60">{`${accepter_adress?.value}, ${
                  accepter_entrance && `подъезд ${accepter_entrance}`
                }, ${accepter_floor && `этаж №${accepter_floor}`}, ${
                  accepter_appart && `квартира № ${accepter_appart}`
                } ${accepter_comment && `(${accepter_comment})`}`}</span>
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
  creator_name?: string;
  creator_phone?: string;
  creator_adress?: Adress;
  creator_entrance?: number;
  creator_floor?: number;
  creator_appart?: number;
  creator_comment?: string;
  accepter_name?: string;
  accepter_phone?: string;
  accepter_adress?: Adress;
  accepter_entrance?: string;
  accepter_floor?: string;
  accepter_appart?: string;
  accepter_comment?: string;
  size?: string;
  weight?: string;
  price?: number;
}
