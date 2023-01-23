import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import SalesChart from "./dataStatas/SalesChart";
import Widget from "./dataStatas/Widget";
  
const Dashboard = () => {


  return (
    <>
    <Grid gridTemplateColumns={{base:"repeat(1fr)",sm:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap='5'mb='10'>
      <Widget type="user" />
      <Widget type="order" />
      <Widget type="earning"/>
      <Widget type="balance" />
    </Grid>

    <Flex w='full'>
    <SalesChart/>
    </Flex>
    </>
  );
};

export default Dashboard;
