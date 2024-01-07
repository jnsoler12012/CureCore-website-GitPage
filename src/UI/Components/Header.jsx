import React, { useState } from 'react'
import Logo from 'Svg/header/logo.svg'

export default function () {
    const [navbarActive, setNavbarActive] = useState(false)

    const navbarAction = () => {
        setNavbarActive(prevState => !prevState)
    }

    return (
        <header className="py-8 lg:pt-6 lg:pb-14">
            <div
                className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0"
            >
                <div>
                    <a href="#" className="flex justify-center lg:justify-normal">
                        <img src={Logo} alt="" style={{ height: '4rem' }} />
                    </a>
                </div>

                <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">

                    <div
                        className="flex justify-center items-center gap-x-2 lg:justify-normal"
                    >
                        <i className="ri-map-pin-2-fill text-2xl text-accent"></i>
                        <div className="text-secondary">123 Arling, Miola, NY</div>
                    </div>

                    <div
                        className="flex justify-center items-center gap-x-2 lg:justify-normal"
                    >
                        <i className="ri-phone-fill text-2xl text-accent"></i>
                        <div className="text-secondary">(+487) 384 9452</div>
                    </div>

                    <button
                        className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0"
                    >
                        book now
                    </button>

                    <nav
                        className={`mnav ${navbarActive ? 'left-0 ' : ''} bg-white fixed w-[300px] top-0 h-screen -left-[300px] shadow-2xl lg:hidden transition-all duration-300 z-20`}
                    >

                        <div
                            onClick={() => navbarAction()}
                            className="mnav__close-btn bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all"
                        >
                            <i
                                className={`mnav__close-btn-icon ${navbarActive ? 'ri-arrow-left-s-line ri-arrow-right-s-line ' : ''}ri-arrow-right-s-line text-2xl text-white`}
                            ></i>
                        </div>


                        <div className="px-12 flex flex-col gap-y-12 h-full">

                            <a href="#">
                                <img src={Logo} alt="" style={{ height: '4rem' }} />
                            </a>

                            <ul className="flex flex-col gap-y-5">
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Doctors
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Department
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-secondary hover:text-accent transition-all duration-300"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            <form className="relative flex gap-x-[10px]">
                                <label htmlFor="mnav-search-input">
                                    <i className="ri-search-line text-2xl text-accent"></i>
                                </label>
                                <input
                                    type="text"
                                    id="mnav-search-input"
                                    placeholder="Search..."
                                    className="outline-none w-[160px] botder-b-2 focus:border-b-2 focus:border-accent placeholder:italic"
                                />
                            </form>
                        </div>
                    </nav>

                    <nav
                        className="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-[10px] hidden lg:flex lg:items-center lg:justify-between lg:px-[50px]"
                    >

                        <ul className="flex gap-x-4">
                            <li>
                                <a
                                    href="#"
                                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Doctors
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Department
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Services</a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="border-r pr-4 text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-secondary hover:text-accent transition-all duration-300"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>

                        <form className="relative flex gap-x-[10px]">
                            <label
                                htmlFor="search-input"
                                className="flex justify-center items-center group:"
                            >
                                <i className="ri-search-line text-2xl text-accent"></i>
                            </label>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Search..."
                                className="outline-none w-[100px] focus:w-[180px] focus:border-b-2 focus:border-accent placeholder:italic placeholder:text-base transition-all duration-150"
                            />
                        </form>
                    </nav>
                </div>
            </div>
        </header>
    )
}