import { Flex, Input } from "@chakra-ui/react";

import React from "react";

const AdminSearch = ({ query, setQuery }) => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      w={{ sm: "90%", md: "50%" }}
      backgroundColor={"#F1F4F6"}
      p={"1rem"}
      borderRadius={"0.4rem"}
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Input
        fontSize="22px"
        placeholder="Search products"
        htmlSize="auto"
        type="text"
        border="none"
        value={query}
        focusBorderColor="transparent"
        onChange={(e) => setQuery(e.target.value)}
      />
    </Flex>
  );
};

export default AdminSearch;