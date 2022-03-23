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

const RightNavigation = [
  { path: "/", name: "Home" },
  { path: "/products", name: "Products" },
];

const LeftNavigation = [{ path: "/login", name: "Login" }];

export default function RootNavigation() {
  const location = useLocation();
  const isActive = (path: string) => path === location.pathname;

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
          <ButtonGroup colorScheme="blue" spacing={4} size="sm">
            {RightNavigation.map((route) => (
              <Button
                variant="ghost"
                key={route.name}
                as={Link}
                colorScheme={isActive(route.path) ? "blue" : "white"}
                to={route.path}
              >
                {route.name}
              </Button>
            ))}
          </ButtonGroup>
        </Stack>
        <ButtonGroup spacing={4} size="sm">
          {LeftNavigation.map((route) => (
            <Button variant="solid" key={route.name} as={Link} to={route.path}>
              {route.name}
            </Button>
          ))}
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
        </ButtonGroup>
      </Stack>
    </Box>
  );
}
