import {
  Box,
  Container,
  Stack,
  Heading,
  useBreakpointValue,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { MetaFunction } from "remix";

export const meta: MetaFunction = () => ({
  title: "About",
});

export default function About() {
  return (
    <Box py={{ base: "8", md: "12" }}>
      <Container as="section" py={{ base: "8", md: "12" }}>
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
              About
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              Remix Store is a web application that emulates a small online
              store, allow users to see products, search for specific products,
              add them to their cart and finally create an order.
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Container as="section" py={{ base: "8", md: "12" }}>
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
              Purpose
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              The purpose of this project is to serve as a starting point to
              discuss and implement Remix functionalities with better aproaches
              (get to know best practices).
            </Text>
          </Stack>
          <Stack
            pt="8"
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button
              as={Link}
              colorScheme="blue"
              variant="solid"
              size="lg"
              href="https://github.com/tomaspozo/remix-store"
              target="_blank"
            >
              Want to contribute?
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
