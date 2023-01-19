import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/HomePage/Slider";
import StayConnected from "../Components/HomePage/StayConnected";
import { Box } from "@chakra-ui/react";
import VideoSlider from "../Components/HomePage/VideoSlider";
import HomeProducts from "../Components/HomePage/HomeProducts";

const HomePage = () => {
  return (
    <Box bg={"#F7F7F7"}>
      <Navbar />
      <Slider />
      <VideoSlider/>
      <HomeProducts/>
      <StayConnected />
    </Box>
  );
};

export default HomePage;
