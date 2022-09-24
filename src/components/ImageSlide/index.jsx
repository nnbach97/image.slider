import './ImageSlide.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState } from 'react'

const ImageSlide = props => {

  const [activeThumbs, setactiveThumbs] = useState(null);
  return <>
    <Swiper
      loop={true}
      spaceBetween={10}
      modules={[Navigation, Thumbs]}
      navigation={true}
      grabCursor={true}
      className='img-list'
      thumbs={{ swiper: activeThumbs && !activeThumbs.destroyed ? activeThumbs : null }}
    >
      {
        props.listImages.map((item, index) => 
          (
            <SwiperSlide key={index}>
              <div>
                <img src={item} alt="Product Img" />
              </div>
            </SwiperSlide>
          )
        )
      }
    </Swiper>
    <Swiper
      onSwiper={setactiveThumbs}
      loop={true}
      slidesPerView={4}
      spaceBetween={10}
      modules={[Navigation, Thumbs]}
      className='img-list-per'
    >
      {
        props.listImages.map((item, index) => 
          (
            <SwiperSlide key={index}>
              <div className='wrap'>
                <img src={item} alt="Product Img" />
              </div>
            </SwiperSlide>
          )
        )
      }
    </Swiper>
  </>
}

ImageSlide.propTypes = {
  listImages: PropTypes.array.isRequired
}

export default ImageSlide
