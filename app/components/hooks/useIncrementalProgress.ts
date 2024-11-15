import { useEffect, useState } from "react";

const useIncrementalProgress = (totalResources: number) => {
  const [progress, setProgress] = useState(0);
  const [loadedResources, setLoadedResources] = useState(0);

  useEffect(() => {
    if (totalResources > 0) {
      const newProgress = (loadedResources / totalResources) * 100;
      setProgress(newProgress);
    }
  }, [loadedResources, totalResources]);

  const incrementLoadedResources = () => {
    setLoadedResources((prevCount) => prevCount + 1);
    console.log(loadedResources);
  };

  return { progress, incrementLoadedResources };
};

export default useIncrementalProgress;
