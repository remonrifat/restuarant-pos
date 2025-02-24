import React, { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const InputDraggableImage = ({Buttontext}) => {
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = Array.from(e.dataTransfer.files);
    const newImages = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        newImages.push(file);
        newPreviews.push(URL.createObjectURL(file));
      }
    });

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];
    const newPreviews = [];

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        newImages.push(file);
        newPreviews.push(URL.createObjectURL(file));
      }
    });

    setImages((prevImages) => [...prevImages, ...newImages]);
    setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  return (
    <div className="flex items-center justify-cent min-h-fit rounded-lg bg-gray-100 p-4 gap-6 w-full">
      <div className=" border-2 border-dashed border-primary-500 p-1 rounded-2xl">
        {previews.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 sm:w-40 w-32">
            {previews.map((preview, index) => (
              <img
                key={index}
                src={preview}
                alt={`Preview ${index}`}
                className=" sm:w-40 w-32 sm:h-32 h-28  object-cover rounded-xl"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 sm:w-40 w-32 sm:h-32 h-28 inline-flex items-center justify-center">No image</p>
        )}
      </div>

      <div className="w-full flex flex-col">
        <div
          className="flex p-7 flex-col justify-center items-center border-2 border-dashed border-primary-500 w-full rounded-2xl relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <span>
            <MdOutlineFileUpload size={56} className="text-dark-4" />
          </span>
          <span className="text-primary-500 text-lg font-bold">
            {Buttontext}
          </span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleChange}
            className=" absolute bottom-0 w-full h-full opacity-0"
          />
        </div>

        {images.length > 0 && (
          <div className="space-y-2 py-2">
            {images.map((image, index) => (
              <div className="border p-2 sm:text-base text-sm" key={index}>
                <p className="grid grid-cols-2">
                  <span className="text-primary-500 font-semibold">
                    File name:
                  </span>
                  <span className="text-dark-2">{image.name}</span>
                </p>
                <p className="grid grid-cols-2">
                  <span className="text-primary-500 font-semibold">
                    File size:
                  </span>
                  <span className="text-dark-2">{(image.size / 1024).toFixed(2)} KB</span>
                  
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDraggableImage;
