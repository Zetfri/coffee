import React from 'react';
import Coffee from "../../assets/img-hero.png";
import Cart from "../../assets/Group 2.png"
import Cup from "../../assets/unsplash_RFHFV7lVQBY.png"
import Cart1 from "../../assets/Group 2.png"
import Delivery from "./delivery.jsx";
import Say from "../page/Footer.jsx"
import Product from "./product.jsx";
function Home(props) {
    return (
        <div className="w-full h-screen bg-[#F6EBDA] ">
            <div className="w-full h-screen flex">
                <div className="w-1/2 h-screen flex  justify-center items-start pl-20 flex-col gap-8">
                    <h2 className={"text-[50px] w-[500px]"}>Enjoy your <span className={"text-[#FF9028]"}>coffee</span> before your activity</h2>
                    <p className={"text-[18px] text-[#7E7D7A] w-[400px]"}>Boost your productivity and build your mood with a glass of coffee in the morning </p>
                    <button  className={"w-[170px] h-[46px] bg-[#2F2105] text-white rounded-[33px] flex items-center justify-center gap-2"}>
                        Order Now
                        <img src={Cart} alt="" className="mt-1"/>
                    </button>
                </div>
                <div className="w-1/2 h-screen flex justify-end items-center " data-aos="fade-right">
                    <img src={Coffee} alt="" className="w-[465px] h-[346px]  mr-28"/>
                </div>

            </div>
            <div className={"w-[90%] h-[365px] rounded-[55px] bg-[#F9D9AA] flex justify-center items-center pb-20 mx-auto gap-10"}>
                <div className={"w-[355px] h-[385px] border-[10px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px]"}>
                    <img src={Cup} alt=""/>
                    <div >
                        <div className={"flex  px-2 justify-between"}>
                            <h2 className={"text-[24px] font-[600]"}>Vanilla Latte</h2>
                            <h2 className={"text-[24px] font-[600]"}>21 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>
                            <img src={Cart1} alt="" className={"w-[30px] mt-1"}/>
                        </div>
                    </div>
                </div><div className={"w-[355px] h-[385px] border-[10px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px]"}>
                    <img src={Cup} alt=""/>
                    <div >
                        <div className={"flex  px-2 justify-between"}>
                            <h2 className={"text-[24px] font-[600]"}>Vanilla Latte</h2>
                            <h2 className={"text-[24px] font-[600]"}>21 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>
                            <img src={Cart1} alt="" className={"w-[30px] mt-1"}/>
                        </div>
                    </div>
                </div><div className={"w-[355px] h-[385px] border-[10px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px]"}>
                    <img src={Cup} alt=""/>
                    <div >
                        <div className={"flex  px-2 justify-between"}>
                            <h2 className={"text-[24px] font-[600]"}>Vanilla Latte</h2>
                            <h2 className={"text-[24px] font-[600]"}>21 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>
                            <img src={Cart1} alt="" className={"w-[30px] mt-1"}/>
                        </div>
                    </div>
                </div>
            </div>
            <Delivery/>
            <Product/>
            <Say/>
        </div>


    );
}

export default Home;