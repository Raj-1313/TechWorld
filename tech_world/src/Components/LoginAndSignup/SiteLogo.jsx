import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/tech_world_logo.png";

const SiteLogo = () => {
  return (
    <Box
      w="15rem"
      mb="3rem"
      py={"0.3rem"}
      px={"0.8rem"}
      bg={"white"}
      borderRadius={"0.5rem"}
      border={"1px solid gray"}
    >
      <Link to={"/"}>
        <Image src={Logo} w="100%" alt="WeFitLogo" />
      </Link>
    </Box>
  );
};

export default SiteLogo;
