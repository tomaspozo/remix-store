import { Flex, SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { useMemo, Children, isValidElement } from "react";
import Pagination from "./Pagination";

export const ProductGrid = (props: SimpleGridProps) => {
  const columns = useMemo(() => {
    const count = Children.toArray(props.children).filter(
      isValidElement
    ).length;
    return {
      base: Math.min(2, count),
      lg: Math.min(4, count),
    };
  }, [props.children]);

  return (
    <Flex direction="column">
      <SimpleGrid
        columns={columns}
        columnGap={{ base: "4", md: "6" }}
        rowGap={{ base: "8", md: "10" }}
        {...props}
      />
      <Pagination />
    </Flex>
  );
};
