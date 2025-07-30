import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-creative";
import { MoveLeft, MoveRight } from "lucide-react";

const AtvAdventuresCollectionsSlider = () => {
  // const [] = useState()
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-[2] rounded-full border-[1px] border-[#FBA518] bg-[#FBA518]/20 hover:bg-[#FBA518]/30 p-1 cursor-pointer"
      >
        <MoveLeft size={30} strokeWidth={1} className="text-[#FBA518] p-1" />
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-[2] rounded-full border-[1px] border-[#FBA518] bg-[#FBA518]/20 hover:bg-[#FBA518]/30 p-1 cursor-pointer"
      >
        <MoveRight size={30} strokeWidth={1} className="text-[#FBA518] p-0.5" />
      </button>

      <Swiper
        loop={true}
        speed={2000}
        slidesPerView={2}
        centeredSlides
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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
          height: "450px",
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
