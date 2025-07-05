import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";

const AtvAdventuresCollectionsSlider = () => {
  return (
    <>
      <Swiper
        loop={true}
        speed={2000}
        slidesPerView={2}
        centeredSlides
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        grabCursor={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          scale: 1,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Navigation, Autoplay, EffectCoverflow]}
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            backgroundImage: "url(/src/assets/collection-1.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(/src/assets/collection-2.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(/src/assets/collection-3.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage: "url(/src/assets/collection-4.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></SwiperSlide>
      </Swiper>
    </>
  );
};

export default AtvAdventuresCollectionsSlider;
