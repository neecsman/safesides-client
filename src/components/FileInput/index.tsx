import Dropzone from "react-dropzone";
import { FilePreview } from "..";
interface DropzoneProps {
  register?: any;
  Controller?: any;
  control?: any;
  setValue?: any;
  formData?: any;
  label?: string;
  placeholder?: string;
  accept?: {};
  name: string;
}

const FileInput: React.FC<DropzoneProps> = ({
  Controller,
  control,
  setValue,
  formData,
  label,
  placeholder,
  accept,
  name,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange } }: any) => (
          <Dropzone
            accept={accept}
            maxSize={5242880}
            maxFiles={5}
            onDrop={(acceptedFiles) => {
              setValue(
                name,
                acceptedFiles.map((file) =>
                  Object.assign(file, {
                    preview: URL.createObjectURL(file),
                  })
                ) as unknown as FileList,
                {
                  shouldValidate: true,
                }
              );
            }}
          >
            {({
              getInputProps,
              getRootProps,
              isDragActive,
              fileRejections,
            }) => {
              const removeFile = (file: File) => {
                const newFiles = formData.attachments.filter(
                  (item: File) => item != file
                );
                setValue(name, newFiles as unknown as FileList, {
                  shouldValidate: true,
                });
              };

              return (
                <div className="mb-6 w-full px-3">
                  <label className="block text-gray-900 dark:text-white mb-4">
                    {label}
                  </label>
                  <div className="text-sm border-2 rounded-xl cursor-pointer h-24 overflow-hidden border-dashed">
                    <div
                      {...getRootProps({
                        className: `dropzone flex flex-col justify-center items-center  h-full transition-all hover:bg-gray-100 ${
                          isDragActive && "bg-green-200"
                        }`,
                      })}
                    >
                      <input {...getInputProps({ onChange })} />

                      <p className="opacity-30 max-w-xs text-center">
                        {placeholder}
                      </p>
                    </div>
                  </div>
                  <div className="mr-3 mt-4 flex">
                    {formData.attachments &&
                      formData.attachments.map((file: any, i: any) => (
                        <FilePreview
                          key={i}
                          attachments={file}
                          removeFile={removeFile}
                        />
                      ))}
                  </div>

                  {fileRejections[0] && (
                    <div className="mx-3">
                      {fileRejections[0].errors[0].code ===
                        "file-too-large" && (
                        <p className="text-sm text-red-500">
                          Размер файла {fileRejections[0].file.name} превышает 5
                          мб.
                        </p>
                      )}
                      {fileRejections[0].errors[0].code ===
                        "too-many-files" && (
                        <p className="text-sm text-red-500">
                          Количство файлов превышает допустимое
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            }}
          </Dropzone>
        )}
      />
    </>
  );
};

export default FileInput;
