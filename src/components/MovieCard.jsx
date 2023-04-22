import { TriangleUpIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const MovieCard = ({movie}) => {

    function truncateDesc(str, num){
        return str?.length > num ? str.substr(0, num-1)+"...." : str
      }

  return (
    <Box
            height={250}
            borderRadius={20}
            bgImage={`url(https://image.tmdb.org/t/p/w1280/${movie.poster_path})`}
            bgSize={"contain"}
            bgPosition="center"
            bgRepeat="no-repeat"
            position="relative"
            cursor="pointer"
            style={{ transition: "all 300ms ease " }}
            _hover={{ transform: "scale(1.5)", zIndex: "2", backgroundImage:'none' }}
          >
            <Flex
              direction={"column"}
              objectFit={'fill'}
              justifyContent={'space-between'}
              bg={"black"}
              width={"100%"}
              height={'100%'}
              opacity={0}
              borderRadius={20}
              style={{ transition: "all 800ms ease " }}
              _hover={{ opacity: "1" }}
            >
              <Image
              height={'70%'}
              objectFit={'cover'}
              borderRadius={"10px 10px 0 0"}
              src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
              alt=""
            />

              <Button><TriangleUpIcon bg={'transparent'} mr={'5px'} transform={'rotate(90deg)'} />  Watch Now</Button>
              <Box borderRadius={10} p={2} bg={"black"}>
              <Heading bg={"transparent"} fontSize={'9px'} color={"#c7ddea"}>
                {movie.release_date} : {movie.original_language} 
              </Heading>
              <br />
              <Heading  fontWeight={'400'} bg={"transparent"} mb="1rem" fontSize={'8px'} color={"#c7ddea"}>
                {
                  truncateDesc(movie.overview, 100)
                }                
              </Heading>
                
              </Box>
            </Flex>
          </Box>
  )
}
