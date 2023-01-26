import { Box, Grid, Button, Center, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { adminData } from "../../Redux/AdminRedux/Admin_Action";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";
import AdminSearch from "./AdminSearch";
import Loading from "../../HOF/Loading";
import Error from "../../HOF/Error";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { AdminData, totalPages ,isLoading,isError } = useSelector((state) => state.Admin_reducer);

  useEffect(() => {
    dispatch(adminData({ page: currentPage, limit: 20, query: query }));
  }, [dispatch, currentPage, query]);



  

  if(isError){
    return <Error/>
  }
  


  return (
    <Box>
      <Box pos='sticky' top='0' bg='white' zIndex={12} w='full' >
      <AdminSearch query={query} setQuery={setQuery} />

      </Box>
      <Grid
        rowGap={5}
        columnGap={5}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr ",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
          "2xl": "1fr 1fr 1fr 1fr",
        }}
      >
        {
        isLoading? <Center h='80vh' m='auto'><Loading/></Center>: AdminData && AdminData?.map((product) => (
          <SingleCard {...product} key={product._id} />
        ))}
      </Grid>
      <Center my={50} gap={10}>
        <Button onClick={() => setCurrentPage((pr) => pr - 1)}>Prev</Button>

        <Button>
          {currentPage} of {totalPages}
        </Button>

        <Button onClick={() => setCurrentPage((pr) => pr + 1)}>Next</Button>
      </Center>
    </Box>
  );
};

export default AllProduct;