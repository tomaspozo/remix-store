import { Box } from "@chakra-ui/react";
import { Product } from "@prisma/client";
import { ProductCard } from "~/components/products/ProductCard";
import { ProductGrid } from "~/components/products/ProductGrid";
import { json, LoaderFunction, useLoaderData, useTransition } from "remix";
import { db } from "~/utils/db.server";
import { ProductSkeleton } from "~/components/products/ProductSkeleton";

type LoaderData = {
  products: Array<Product>;
  totalCount: number;
  lastPage: number;
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = 4;

  const [products, totalCount] = await Promise.all([
    await db.product.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    await db.product.count(),
  ]);

  return json({
    products,
    totalCount,
    lastPage: Math.ceil(totalCount / pageSize),
  });
};

export default function Products() {
  const { products } = useLoaderData<LoaderData>();
  const { state } = useTransition();

  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      {state === "loading" ? (
        <ProductGrid>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </ProductGrid>
      ) : (
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </Box>
  );
}
