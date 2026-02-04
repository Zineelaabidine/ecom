import React from 'react'
import { Product } from './Product'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'
import './SlideProduct.css'

interface Props {
  title: string
  description: string
}

export const SlideProduct = ({title, description}: Props) => {
  // Sample products data - replace with actual data
  const products = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  return (
    <div className='container h-[calc(100vh-150px)] justify-self-center flex flex-col justify-center '>
      <div className="title-desc ">
        <h3 className='text-3xl text-main'>{title}</h3>
        <p>{description}</p>
      </div>
      {/* products slider */}
      <div className="products-slider ">
        <Swiper
        style={{marginTop: "10px"}}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 2,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} style={{height: "auto", paddingTop: "20px"}}>
              <div className="product-slide">
                <Product />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
