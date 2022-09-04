import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import FeaturedCollection from "./FeaturedCollection.server";

const FeaturedCollections = () => {
  const {
    data: { menu },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
  });

  return (
    <section className="relative overflow-hidden h-screen">
      <article className="absolute left-0 right-0 top-0 bottom-0 overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {menu.items.map((item, index) => {
          return (
            <section
              key={item.id}
              id={`section-${index}`}
              className="h-screen snap-start"
            >
              <FeaturedCollection collectionId={item.resourceId} />
            </section>
          );
        })}
      </article>
      <nav className="absolute flex justify-center bottom-8 w-full">
        {menu.items.map((item, index) => {
          return (
            <a key={item.id} href={`#section-${index}`} className="px-2">
              {item.title}
            </a>
          );
        })}
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
