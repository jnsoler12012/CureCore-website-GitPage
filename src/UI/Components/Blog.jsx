import React from 'react'
import BlogImage1 from 'Images/blog/img-1.png'
import BlogImage2 from 'Images/blog/img-2.png'
import BlogImage3 from 'Images/blog/img-3.png'

export default function () {
    return (
        <section className="blog">
            <div className="container mx-auto">
                <h2 className="blog__title h2 mb-[50px] text-center xl:text-left">
                    Our Recent Posts
                </h2>
                <div
                    className="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-[50px]"
                >
                    <div
                        className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                className="group-hover:scale-110 transition-all duration-500"
                                src={BlogImage1}
                                alt=""
                            />
                            <div
                                className="bg-accent-tetiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px] rounded-r-md rounded-br-none"
                            >
                                Medical
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="mb-4">Jan 2, 2023</div>
                            <h4 className="h4 mb-[10px]">
                                10 foods to avoid for your heart health
                            </h4>
                            <p>
                                It's normal to feel anxiety, worry and grief any time you're
                                daignosed with a condition that's certainly true...
                                <a href="" className="italic underline text-[#4c5354]">Read more</a>
                            </p>
                        </div>
                    </div>
                    <div
                        className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                className="group-hover:scale-110 transition-all duration-500"
                                src={BlogImage2}
                                alt=""
                            />
                            <div
                                className="bg-accent-tetiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px] rounded-r-md rounded-br-none"
                            >
                                Medical
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="mb-4">Jan 2, 2023</div>
                            <h4 className="h4 mb-[10px]">
                                10 foods to avoid for your heart health
                            </h4>
                            <p>
                                It's normal to feel anxiety, worry and grief any time you're
                                daignosed with a condition that's certainly true...
                                <a href="" className="italic underline text-[#4c5354]">Read more</a>
                            </p>
                        </div>
                    </div>
                    <div
                        className="blog__post max-w-[420px] shadow-custom2 rounded-[10px] overflow-hidden cursor-pointer group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                className="group-hover:scale-110 transition-all duration-500"
                                src={BlogImage3}
                                alt=""
                            />
                            <div
                                className="bg-accent-tetiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-[6px] px-[18px] rounded-r-md rounded-br-none"
                            >
                                Medical
                            </div>
                        </div>
                        <div className="px-5 py-6">
                            <div className="mb-4">Jan 2, 2023</div>
                            <h4 className="h4 mb-[10px]">
                                10 foods to avoid for your heart health
                            </h4>
                            <p>
                                It's normal to feel anxiety, worry and grief any time you're
                                daignosed with a condition that's certainly true...
                                <a href="" className="italic underline text-[#4c5354]">Read more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}