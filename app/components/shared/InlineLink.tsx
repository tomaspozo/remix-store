import { Link, LinkProps } from "@chakra-ui/react";

export const InlineLink = (props: LinkProps) => (
  <Link {...props} textDecoration="underline" isExternal>
    {props.children || "NA"}
  </Link>
);
