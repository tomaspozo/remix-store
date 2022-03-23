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

export const IndexHero = () => (
  <Box as="section">
    <Container py={{ base: "16", md: "24" }}>
      <Stack spacing={{ base: "8", md: "10" }}>
        <Stack spacing={{ base: "4", md: "5" }} align="center">
          <Heading size={useBreakpointValue({ base: "md", md: "lg" })}>
            Serverless: Remix + MongoDB
          </Heading>
          <Alert status="warning">
            <AlertIcon />
            Work in progress. Some of the software used is in PREVIEW.
          </Alert>
          <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
            A Remix web application deployed on Netlify + data persisted on
            MongoDB Serverless
          </Text>
        </Stack>
        <Stack
          spacing="3"
          direction={{ base: "column", sm: "row" }}
          justify="center"
        >
          <Button
            as={Link}
            colorScheme="blue"
            variant="solid"
            size="lg"
            href="https://github.com/tomaspozo/remix-mongodb-netlify"
            target="_blank"
          >
            View on Github
          </Button>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
