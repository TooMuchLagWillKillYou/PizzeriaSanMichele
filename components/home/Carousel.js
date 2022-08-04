import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {images} from "../../images/index"
import Image from 'next/image'

export const Carousel = () => {
  console.log("images", images[1]);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", draggable: false, speed: 5 }, [Autoplay({ delay: 3000 })])
  const slides = Array.from(Array(3).keys());
  
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {
            slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    src={images[index].src}
                    blurDataURL={images[index].blurDataURL}
                    width={images[index].width}
                    height={images[index].height}
                    alt="cover image"
                    className="embla__slide__img"
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
} 