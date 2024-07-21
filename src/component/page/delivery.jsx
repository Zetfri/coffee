import React from 'react';
import Cup from "../../assets/coffee-cup 2.png"
import Truck from "../../assets/food-truck 1.png"
import About from "./about.jsx";
import Product from "./product.jsx";
function Delivery(props) {
    return (
        <div className="w-[100%] h-auto p-20">
            <h1 className="text-[32px] tracking-[4px] mb-10">How to use delivery <span>service</span></h1>
            <div className="cards flex justify-center items-center gap-16">
                <div className="card w-[370px] h-[290px]  flex flex-col justify-center items-center gap-[10px]">
                    <img src={Cup} alt="" className="w-[159px]"/>
                    <h4 className="text-[24px] font-medium">choose your coffee</h4>
                    <p className="text-[18px]">there are 20+ coffees for you</p>
                </div>
                <div className="card w-[370px] h-[290px]  flex flex-col justify-center items-center gap-[10px]">
                    <img src={Truck} alt="" className="w-[159px]"/>
                    <h4 className="text-[24px] font-medium">we delivery it to you</h4>
                    <p className="text-[18px]">Choose delivery service</p>
                </div>
                <div className="card w-[370px] h-[290px]  flex flex-col justify-center items-center gap-[10px]">
                    <img src={Cup} alt="" className="w-[159px]"/>
                    <h4 className="text-[24px] font-medium">Enjoy your coffee</h4>
                    <p className="text-[18px]">Choose delivery service</p>
                </div>
            </div>
            <Product/>
        </div>
    );
}

export default Delivery;