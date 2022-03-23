import { extendTheme, theme } from "@chakra-ui/react";

export const primaryTheme = extendTheme(
  {
    fonts: {
      heading: "Inter, sans-serif",
      body: "Inter, sans-serif",
    },
    colors: {
      ...theme.colors,
      primary: theme.colors.blue,
      accent: theme.colors.twitter,
    },
  },
  theme
);
