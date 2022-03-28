import { Box, Progress } from "@chakra-ui/react";

export const RootLoader = () => (
  <Box position="absolute" w="100%">
    <Progress size="sm" isIndeterminate />
  </Box>
);
