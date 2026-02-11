import banner1 from '../../../assets/banner_Hero1.jpg'
import banner2 from '../../../assets/banner_Hero2.jpg';
import banner3 from '../../../assets/banner_Hero3.jpg';
import './Hero.css'
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
      <div className=" container hero flex justify-center justify-self-center" style={{ marginTop: "50px" }}>
          <Swiper loop={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
            pagination={true} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn rounded-[30px]'>Shop Now</Link>
              </div>
              <div><img src={banner1} alt="slider hero 1" /></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn rounded-[30px]'>Shop Now</Link>
              </div>
              <div>
                <img src={banner2} alt="slider hero 2" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>Microsoft Xbox <br /> 360 Controller</h3>
                <p>Windows Xp/10/7/8 Ps3, Tv Box</p>
                <Link to="/" className='main-btn rounded-[30px]'>Shop Now</Link>
              </div>
              <div>
                <img src={banner3} alt="slider hero 3" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

    </>
  );
}
