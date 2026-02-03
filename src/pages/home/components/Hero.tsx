// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
      <div className="hero flex justify-center" style={{ marginTop: "50px" }}>
        <div className="container ">
          <Swiper loop={true} autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          pagination={true} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn'>Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero1.jpg" alt="slider hero 1" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn'>Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero2.jpg" alt="slider hero 2" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn'>Shop Now</Link>
              </div>
              <img src="src/assets/banner_Hero3.jpg" alt="slider hero 3" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

    </>
  );
}
