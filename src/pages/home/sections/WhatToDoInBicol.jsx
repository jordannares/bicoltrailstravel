import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

// const whatToDoInBicol = [{id:0, }]

const WhatToDoInBicol = () => {
  const swiperRef = useRef(null);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setAtStart(swiper.activeIndex === 0);
    setAtEnd(
      swiper.activeIndex === swiper.slides.length - swiper.params.slidesPerView
    );
  };

  return (
    <>
      <section className="py-20 bg-[#EBF2F1]">
        <div className="mx-auto max-container">
          <h2 className="text-3xl font-semibold text-left">
            What to do in Bicol
          </h2>

          <div className="mt-8 relative w-full">
            {!atStart && (
              <button
                onClick={() => swiperRef.current.slidePrev()}
                className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-[2] rounded-full border-[1px] border-[#FBA518] bg-[#FBA518]/20 hover:bg-[#FBA518]/30 p-1 cursor-pointer"
              >
                <MoveLeft
                  size={30}
                  strokeWidth={1}
                  className="text-[#FBA518] p-0.5"
                />
              </button>
            )}
            {!atEnd && (
              <button
                onClick={() => swiperRef.current.slideNext()}
                className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-[2] rounded-full border-[1px] border-[#FBA518] bg-[#FBA518]/20 hover:bg-[#FBA518]/30 p-1 cursor-pointer"
              >
                <MoveRight
                  size={30}
                  strokeWidth={1}
                  className="text-[#FBA518] p-0.5"
                />
              </button>
            )}
            <Swiper
              slidesPerView={4}
              spaceBetween={15}
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange(swiper);
              }}
              onSlideChange={handleSlideChange}
              grabCursor={true}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              breakpoints={{
                320: { slidePerView: 1 },
                640: { slidePerView: 2 },
                1024: { slidePerView: 3 },
              }}
            >
              <SwiperSlide className="swiper-slide slide-1 overflow-hidden rounded-3xl bg-[#E8EBDC]">
                <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                  <img
                    className="w-auto scale-200 translate-x-4 -translate-y-5 "
                    src="/images/cagsawa.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                  <h3 className="font-bold text-left">
                    Legazpi Philippines Half Day Private Tour w/ optional Mayon
                    ATV
                  </h3>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-amber-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-amber-500 ml-1">5</span>{" "}
                    <span className="ml-1 text-gray-500 text-sm">(3)</span>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      from <span className="text-lg font-bold">₱500</span> per
                      person
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide slide-1 overflow-hidden rounded-3xl bg-[#E8EBDC]">
                <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                  <img
                    className="w-auto scale-300 translate-x-4 -translate-y-5 "
                    src="/images/camsur.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                  <h3 className="font-bold text-left">
                    Legazpi Philippines Half Day Private Tour w/ optional Mayon
                    ATV
                  </h3>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 text-amber-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-amber-500 ml-1">5</span>{" "}
                    <span className="ml-1 text-gray-500 text-sm">(3)</span>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      from <span className="text-lg font-bold">₱2500</span> per
                      person
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide slide-1">
                <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                  <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                    <img
                      className="w-auto scale-250 translate-x-4 -translate-y-5 "
                      src="/images/sorsogon.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                    <h3 className="font-bold text-left">
                      Legazpi Philippines Half Day Private Tour w/ optional
                      Mayon ATV
                    </h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-amber-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-amber-500 ml-1">5</span>{" "}
                      <span className="ml-1 text-gray-500 text-sm">(3)</span>
                    </div>
                    <div className="">
                      <p className="text-sm">
                        from <span className="text-lg font-bold">₱550</span> per
                        person
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide slide-1">
                <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                  <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                    <img
                      className="w-auto scale-250 translate-x-4 -translate-y-5 "
                      src="/images/sumlang.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                    <h3 className="font-bold text-left">
                      Legazpi Philippines Half Day Private Tour w/ optional
                      Mayon ATV
                    </h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-amber-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-amber-500 ml-1">5</span>{" "}
                      <span className="ml-1 text-gray-500 text-sm">(3)</span>
                    </div>
                    <div className="">
                      <p className="text-sm">
                        from <span className="text-lg font-bold">₱1500</span>{" "}
                        per person
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide slide-1">
                <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                  <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                    <img
                      className="w-auto scale-250 translate-x-4 -translate-y-5 "
                      src="/images/sumlang.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                    <h3 className="font-bold text-left">
                      Legazpi Philippines Half Day Private Tour w/ optional
                      Mayon ATV
                    </h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-amber-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-amber-500 ml-1">5</span>{" "}
                      <span className="ml-1 text-gray-500 text-sm">(3)</span>
                    </div>
                    <div className="">
                      <p className="text-sm">
                        from <span className="text-lg font-bold">₱1500</span>{" "}
                        per person
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide slide-1">
                <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                  <div className="h-[250px] rounded-3xl overflow-hidden shadow-md shadow-gray-300">
                    <img
                      className="w-auto scale-250 translate-x-4 -translate-y-5 "
                      src="/images/sumlang.jpg"
                      alt=""
                    />
                  </div>
                  <div className="px-6 py-3 text-left flex flex-col gap-y-2">
                    <h3 className="font-bold text-left">
                      Legazpi Philippines Half Day Private Tour w/ optional
                      Mayon ATV
                    </h3>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4 text-amber-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-amber-500 ml-1">5</span>{" "}
                      <span className="ml-1 text-gray-500 text-sm">(3)</span>
                    </div>
                    <div className="">
                      <p className="text-sm">
                        from <span className="text-lg font-bold">₱1500</span>{" "}
                        per person
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatToDoInBicol;
