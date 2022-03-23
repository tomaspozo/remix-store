import { Box, Container } from "@chakra-ui/react";
import RootNavigation from "./root/RootNavigation";
import { ReactElement } from "react";

export default function Root({ children }: { children: ReactElement }) {
  return (
    <Box>
      <Container maxW="6xl">
        <RootNavigation />
        <Box px={6}>{children}</Box>
      </Container>
    </Box>
  );
}
