import React from 'react';
import Card from "../../assets/card-testi.png"
import Card3 from "../../assets/card-testi (1).png"
import Card2 from "../../assets/card-testi (2).png"
import Footer from "../page/Footer.jsx"
function Say(props) {
    return (

        <div className="w-[100%] h-screen bg-cover bg-center  flex justify-center items-center py-28">

        <div>
            <div className="left flex flex-col justify-start  gap-[10px]">
                <h1 className="text-[32px] tracking-normal">What they say about us</h1>
                <p className="text-[18px] text-[#7E7D7A] w-[300px]">We always provide the best service and always maintain the quality of coffee</p>
            </div>
            <div className="right flex transform translate-x-[80px] justify-end items-center gap-[10px]">
                <img src={Card} alt="" className="w-[257px] h-[280px]"/>
                <img src={Card2} alt="" className="w-[257px] h-[280px]"/>
                <img src={Card3} alt="" className="w-[257px] h-[280px]"/>
            </div>
        </div>
            <Footer/>
        </div>
    );
}

export default Say;