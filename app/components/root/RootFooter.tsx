import { Box, Stack, Text, ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Logo } from "../shared/Logo";

export const RootFooter = () => (
  <Box as="footer" role="contentinfo" p={{ base: "6", md: "8" }}>
    <Stack spacing={{ base: "4", md: "5" }}>
      <Stack justify="space-between" direction="row" align="center">
        <Logo height={8} />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://github.com/tomaspozo"
            aria-label="GitHub"
            target="_blank"
            icon={<FaGithub fontSize="1.5rem" />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/tomaspozo_"
            aria-label="Twitter"
            target="_blank"
            icon={<FaTwitter fontSize="1.5rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        &copy; {new Date().getFullYear()}. All rights
        reserved.
      </Text>
    </Stack>
  </Box>
);
