import { useState, useEffect } from "react";

function useImageLoader(src: string) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(true);
  }, [src]);

  return { isLoaded, error };
}

export default useImageLoader;
