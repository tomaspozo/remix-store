import { Flex, SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import Pagination from "~/components/shared/Pagination";

export const ProductGrid = (props: SimpleGridProps) => {
  return (
    <Flex direction="column">
      <SimpleGrid
        columns={{ base: 2, md: 4 }}
        columnGap={{ base: "4", md: "6" }}
        rowGap={{ base: "8", md: "10" }}
        {...props}
      />
      <Pagination />
    </Flex>
  );
};
