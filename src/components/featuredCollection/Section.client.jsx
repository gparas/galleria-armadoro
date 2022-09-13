import { useRef, useEffect } from "react";
import { Link, Image } from "@shopify/hydrogen";
import useInView from "../../hooks/useInView";

const Section = ({ collection, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;
    window.location.hash = `section-${index}`;
  }, [inView, index]);

  return (
    <section id={`section-${index}`} className="h-screen snap-start" ref={ref}>
      <Link to={`/collections/${collection.handle}`} className="w-full h-full">
        <Image data={collection.image} className="w-full h-full object-cover" />
      </Link>
    </section>
  );
};

export default Section;
