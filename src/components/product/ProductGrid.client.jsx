import ProductCard from "./ProductCard.client";

const ProductGrid = ({ products }) => {
  return (
    <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
      <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
