import React, { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

type ImageLoaderProps = {
  imageUrl: string;
  blurhash: string;
  width: number;
  height: number;
};

function ImageLoader({ imageUrl, blurhash, width, height }: ImageLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();

    const handleLoad = () => {
      setLoading(false);
    };

    const handleError = () => {
      console.error("Error loading image:", imageUrl);
      setLoading(false);
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = imageUrl;

    if (img.complete) {
      handleLoad();
    }
  }, [imageUrl, width, height]);

  const effectiveAspectRatio = width / height;

  return (
    <div
      className="w-full h-full"
      style={{ aspectRatio: effectiveAspectRatio }}
    >
      {loading ? (
        <Blurhash
          hash={blurhash}
          width={"100%"}
          height={"100%"}
          resolutionX={64}
          resolutionY={64}
          punch={1}
        />
      ) : (
        <img
          src={imageUrl}
          style={{ objectFit: "cover" }}
          alt="Loaded content"
          className="w-full h-full"
        />
      )}
    </div>
  );
}

export default ImageLoader;
