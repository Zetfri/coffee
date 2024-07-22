import React from 'react';
import Instagram from "../../assets/instagram-application-logo_23-2151544104.avif"
import Telegram from "../../assets/Telegram logo.jfif"
import Youtube from "../../assets/Youtube.jfif"
import {Link} from "react-router-dom";
function Footer(props) {
    return (
        <div className="bg-[#2F2105] w-[100%] h-auto p-[40px] flex gap-20  ">
            <div className="left">
                <iframe
                    className="rounded-[20px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6020.322600648686!2d70.07052489999998!3d41.021726899999976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afe9f27abd0e5d%3A0x5939ad18fc2dd1fd!2s%22JAJJI%20BILIMDON%22%20bog&#39;chasi!5e0!3m2!1sen!2s!4v1721584928922!5m2!1sen!2s"
                    width="600"
                    height="700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="right flex  flex-col gap-[20px]">
                <div className="nav flex gap-[100px] h-[150px]">
                    <div className="left flex flex-col gap-[20px]">
                        <Link to='/' className="text-white text-[20px]">Home</Link>
                        <Link to='/About' className="text-white text-[20px]">About us</Link>
                        <Link to='/Product' className="text-white text-[20px]">Our Product</Link>
                    </div>
                  <div className="right flex flex-col gap-[20px] ">
                      <Link to='/Delivery' className="text-white text-[20px]">Delivery</Link>
                      <Link to='/Say' className="text-white text-[20px]">Comments</Link>
                      <Link to='/Footer' className="text-white text-[20px]">Feedback</Link>
                  </div>
                </div>
                <div className="top">
                    <h1 className="text-white text-[24px]">Contact us</h1>
                </div>
                <span className="flex gap-[20px] items-center">
                    <a href="">
                        <img src={Telegram} alt="" className="rounded-[100%] w-[40px] cursor-pointer"/>
                    </a>
                    <img src={Instagram} alt="" className="rounded-[100%] w-[40px] cursor-pointer"/>
                    <a href="">
                        <img src={Youtube} alt="" className="rounded-[25%] w-[45px] cursor-pointer"/>
                    </a>
                </span>
                <div className="div flex flex-wrap gap-[50px]">
                    <div className="left w-[180px] flex flex-col gap-[10px]">
                        <h1 className="text-[24px] text-white">Address:</h1>
                        <p className="text-[18px] text-white">170 Mukimi Street, Tashkent, Uzbekistan</p>
                    </div>
                    <div className="right flex flex-col gap-[10px] text-white">
                        <h1 className="text-[24px]">Working ours:</h1>
                        <div className="text-[18px] text-white flex flex-col gap-[2px]">
                            <p>Mon: 8:00 - 22:00</p>
                            <p>Tue: 8:00 - 22:00</p>
                            <p>Wed: 8:00 - 22:00</p>
                            <p>Thu: 8:00 - 22:00</p>
                            <p>Fri: 8:00 - 22:00</p>
                            <p>Fri: 8:00 - 22:00</p>
                            <p>Sat: 9:00 - 21:00</p>
                        </div>
                    </div>
                    <div className="bottom text-white flex flex-col gap-[10px]">
                        <h1 className="text-[24px]">Phone:</h1>
                        <div>
                            <p>+998946563401</p>
                            <p>+998997459023</p>
                        </div>
                    </div>
                </div>
                <button className="mt-[100px] rounded-[10px] w-[600px] h-[36px] text-white bg-[#FF902A] active:bg-transparent cursor-pointer active:border border-[#FF902A] duration-[.1s] tracking-[5px] ">ORDER NOW</button>
            </div>
        </div>
    );
}

export default Footer;