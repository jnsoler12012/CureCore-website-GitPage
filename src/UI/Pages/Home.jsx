import React from 'react'
import { Appointment, Deparments, FAQ, Header, Hero, Services, Stats, Team, Testimonials, Blog, Brands, Newsletter, Footer } from '../Components';

export default function () {
    return (
        <>
            <Header />
            <Hero />
            <Stats />
            <Services />
            <Appointment />
            <Testimonials />
            <Team />
            <FAQ />
            <Deparments />
            <Blog />
            <Brands />
            <Newsletter />
            <Footer />
        </>
    )
}