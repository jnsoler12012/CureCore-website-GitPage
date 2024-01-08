import React from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import Doctor1 from 'Images/team/doctor-1.png'
import Doctor2 from 'Images/team/doctor-2.png'

export default function Team() {
    return (
        <section className="team section">
            <div className="container mx-auto">
                <h2 className="team__title h2 mb-[50px] text-center xl:text-left">
                    Our Team
                </h2>

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row gap-9">
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div
                                    className="flex flex-col xl:flex-row items-center gap-[30px]"
                                >
                                    <div className="flex-1">
                                        <img src={Doctor1} alt="" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Leslie Taylor</h4>
                                        <div
                                            className="font-medium uppercase tracking-[2.24px] text[#9ab4b7] mb-[20px]"
                                        >
                                            Pediatrician
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Officiis quidem maxime expedita.
                                        </p>
                                        <div
                                            className="flex items-center text[30px] gap-x-5 text-accent"
                                        >
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div
                                    className="flex flex-col xl:flex-row items-center gap-[30px]"
                                >
                                    <div className="flex-1">
                                        <img src={Doctor2} alt="" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>
                                        <div
                                            className="font-medium uppercase tracking-[2.24px] text[#9ab4b7] mb-[20px]"
                                        >
                                            Cardiologist
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Officiis quidem maxime expedita.
                                        </p>
                                        <div
                                            className="flex items-center text[30px] gap-x-5 text-accent"
                                        >
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col md:flex-row gap-9">
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div
                                    className="flex flex-col xl:flex-row items-center gap-[30px]"
                                >
                                    <div className="flex-1">
                                        <img src={Doctor1} alt="" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Leslie Taylor</h4>
                                        <div
                                            className="font-medium uppercase tracking-[2.24px] text[#9ab4b7] mb-[20px]"
                                        >
                                            Pediatrician
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Officiis quidem maxime expedita.
                                        </p>
                                        <div
                                            className="flex items-center text[30px] gap-x-5 text-accent"
                                        >
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col xl:flex-row">
                                <div
                                    className="flex flex-col xl:flex-row items-center gap-[30px]"
                                >
                                    <div className="flex-1">
                                        <img src={Doctor2} alt="" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <h4 className="h4 mb-[10px]">Dr. Zachary Brown</h4>
                                        <div
                                            className="font-medium uppercase tracking-[2.24px] text[#9ab4b7] mb-[20px]"
                                        >
                                            Cardiologist
                                        </div>
                                        <p className="font-light mb-[26px] max-w-[320px]">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Officiis quidem maxime expedita.
                                        </p>
                                        <div
                                            className="flex items-center text[30px] gap-x-5 text-accent"
                                        >
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-youtube-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-facebook-circle-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-instagram-fill"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="cursor-pointer hover:text-accent transition-all"
                                            >
                                                <i className="ri-pinterest-fill"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
