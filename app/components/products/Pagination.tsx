import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useLoaderData, useSearchParams } from "remix";

export default function Pagination() {
  const { lastPage } = useLoaderData<{ lastPage: number }>();

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = parseInt(searchParams.get("page") || "1");

  const setPageNumber = (pageNumber: number) => {
    const newPageNumber = pageNumber < 1 ? 1 : pageNumber;
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("page", newPageNumber.toString());

    setSearchParams(newSearchParams.toString());
  };

  const onLast = () => {
    setPageNumber(currentPage - 1);
  };

  const onNext = () => {
    setPageNumber(currentPage + 1);
  };

  return (
    <Box>
      <Container py={{ base: "4", md: "8" }}>
        <HStack justify="center" align="center">
          <ButtonGroup
            colorScheme="primary"
            variant="ghost"
            spacing={{ base: "2", md: "4" }}
          >
            <IconButton
              disabled={currentPage === 1}
              onClick={onLast}
              value="left"
              aria-label="Show previous"
              icon={<FiArrowLeft fontSize="1.25rem" />}
            />
            {/* <IconButton
              value="center"
              aria-label="Add"
              icon={<FiPlus fontSize="1.25rem" />}
              mx="-px"
            /> */}
            <Text p={1}>
              {currentPage} of {lastPage}
            </Text>
            <IconButton
              disabled={currentPage === lastPage}
              onClick={onNext}
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
