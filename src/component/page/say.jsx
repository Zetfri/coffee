import React from 'react';
import Card from "../../assets/card-testi.png"
import Card3 from "../../assets/card-testi (1).png"
import Card2 from "../../assets/card-testi (2).png"
import Footer from "../page/Footer.jsx"
function Say(props) {
    return (
        <div>


        <div className="w-[100%] h-screen  flex justify-center py-20 sm:h-auto lg:mt-[100px] lg:py-0 lg:px-2 ">

        <div className="flex justify-center items-center gap-[34px] sm:flex-col lg:flex-col lg:text-center">
            <div className="left flex flex-col justify-start  gap-[10px]">
                <h1 className="text-[32px] tracking-normal sm:w-[200px] ">What they say about us</h1>
                <p className="text-[18px] text-[#7E7D7A] w-[300px] sm:w-[200px]">We always provide the best service and always maintain the quality of coffee</p>
            </div>
            <div className="right flex transform translate-x-[0px] justify-end items-center gap-[10px] sm:flex-col sm:gap-10">
                <img src={Card} alt="" className="w-[257px] h-[280px]" data-aos="fade-right" data-aos-delay="200"/>
                <img src={Card2} alt="" className="w-[257px] h-[280px]" data-aos="fade-right" data-aos-delay="300"/>
                <img src={Card3} alt="" className="w-[257px] h-[280px]" data-aos="fade-right" data-aos-delay="400"/>
            </div>
        </div>

        </div>
            <Footer/>
        </div>
    );
}

export default Say;