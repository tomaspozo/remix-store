import {
  AspectRatio,
  Box,
  Skeleton,
  Stack,
  StackProps,
  useBreakpointValue,
} from "@chakra-ui/react";

interface Props {
  rootProps?: StackProps;
}

export const ProductSkeleton = (props: Props) => {
  const { rootProps } = props;
  return (
    <Stack spacing={useBreakpointValue({ base: "4", md: "5" })} {...rootProps}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Skeleton />
        </AspectRatio>
      </Box>
      <Stack spacing="4">
        <Stack spacing="1">
          <Skeleton height="5" width="70%" />
          <Skeleton height="5" width="80%" />
          <Skeleton height="4" width="90%" />
        </Stack>
        <Stack align="center">
          <Skeleton height="10" width="40%" />
        </Stack>
      </Stack>
    </Stack>
  );
};
