import { Box, SimpleGrid } from "@chakra-ui/react";
import {
  FcFlashOn,
  FcPrivacy,
  FcAcceptDatabase,
  FcCloseUpMode,
} from "react-icons/fc";
import { InlineLink } from "~/components/shared/InlineLink";
import { Feature } from "./IndexFeature";

export const IndexFeatures = () => (
  <Box as="section" mx="auto" py="14" px={{ base: "6", md: "8" }}>
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacingX="12"
      spacingY={{ base: "8", md: "14" }}
    >
      <Feature title="Chakra UI" icon={<FcCloseUpMode />}>
        Beautiful to the eye with{" "}
        <InlineLink href="https://chakra-ui.com">Chakra UI</InlineLink> free
        components. Including Dark mode.
      </Feature>
      <Feature title="Deployed on Netlify" icon={<FcFlashOn />}>
        Automatically deploy on{" "}
        <InlineLink href="https://www.netlify.com">Netlify</InlineLink>{" "}
        functions with every code push.
      </Feature>
      <Feature title="MongoDB" icon={<FcAcceptDatabase />}>
        Use <InlineLink href="https://prisma.io">Prisma</InlineLink> to define
        your data model and interact with{" "}
        <InlineLink href="https://www.mongodb.com/cloud/atlas">
          MongoDB
        </InlineLink>{" "}
        as your backend database.
      </Feature>
      <Feature title="Authentication" label="Comming soon" icon={<FcPrivacy />}>
        Use{" "}
        <InlineLink href="https://firebase.google.com/docs/auth">
          Firebase Auth
        </InlineLink>{" "}
        to manage user indentity with different OAuth providers.
      </Feature>
    </SimpleGrid>
  </Box>
);
