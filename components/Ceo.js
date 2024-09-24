import Image from 'next/image'
import React from 'react'
import newSectionImage from '@/public/ceo-img.webp';


const Ceo = () => {
    return (
        <section className="py-14 w-[100vw] xl:w-[83vw] ">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row ">
                <div className="lg:w-1/2 relative h-72 px-12 ">
                    <Image
                        src={newSectionImage}
                        fill
                        sizes="(min-width: 1980px) 752px, (min-width: 1320px) calc(34.38vw + 78px), calc(10.77vw + 384px)"
                        alt="New Section Image"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-7">
                    <h2 className="text-3xl font-bold text-white mb-4 font-pirata-one tracking-widest">We do not compromise on quality</h2>
                    <p className="text-lg text-white">
                        A message by ceo
                    </p>
                    <i className='text-yellow-300'>_______Anis Mehmood</i>
                </div>
            </div>
        </section>
    )
}

export default Ceo