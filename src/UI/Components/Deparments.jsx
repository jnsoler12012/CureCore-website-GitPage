import React from 'react'
import BackgroundImage from 'Svg/departments/bg.svg'

export default function () {
    return (
        <section className="departments section">
            <div
                className="bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] px-6 xl:px-0 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center"
                style={{
                    backgroundImage: `url(${BackgroundImage})`
                }}
            >
                <div className="departments__container container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-x-5">
                        <div
                            className="xl:w-[310px] flex flex-col gap-y-[30px] xl:gap-y-[40px] font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-[17px] mb-[50px] xl:mb-0"
                        >
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Laboratory Analysis
                            </div>
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Cardiology Clinic
                            </div>
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Gynecology Clinic
                            </div>
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Pathology Clinic
                            </div>
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Pediatrics Clinic
                            </div>
                            <div className="cursor-pointer hover:text-accent transition-all">
                                Neurology Clinic
                            </div>
                        </div>
                        <div className="xl:w-[640px]">
                            <h2 className="h2 mb-[20px] text-center xl:text-left">
                                Cardiology Clinic
                            </h2>
                            <p className="mb-[30px] font-light text-center xl:text-left">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Obcaecati optio, ea placeat veniam maiores, aut soluta voluptate
                                odio neque praesentium pariatur provident magni deserunt
                                repellat hic cumque excepturi illo nostrum!
                                <br />
                                <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                                reprehenderit dolorum molestiae molestias, nisi error cum
                                perspiciatis enim voluptatum dolores similique quasi eos.
                                Molestias, esse perferendis molestiae amet totam ab.
                            </p>

                            <div
                                className="flex flex-col xl:flex-row items-center xl:justify-between max-w-[555px] mb-[50px] mx-auto xl:mx-0"
                            >
                                <div className="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">
                                    Neurocritical Care
                                </div>
                                <div className="text-accent xl:border-r border-[#dcdcdc] xl:pr-6">
                                    Neuro Oncology
                                </div>
                                <div className="text-accent">Geriattic Neurology</div>
                            </div>
                            <button className="btn btn-lg btn-accent mx-auto xl:mx-0">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}