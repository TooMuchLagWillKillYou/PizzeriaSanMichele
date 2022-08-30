import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {images} from "../../images/index"
import Image from 'next/image'
import { Box } from '@mui/material'

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", draggable: false, speed: 3 }, [Autoplay({ delay: 7000 })]) 
  const slides = Array.from(Array(4).keys());
  
  return (
      <Box className="embla">
        <Box className="embla__viewport" ref={emblaRef}>
          <Box className="embla__container">
            {
              slides.map((index) => (
                <Box className="embla__slide" key={index}>
                  <Box className="embla__slide__inner" >
                    <Image
                      src={images[index].src}
                      blurDataURL={images[index].blurDataURL}
                      width={images[index].width}
                      height={images[index].height}
                      alt="cover image"
                      className="embla__slide__img"
                    />
                  </Box>
                </Box>
              ))
            }
          </Box>
        </Box>
      </Box>
  )
} 