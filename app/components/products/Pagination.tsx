import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FiArrowLeft, FiPlus, FiArrowRight } from "react-icons/fi";

export default function Pagination() {
  return (
    <Box>
      <Container py={{ base: "4", md: "8" }}>
        <HStack justify="center">
          <ButtonGroup colorScheme="primary" variant="ghost" spacing={{ base: "2", md: "4" }}>
            <IconButton
              value="left"
              aria-label="Show previous"
              icon={<FiArrowLeft fontSize="1.25rem" />}
            />
            <IconButton
              value="center"
              aria-label="Add"
              icon={<FiPlus fontSize="1.25rem" />}
              mx="-px"
            />
            <IconButton
              value="right"
              aria-label="Show next"
              icon={<FiArrowRight fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </HStack>
      </Container>
    </Box>
  );
}
