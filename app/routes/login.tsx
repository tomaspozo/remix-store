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
import { Form, Link, MetaFunction } from "remix";
import { PasswordField } from "~/components/shared/PasswordField";
import { loginLoader } from "~/loaders/auth";
import { loginAction } from "~/actions/auth";

export const loader = loginLoader;

export const action = loginAction;

export const meta: MetaFunction = () => ({
  title: "Login to your account",
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
              <Button
                as={Link}
                variant="link"
                colorScheme="primary"
                to="/register"
              >
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box>
          <Form method="post">
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" name="email" type="email" />
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
                <Button type="submit" colorScheme="primary">
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}
