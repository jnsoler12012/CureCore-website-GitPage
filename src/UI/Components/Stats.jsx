import React from 'react'

export default function () {
    return (
        <section className="stats section">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-y-6 justify-between">
                    <div
                        className="stats__item flex-1 xl:border-r flex flex-col items-center"
                    >
                        <div
                            className="text-4xl xl:text-[64px] font-semibold text-accent-tetiary xl:mb-2"
                        >
                            +5120
                        </div>
                        <div>Happy Clients</div>
                    </div>
                    <div
                        className="stats__item flex-1 xl:border-r flex flex-col items-center"
                    >
                        <div
                            className="text-4xl xl:text-[64px] font-semibold text-accent-tetiary xl:mb-2"
                        >
                            26
                        </div>
                        <div>Total Branches</div>
                    </div>
                    <div
                        className="stats__item flex-1 xl:border-r flex flex-col items-center"
                    >
                        <div
                            className="text-4xl xl:text-[64px] font-semibold text-accent-tetiary xl:mb-2"
                        >
                            +53
                        </div>
                        <div>Senior Doctors</div>
                    </div>
                    <div className="stats__item flex-1 flex flex-col items-center">
                        <div
                            className="text-4xl xl:text-[64px] font-semibold text-accent-tetiary xl:mb-2"
                        >
                            +10
                        </div>
                        <div>Years Experience</div>
                    </div>
                </div>
            </div>
        </section>
    )
}