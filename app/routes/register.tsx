import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
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
import { ActionData, registerAction } from "~/actions/auth";

export const loader = loginLoader;

export const action = registerAction;

export const meta: MetaFunction = () => ({
  title: "Create your account",
});

export default function Register() {
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
              Create your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Already have an account?</Text>
              <Button
                as={Link}
                variant="link"
                colorScheme="primary"
                to="/login"
              >
                Sign in
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
                  isInvalid={typeof actionData?.errors?.name === "string"}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" name="name" type="text" />
                  <FormErrorMessage>
                    {actionData?.errors?.name}
                  </FormErrorMessage>
                </FormControl>

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
                <FormControl
                  isInvalid={typeof actionData?.errors?.terms === "string"}
                >
                  <Checkbox id="terms" name="terms">
                    I accept terms and conditions
                  </Checkbox>
                  <FormErrorMessage>
                    {actionData?.errors?.terms}
                  </FormErrorMessage>
                </FormControl>
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
                  Register
                </Button>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Container>
  );
}
