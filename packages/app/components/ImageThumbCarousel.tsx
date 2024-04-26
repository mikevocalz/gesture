import React, {useState, useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Div } from '@expo/html-elements'
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules'

// install Swiper modules

const ImageThumbCarousel = ({ heroImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  console.log( "im images: ", heroImages)

  return (
    <Div className="flex w-full">
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {heroImages.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {heroImages.map((item, idx) => (
          <SwiperSlide>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Div>
  )
}

export default ImageThumbCarousel
