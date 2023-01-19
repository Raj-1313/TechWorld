import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import "./SingleCard.css";
import axios from "axios";
import { useEffect } from "react";

const SingleCard = ({
  brand,
  model,
  img_url,
  _id,
  RAM,
  // SIM,
  // colors,
  weight_g,
  // primary_camera,
}) => {
  useEffect(() => {
    productDelete();
  }, [_id]);

  const productDelete = (id) => {
    axios
      .delete(`http://localhost:8080/product/${id}`)
      .then((res) => console.log(res));
  };

  return (
    <Box className="container">
      <Box className="card">
        <Box className="box">
          <Box className="content">
            <h6>ID:{_id}</h6>

            <h4>
              Brand:<strong> {brand}</strong>
            </h4>
            <h4>
              Model: <strong>{model}</strong>
            </h4>
            <Flex py="10px" gap={5}>
              <img width="30%" height="fit-content" src={img_url} alt={model} />
              <Box>
                <p>RAM : {RAM}</p>
                {/* <p>Color : {colors}</p> */}
                <p>Weight : {weight_g} gm</p>
                {/* <p>camera : {primary_camera}</p> */}
              </Box>
            </Flex>
            <Flex gap={3} py="20px" justifyContent="space-around">
              <Button>Update</Button>
              <Button onClick={() => productDelete(_id)}>delete</Button>
            </Flex>
            {/* <a href="#">Read More</a> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCard;
