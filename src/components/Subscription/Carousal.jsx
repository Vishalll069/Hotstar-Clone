import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Components/carousal.css';

const Carousal = () => {
  return (
    <Carousel infiniteLoop={true} axis='vertical'>
    <div width='100px' className='a'>
        <img src="https://c4.wallpaperflare.com/wallpaper/1022/525/87/movies-the-lord-of-the-rings-aragorn-viggo-mortensen-movie-posters-posters-the-return-of-the-king-entertainment-movies-hd-art-wallpaper-preview.jpg" width={'100px'}/>
        <p className="legend">Legend 1</p>
    </div>
    <div className='a'>
        <img src="https://c4.wallpaperflare.com/wallpaper/457/871/663/movie-poster-wonder-woman-gal-gadot-portrait-display-wallpaper-preview.jpg"  width={'100px'}/>
        <p className="legend">Legend 2</p>
    </div>
    <div className='a'>
        <img src="https://c4.wallpaperflare.com/wallpaper/649/1012/960/john-wick-movie-poster-wallpaper-preview.jpg" width={'100px'}/>
        <p className="legend">Legend 3</p>
     </div>
   </Carousel>
  )
}

export default Carousal