import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue, 
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { FiSettings, FiMenu } from "react-icons/fi";
import { MdDashboard, MdLibraryAdd } from "react-icons/md";
import { FaStore, FaChartPie } from "react-icons/fa";


import {  
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

import Dashboard from "../Components/Dashboard";
import AllProduct from "../Components/AllProduct";
import AddForm from "../Components/Form";
import ChartsStates from "../Components/ChartsStates";
import AllUsers from "../Components/AllUsers";
import Logo from "../../Assets/tech_world_logo.png";
import TrackOrder from "../Components/TrackOrder";
import ProjectTables from "../Components/dataStatas/ProjectTable";

const LinkItems = [

  { name: "Dashboard", icon: MdDashboard, path: "dashboard" },
  { name: "All Product", icon: FaStore, path: "allproduct" },
  { name: "All Users", icon: MdLibraryAdd, path: "alluser" },
  { name: "Order Record", icon: FaStore, path: "Orderrecord" },
  { name: "Add Product", icon: MdLibraryAdd, path: "addproduct" },


  
  { name: "Settings", icon: FiSettings },
  { name: "ChartsStates", icon: FaChartPie, path: "charts" },
];
// pura section
export default function SimpleSidebar({ children }) {
  const [path, setPath] = useState("dashboard");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box zIndex={100}>
      <Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          setPath={setPath}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} setPath={setPath} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      </Box>

      <Box p="4" mt={{ base: "80px", md: "auto" }} ml={{ base: 0, md: 60 }}>
        {children}
        {path === "dashboard" && <Dashboard />}
        {path === "allproduct" && <AllProduct />}
        {path === "addproduct" && <AddForm />}
        {path === "alluser" && <AllUsers />}

        {path === "Orderrecord" && <ProjectTables />}
       

        {path === "charts" && <ChartsStates aspect={2} title="the Boss" />}

      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  const { setPath } = rest;
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: "60" }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Box>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
           <Image src={Logo} alt={"logo"} w={"100%"} h={"auto"} />
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            <Box onClick={() => (setPath(link.path), onClose)}>{link.name}</Box>
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ path, icon, children, ...rest }) => {
  // console.log(children);
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "cyan.400",
        color: "white",
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  // console.log(rest);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      position="fixed"
      top={0}
      w="100%"
      zIndex={999}
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">

        <Image
          src={Logo}
          alt={"logo"}
          w={{ base: "150px", md: "20vw" }}
          h={"auto"}
          margin="auto"
        />

      </Text>
    </Flex>
  );
};