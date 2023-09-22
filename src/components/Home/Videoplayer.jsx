
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link, useLocation } from "react-router-dom"
import movieTrailer from "movie-trailer"
import { TriangleUpIcon } from '@chakra-ui/icons';

import { AspectRatio, Box, Image, Flex, HStack, Heading, Text, Button } from "@chakra-ui/react"

import YouTube from 'react-youtube';

import vid from "../../../public/trailer.mp4"
import { GiThorHammer, GiSpiderWeb, GiAlarmClock } from "react-icons/gi"
import { useSelector } from 'react-redux'
import { Navbar } from '../Navbar'




export const Videoplayer = () => {
    const PopMovie = useSelector((state) => state.Moviereducer.PopularMovies)
    let base = "https://image.tmdb.org/t/p/original"

    let [url1, seturl] = useState("")
    let {isSubs} =useSelector((state)=>state.LoginReducer)
    const [item, setitem] = useState(null)
    const location = useLocation()
    console.log(PopMovie)


    let ele = location.state
    console.log(ele)
    const [opacity1, setOpacity] = React.useState(1);
    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = currentScrollPos / maxScroll;
        const opacity = 1 - scrollPercent * 1;
        setOpacity(opacity);
    }
    
    // const Trailer =()=>{

    // }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        setitem(ele)
        movieTrailer(ele.original_title).then((res) => seturl(res));


    }, [ele])
    return (
        <Box bg={"black"}>
            <Navbar/>
            {item == null ? null : <>
                <Box style={{ height: "100vh", position: "sticky", objectFit: "cover", zIndex: "2", top: 0 }} w={"100%"} opacity={opacity1}>
                    <Box h={"100vh"}  >
                        {/* <iframe src='../../../public/trailer.mp4' style={{margin:"0",padding:"0",border:"0",width:"100%"}} >
                        
                    </iframe> */}
                        <ReactPlayer url={url1} width="100%"
                            height='100%' controls={true} loop={true} playing={true} volume={1} muted={true} style={{ objectFit: "fill" }} />


                        {/* <YouTube videoId ="-xt1y8Ldsos" opts={opts}/> */}
                        {/* <video autoPlay muted loop style={{ objectFit: "cover",width:"100%",height: "100vh" }}>
                        <source src={vid}  />
                        Your browser does not support HTML5 video.
                    </video> */}
                    </Box>
                </Box>


                <Box zIndex={4} position={"relative"} marginTop={"-35%"} ml={"8%"}>
                    <Flex>




                        <Box color={"white"} mb={"5%"}>
                            <Box pt={"1%"}  w={"40%"}>
                                <Heading fontSize={"4xl"} color="goldenrod">
                                    {item.original_title}
                                
                                </Heading>
                            </Box>
                            {/* <Box ml={"15px"}>
                                <Flex><GiSpiderWeb size={"35px"} color='silver' />
                                    <Heading color={"silver"} >
                                        Reunite
                                    </Heading>


                                    <GiThorHammer size={"35px"} color='silver' />


                                </Flex>

                            </Box> */}
                            <Box pt={"3"} fontWeight={"bold"}>
                                <Flex mb={'10px'}>

                                    <Text>{item.release_date}&nbsp;  2h 30m </Text><GiAlarmClock size={"20px"} />
                                </Flex>
                                <Text> Action| Demons| Horror| School | Supernatural</Text>
                            </Box>
                            <Box w={"40%"} pt={"1%"} mt={"10px"} h={"40%"} overflow={"hidden"}>
                                <Text lineHeight={'1.6em'} opacity={"0.9"} fontSize={"lg"} >
                                    {item.overview}
                                    ....
                                </Text>
                            </Box>
                            <Box mt={"80px"} >
                                <Link to={`/singleplayer/${item.original_title}`}>
                                <Button colorScheme='whiteAlpha' size={"lg"} w={"30%"}>
                                <TriangleUpIcon bg={'transparent'} mr={'5px'} transform={'rotate(90deg)'} />{isSubs?"Watch Now":""
                                    }
                                     </Button></Link>
                                    
                                <Button colorScheme='whiteAlpha' size={"lg"} fontSize={"3xl"} ml={"20px"}><GiSpiderWeb /></Button>
                            </Box>
                        </Box>

                        <Box w={"50%"} mr={"1%"} mt={"20%"} p={"1%"} >
                            {/* <Flex overflowX={"auto"} gap={"8px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
        {PopMovie?.map((ele, i) => {
            return <Box key={i + 1} minW={"17%"} h={"40px"} border={"1px solid white"} >
                <Image src={base + ele.poster_path} borderRadius={'3px'} w={"100%"} />
            </Box>
        })}
    </Flex> */}

                        </Box>
                    </Flex>



                    {/* All cards(poster) div start from here */}

                    <Box mr={"0"} mb={"35px"} >
                        <Box p={"1%"} pl={"0"} color={"white"} >

                            <Heading fontSize={"2xl"}>
                                Popular-Movies
                            </Heading>
                        </Box>

                        <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                            {PopMovie?.map((ele, i) => {
                                return <Box key={i + 1} minW={"11%"}   >
                                    <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                                </Box>
                            })}
                        </Flex>
                    </Box>
                </Box>
            </>
            }





        </Box>
    )
}
