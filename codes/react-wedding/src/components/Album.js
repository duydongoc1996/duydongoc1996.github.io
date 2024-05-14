import React from "react";
import albumData from "../assets/data//album.json";
import { AlbumPreview } from "./AlbumPreview";

function ImageSmall({ src, onClick }) {
  return (
    <div className="w-1/2 p-1 md:p-2">
      <img
        onClick={onClick}
        alt="gallery"
        className="block h-full w-full object-cover object-center shadow-lg"
        src={src}
      />
    </div>
  );
}

function ImageBig({ src, onClick }) {
  return (
    <div className="w-full p-1 md:p-2">
      <img
        onClick={onClick}
        alt="gallery"
        className="block h-full w-full object-cover object-center shadow-lg"
        src={src}
      />
    </div>
  );
}

export default function Album() {
  const [isPreview, setIsPreview] = React.useState(false);
  const [previewIndex, setPreviewIndex] = React.useState(0);

  const openPreview = (index) => {
    return () => {
      setPreviewIndex(index);
      setIsPreview(true);
    };
  };

  const closePreview = () => {
    setIsPreview(false);
  };

  return (
    <section id="album" className="body-font text-gray-600">
      {isPreview && (
        <AlbumPreview previewIndex={previewIndex} onClose={closePreview} />
      )}

      <div className="container mx-auto flex flex-wrap px-5 py-24">
        <div className="mb-20 flex w-full flex-col text-center ">
          <h2 className="title-font mb-1 text-lg font-medium tracking-widest text-red-500">
            Những khoảnh khắc đẹp nhất ...
          </h2>
          <h2 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
            Album
          </h2>
        </div>

        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-full flex-wrap sm:w-full md:w-1/2">
            <ImageSmall src={albumData.images.at(0)} onClick={openPreview(0)} />
            <ImageSmall src={albumData.images.at(1)} onClick={openPreview(1)} />
            <ImageBig src={albumData.images.at(2)} onClick={openPreview(2)} />
          </div>
          <div className="flex w-full flex-wrap sm:w-full md:w-1/2">
            <ImageBig src={albumData.images.at(3)} onClick={openPreview(3)} />
            <ImageSmall src={albumData.images.at(4)} onClick={openPreview(4)} />
            <ImageSmall src={albumData.images.at(5)} onClick={openPreview(5)} />
          </div>
          <div className="flex w-full flex-wrap sm:w-full md:w-1/2">
            <ImageBig src={albumData.images.at(6)} onClick={openPreview(6)} />
            <ImageSmall src={albumData.images.at(7)} onClick={openPreview(7)} />
            <ImageSmall src={albumData.images.at(8)} onClick={openPreview(8)} />
          </div>
          <div className="flex w-full flex-wrap sm:w-full md:w-1/2">
            <ImageBig src={albumData.images.at(9)} onClick={openPreview(9)} />
            <ImageSmall
              src={albumData.images.at(10)}
              onClick={openPreview(10)}
            />
            <ImageSmall
              src={albumData.images.at(11)}
              onClick={openPreview(11)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
