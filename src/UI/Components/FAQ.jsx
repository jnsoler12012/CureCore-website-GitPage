import React, { useEffect, useState } from 'react'

export default function () {
    const [openDialog, setOpenDialog] = useState([
    ])


    const titles = [
        { id: 1, title: 'Why to beleive in Insove medical healthcare ?' },
        { id: 2, title: 'Will we get healthcare updates after surgery ?' },
        { id: 3, title: 'What preparations are necessary before undergoing surgery ?' },
        { id: 4, title: 'How long will it take to recover after surgery ?' }
    ]

    const handleClick = (id) => {
        setOpenDialog((prevState) => {
            if (!prevState.includes(id)) {
                prevState.push(id)
                console.log(prevState);
                return ([...prevState]);
            } else {
                const index = prevState.indexOf(id);

                const x = prevState.splice(index, 1)
                return ([...prevState]);
            }
        })
    }

    useEffect(() => {
        console.log(openDialog);
        console.log(openDialog.includes(1))

        return () => {
            console.log(openDialog);
        }
    }, [openDialog])


    return (
        <section className="faq">
            <div className="container mx-auto">
                <h2 className="faq__title h2 text-center mb-[50px]">We've got answers</h2>
                <div className="max-w-5xl mx-auto">
                    {
                        titles.map((title) => {
                            return (
                                <div
                                    onClick={() => handleClick(title.id)}
                                    key={title.id}
                                    className={`px-[30px] pt-7 pb-4 border-b cursor-pointer select-none transition-all `}
                                >
                                    <div className="flex items-center justify-between mb-[10px]">
                                        <h4 className="h4">{title.title}</h4>
                                        <div className=" text-accent">
                                            <i className={`${openDialog.includes(title.id) ? 'open ri-subtract-fill text-2xl ' : 'ri-add-fill text-2xl '} ri-add-line text-2xl`}></i>
                                        </div>
                                    </div>
                                    <div className={`${openDialog.includes(title.id) ? 'flex text-1xl p-3' : 'h-0 hidden'} open  overflow-hidden transition-all ease-in-out duration-200`}>
                                        <p className="font-light">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Dignissimos itaque nobis culpa at libero excepturi ex
                                            necessitatibus accusantium veritatis porro tempore, odit modi
                                            amet illo, eaque laborum debitis sint nihil.
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}