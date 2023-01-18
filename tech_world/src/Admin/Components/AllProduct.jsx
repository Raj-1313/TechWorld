import { Box, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const AllProduct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Alldata();
  }, []);

  const Alldata = () => {
    fetch("http://localhost:8080/product")
      .then((res) => res.json())
      .then((res) => setData(res));
  };

  console.log(data);

  return (
    <Box>
      <Grid
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr ",
          lg: "1fr 1fr 1fr",
        }}
      >
        {data?.map((product) => (
          <SingleCard {...product} key={product._id} />
        ))}
      </Grid>
    </Box>
  );
};

export default AllProduct;
