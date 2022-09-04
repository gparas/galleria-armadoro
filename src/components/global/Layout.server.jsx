import { useShopQuery, CacheLong, gql, Seo } from "@shopify/hydrogen";
import { Suspense } from "react";
import Header from "./Header.client";

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
const Layout = ({ children }) => {
  const {
    data: { shop },
  } = useShopQuery({
    query: SHOP_QUERY,
    cache: CacheLong(),
  });

  return (
    <>
      <Suspense>
        <Seo
          type="defaultSeo"
          data={{
            title: shop.name,
            description: shop.description,
          }}
        />
      </Suspense>
      <div className="flex flex-col min-h-screen">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <Header name={shop.name} />

        <main role="main" id="mainContent" className="flex-grow">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;

const SHOP_QUERY = gql`
  query ShopInfo {
    shop {
      name
      description
    }
  }
`;
