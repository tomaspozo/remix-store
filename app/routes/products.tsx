import { Box, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { Product } from "@prisma/client";
import { ProductCard } from "~/components/products/ProductCard";
import { ProductGrid } from "~/components/products/ProductGrid";
import { json, LoaderFunction, useLoaderData, useTransition } from "remix";
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
  const { state } = useTransition();
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      {state === "loading" ? (
        <SimpleGrid columns={4}>
          <Skeleton height="50px"></Skeleton>
          <Skeleton height="50px"></Skeleton>
          <Skeleton height="50px"></Skeleton>
          <Skeleton height="50px"></Skeleton>
        </SimpleGrid>
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
