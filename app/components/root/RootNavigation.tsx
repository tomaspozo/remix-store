import {
  Box,
  Stack,
  Button,
  ButtonGroup,
  useColorMode,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Link, useLocation } from "remix";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Logo } from "../shared/Logo";
import { useUser } from "~/helpers";
import { ProfileMenu } from "./ProfileMenu";

const Navigation = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/products", name: "Products" },
];

export default function RootNavigation() {
  const location = useLocation();
  const isActive = (path: string) => path === location.pathname;
  const user = useUser();

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box p={4} pt={6}>
      <Stack
        direction={{ base: "column", sm: "row" }}
        align="center"
        justifyContent="space-between"
      >
        <Stack direction="row" align="center" spacing={{ base: "4", md: "6" }}>
          <Logo height={10} />
          <ButtonGroup colorScheme="primary" spacing={4} size="sm">
            {Navigation.map((route) => (
              <Button
                as={Link}
                variant="ghost"
                key={route.name}
                colorScheme={isActive(route.path) ? "blue" : "white"}
                to={route.path}
                prefetch="render"
              >
                {route.name}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
        <Stack direction="row" align="center" spacing={{ base: "2", md: "4" }}>
          {user ? (
            <Box>
              <ProfileMenu user={user} />
            </Box>
          ) : (
            <Button
              as={Link}
              size="sm"
              variant="solid"
              to="/login"
              prefetch="intent"
            >
              Login
            </Button>
          )}
          <IconButton
            aria-label="Switch mode"
            variant="ghost"
            onClick={toggleColorMode}
            icon={
              <Icon
                viewBox="0 0 0 0"
                boxSize="2em"
                as={
                  colorMode === "light" ? MdOutlineDarkMode : MdOutlineLightMode
                }
              />
            }
          />
        </Stack>
      </Stack>
    </Box>
  );
}
