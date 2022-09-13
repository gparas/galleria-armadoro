import { useState, useMemo, useEffect } from "react";

const useInView = (targetRef, options) => {
  const [inView, setInView] = useState(false);

  const callbackFunction = (entries) => {
    const [enttry] = entries;
    setInView(enttry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return inView;
};

export default useInView;
