import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/HomePage/Slider";
import StayConnected from "../Components/HomePage/StayConnected";
import { Box } from "@chakra-ui/react";
import VideoSlider from "../Components/HomePage/VideoSlider";
import HomeProducts from "../Components/HomePage/HomeProducts";
import Footer from "../Components/Footer/Footer";
import OnePlusBannerVideo from "../Components/HomePage/OnePlusBannerVideo";
import WatchesHomeProduct2 from "../Components/HomePage/WatchesHomeProducts";

const HomePage = () => {
  return (
    <Box bg={"#F7F7F7"}>
      <Navbar />
      <Slider />
      <VideoSlider/>
      <HomeProducts/>
      <WatchesHomeProduct2/>
      <OnePlusBannerVideo/>
      <StayConnected />
      <Footer />
    </Box>
  );
};

export default HomePage;