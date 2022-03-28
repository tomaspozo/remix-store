import { Box, Container } from "@chakra-ui/react";
import RootNavigation from "./root/RootNavigation";
import { Outlet, useTransition } from "remix";
import { RootFooter } from "./root/RootFooter";
import { RootLoader } from "./root/RootLoader";

export default function Root() {
  const { state } = useTransition();
  const isLoading = state === "loading" || state === "submitting";

  return (
    <Box>
      {!isLoading ? <RootLoader /> : null}
      <Container maxW="6xl">
        <RootNavigation />
        <Box px={6}>
          <Outlet />
        </Box>
        <RootFooter />
      </Container>
    </Box>
  );
}
