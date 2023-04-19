import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import {Search2Icon} from '@chakra-ui/icons'
import {useDebounce} from 'use-debounce'
// import { BsSearch } from "react-icons/bs";

const SearchPage = () => {

    const [searchIn , setSearchIn] = useState("");
    const[debouncedText] = useDebounce(searchIn, 500)


    const handleSerchIn =(e)=>{
        setSearchIn(e.target.value)
    }

    console.log(debouncedText)
  return (
    <>
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
    </>
  );
};

export default SearchPage;
