import React from 'react';
import Instagram from "../../assets/instagram-application-logo_23-2151544104.avif"
import Telegram from "../../assets/Telegram logo.jfif"
import Youtube from "../../assets/Youtube.jfif"
import {Link} from "react-router-dom";
function Footer(props) {
    return (
        <div className="bg-[#2F2105] w-[100%] h-screen p-[40px] flex gap-20  ">
            <div className="left">
                <iframe src="https://www.google.com/maps/@41.2963012,69.2171219,20.25z?entry=ttu/"
                        height="550"
                        width="700"
                        title="Iframe Example"
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
            </div>
        </div>
    );
}

export default Footer;