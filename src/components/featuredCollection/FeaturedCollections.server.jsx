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
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
        Collections
      </h2>
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1 false  sm:grid-cols-3 false false">
        {menu.items.map((item) => {
          return (
            <FeaturedCollection key={item.id} collectionId={item.resourceId} />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCollections;

const QUERY = gql`
  query FeaturedCollections {
    menu(handle: "featured-collections") {
      items {
        id
        resourceId
      }
    }
  }
`;
