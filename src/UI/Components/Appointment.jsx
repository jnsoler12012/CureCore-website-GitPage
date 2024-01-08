import React from 'react'

export default function () {
    return (
        <section className="appointment section">
            <div className="container mx-auto">
                <h2
                    className="appointment__title h2 mb-5 xl:mb-[50px] text-center xl:text-left"
                >
                    Book Appointment or call:
                    <span className="text-accent-tetiary">(+478) 348 9452</span>
                </h2>
                <form className="appointment__form flex flex-col gap-y-5">
                    <div className="flex flex-col xl:flex-row gap-5">

                        <div className="select relative flex items-center">
                            <div className="absolute right-4">
                                <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                            </div>
                            <select
                                className="appearance-none outline-none h-full w-full bg-transparent px-4"
                            >
                                <option value="1">Select department</option>
                                <option value="2">Department 1</option>
                                <option value="3">Department 2</option>
                                <option value="4">Department 3</option>
                            </select>
                        </div>

                        <div className="select relative flex items-center">
                            <div className="absolute right-4">
                                <i className="ri-arrow-down-s-line text-[26px] text-primary"></i>
                            </div>
                            <select
                                className="appearance-none outline-none h-full w-full bg-transparent px-4"
                            >
                                <option value="1">Select doctor</option>
                                <option value="2">Dr. Jane Doe</option>
                                <option value="3">Dr. John Doe</option>
                                <option value="4">Dr. Bob Smith</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col xl:flex-row gap-5">
                        <input type="text" className="input" placeholder="Full Name" />
                        <input type="text" className="input" placeholder="Phone Number" />
                    </div>

                    <div className="flex flex-col xl:flex-row gap-5">
                        <input type="date" className="input" />
                        <input type="time" className="input" />
                    </div>

                    <button onClick={(e) => e.preventDefault()} className="btn btn-lg btn-accent self-start" type="submit">
                        Book an appointment
                    </button>
                </form>
            </div>
        </section>
    )
}