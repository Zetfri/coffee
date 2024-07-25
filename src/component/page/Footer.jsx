import React from 'react';

import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="bg-[#2F2105] w-[100%] h-[527px] p-[40px] flex gap-20 sm:h-auto sm:flex-col lg:flex-col lg:h-auto lg:gap-5 ">
            <div className="left">
                <iframe className="rounded-[20px] sm:w-[95%] lg:w-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6020.322600648686!2d70.07052489999998!3d41.021726899999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9f27abd0e5d%3A0x5939ad18fc2dd1fd!2s%22JAJJI%20BILIMDON%22%20bog&#39;chasi!5e0!3m2!1sen!2s!4v1721584928922!5m2!1sen!2s"
                        width="550" height="425" loading="lazy" referrerPolicy="no-referrer-when-downgrade" data-aos="fade-right"></iframe>
            </div>


            <div className="right flex  flex-col gap-[20px] text-white pt-10 sm:px-[12px] lg:px-[60px]  ">
                <div className="flex gap-8 sm:flex-col sm:gap-8 lg:gap-8 xl:gap-[24px]">
                    <Link to='/' className="text-white text-[18px]" data-aos="fade-down">Home</Link>
                    <Link to='/About' className="text-white text-[18px]" data-aos="fade-down" data-aos-delay="200">About us</Link>
                    <Link to='/Product' className="text-white text-[18px]" data-aos="fade-down" data-aos-delay="300">Our Product</Link>
                    <Link to='/Delivery' className="text-white text-[20px]" data-aos="fade-down" data-aos-delay="400">Delivery</Link>
                    <Link to='/Say' className="text-white text-[18px]" data-aos="fade-down" data-aos-delay="400">Comments</Link>
                    <Link to='/Footer' className="text-white text-[18px]" data-aos="fade-down" data-aos-delay="500">Feedback</Link>
                </div>



                <div className=" mt-[50px] flex  gap-[50px] sm:flex-wrap lg:flex-wrap">
                    <div className="left w-[180px] flex flex-col gap-[10px]" data-aos="fade-right" data-aos-delay="200">
                        <h1 className="text-[22px] text-white">Address:</h1>
                        <p className="text-[18px] text-white">170 Mukimi Street, Tashkent, Uzbekistan</p>
                    </div>
                    <div className="right flex flex-col gap-[10px] text-white" data-aos="fade-right" data-aos-delay="300">
                        <h1 className="text-[22px]">Working ours:</h1>
                        <div className="text-[18px] text-white flex flex-col gap-[2px]">
                            <div>
                                <h2>Ish kunlari :
                                </h2>
                                <p>Dushanba - Juma: 7:30 - 18:00</p>
                                <p>Shanba: 8:00 - 16:00</p>
                                <p>Yakshanba: 8:00 - 16:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="bottom text-white flex flex-col gap-[10px]" data-aos="fade-right" data-aos-delay="400">
                        <h1 className="text-[22px]">Phone:</h1>
                        <div className={" w-[100px] gap-1  flex flex-col"}>
                            <a href="tel:+998331123266">+998331123266</a>
                            <a href="tel:+998931824226">+998931824226</a>
                            <a href="tel:+998901924246">+998901924246</a>
                            <a href="tel:+998941452266">+998941452266</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;