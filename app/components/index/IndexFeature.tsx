import {
  Badge,
  Box,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
  label?: string;
}

export const Feature = (props: FeatureProps) => {
  const { title, children, icon, label } = props;
  return (
    <Stack
      spacing={{ base: "3", md: "6" }}
      direction={{ base: "column", md: "row" }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
          {label ? <Badge ml="2" colorScheme="purple">{label}</Badge> : null}
        </Text>
        <Box color={mode("gray.600", "gray.400")}>{children}</Box>
      </Stack>
    </Stack>
  );
};
