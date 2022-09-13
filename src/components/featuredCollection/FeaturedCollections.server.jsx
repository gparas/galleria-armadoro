import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import FeaturedCollection from "./FeaturedCollection.server";
import Nav from "./Nav.client";

const FeaturedCollections = () => {
  const {
    data: { menu },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });
  return (
    <section className="relative overflow-hidden flex flex-col h-screen">
      <article className="overflow-y-auto snap-y snap-mandatory scroll-smooth flex-auto">
        {menu.items.map((item, index) => {
          return (
            <FeaturedCollection
              key={item.id}
              collectionId={item.resourceId}
              index={index}
            />
          );
        })}
      </article>
      <nav className="fixed flex justify-center bottom-8 w-full">
        <Nav items={menu.items} />
      </nav>
    </section>
  );
};

export default FeaturedCollections;

const QUERY = gql`
  query FeaturedCollections {
    menu(handle: "featured-collections") {
      items {
        id
        title
        resourceId
      }
    }
  }
`;
