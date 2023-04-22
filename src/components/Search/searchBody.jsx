import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Populars } from './Populars';
import { Box, Container, Heading, Image, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { searchAction } from '../../actions/searchPage/searchAction';
import { easeOut } from 'framer-motion';
import { MovieCard } from '../MovieCard';

export const SearchBody = ({debounced}) => {

  const dispatch = useDispatch();
  const {populars, searchRes, isLoading, isError} = useSelector((store)=> store.SearchReducer);
  console.log("Search" , isLoading)
  

  return (
    <Box width='80%' m='auto' mt='2rem'>
      {
        (debounced.length===0)? <Populars/> : (<SimpleGrid columns={7} spacingX='20px' spacingY='40px'>
          {
            searchRes?.map((movie, i)=>(
                <Skeleton key={i} startColor='#12141b' endColor='#242933' isLoaded={!isLoading}>
                <MovieCard movie={movie} />
                </Skeleton>
            ))
          }
        </SimpleGrid>)
      }
    
    </Box>
  )
}
