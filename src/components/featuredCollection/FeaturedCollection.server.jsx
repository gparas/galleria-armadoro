import { Link, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

const FeaturedCollection = ({ collectionId }) => {
  const {
    data: { collection },
  } = useShopQuery({
    query: QUERY,
    cache: CacheLong(),
    variables: {
      id: collectionId,
    },
  });
  return (
    <Link to={`/collections/${collection.handle}`}>{collection.title}</Link>
  );
};

export default FeaturedCollection;

const QUERY = gql`
  query FeaturedCollection($id: ID!) {
    collection(id: $id) {
      title
      handle
    }
  }
`;
