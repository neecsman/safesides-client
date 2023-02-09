import { createRef } from "react";
import { Badge, CropImageModal } from "..";
import { ReactCropperElement } from "react-cropper";
// import "./roundedCropper.css";

interface AvatarProps {
  upload?: boolean;
  src?: string;
  firstname?: string;
  count?: number;
  className?: string;
}

const Avatar = ({ src, count, firstname, className, upload }: AvatarProps) => {
  return (
    <>
      {upload ? (
        <CropImageModal />
      ) : (
        <div className="relative">
          <Badge count={count} />
          {src ? (
            <img
              className={`rounded-full ${className}`}
              src={src}
              alt="Avatar"
            />
          ) : (
            <div
              className={`flex justify-center items-center text-lg font-bold rounded-full w-10 h-10 bg-gray-200 text-gray-400 ${className}`}
            >
              {firstname?.substring(0, 1).toUpperCase()}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Avatar;
