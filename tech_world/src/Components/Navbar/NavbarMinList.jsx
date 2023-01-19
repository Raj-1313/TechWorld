import React, { useState } from "react";
import { Box, Flex, Heading, Text, UnorderedList } from "@chakra-ui/react";
import NavbarItemHeadingList from "./NavbarItemHeadingList";

const NavbarMinList = ({ name, id, submenu, sublinks }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Flex
      justify={"center"}
      align={"center"}
      maxW={"13%"}
      overflow={"hidden"}
      // boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      p={"0.5rem"}
      boxSizing={"border-box"}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      minH={"3.5rem"}
    >
      <Text fontWeight={"600"} fontSize={"1rem"} _hover={{ color: "#FF6900" }}>
        {name}
      </Text>

      {isHover && submenu && (
        <UnorderedList
          bg={"white"}
          zIndex={"100"}
          listStyleType={"none"}
          display={"grid"}
          gridTemplateColumns={"repeat(5, 1fr)"}
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          pos={"absolute"}
          w={"97.5%"}
          p={"1rem"}
          pt={"2rem"}
          pb={"2rem"}
          pl={"2rem"}
          fontSize={"1.2rem"}
          top={"4.3rem"}
          left={"0"}
          templateColumns={"repeat(5, 1fr)"}
          gap={"6"}
          align={"center"}
        >
          {sublinks &&
            sublinks.map((item) => {
              return (
                <NavbarItemHeadingList
                  {...item}
                  isHover={isHover}
                  setIsHover={setIsHover}
                />
              );
            })}
        </UnorderedList>
      )}
    </Flex>
  );
};

export default NavbarMinList;
