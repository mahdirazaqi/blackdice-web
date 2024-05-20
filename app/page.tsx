import ProductCard from "@/components/ProductCard";
import { client } from "@/lib/apollo/client";
import { ProductsDto } from "@/lib/dto/product.dto";
import { ProductsQuery } from "@/lib/gql/product";

export default async function Root() {
  const { data } = await client.query<ProductsDto>({
    query: ProductsQuery,
    variables: {
      input: {
        limit: 500,
      },
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.products.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </>
  );
}
