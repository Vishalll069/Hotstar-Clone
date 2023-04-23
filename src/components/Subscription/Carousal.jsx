import React from 'react'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import '../Components/carousal.css';
import {
  Box, Flex, Image, Heading} from '@chakra-ui/react'

const Carousal = () => {
  return (
    <Box className='main' width={'400px'} zIndex={'1'} bg={'black'}>
     <Box className='container'>
                <Box className='slider'>
                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/212/657/279/the-avengers-avengers-endgame-ant-man-avengers-endgame-black-widow-hd-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/987/132/956/snow-snowflakes-ice-deer-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/668/183/668/city-action-black-the-brooklyn-hd-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/92/668/968/thor-love-and-thunder-marvel-cinematic-universe-movies-thor-hd-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/771/786/519/avatar-movie-characters-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/867/451/602/movie-joker-dc-comics-joaquin-phoenix-hd-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/436/570/323/batman-batman-arkham-knight-rocksteady-studios-video-games-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/649/1012/960/john-wick-movie-poster-wallpaper-thumb.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/736/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/26/399/594/mountain-top-car-drive-movie-ford-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/789/568/999/blade-runner-blade-runner-2049-movies-car-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/141/820/1006/disney-princesses-moana-vaiana-sea-cartoon-movie-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/710/748/987/minions-nature-parody-artwork-wallpaper-preview.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/621/286/348/keanu-reeves-keanu-reeves-parabellum-john-wick-john-wick-hd-wallpaper-thumb.jpg' />
                  </Box>

                  <Box className='slide'>
                    <Image src='https://c4.wallpaperflare.com/wallpaper/117/891/681/robert-pattinson-the-batman-2021-movies-artwork-batman-hd-wallpaper-preview.jpg' />
                  </Box>

                </Box>
              </Box>
   </Box>
  )
}

export default Carousal