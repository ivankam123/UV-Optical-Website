import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

//import products
import Product1 from "../images/products/product1.jpg";
import Product2 from "../images/products/product-2.jpg";
import Product3 from "../images/products/product-3.jpg";
import Product4 from "../images/products/product-4.jpg";
import Product5 from "../images/products/product-5.jpg";
import Product6 from "../images/products/product-6.jpg";
import Product7 from "../images/products/product-7.jpg";
import Product8 from "../images/products/product-8.jpg";
import Product9 from "../images/products/product-9.jpg";
import Product10 from "../images/products/product-10.jpg";
import Product11 from "../images/products/product-11.jpg";
import Product12 from "../images/products/product-12.jpg";
import Product13 from "../images/products/product-13.jpg";
import Product14 from "../images/products/product-14.jpg";
import Product15 from "../images/products/product-15.jpg";
import Product16 from "../images/products/product-16.jpg";
import Product17 from "../images/products/product-17.jpg";
import Product18 from "../images/products/product-18.jpg";
import Product19 from "../images/products/product-19.jpg";
import Product20 from "../images/products/product-20.jpg";
import Product21 from "../images/products/product-21.jpg";
import Product22 from "../images/products/product-22.jpg";
import Product23 from "../images/products/product-23.jpg";
import Product24 from "../images/products/product-24.jpg";
import Product25 from "../images/products/product-25.jpg";

const SwiperSection = () => {
  return (
    <>
      <h2 className="swiper-header">OUR COLLECTIONS</h2>
      <div className="swiper-section">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={4}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="swiper-slide-container">
            <SwiperSlide>
              <img src={Product1} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product2} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product3} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product4} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product5} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product6} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product7} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product8} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product9} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product10} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product12} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product13} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product14} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product15} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product16} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product17} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product18} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product19} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product11} alt="" className="swiper-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Product20} alt="" className="swiper-img" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSection;
