import { Box, Container } from "@chakra-ui/react";
import RootNavigation from "./root/RootNavigation";
import { Outlet } from "remix";

export default function Root() {
  return (
    <Box>
      <Container maxW="6xl">
        <RootNavigation />
        <Box px={6}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}
