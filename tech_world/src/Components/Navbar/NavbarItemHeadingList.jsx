import React from "react";
import { Heading, UnorderedList, ListItem } from "@chakra-ui/react";

const NavbarItemHeadingList = ({ head, sublink, isHover, setIsHover }) => {
  return (
    <ListItem
      justify={"space-between"}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      align={"left"}
    >
      <Heading
        fontSize={"1.2rem"}
        m={"0.7rem"}
        _hover={{ color: "#FF6900"}}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {head}
      </Heading>
      <UnorderedList
        listStyleType={"none"}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        fontSize={"1rem"}
      >
        {isHover &&
          sublink && sublink.map((item) => (
            <ListItem
              onMouseOver={() => setIsHover(true)}
              onMouseOut={() => setIsHover(false)}
              _hover={{ color: "#FF6900" }}
              color={"#868686"}
            >
              {item.name}
            </ListItem>
          ))}
      </UnorderedList>
    </ListItem>
  );
};

export default NavbarItemHeadingList;
