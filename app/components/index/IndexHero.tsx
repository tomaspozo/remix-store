import {
  Box,
  Container,
  Stack,
  Heading,
  useBreakpointValue,
  Alert,
  AlertIcon,
  Button,
  Text,
  Link,
} from "@chakra-ui/react";
import { Link as RemixLink } from "remix";

export const IndexHero = () => (
  <Box as="section">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
            Remix Store
          </Heading>
          <Alert status="warning">
            <AlertIcon />
            Work in progress. Some of the software used is in PREVIEW.
          </Alert>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
            A Remix web application deployed on Netlify + data persisted on
            MongoDB
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Button
            as={RemixLink}
            colorScheme="primary"
            variant="solid"
            size="lg"
            to="/about"
          >
            Learn more
          </Button>
          <Button
            as={Link}
            colorScheme="primary"
            variant="ghost"
            size="lg"
            href="https://github.com/tomaspozo/remix-store"
            target="_blank"
          >
            View on Github
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
