import React from 'react'
import { AspectRatio, Box } from "@chakra-ui/react"

export const Home = () => {
    return (
        <Box>


            <div style={{ height: "100vh", position: "relative", objectFit: "cover",zIndex:"2" }}>
                <Box position={"absolute"}>
                    <video autoPlay muted loop style={{ height: "100vh" }} >
                        <source src="https://player.vimeo.com/external/458882630.sd.mp4?s=0d3bb5821ca380988351b9534de76eb04fd48482&profile_id=164&oauth2_token_id=57447761" type='video/mp4' />
                        Your browser does not support HTML5 video.
                    </video>
                </Box>
            </div>
            

            <Box bg={"red"} w={'20%'} h={"300px"} position={"relative"}> div 1</Box>
            <Box bg={"green.200"} w={"20%"} h={"300px"} position={"relative"}> div2</Box>
            <Box bg={"blue.400"} w={"20%"} h={"300px"}> div3</Box>
            <Box bg={"pink.200"} w={"20%"} h={"300px"}>div 4</Box>
            <Box bg={"blackAlpha.300"} w={"20%"} h={"300px"}> div 5</Box>


        </Box>
    )
}
