import { Box, SimpleGrid, HStack, Image, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Genrebox = () => {
    return (
        <Box mb={"3%"}>
            <Box p={"1%"} pl={"0"} color={"white"}>

                <Heading fontSize={"3xl"}>
                    Popular Genres
                </Heading>
            </Box>
            <SimpleGrid columns={["1", "2", "3", "5"]} gap={"10px"} >
                <Link to={`/genre/${"Anime"}/${18}`}>
                    <Box _hover={{ transform: "scale(1.2)" }} borderRadius={"10px"} style={{ transition: "all 300ms ease " }}>
                        <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9165/1429165-a-c695686add32" borderRadius={"10px"} />
                    </Box>
                </Link>

                <Link to={`/genre/${"Superhero"}/${878}`}>
                    <Box _hover={{ transform: "scale(1.2)" }} borderRadius={"10px"}>
                        <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9196/1429196-a-fd1355b3832d" borderRadius={"10px"} />
                    </Box>
                </Link>

                <Link to={`/genre/${"Mystery"}/${9648}`}>
                    <Box _hover={{ transform: "scale(1.2)" }} borderRadius={"10px"}>
                        <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9182/1429182-a-28d58d3f1bcf" borderRadius={"10px"} />
                    </Box>
                </Link>

                <Link to={`/genre/${"Action"}/${28}`}>
                    <Box _hover={{ transform: "scale(1.2)" }} borderRadius={"10px"}>
                        <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9161/1429161-a-2dd1e0bda464" borderRadius={"10px"} />
                    </Box>
                </Link>

                <Link to={`/genre/${"Fantasy"}/${14}`}>
                    <Box _hover={{ transform: "scale(1.2)" }} borderRadius={"10px"}>
                        <Image src="https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9175/1429175-a-3bb958315632" borderRadius={"10px"} />
                    </Box>
                </Link>

            </SimpleGrid>
        </Box>
    )
}
