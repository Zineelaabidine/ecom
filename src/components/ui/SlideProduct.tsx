import { Product } from './Product'
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useProducsByCateg } from '../../hooks/useProducsByCateg';

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

export const SlideProduct = ({ title, description }: Props) => {
  const { products, error, loading } = useProducsByCateg(title);
  console.log(`products of the category ${title}:`)


  return (
    <div className='container h-[calc(100vh-150px)] justify-self-center flex flex-col justify-center '>
      <div className="title-desc ">
        <h3 className='text-3xl text-main'>{title}</h3>
        <p>{description}</p>
      </div>
      {/* products slider */}
      <div className="products-slider ">
        <Swiper
          style={{ marginTop: "10px" }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
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
          {loading && (<p>loading products ...</p>)}
          {error && <p>error: {error}</p>}
          {products && products?.map((product) => (
            <SwiperSlide key={product.id} style={{ height: "auto", paddingTop: "20px" }}>
              <div className="product-slide">
                <Product
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  discountPercentage={product.discountPercentage}
                  rating={product.rating}
                  thumbnail={product.thumbnail} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
