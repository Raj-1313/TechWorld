import React, { useState } from "react";
import { Box, Text, UnorderedList } from "@chakra-ui/react";
import NavbarItemHeadingList from "./NavbarItemHeadingList";

const NavbarMinList = ({ name, id, submenu, sublinks }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Box
      maxW={"13%"}
      overflow={"hidden"}
      // _hover={submenu && { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      p={"0.5rem"}
      textAlign="center"
      verticalAlign={"center"}
      boxSizing={"border-box"}
    >
      <Text
        fontWeight={"600"}
        fontSize={"1rem"}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        _hover={{ color: "#EC008C" }}
      >
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
    </Box>
  );
};

export default NavbarMinList;
