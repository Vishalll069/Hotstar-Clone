import React, { useEffect } from 'react'
import { AspectRatio, Box, Image, Flex, HStack, Heading, Text, Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { ActionCalls } from "../../actions/Action"
import YouTube from 'react-youtube';
import ReactPlayer from 'react-player'
import vid from "../../../public/trailer.mp4"
import { GiThorHammer, GiSpiderWeb, GiAlarmClock } from "react-icons/gi"



export const Home = () => {
    const PopMovie = useSelector((state) => state.Moviereducer.PopularMovies)

    const TopMovie = useSelector((state) => state.Moviereducer.TopMovies)

    const ComingMovie = useSelector((state) => state.Moviereducer.UpcomingMovie)

    const PopShow = useSelector((state) => state.Moviereducer.PopularShow)

    const TopShow = useSelector((state) => state.Moviereducer.topShow)

    const ComingShow = useSelector((state) => state.Moviereducer.upcomingShow)

    const [opacity1, setOpacity] = React.useState(1);

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = currentScrollPos / maxScroll;
        const opacity = 1 - scrollPercent * 3.1;
        setOpacity(opacity);
    }
    const opts = {
        height: '100vh',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    // let  ="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    let base = "https://image.tmdb.org/t/p/original"
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(ActionCalls());

    }, [])
    return (
        <Box  bg={"#0F1014"}>

            <Flex m={"0 4% 2% 8%"} pt={"2%"} >
                <Box w={"40%"}>
                    <Image src='https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-04-12/ssbokvsr_deskXbb-a7da544a-d099-4420-9533-a6be47961dd4.jpg' />

                </Box>
                <Box p={"24px"} w={"50%"} borderEndRadius={"25px"} color={"white"}>
                    <HStack p>
                        <Box>
                            <Image src='https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png' h={'48px'} w="48px" />

                        </Box>
                        <Box>
                            <Heading size={"md"}>
                                Disney + Hoster
                            </Heading>
                            <Text>
                                Binge-worthy watchlist

                            </Text>

                        </Box>

                    </HStack>
                    <Box mt="12px" w={"63%"} mb={"12px"}>

                        <Text fontSize={"lg"}>
                            Your one-stop destination for Comedy, Drama, Thrillers & More!
                        </Text>
                    </Box>

                    <Box>

                        <Button size={"lg"} colorScheme={"whiteAlpha"} w={"40%"}>Subscribe</Button>
                    </Box>

                </Box>
            </Flex>

            {/* video div start from here */}

            <Box style={{ height: "100vh", position: "sticky", objectFit: "cover", zIndex: "2", top: 0 }} w={"100%"} opacity={opacity1}>
                <Box h={"100vh"}  >
                    {/* <iframe src='../../../public/trailer.mp4' style={{margin:"0",padding:"0",border:"0",width:"100%"}} >
                        
                    </iframe> */}
                    {/* <ReactPlayer url={"https://www.youtube.com/watch?v=49xWJJvpjzI"} width="100%"
                        height='100%' controls={true} loop={true} playing={true} volume={1} muted={true} style={{ objectFit: "cover", border: "0", overflowX: "auto", aspectRatio: "16/9" }} /> */}


                    {/* <YouTube videoId ="-xt1y8Ldsos" opts={opts}/> */}
                    <video autoPlay muted loop style={{ objectFit: "cover", width: "100%", height: "100vh" }}>
                        <source src={vid} />
                        Your browser does not support HTML5 video.
                    </video>
                </Box>

            </Box>

            {/* title detail box over video  */}
            <Box zIndex={4} position={"relative"} marginTop={"-35%"} ml={"8%"}>
                <Flex>




                    <Box color={"white"} mb={"5%"}>
                        <Box pt={"1%"} >
                            <Heading fontSize={"6xl"} color="goldenrod">
                                Avengers
                            </Heading>
                        </Box>
                        <Box ml={"15px"}>
                            <Flex><GiSpiderWeb size={"35px"} color='silver' />
                                <Heading color={"silver"} >
                                    Reunite
                                </Heading>


                                <GiThorHammer size={"35px"} color='silver' />


                            </Flex>

                        </Box>
                        <Box pt={"3"} fontWeight={"bold"}>
                            <Flex mb={'10px'}>

                                <Text> Jan 2023 2h 30m </Text><GiAlarmClock size={"20px"} />
                            </Flex>
                            <Text> Action| Demons| Horror| School | Supernatural</Text>
                        </Box>
                        <Box w={"40%"} pt={"1%"} mt={"10px"}>
                            <Text lineHeight={'1.6em'} opacity={"0.9"} fontSize={"lg"} >
                                Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for....
                            </Text>
                        </Box>
                        <Box mt={"80px"} >
                            <Button colorScheme='whiteAlpha' size={"lg"} w={"30%"}>Watch Now </Button>
                            <Button colorScheme='whiteAlpha' size={"lg"} fontSize={"3xl"} ml={"20px"}><GiSpiderWeb /></Button>
                        </Box>
                    </Box>

                    <Box w={"50%"}  mt={"28%"} p={"1%"} mr={"90px"}>
                        <Flex
                            overflowX={"scroll"}
                            gap={"7px"}
                        
                            p={"10px"}
                           
                            sx={{ "::-webkit-scrollbar": { display: "none" }, "maxWidth": "500px" }}
                        >
                            {PopMovie?.map((ele, i) => {
                                return (
                                    <Box
                                        key={i + 1}
                                        minW={'80px'}
                                        h={'45px'}
                                        border={"1px solid white"}
                                        transition={"0.3s"}
                                        _hover={{transform:"translate(0,-10px)"}}
                                    >
                                        <Image
                                            src={base + ele.poster_path}
                                            borderRadius={"3px"}
                                            w={"100%"}
                                            h={"100%"}
                                            objectFit={"cover"}
                                            objectPosition={"center top"}
                                        />
                                    </Box>
                                );
                            })}
                        </Flex>
                    </Box>
                </Flex>



                {/* All cards(poster) div start from here */}

                <Box mr={"0px"} mb={"35px"} >
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


                {/* <Box bg={"red"} w={'20%'} h={"300px"} position={"relative"} zIndex={"3"}> div 1</Box>
            <Box bg={"green.200"} w={"20%"} h={"300px"} position={"relative"}> div2</Box>
            <Box bg={"blue.400"} w={"20%"} h={"300px"} pos={"relative"}> div3</Box>
            <Box bg={"pink.200"} w={"20%"} h={"300px"} position={"relative"}>div 4</Box>
            <Box bg={"blackAlpha.300"} w={"20%"} h={"300px"} position={"relative"}> div 5</Box> */}

                <Box mr={"0"} mb={"35px"}  >
                    <Box p={"1%"} pl={"0"} color={"white"}>

                        <Heading fontSize={"2xl"}>
                            Trending-Movies
                        </Heading>
                    </Box>

                    <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                        {TopMovie?.map((ele, i) => {
                            return <Box key={i + 1} minW={"11%"} >
                                <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                            </Box>
                        })}
                    </Flex>
                </Box>


                <Box ml="1%" mr={"0"} mb={"35px"} >
                    <Box p={"1%"} pl={"0"} color={"white"}>

                        <Heading fontSize={"2xl"}>
                            Upcoming-Movies
                        </Heading>
                    </Box>

                    <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                        {ComingMovie?.map((ele, i) => {
                            return <Box key={i + 1} minW={"11%"} >
                                <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                            </Box>
                        })}
                    </Flex>
                </Box>

                <Box ml="1%" mr={"0"} mb={"35px"} >
                    <Box p={"1%"} pl={"0"} color={"white"}>

                        <Heading fontSize={"2xl"}>
                            Popular-Shows
                        </Heading>
                    </Box>

                    <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                        {PopShow?.map((ele, i) => {
                            return <Box key={i + 1} minW={"11%"} >
                                <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                            </Box>
                        })}
                    </Flex>
                </Box>

                <Box ml="1%" mr={"0"} mb={"35px"} >
                    <Box p={"1%"} pl={"0"} color={"white"}>

                        <Heading fontSize={"2xl"}>
                            Trending-Show's
                        </Heading>
                    </Box>

                    <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                        {TopShow?.map((ele, i) => {
                            return <Box key={i + 1} minW={"11%"} >
                                <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                            </Box>
                        })}
                    </Flex>
                </Box>

                <Box ml="1%" mr={"0"} mb={"35px"} >
                    <Box p={"1%"} pl={"0"} color={"white"}>

                        <Heading fontSize={"2xl"}>
                            Upcoming-Show's
                        </Heading>
                    </Box>

                    <Flex overflowX={"auto"} gap={"10px"} sx={{ '::-webkit-scrollbar': { display: 'none' } }}>
                        {ComingShow?.map((ele, i) => {
                            return <Box key={i + 1} minW={"11%"}>
                                <Image src={base + ele.poster_path} borderRadius={"10px"} w={"100%"} />
                            </Box>
                        })}
                    </Flex>
                </Box>
            </Box>




        </Box>
    )
}