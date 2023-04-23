import { Box, Button } from '@chakra-ui/react';
import movieTrailer from 'movie-trailer';
import React, { useEffect ,useState} from 'react'
import BaseReactPlayer from 'react-player/youtube';
import { useParams } from 'react-router-dom';
import{BiVolumeMute} from "react-icons/bi"
import{GoUnmute,GoMute} from "react-icons/go"
import { Navbar } from '../Navbar';

export const Singlevideo = () => {
  let [url1, seturl] = useState("")
  let[mutee,setmutee] = useState(false)

   const{movie} =useParams()

  useEffect(() => {
    movieTrailer(movie).then((res) => seturl(res));


}, [movie])
  return (
    <div>
      <Navbar/>
      <Box style={{ height: "100vh", position: "sticky", objectFit: "cover", zIndex: "2", top: 0 }} w={"100%"} >
        <Box h={"100vh"}  >
          {/* <iframe src='../../../public/trailer.mp4' style={{margin:"0",padding:"0",border:"0",width:"100%"}} >
                        
                    </iframe> */}
          <BaseReactPlayer url={url1} width="100%"
            height='100%' controls={true} loop={true} playing={true} volume={1} muted={mutee} style={{ objectFit: "fill" }} />


          {/* <YouTube videoId ="-xt1y8Ldsos" opts={opts}/> */}
          {/* <video autoPlay muted loop style={{ objectFit: "cover",width:"100%",height: "100vh" }}>
                        <source src={vid}  />
                        Your browser does not support HTML5 video.
                    </video> */}
        </Box>
      </Box>
      <Box>
        <Button>{mutee?<GoMute/>:<GoUnmute/>}</Button>
      </Box>
    </div>
  )
}
