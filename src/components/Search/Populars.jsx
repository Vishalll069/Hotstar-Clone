import {
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import {TriangleUpIcon} from '@chakra-ui/icons'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopular } from "../../actions/searchPage/searchAction";
import { MovieCard } from "../MovieCard";

export const Populars = () => {
  const dispatch = useDispatch();
  const { populars } = useSelector((store) => store.SearchReducer);

  useEffect(() => {
    dispatch(getPopular());
  }, [dispatch]);


  return (
    <>
      <Heading mb="2rem" size="lg" color={"#c7ddea"}>
        Popular Searches
      </Heading>
      <SimpleGrid columns={7} spacingX="20px" spacingY="40px">
        {populars?.map((movie, i) => (
          <MovieCard key={i} movie={movie}/>
        ))}
      </SimpleGrid>
    </>
  );
};
