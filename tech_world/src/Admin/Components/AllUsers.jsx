import React, { useEffect, useState } from "react";
import { Box, Grid, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AllUserData } from "../../Redux/AllUsers/AllUsers.action";
import SingleUser from "./SingleUser";
import UserSearch from "./UserSearch";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { UserData } = useSelector((state) => state.AllUser_reducer);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(AllUserData({ page: 1, limit: 20, query: query }));
  }, [dispatch, query]);

  console.log(UserData);

  return (
    <Box>
      <UserSearch query={query} setQuery={setQuery} />
      <Grid
        rowGap={5}
        columnGap={10}
        gridTemplateColumns={{
          base: "1fr",
          md: "1fr 1fr ",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr",
          "2xl": "1fr 1fr 1fr 1fr",
        }}
      >
        {UserData.map((user) => (
          <SingleUser {...user} key={user._id} />
        ))}
      </Grid>
    </Box>
  );
};

export default AllUsers;
