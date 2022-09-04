import { Link } from "@shopify/hydrogen";
import { Toolbar } from "../elements";

const Header = ({ name }) => {
  return (
    <header role="banner" className="fixed flex flex-col shrink-0 w-full z-50">
      <Toolbar>
        <Link className="font-bold text-8xl tracking-tighter font-serif" to="/">
          {name}
        </Link>
      </Toolbar>
    </header>
  );
};

export default Header;
