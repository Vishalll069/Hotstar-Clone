import { Search2Icon } from "@chakra-ui/icons";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { GrHomeRounded } from "react-icons/gr";
import { BiMovie } from "react-icons/bi";
import { CiBasketball } from "react-icons/ci";
import { MdOutlineComputer,MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CgProfile, CgHome } from "react-icons/cg";
// import {IoIosArrowForward} from '@chakra-ui/icons'

import React from "react";

export const Navbar = () => {
  return (
    <Box position={"fixed"} zIndex={10}>
      <Box  m={"2rem"}>
        <Image src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" />
        <Box cursor={'pointer'}>
          <Flex alignItems={'center'} ml={'-10px'} bg={'#27221f'} p={1.5} mt={'10px'} borderRadius={'20px'} color={'#9d8b5b'} fontWeight={'640'} >Subscribe<MdOutlineKeyboardArrowRight style={{backgroundColor:'transparent',fontSize:'15px', marginLeft:'2px'}} /></Flex>
        </Box>
      </Box>

      <Flex
        position={"fixed"}
        m={"4rem"}
        mt={"12rem"}
        zIndex={10}
        //   bg={"white"}
        bg={"transparent"}
        style={{ transition: "all 300ms ease " }}
        _hover={{
          transform: "scale(1.2)",
          zIndex: "22",
        }}
        width={"fit-content"}
      >
        <Stack
          bg={"transparent"}
          direction={"column"}
          spacing="24px"
          _hover={{ ".nav_text": { opacity: 1 } }}
        >
          {/* <Box bg={'white'} color={'black'}>hi1</Box>
        <Box bg={'pink'} display={'none'} color={'yello'}>hi2</Box> */}
          <Flex
            bg={"transparent"}
            style={{ transition: "all 200ms ease " }}
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            fontSize={"20px"}
            cursor={"pointer"}
          >
            <CgProfile
              style={{ color: "whitesmoke", backgroundColor: "transparent" }}
            />
            <Text
              className="nav_text"
              ml={"1rem"}
              fontSize={"14px"}
              color={"white"}
              bg={"transparent"}
              opacity={0}
            >
              My Spaces
            </Text>
          </Flex>
          <Flex
            bg={"transparent"}
            fontSize={"20px"}
            style={{ transition: "all 200ms ease " }}
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            cursor={"pointer"}
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
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            cursor={"pointer"}
          >
            <CgHome
              style={{ color: "white", backgroundColor: "transparent" }}
            />
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
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            cursor={"pointer"}
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
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            cursor={"pointer"}
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
            _hover={{ transform: "scale(1.3)", zIndex: "2", fontWeight: "700" }}
            cursor={"pointer"}
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
    </Box>
  );
};
