import React from 'react';

const Address = () => {
  return (
    <section className="pt-14 bg-[#0f0f0f] w-[100vw] xl:w-[83vw]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <h6 className="text-lg mb-3 text-yellow-300">Get In Touch</h6>

          <h4 className="text-4xl font-bold text-white font-pirata-one tracking-widest">Contact Us</h4>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className=" p-6 rounded-lg shadow-md text-center">
              <h5 className="text-lg font-semibold mb-2 text-white font-pirata-one tracking-widest">OUR ADDRESS</h5>
              <p className="text-[#999]">1st Floor, Plot # 2, Jinnah Boulevard, <br />Sector E Commercial, DHA PHASE 2 , Islamabad, Pakistan</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className=" p-6 rounded-lg shadow-md text-center">
              <h5 className="text-lg font-semibold mb-2 font-pirata-one tracking-widest text-white">PHONE & EMAIL</h5>
              <h6 className="text-lg font-semibold mb-2 text-yellow-300">03165089741</h6>
              <p className="text-[#999]">firensteakhouse@gmail.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className=" p-6 rounded-lg shadow-md text-center">
              <h5 className="text-lg font-semibold mb-2 font-pirata-one tracking-widest text-white">OPENING HOURS</h5>
              <p className="text-[#999]">MONDAY - SUNDAY<br />12:00 - 00:30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
