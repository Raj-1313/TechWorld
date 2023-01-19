import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { navbarList } from "../../Data/NavbarListData";
import NavbarMinList from "./NavbarMinList";
import Logo from "../../Assets/tech_world_logo.png";
import { BsFillCartCheckFill, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Search from "./Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartHover, setCartHover] = useState(false);
  const [accountHover, setAccountHover] = useState(false);

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      width={"100%"}
      p={"0.6rem 1.5rem"}
      cursor={"pointer"}
      display={{
        base: "none",
        sm: "none",
        md: "none",
        lg: "flex",
        xl: "flex",
        "2xl": "flex",
      }}
      position={"sticky"}
      top={"0"}
      zIndex={"100"}
      backgroundColor={"white"}
    >
      <Box
        w={"13%"}
        borderRadius={"0.5rem"}
        border={"0.5px solid #5C5C5C"}
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <Link to={"/"}>
          <Image src={Logo} alt={"logo"} w={"100%"} h={"auto"} />
        </Link>
      </Box>

      {navbarList.map((item) => (
        <NavbarMinList key={item.id} {...item} />
      ))}

      {/* Search Input */}
      <Search />

      <Flex
        w={"5.5%"}
        justify={"space-around"}
        align={"center"}
        onMouseOver={() => setCartHover(true)}
        onMouseOut={() => setCartHover(false)}
        position={"relative"}
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <BsFillCartCheckFill style={{ fontSize: "1.3rem" }} />
        <Text fontWeight={"600"}>CART</Text>
        {/* Cart Hover Message */}
        {cartHover && (
          <Box
            w={"280%"}
            position={"absolute"}
            top={"6"}
            borderRadius={"0.5rem"}
            backgroundColor={"white"}
            zIndex={"10"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            fontSize={"0.8rem"}
            fontWeight={"bold"}
            p={"0.7rem"}
            onMouseOver={() => setCartHover(true)}
            onMouseOut={() => setCartHover(false)}
          >
            <Flex justify={"space-between"} w={"95%"}>
              <Box>Order Summary</Box>
              <Box>0 Item</Box>
            </Flex>
            <Box
              textAlign={"center"}
              mt={"1rem"}
              color={"#FF6F61"}
              _hover={{ color: "#EC008C" }}
            >
              PROCEED TO CART
            </Box>
          </Box>
        )}
      </Flex>

      <Flex
        w={"6.7%"}
        justify={"space-between"}
        align={"center"}
        position={"relative"}
        onMouseOver={() => setAccountHover(true)}
        onMouseOut={() => setAccountHover(false)}
        _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <BsFillPersonFill style={{ fontSize: "1.3rem" }} />
        <Text fontWeight={"600"}>Account</Text>
        {accountHover && (
          <Box
            w={"107%"}
            position={"absolute"}
            p={"0.7rem"}
            backgroundColor={"white"}
            zIndex={"10"}
            top={"6"}
            fontSize={"0.95rem"}
            fontWeight={"bold"}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            borderRadius={"0.3rem"}
            onMouseOver={() => setAccountHover(true)}
            onMouseOut={() => setAccountHover(false)}
          >
            <Box
              pb={"0.5rem"}
              borderBottom={"0.5px solid gray"}
              _hover={{ color: "#EC008C" }}
            >
              Sign Up
            </Box>
            <Box _hover={{ color: "#EC008C" }}>Log In</Box>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Navbar;
