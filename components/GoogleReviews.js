import React from 'react'

const GoogleReviews = () => {
    return (
        <section className='w-[100vw] xl:w-[83vw]'>
            {/* Google Reviews Section */}
            <div className="container mx-auto px-4 mt-5">
                <h3 className="text-center text-2xl mb-4 font-pirata-one tracking-widest text-yellow-300">
                    What Our Customers Say
                </h3>
                <div className="flex justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13303.44873918743!2d73.1575499!3d33.5309686!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfed41dabd6f2b%3A0x284e66d52ed7da4a!2sFire%20&#39;n&#39;%20Steak%20House%20Dha%202%20Islamabad!5e0!3m2!1sen!2s!4v1727091533391!5m2!1sen!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0, }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default GoogleReviews