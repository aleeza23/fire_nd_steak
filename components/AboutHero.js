import Image from 'next/image';
import banner from '@/public/about-banner.webp';
import banner02 from '@/public/about-abs-image.webp';

const AboutHero = () => {
    return (
        <section className="about pb-24 pt-14">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap mx-auto">
                    <div className="w-full  lg:w-7/12 px-4 mb-10 lg:mb-0">
                        <div className="md:ml-8 text-white">
                            <h6 className="text-lg mb-3 text-yellow-300">Our Story</h6>
                            <h4 className="text-2xl md:text-3xl  mb-4 font-pirata-one tracking-widest">
                                Every Flavor Tells a  <span className="text-yellow-300">Story</span>
                            </h4>
                            <p className="mb-4">
                                At our best steak house in Islamabad every dish is crafted with care, and every flavor tells a story. From the rich, smoky taste of our expertly grilled steaks to the vibrant, fresh ingredients in our salads, each bite is a journey through culinary excellence.
                            </p>
                            <p className="mb-4">
                                Our chefs take pride in their craftsmanship ensuring that each dish not only tastes incredible but is also presented beautifully. Whether you are enjoying a meal with family or friends, our attention to detail and commitment to quality make every dining experience memorable.
                            </p>
                            <p>
                                Located at 24 King Street, Charleston, South Carolina, we invite you to experience the best steaks and wine in a setting where every dish is a celebration of flavor and artistry. Discover why we are the premier destination for those seeking exceptional cuisine and a delightful atmosphere.
                            </p>

                        </div>
                    </div>
                    <div className="w-full lg:w-5/12 px-4 mt-8 md:mt-0 relative">
                        <div className="relative">
                            <div className="overflow-hidden relative h-[400px] rounded-lg">
                                <Image
                                    src={banner}
                                    alt="About Image 1"
                                    fill
                                    sizes="(min-width: 1960px) 595px, (min-width: 1300px) 29.84vw, (min-width: 1040px) calc(6.67vw + 312px), (min-width: 780px) 704px, (min-width: 680px) 576px, calc(94.44vw - 47px)"
                                    className="object-cover"
                                    loading='lazy'
                                />
                            </div>
                            <div className="absolute -bottom-20 -left-10 w-2/4 h-auto p-4">
                                <div className="overflow-hidden rounded-lg">
                                    <Image
                                        src={banner02}
                                        alt="About Image 2"
                                        width={100}
                                        height={100}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
