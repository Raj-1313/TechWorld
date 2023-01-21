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
    <Grid w={"100%"} p={"4rem"} gap={"6"} bg={"#222222"}>
      <GridItem
        rowSpan={1}
        colSpan={2}
        overflow={"hidden"}
        backgroundImage="url(https://oasis.opstatics.com/content/dam/oasis/page/2022/eu/launch/11/0104/Phone-PC.jpg.thumb.webp)"
        backgroundSize="100% 100%"
        backgroundRepeat="no-repeat"
        color={"white"}
        px={"2.5rem"}
        py={"9rem"}
      >
        {/* <Image
          src={
            "https://oasis.opstatics.com/content/dam/oasis/page/2022/eu/launch/11/0104/Phone-PC.jpg.thumb.webp"
          }
          alt={"poster"}
          transition={"0.3s all ease-in-out"}
          _hover={{
            transform: "scale(1.05)",
            transformOrigin: "center",
          }}
        /> */}
        <Heading mb={"1rem"}>The all-new OnePlus 11 <sup>5G</sup> Flagship</Heading>
        <Text fontWeight={"bold"}>Witness the Shape of Power</Text>
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
          style={{ minHeight: "100%" }}
        >
          <source src={oneplus2} type="video/mp4" />
        </video>
      </GridItem>
    </Grid>
  );
};

export default OnePlusBannerVideo;
