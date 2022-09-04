import clsx from "clsx";

const Toolbar = ({ as: Component = "div", children, className, ...other }) => {
  const styles = clsx(
    "relative flex items-center h-14 md:h-16 px-5 md:px-6",
    className
  );
  return (
    <Component className={styles} {...other}>
      {children}
    </Component>
  );
};

export default Toolbar;
