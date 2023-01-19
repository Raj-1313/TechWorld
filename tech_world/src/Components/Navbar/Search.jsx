import { Button, Flex, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import searchProducts from "../../Redux/SearchRedux/Search.Actions";

const Search = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const searchData = useSelector((store) => store.search);
  console.log("searchData: ", searchData);

  const handleSearch = () => {
    dispatch(searchProducts(query));
  };

  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      w={"20%"}
      backgroundColor={"#F1F4F6"}
      p={"0.2rem"}
      borderRadius={"0.4rem"}
      _hover={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Input
        size="sm"
        placeholder="Search products"
        type="text"
        border="none"
        focusBorderColor="transparent"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>
        <AiOutlineSearch style={{ fontSize: "1.8rem", color: "#718096" }} />
      </Button>
    </Flex>
  );
};

export default Search;
