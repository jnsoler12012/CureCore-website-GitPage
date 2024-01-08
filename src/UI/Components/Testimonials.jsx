import React from 'react'
import BackgroundImage from 'Svg/testimonials/bg.svg'
import Image1 from 'Images/testimonials/img.png'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';


export default function () {
    return (
        <section
            className="testimonial bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0"
            style={{
                backgroundImage: `url(${BackgroundImage})`
            }}
        >
            <div className="testimonial__container container mx-auto">
                <div className="flex flex-col items-center gap-x-14 xl:flex-row">
                    <div className="hidden xl:flex">
                        <img src={Image1} alt="" />
                    </div>

                    <div className="max-w-[98%] xl:max-w-[710px]">

                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}

                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className="h-full flex flex-col justify-center items-start">
                                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                                        <p
                                            className="font-light relative text-[22px] text[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7"

                                        >
                                            <span className="mx-2"
                                            >Lorem ipsum dolor sit, amet consectetur adipisicing
                                                elit. Adipisci enim quibusdam praesentium? Blanditiis
                                                laboriosam nam adipisci
                                            </span>
                                        </p>
                                        <div className="text-[26px] text-[#4c5354] font-semibold">
                                            James Rodrigo
                                        </div>
                                        <div
                                            className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"
                                        >
                                            Customer
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="h-full flex flex-col justify-center items-start">
                                    <div className="max-w-[680px] mx-auto text-center xl:text-left">
                                        <p
                                            className="font-light relative text-[22px] text[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7"
                                        >
                                            <span className="mx-2"
                                            >
                                                Lorem ipsum dolor sit, amet consectetur adipisicing
                                                elit. Adipisci enim quibusdam praesentium? Blanditiis
                                                laboriosam nam adipisc
                                            </span>
                                        </p>
                                        <div className="text-[26px] text-[#4c5354] font-semibold">
                                            James Rodrigo
                                        </div>
                                        <div
                                            className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"
                                        >
                                            Customer
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide><div className="h-full flex flex-col justify-center items-start">
                                <div className="max-w-[680px] mx-auto text-center xl:text-left">
                                    <p
                                        className="font-light relative text-[22px] text[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7"
                                    >
                                        <span className="mx-2"
                                        >
                                            Lorem ipsum dolor sit, amet consectetur adipisicing
                                            elit. Adipisci enim quibusdam praesentium? Blanditiis
                                            laboriosam nam adipisci
                                        </span>
                                    </p>
                                    <div className="text-[26px] text-[#4c5354] font-semibold">
                                        James Rodrigo
                                    </div>
                                    <div
                                        className="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"
                                    >
                                        Customer
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

