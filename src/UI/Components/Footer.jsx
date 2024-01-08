import React from 'react'
import Logo from 'Svg/header/logo.svg'

export default function() {
    return (
        <footer className="footer pt-12 xl:pt-[150px]">
            <div className="container mx-auto pb-12 xl:pb-[100px]">
                <div className="flex flex-col xl:flex-row gap-x-5 gap-y-10">
                    <div className="footer__item flex-1">
                        <a href="">
                            <img className="mb-[30px]" src={Logo} alt="" style={{
                                height: '5rem'
                            }}/>
                        </a>
                        <p className="mb-[20px]">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Molestiae, eum.
                        </p>
                        <div className="flex flex-col gapy-3 mb-10">
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-map-pin-fill text-[25px] text-accent"></i>
                                <div>123, Arling, Miola, NY</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-mail-fill text-[25px] text-accent"></i>
                                <div>insove@gamil.com</div>
                            </div>
                            <div className="flex items-center gap-x-[6px]">
                                <i className="ri-phone-fill text-[25px] text-accent"></i>
                                <div>(+123) 456 78910</div>
                            </div>
                        </div>
                        <div className="flex gap-[14px] text-[30px]">
                            <div
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tetiary hover:text-accent cursor-pointer transition-all"
                            >
                                <i className="ri-facebook-circle-fill"></i>
                            </div>
                            <div
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tetiary hover:text-accent cursor-pointer transition-all"
                            >
                                <i className="ri-instagram-line"></i>
                            </div>
                            <div
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tetiary hover:text-accent cursor-pointer transition-all"
                            >
                                <i className="ri-twitter-fill"></i>
                            </div>
                            <div
                                className="p-[10px] rounded-[10px] shadow-custom2 text-accent-tetiary hover:text-accent cursor-pointer transition-all"
                            >
                                <i className="ri-linkedin-box-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div className="footer__item flex-1">
                        <h4 className="h4 mb-5">Quick Links</h4>
                        <div className="flex gap-x-5">
                            <ul className="flex-1 flex flex-col gap-y-5">
                                <li>
                                    <a href="" className="hover:text-accent transition-all">Home</a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Doctors
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Department
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all">Blog</a>
                                </li>
                            </ul>
                            <ul className="flex-1 flex flex-col gap-y-5">
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Our Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all">Faq</a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-accent transition-all"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__item flex-1">
                        <h4 className="h4 mb-5">Opening Hours</h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex-1">
                                <div
                                    className="flex justify-between items-center border-b pb-[10px]"
                                >
                                    <div>Monday - Thursday</div>
                                    <div className="text-accent font-medium">8:00 Am - 6:00 Pm</div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div
                                    className="flex justify-between items-center border-b pb-[10px]"
                                >
                                    <div>Friday - Saturday</div>
                                    <div className="text-accent font-medium">10:00 Am - 4:00 Pm</div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div
                                    className="flex justify-between items-center border-b pb-[10px]"
                                >
                                    <div>Sunday</div>
                                    <div className="text-accent font-medium">Emergency Only</div>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div
                                    className="flex justify-between items-center border-b pb-[10px]"
                                >
                                    <div>Personal</div>
                                    <div className="text-accent font-medium">7:00 Am - 9:00 Pm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] border-t">
                <div className="container mx-auto text-center">
                    <div className="font-light text-base">
                        &copy; 2023 CureCore - All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}
