import { Heading, Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { Product } from "@prisma/client";
import { json, LoaderFunction, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

type LoaderData = { products: Array<Product> };

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    products: await db.product.findMany(),
  };
  return json(data);
};

export default function Products() {
  const { products } = useLoaderData<LoaderData>();
  return (
    <Box>
      <Heading>Total Products: {products.length}</Heading>
      <Box p={4}>
        <UnorderedList>
          {products.map((product) => {
            return <ListItem key={product.id}>{product.name}</ListItem>;
          })}
        </UnorderedList>
      </Box>
    </Box>
  );
}
