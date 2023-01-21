import {HiOutlineUser} from "react-icons/hi";
import {BsWallet} from "react-icons/bs";
import {FiShoppingCart} from "react-icons/fi";
import {BsCurrencyDollar} from "react-icons/bs";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


const Widget = ({ type }) => {
    const dispatch=useDispatch();
  let data;

  //temporary
  const amount = 100;
  const diff = 20;


useEffect(()=>{
// dispatch()
},[])


  switch (type) {
    case "user":
      data = {
        title: "USERS",
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
        isMoney: true,
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
          {data.isMoney && "$"} {amount}
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

export default Widget