import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons'
import {useDebounce} from 'use-debounce'
import { SearchBody } from "./searchBody";
import { useDispatch } from "react-redux";
import { searchAction } from "../../actions/searchPage/searchAction";
import { Navbar } from "../Navbar";
// import { BsSearch } from "react-icons/bs";

const SearchPage = () => {

    const dispatch = useDispatch();
    const [searchIn , setSearchIn] = useState("");
    const[debouncedText] = useDebounce(searchIn, 1000)

    useEffect(()=>{
      dispatch(searchAction(debouncedText));
    },[debouncedText])



    const handleSerchIn =(e)=>{
        setSearchIn(e.target.value)
    }

    console.log(debouncedText)
  return (
    <>
    <Navbar/>
    <Box mt={30}>
      <InputGroup bg="#242832" color="#dbd9ce"  p={6} borderRadius={15} width="80%" m="auto">
          <Search2Icon bg='transparent' boxSize={8} m={2} />
          <Input
            onChange={handleSerchIn}
            ml={10}
            variant="unstyled"
            fontWeight={600}
            size='lg'
            fontSize={20}
            type="text"
            placeholder="Movies, shows and more"
          />
      </InputGroup>

    </Box>
    <SearchBody debounced={debouncedText}/>
    </>
  );
};

export default SearchPage;
