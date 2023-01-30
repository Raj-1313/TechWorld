import {HiOutlineUser} from "react-icons/hi";
import {BsWallet} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {BsCurrencyDollar} from "react-icons/bs";
import {  Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import SkeletonLoading from "../../../HOF/SkeletonLoading";
import { memo } from "react";

const token= JSON.parse(localStorage.getItem("loginData"))

const Widget = ({ type }) => {
  const [totalusers,setTotalUsers]= useState(0)
  const [totalOrders,setTotalOrders]= useState(0)
  const [totalProducts,setTotalProducts]= useState(0)
  const [loading,setLoading]= useState(false)

  let data;
  //temporary
  
  
  const diff = 20;

  const  getChartData=async()=>{
    setLoading(true)
    let {data}=await  axios.get("https://fine-cyan-millipede-boot.cyclic.app/admin/user",{
       headers:{
         authorization:token.token
       }
     })
    let orders=await  axios.get("https://fine-cyan-millipede-boot.cyclic.app/admin/orders",{
       headers:{
         authorization:token.token
       }
     })
    let products=await  axios.get("https://fine-cyan-millipede-boot.cyclic.app/admin",{
       headers:{
         authorization:token.token
       }
     })
     setTotalUsers(data.users?.length)
     setTotalOrders(orders.data?.length)
     setTotalProducts(products.data?.count)
     setLoading(false)
   }
    
     
     useEffect(()=>{
       getChartData()
       },[])
   
   if(loading){
    return <SkeletonLoading/>
   }


  switch (type) {
    case "user":
      data = {
        title: "USERS",
        TotalLength:totalusers,
        isMoney: false,
        link: "See all users",
        icon: (
          <HiOutlineUser           
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
              borderRadius:'50%'
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        TotalLength:totalOrders,
        isMoney: false,
        link: "View all orders",
        icon: (
          <FiShoppingCart           
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
              borderRadius:'50%'
            }}
            
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "SALES",
        TotalLength:"No data",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <BsCurrencyDollar            
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green",
            borderRadius:'50%' }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "INVENTORY",
        TotalLength:totalProducts,
        isMoney: false,
        link: "See details",
        icon: (
          <BsWallet   
             style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
              borderRadius:'50%'
              
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <Flex justifyContent='space-between' flex={1} p='10px' borderRadius='10px' h='100px' boxShadow='rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px' >

      <Flex flexDir='column' justifyContent='space-between' >
        <Text fontSize='14px' fontWeight='bold' >
           {data.title} 
          </Text>
        <Text fontSize='28px' fontWeight='300'>
          {data.isMoney && "$"} {data.TotalLength}
        </Text>
        <span className="link">
         <s> {data.link}</s>
          </span>
      </Flex>
      <Flex flexDir='column' justifyContent='space-between' >
        <Flex alignItems='center' fontSize='14px'>
          {/* <HiArrowTrendingUp/> */}
          {diff} %
        </Flex>
        {data.icon}
      </Flex>
    </Flex>
  );
}

export default memo(Widget)