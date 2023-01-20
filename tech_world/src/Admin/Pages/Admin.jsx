import React, { ReactNode } from "react";
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
  BoxProps,
  FlexProps,
  Grid,
  Heading,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import Dashboard from "../Components/Dashboard";
import AllProduct from "../Components/AllProduct";
import AddForm from "../Components/Form";

const LinkItems = [
  { name: "Dashboard", icon: FiHome, path: "dashboard" },
  { name: "All Product", icon: FiTrendingUp, path: "allproduct" },
  { name: "Add Product", icon: FiCompass, path: "addproduct" },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

// pura section
export default function SimpleSidebar({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      border=" 5px solid green"
      minH="100vh"
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
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
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      </Box>
      <Box ml={{ base: 0, md: 60 }} border="3px solid blue" p="4">
        {children}
        <Box id="dashboard">
          <Dashboard />
        </Box>
        <Box id="allproduct">
          <AllProduct />
        </Box>
        <Box id="addproduct">
          <AddForm />
        </Box>

        <Heading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          laborum doloremque neque vel nisi, est asperiores voluptatum accusamus
          non? Temporibus.
        </Heading>
        <Box></Box>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
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
            Logo
          </Text>
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />
        </Flex>
        {LinkItems.map((link) => (
          <NavItem path={link.path} key={link.name} icon={link.icon}>
            <Box onClick={onClose}>{link.name}</Box>
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

const NavItem = ({ path, icon, children, ...rest }) => {
  // console.log(children);
  return (
    <Link
      href={`#${path}`}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
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
    </Link>
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
        Logo
      </Text>
    </Flex>
  );
};
