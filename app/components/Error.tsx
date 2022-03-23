import { Box, Flex, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "remix";

interface ErrorProps {
  title: string;
  message: string;
}

export default function Error({ title, message }: ErrorProps) {
  return (
    <Flex height="100vh" maxW="6xl" justify="center" align="center" p={16}>
      <Stack minW="200px" spacing={6}>
        <Box>
          <Heading fontSize="70">{title}</Heading>
          <Text fontSize="40">{message}</Text>
        </Box>
        <Button
          as={Link}
          to="/"
          variant="outline"
          colorScheme="primary"
          w="100"
        >
          Go Home
        </Button>
      </Stack>
    </Flex>
  );
}
