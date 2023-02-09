import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, createRef } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";

import "cropperjs/dist/cropper.css";

const CropImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [uploaded, setUploaded] = useState("");
  const [cropped, setCropped] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const file2Base64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result?.toString() || "");
      reader.onerror = (error) => reject(error);
    });
  };

  const fileRef = createRef<HTMLInputElement>();
  const cropperRef = createRef<ReactCropperElement>();

  const onFileInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target?.files?.[0];
    if (file) {
      file2Base64(file).then((base64) => {
        setUploaded(base64);
      });
      openModal();
    }
  };

  const onCrop = () => {
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    setCropped(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Фотография вашего профиля
                  </Dialog.Title>
                  <Dialog.Description className="text-center my-4">
                    Выделенная область будет отображаться в вашем профиле
                  </Dialog.Description>
                  <Cropper
                    src={uploaded}
                    zoomTo={0.5}
                    autoCropArea={1}
                    aspectRatio={1}
                    viewMode={2}
                    guides={false}
                    ref={cropperRef}
                  />

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 "
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Отменить
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 "
                      onClick={() => {
                        closeModal();
                        onCrop();
                      }}
                    >
                      Сохранить
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="w-16">
        <label className="cursor-pointer">
          <div
            className={`flex justify-center items-center text-3xl font-bold rounded-full w-16 h-16 bg-gray-200 text-gray-400 relative`}
          >
            {cropped ? (
              <img className={`rounded-full w-16`} src={cropped} alt="Avatar" />
            ) : (
              "Никита".substring(0, 1).toUpperCase()
            )}

            <span className="absolute bg-blue-500 p-2 rounded-full right-0 bottom-0">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.87002 1.79642C8.04333 1.62311 8.04333 1.33426 7.87002 1.16984L6.83016 0.129982C6.66574 -0.0433273 6.37689 -0.0433273 6.20358 0.129982L5.38592 0.943202L7.05235 2.60964M0 6.33356V8H1.66644L6.58131 3.08068L4.91487 1.41425L0 6.33356Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
          <input
            type="file"
            className="hidden"
            ref={fileRef}
            onChange={onFileInputChange}
            accept="image/png, image/jpeg"
          />
        </label>
      </div>
    </>
  );
};

export default CropImageModal;
