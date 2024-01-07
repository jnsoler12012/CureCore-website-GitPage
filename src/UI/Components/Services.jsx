import React from 'react'
import Logo1 from 'Svg/services/icon-1.svg'
import Logo2 from 'Svg/services/icon-2.svg'
import Logo3 from 'Svg/services/icon-3.svg'
import Logo4 from 'Svg/services/icon-4.svg'
import BackgroundImage from 'Svg/services/bg.svg'

export default function Services() {
    return (
        <section className="services">
            <div

                className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-[70px] px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"
                style={{
                    backgroundImage: `url(${BackgroundImage})`
                }}
            >
                <div className="container mx-auto">
                    <div
                        className="services__top flex items-center flex-col xl:flex-row xl:mb-[60px]"
                    >
                        <h2
                            className="h2 text-white flex-1 mb-4 xl:m-0 text-center xl:text-left"
                        >
                            Our best services for your solution
                        </h2>
                        <p className="text-white flex-1 text-center xl:text-left max-w-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
                            veniam quod error commodi cumque enim aliquid hic totam adipisci
                            possimus
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-8 xl:-mt-[144px]">
                <div className="grid xl:grid-cols-4 gap-5 px-8 xl:px-0">
                    <div
                        className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[228px] flex flex-col items-center text-center"
                    >
                        <div className="mb-[15px]">
                            <img src={Logo1} alt="" />
                        </div>
                        <h3 className="h3 mb-[10px]">General Practioners</h3>
                        <p className="font-light leading-normal max-w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div
                        className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[228px] flex flex-col items-center text-center"
                    >
                        <div className="mb-[15px]">
                            <img src={Logo2} alt="" />
                        </div>
                        <h3 className="h3 mb-[10px]">Pregnancy Support</h3>
                        <p className="font-light leading-normal max-w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div
                        className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[228px] flex flex-col items-center text-center"
                    >
                        <div className="mb-[15px]">
                            <img src={Logo3} alt="" />
                        </div>
                        <h3 className="h3 mb-[10px]">Nutritional Support</h3>
                        <p className="font-light leading-normal max-w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                    <div
                        className="services__item bg-white p-[30px] rounded-[10px] shadow-custom2 min-h-[228px] flex flex-col items-center text-center"
                    >
                        <div className="mb-[15px]">
                            <img src={Logo4} alt="" />
                        </div>
                        <h3 className="h3 mb-[10px]">Pharmaceutical Care</h3>
                        <p className="font-light leading-normal max-w-[300px]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}