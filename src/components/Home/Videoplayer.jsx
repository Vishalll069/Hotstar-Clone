import { usePanGesture,Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube'

import vid from "../../../public/videoplayback.webm"


export const Videoplayer = () => {
    //usePanGesturejhkfhkasfj id
    // const Trailer =()=>{

    // }
    
    // useEffect(()=>{
    //     movieTrailer(null, { tmdbId:  
    //         37854 } ).then((res)=>console.log(res));
       

    // },[])
  return (
    <div>
        <Box w={"100%"} opacity={1}>
                <Box h={"100vh"} >
                    <ReactPlayer url={"https://www.youtube.com/watch?v=49xWJJvpjzI"} width='100vw'
                        height='100%' loop="true" playing="true" volume={1} muted="true" style={{objectFit:"cover",transform:"scale(1.2)"}}/>


                    {/* <YouTube videoId ="-xt1y8Ldsos" opts={opts}/> */}
                    {/* <video autoPlay muted loop style={{ objectFit: "cover",width:"100%",height: "100vh", opacity }}>
                        <source src="https://www.youtube.com/watch?v=49xWJJvpjzI" type='video/mp4' />
                        Your browser does not support HTML5 video.5ftM9MHSmkA
                    </video> */}
                </Box>

            </Box>
    </div>
  )
}
