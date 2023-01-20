import { Box, Grid, Button, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { adminData } from "../../Redux/AdminRedux/Admin_Action";
import SingleCard from "./SingleCard";
import { useDispatch, useSelector } from "react-redux";

const AllProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [totaldocuments, setTotaldocuments] = useState(null);
  const dispatch = useDispatch();

  const { AdminData, totalPages } = useSelector((state) => state.Admin_reducer);
  console.log(AdminData);

  useEffect(() => {
    dispatch(adminData({ page: currentPage, limit: 20 }));
  }, [currentPage, dispatch]);

  // const Alldata = (page = 1, limit = 10) => {
  // .then((res) => res.json())
  // .then((res) => {
  //   setData(res.products);
  //   setCurrentPage(res.currentPage);
  //   setTotaldocuments(res.count);
  //   setTotalPage(res.totalPages);
  //   console.log(res);
  // });
  // };

  // console.log(currentPage, totalPages, totaldocuments);

  return (
    <Box>
      <Grid
        gridTemplateColumns={{
          base: "1fr ",
          sm: "1fr 1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr ",
          xl: "1fr 1fr  1fr 1fr",
          "2xl": "1fr 1fr 1fr 1fr ",
        }}
        rowGap={10}
        columnGap={20}
      >
        {AdminData?.map((product) => (
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
