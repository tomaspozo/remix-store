import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MetaFunction } from "remix";
import { PasswordField } from "~/components/shared/PasswordField";

export const meta: MetaFunction = () => ({
  title: "Login to your account | Comming soon",
});

export default function Login() {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue">
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox name="remember" defaultIsChecked>
                Remember me
              </Checkbox>
              <Button variant="link" colorScheme="primary" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="primary">Sign in</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
