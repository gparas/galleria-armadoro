import { Link } from "@shopify/hydrogen";
import { Toolbar } from "../elements";

const Header = ({ name }) => {
  return (
    <header role="banner" className="fixed flex flex-col shrink-0 w-full ">
      <Toolbar>
        <Link className="font-bold" to="/">
          {name}
        </Link>
      </Toolbar>
    </header>
  );
};

export default Header;
