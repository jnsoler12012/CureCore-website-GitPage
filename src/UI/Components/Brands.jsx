import React from 'react'
import BrandImage1 from 'Svg/brands/brand-1.svg'
import BrandImage2 from 'Svg/brands/brand-2.svg'
import BrandImage3 from 'Svg/brands/brand-3.svg'
import BrandImage4 from 'Svg/brands/brand-4.svg'
import BrandImage5 from 'Svg/brands/brand-5.svg'

function Brands() {
    return (
        <section className="brands section">
            <div className="container mx-auto">
                <div
                    className="flex flex-col xl:flex-row gap-y-12 xl:gap-y-0 justify-between items-center"
                >
                    <img
                        className="hover:scale-110"
                        src={BrandImage1}
                        alt=""
                        style={{
                            hover: 'scale-110',
                            transition: 'all',
                            animationDuration: '600'
                        }}
                    />
                    <img
                        className="hover:scale-110"
                        src={BrandImage2}
                        alt=""
                        style={{
                            hover: 'scale-110',
                            transition: 'all',
                            animationDuration: '600'
                        }}
                    />
                    <img
                        className="hover:scale-110"
                        src={BrandImage3}
                        alt=""
                        style={{
                            hover: 'scale-110',
                            transition: 'all',
                            animationDuration: '600'
                        }}
                    />
                    <img
                        className="hover:scale-110"
                        src={BrandImage4}
                        alt=""
                        style={{
                            hover: 'scale-110',
                            transition: 'all',
                            animationDuration: '600'
                        }}
                    />
                    <img
                        className="hover:scale-110"
                        src={BrandImage5}
                        alt=""
                        style={{
                            hover: 'scale-110',
                            transition: 'all',
                            animationDuration: '600'
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Brands