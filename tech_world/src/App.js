import React from "react";
import HomePage from "./Pages/HomePage";
import "./App.css";
import AllRoute from "./AllRoutes/AllRoute";
import { Box } from "@chakra-ui/react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Box>
      {/* <Login/> */}
      <AllRoute/>
      {/* <Signup /> */}
      {/* <Login/> */}
      {/* <HomePage/> */}
    </Box>
  );
};

export default App;