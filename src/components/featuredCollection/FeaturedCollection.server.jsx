import { Link, Image, gql, useShopQuery, CacheLong } from "@shopify/hydrogen";

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
    <Link to={`/collections/${collection.handle}`} className="w-full h-full">
      <Image data={collection.image} className="w-full h-full object-cover" />
    </Link>
  );
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
      }
    }
  }
`;
