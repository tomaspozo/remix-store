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
import {
  Form,
  Link,
  MetaFunction,
  useActionData,
  useSearchParams,
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

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Form method="post">
        <Input type="hidden" name="redirectTo" value={redirectTo} />
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
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl
                  isInvalid={typeof actionData?.errors?.name === "string"}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input id="name" name="name" type="text" />
                </FormControl>

                <FormControl
                  isInvalid={typeof actionData?.errors?.email === "string"}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" name="email" type="email" />
                </FormControl>

                <PasswordField
                  isInvalid={typeof actionData?.errors?.password === "string"}
                />
              </Stack>
              <HStack justify="space-between">
                <Checkbox name="termsAndConditions">
                  I accept terms and conditions
                </Checkbox>
              </HStack>
              <Stack spacing="6">
                <Button type="submit" colorScheme="primary">
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Form>
    </Container>
  );
}
