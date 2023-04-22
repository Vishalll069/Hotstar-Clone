import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { BiMovie } from "react-icons/bi";
import { CiBasketball } from "react-icons/ci";
import { MdOutlineComputer } from "react-icons/md";
import { CgProfile, CgHome } from "react-icons/cg";

import React from "react";

export const Navbar = () => {
  return (
    <Flex
      position={"fixed"}
      m={"3rem"}
      zIndex={20}
      mt={"15rem"}
    //   bg={"white"}
    bg={'transparent'}
      style={{ transition: "all 300ms ease " }}
      _hover={{
        transform: "scale(1.2)",
        zIndex: "2",
      }}
      width={"fit-content"}      
    >
      <Stack direction={"column"} spacing="24px" _hover={{".nav_text": {  opacity:1 }}}>
        {/* <Box bg={'white'} color={'black'}>hi1</Box>
        <Box bg={'pink'} display={'none'} color={'yello'}>hi2</Box> */}
        <Flex
          bg={"transparent"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
          fontSize={"20px"}
        >
          <CgProfile
            style={{ color: "whitesmoke", backgroundColor: "transparent" }}
          />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            bg={'transparent'}
            opacity={0}
          >
            My Spaces
          </Text>
        </Flex>
        <Flex
          bg={"transparent"}
          fontSize={"20px"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
        >
          <Search2Icon color={"whitesmoke"} />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            opacity={0}
          >
            Search
          </Text>
        </Flex>
        <Flex
          bg={"transparent"}
          fontSize={"20px"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
        >
          <CgHome style={{ color: "white", backgroundColor: "transparent" }} />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            opacity={0}
          >
            Home
          </Text>
        </Flex>
        <Flex
          bg={"transparent"}
          fontSize={"20px"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
        >
          <MdOutlineComputer
            style={{ color: "whitesmoke", backgroundColor: "transparent" }}
          />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            opacity={0}
          >
            TV
          </Text>
        </Flex>
        <Flex
          bg={"transparent"}
          fontSize={"20px"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
        >
          <BiMovie
            style={{ color: "whitesmoke", backgroundColor: "transparent" }}
          />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            opacity={0}
          >
            Movies
          </Text>
        </Flex>
        <Flex
          bg={"transparent"}
          fontSize={"20px"}
          style={{ transition: "all 200ms ease " }}
          _hover={{ transform: "scale(1.3)", zIndex: "2" }}
        >
          <CiBasketball
            
            style={{ color: "whitesmoke", backgroundColor: "transparent" }}
          />
          <Text
          className="nav_text"
            ml={"1rem"}
            fontSize={"14px"}
            color={"white"}
            opacity={0}
          >
            Sports
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};
