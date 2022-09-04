import { Suspense } from "react";

import { Layout, FeaturedCollections } from "../components/index.server";

export default function Home() {
  return (
    <Layout>
      <Suspense>
        <FeaturedCollections />
      </Suspense>
    </Layout>
  );
}
