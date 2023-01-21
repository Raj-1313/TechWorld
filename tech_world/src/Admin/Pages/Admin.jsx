import React, { useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Heading,
  Grid,
  Image,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import Dashboard from "../Components/Dashboard";
import AllProduct from "../Components/AllProduct";
import AddForm from "../Components/Form";
import Charts from "../Components/Charts";
import AllUsers from "../Components/AllUsers";
import Logo from "../../Assets/tech_world_logo.png";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, path: "dashboard" },
  { name: "All Product", icon: FiTrendingUp, path: "allproduct" },
  { name: "All Users", icon: FiTrendingUp, path: "alluser" },
  { name: "Add Product", icon: FiCompass, path: "addproduct" },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
  { name: "Charts", icon: FiSettings, path: "charts" },
];

// pura section
export default function SimpleSidebar({ children }) {
  const [path, setPath] = useState("dashboard");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
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

      <Box p="4" ml={{ base: 0, md: 60 }}>
        {children}
        {path === "dashboard" && <Dashboard />}
        {path === "allproduct" && <AllProduct />}
        {path === "addproduct" && <AddForm />}
        {path === "alluser" && <AllUsers />}
        {path === "charts" && <Charts aspect={2} title="the Boss" />}
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
            <Box onClick={() => setPath(link.path)}>
              <p onClick={onClose}>{link.name}</p>
            </Box>
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
      fontSize="20px"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: "#222831",
        color: "gold",
        fontWeight: 600,
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="20"
          _groupHover={{
            bg: "#222831",
            color: "gold",
            fontWeight: 600,
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
          w={{ base: "40vw", md: "20vw" }}
          h={"auto"}
        />
      </Text>
    </Flex>
  );
};
