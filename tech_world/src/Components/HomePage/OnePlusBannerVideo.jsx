import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import oneplus1 from "../../Assets/oneplus1.mp4";
import oneplus2 from "../../Assets/oneplus2.mp4";
import videoPoster from "../../Assets/video.jpg";

const OnePlusBannerVideo = () => {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  useEffect(() => {
    videoRef1.current.pause();
    videoRef2.current.pause();
  }, []);

  return (
    <Grid
      w={"100%"}
      p={{
        base: "1.75rem",
        sm: "1.75rem",
        md: "4rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "4rem",
      }}
      gap={"6"}
      bg={"#222222"}
    >
      <GridItem
        rowSpan={1}
        colSpan={{ base: 1, sm: 1, md: 2, lg: 2, xl: 2, "2xl": 2 }}
        overflow={"hidden"}
        backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/eu/launch/11/0104/Phone-PC.jpg.thumb.webp)"
        backgroundSize="100% 100%"
        backgroundRepeat="no-repeat"
        color={"white"}
        px={"2.5rem"}
        py={{
          base: "0.8rem",
          sm: "0.8rem",
          md: "9rem",
          lg: "9rem",
          xl: "9rem",
          "2xl": "9rem",
        }}
        pb={{ base: "8rem", sm: "8rem" }}
      >
        <Heading
          mb={"1rem"}
          fontSize={{ xl: "2rem", "2xl": "4rem", sm: "1rem", base: "1rem" }}
        >
          The all-new OnePlus 11 <sup>5G</sup> Flagship
        </Heading>
        <Text fontSize={{ xl: "1rem", sm: "0.75rem", base: "0.75rem" }}>
          Witness the Shape of Power
        </Text>
      </GridItem>
      <GridItem>
        <video
          poster={videoPoster}
          ref={videoRef1}
          autoPlay
          loop
          muted
          onMouseOver={() => videoRef1.current.play()}
          onMouseOut={() => videoRef1.current.pause()}
          style={{ minHeight: "100%" }}
        >
          <source src={oneplus1} type="video/mp4" />
        </video>
      </GridItem>
      <GridItem>
        <video
          poster={videoPoster}
          ref={videoRef2}
          autoPlay
          loop
          muted
          onMouseOver={() => videoRef2.current.play()}
          onMouseOut={() => videoRef2.current.pause()}
        >
          <source src={oneplus2} type="video/mp4" />
        </video>
      </GridItem>
    </Grid>
  );
};

export default OnePlusBannerVideo;
