import { gql, useShopQuery, CacheLong } from "@shopify/hydrogen";
import Section from "./Section.client";

const FeaturedCollection = ({ collectionId, index }) => {
  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
    variables: {
      id: collectionId,
    },
  });
  return <Section collection={collection} index={index} />;
};

export default FeaturedCollection;

const QUERY = gql`
  query FeaturedCollection($id: ID!) {
    collection(id: $id) {
      title
      handle
      image {
        id
        url(transform: { crop: CENTER, maxHeight: 1080, maxWidth: 1920 })
        altText
        width
        height
      }
    }
  }
`;
