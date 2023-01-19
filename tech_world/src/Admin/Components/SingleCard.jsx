import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import "./SingleCard.css";
import { useDispatch } from "react-redux";
import { adminDelete } from "../../Redux/AdminRedux/Admin_Action";
import { useEffect } from "react";

const SingleCard = ({
  brand,
  model,
  img_url,
  _id,
  RAM,
  approx_price_EUR,
  weight_g,
}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {}, [count, dispatch]);

  const productDelete = (_id) => {
    setCount((prev) => prev + 1);
    dispatch(adminDelete(_id));
  };
  console.log(count);

  return (
    <Box className="container">
      <Box className="card" my={5}>
        <Box className="box">
          <Box className="content">
            {/* <h6>ID:{_id}</h6> */}

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
                <p>Price : Rs {approx_price_EUR * 70} </p>
              </Box>
            </Flex>
            <Flex py="20px" justifyContent="space-around">
              <Button className="btn">Update</Button>
              <Button className="btn" onClick={() => productDelete(_id)}>
                delete
              </Button>
            </Flex>
            {/* <a href="#">Read More</a> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleCard;
