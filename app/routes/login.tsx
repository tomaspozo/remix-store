import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  Form,
  Link,
  MetaFunction,
  useActionData,
  useSearchParams,
  useTransition,
} from "remix";
import { PasswordField } from "~/components/shared/PasswordField";
import { loginLoader } from "~/loaders/auth";
import { ActionData, loginAction } from "~/actions/auth";

export const loader = loginLoader;

export const action = loginAction;

export const meta: MetaFunction = () => ({
  title: "Login to your account",
});

export default function Login() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<ActionData>();
  const { state } = useTransition();
  const isLoading = state === "submitting" || state === "loading";

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
            <Input type="hidden" name="redirectTo" defaultValue={redirectTo} />
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl
                  isInvalid={typeof actionData?.errors?.email === "string"}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" name="email" type="email" />
                  <FormErrorMessage>
                    {actionData?.errors?.email}
                  </FormErrorMessage>
                </FormControl>

                <PasswordField
                  isInvalid={typeof actionData?.errors?.password === "string"}
                  aria-errormessage={actionData?.errors?.password}
                />
              </Stack>
              <HStack justify="space-between">
                <Checkbox id="remember" name="remember" defaultIsChecked>
                  Remember me
                </Checkbox>
                <Button variant="link" colorScheme="primary" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              {actionData?.formError ? (
                <Alert status="error">
                  <AlertIcon /> {actionData?.formError}
                </Alert>
              ) : (
                <></>
              )}
              <Stack spacing="6">
                <Button
                  type="submit"
                  colorScheme="primary"
                  isLoading={isLoading}
                >
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
