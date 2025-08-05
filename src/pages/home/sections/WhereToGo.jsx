import { MoveLeft, MoveRight } from "lucide-react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const WhereToGo = () => {
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
      <section className="py-20 z-20">
        <div className="mx-auto max-container">
          {/* <h2 className="text-3xl font-semibold text-left">Where to go</h2> */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden col-span-1 rounded-3xl bg-[#FBA518]">
              <div className="flex flex-col justify-between h-[100%] p-6 text-left gap-y-2">
                <h2 className=" text-left text-3xl">
                  <span className="font-bold">Where to Go in Bicol</span>:
                  <br /> Top-Rated Destinations & Landmarks
                </h2>

                <div className="relative z-[1] text-right flex items-center justify-end font-semibold">
                  View all
                  <Link to="/what-to-explore" className="cursor-pointer ">
                    <MoveRight
                      size={55}
                      strokeWidth={1}
                      className="rounded-full bg-white p-4 ml-3 hover:bg-gray-800 hover:text-white transition-all"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-3 relative z-[2]">
              {!atStart && (
                <button
                  className="custom2-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer"
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <MoveLeft
                    size={40}
                    strokeWidth={1}
                    className="text-gray-800 bg-[#FBA518] rounded-full p-1.5"
                  />
                </button>
              )}
              {!atEnd && (
                <button
                  className="custom2-next absolute right-0 z-[2] top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <MoveRight
                    size={40}
                    strokeWidth={1}
                    className="text-gray-800 bg-[#FBA518] rounded-full p-1.5"
                  />
                </button>
              )}
              <Swiper
                slidesPerView={3}
                spaceBetween={15}
                modules={[Navigation]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  handleSlideChange(swiper);
                }}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{
                  prevEl: ".custom2-prev",
                  nextEl: ".custom2-next",
                }}
              >
                <SwiperSlide className="swiper-slide slide-1 ">
                  <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md shadow-gray-300 bg-[url(/images/cagsawa.jpg)] bg-cover bg-top bg-no-repeat">
                      <div className="w-full h-[110px] absolute bottom-0 px-6 py-3 text-left flex justify-between flex-col gap-y-2 bg-white/70 rounded-3xl">
                        <h3 className="font-bold text-left text-xl">
                          Mayon Volcano – Albay
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
                          <span className="text-amber-500 ml-1 font-semibold">
                            5
                          </span>{" "}
                          <span className="ml-1 text-gray-500 font-semibold text-sm">
                            (3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1">
                  <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md shadow-gray-300 bg-[url(/images/camsur.jpg)] bg-cover bg-top bg-no-repeat">
                      <div className="w-full h-[110px] absolute bottom-0 px-6 py-3 text-left flex justify-between flex-col gap-y-2 bg-white/70 rounded-3xl">
                        <h3 className="font-bold text-left text-xl">
                          Caramoan Islands - Camarines Sur
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
                          <span className="text-amber-500 ml-1 font-semibold">
                            5
                          </span>{" "}
                          <span className="ml-1 text-gray-500 font-semibold text-sm">
                            (3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1">
                  <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md shadow-gray-300 bg-[url(/images/sorsogon.jpg)] bg-cover bg-top bg-no-repeat">
                      <div className="w-full h-[110px] absolute bottom-0 px-6 py-3 text-left flex justify-between flex-col gap-y-2 bg-white/70 rounded-3xl">
                        <h3 className="font-bold text-left text-xl">
                          Donsol Whale Shark Integration - Sorsogon
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
                          <span className="text-amber-500 ml-1 font-semibold">
                            5
                          </span>{" "}
                          <span className="ml-1 text-gray-500 font-semibold text-sm">
                            (3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1">
                  <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md shadow-gray-300 bg-[url(/images/sorsogon.jpg)] bg-cover bg-top bg-no-repeat">
                      <div className="w-full h-[110px] absolute bottom-0 px-6 py-3 text-left flex justify-between flex-col gap-y-2 bg-white/70 rounded-3xl">
                        <h3 className="font-bold text-left text-xl">
                          Donsol Whale Shark Integration - Sorsogon
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
                          <span className="text-amber-500 ml-1 font-semibold">
                            5
                          </span>{" "}
                          <span className="ml-1 text-gray-500 font-semibold text-sm">
                            (3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide slide-1">
                  <div className="overflow-hidden rounded-3xl bg-[#E8EBDC]">
                    <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-md shadow-gray-300 bg-[url(/images/sorsogon.jpg)] bg-cover bg-top bg-no-repeat">
                      <div className="w-full h-[110px] absolute bottom-0 px-6 py-3 text-left flex justify-between flex-col gap-y-2 bg-white/70 rounded-3xl">
                        <h3 className="font-bold text-left text-xl">
                          Donsol Whale Shark Integration - Sorsogon
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
                          <span className="text-amber-500 ml-1 font-semibold">
                            5
                          </span>{" "}
                          <span className="ml-1 text-gray-500 font-semibold text-sm">
                            (3)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhereToGo;
