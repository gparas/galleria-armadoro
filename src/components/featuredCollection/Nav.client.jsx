import { useState, useEffect } from "react";
import clsx from "clsx";

const Nav = ({ items }) => {
  const [activeStep, setActiveStep] = useState("#section-0");

  const handleHashChange = () => {
    const hash = window.location.hash;
    setActiveStep(hash);
  };

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return items.map((item, index) => {
    const hash = `#section-${index}`;
    const styles = clsx("mx-2", {
      ["border-b-2 border-current"]: hash === activeStep,
    });
    return (
      <a key={item.id} href={hash} className={styles}>
        {item.title}
      </a>
    );
  });
};

export default Nav;
