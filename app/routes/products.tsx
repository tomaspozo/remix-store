import { Box } from "@chakra-ui/react";
import { Product } from "@prisma/client";
import { ProductCard } from "~/components/products/ProductCard";
import { ProductGrid } from "~/components/products/ProductGrid";
import { json, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

type LoaderData = { products: Array<Product> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    products: await db.product.findMany({ skip: 0, take: 4 }),
  };
  return json(data);
};

export default function Products() {
  const { products } = useLoaderData<LoaderData>();
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
}
