import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start", draggable: false, speed: 2 }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide"><div style={{ height: "100px", width: "100px", backgroundColor: "red" }}/></div>
        <div className="embla__slide"><div style={{ height: "100px", width: "100px", backgroundColor: "blue" }}/></div>
        <div className="embla__slide"><div style={{ height: "100px", width: "100px", backgroundColor: "yellow" }}/></div>
      </div>
    </div>
  )
} 