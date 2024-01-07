import React from 'react'
import Hero from 'Images/hero/img.png'

export default function () {
    return (
        <section className="hero bg-grey py-12 xl:pb-0 overflow-hidden">
            <div className="container mx-auto h-full">
                <div
                    className="flex flex-col xl:flex-row items-center justify-between h-full"
                >
                    <div className="hero__text xl:w-[48%] text-center xl:text-left">
                        <div
                            className="flex items-center bg-white py-[10px] px-[20px] w-max gap-x-2 mb-[26px] rounded-full mx-auto xl:mx-0"
                        >
                            <i className="ri-heart-pulse-line text-2xl text-accent"></i>
                            <div
                                className="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]"
                            >
                                Live your life
                            </div>
                        </div>
                        <h1 className="h1 mb-6">We care about your health</h1>
                        <p className="mb-[42px] md:max-w-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic cum
                            saepe deleniti suscipit consequuntur! Delectus consequatur velit
                            autem at ipsum tempore
                        </p>
                        <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                            Contact us
                        </button>
                    </div>
                    <div className="hero__img hidden xl:flex max-w-[814px] self-end">
                        <img src={Hero} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}