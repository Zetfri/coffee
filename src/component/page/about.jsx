import React from 'react';
import Cup from "../../assets/Group 6.png"
import Delivery from "./delivery.jsx";
import Product from "./product.jsx";


function About(props) {
    return (
        <div>


        <div className="w-100% h-[484px] flex justify-center items-center mt-28 px-10 pb-[40px] sm:flex-col sm:mt-[200px] sm:justify-start sm:items-start sm:gap-[30px]" >
            <div className="left w-[50%]">
                <img src={Cup} alt=""/>
            </div>
            <div className="right w-[50%] flex flex-col justify-start gap-[30px] sm:w-[100%] sm:gap-4">
                <h1 className="text-[32px] font-medium">About us</h1>
                <h3 className="text-[24px] tracking-[3px] font-medium">We provide quality coffee, <br/> and ready to deliver.</h3>
                <p className="text-[18px] text-[#7E7D7A] tracking-[2.3px]">We are a company that makes and distributes delicious drinks. our main product is made with a secret
                    recipe and available in stores worldwide.</p>
                <button className="bg-[#2F2105] text-[#F4AE26] w-[142px] h-[38px] rounded-[20px] px-2.5">Get your coffee</button>
            </div>

        </div>
            <Product/>
        </div>

    );
}

export default About;