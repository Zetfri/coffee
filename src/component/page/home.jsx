import React from 'react';
import Coffee from "../../assets/img-hero.png";
import Cart from "../../assets/Group 2.png"
import Cup from "../../assets/unsplash_RFHFV7lVQBY.png"
import Cart1 from "../../assets/Group 2.png"
import Delivery from "./delivery.jsx";
import Say from "../page/Footer.jsx"
import Product from "./product.jsx";
import About from "../page/about.jsx"
import Coffe1 from "../../assets/hazelnut latte.png"
import Coffee2 from "../../assets/img_product.png"
import {Link} from "react-router-dom";

function Home(props) {
    return (<div className="w-full h-[120vh] bg-[#F6EBDA]" >
            <div className="w-full h-screen flex sm:h-[300px] lg:h-auto">
                <div className="w-1/2 h-screen flex  justify-center items-start pl-52 flex-col gap-8 mt-[-100px] sm:pl-[20px] lg:mt-[-250px] lg:pl-[40px] sm:mt-[-150px] "data-aos="fade-right"      data-aos-delay="200"
                     data-aos-duration="500"            data-aos-offset="500"
                     data-aos-easing="ease-in-sine">
                    <h2 className={"text-[50px] sm:text-[30px] sm:w-[280px] w-[500px]"}>Enjoy your <span
                        className={"text-[#FF9028]"}>coffee</span> before your activity</h2>
                    <p className={"text-[18px] text-[#7E7D7A] w-[400px] sm:w-[340px]"}>Boost your productivity and build your mood
                        with a glass of coffee in the morning </p>
                    <button
                        className={"w-[170px] h-[46px] bg-[#2F2105] text-white rounded-[33px] flex items-center justify-center gap-2 active:bg-transparent active:border active:border-[#2F2105] active:text-[#2F2105]"}>
                        Order Now
                        <Link to='/Product'>
                            <img src={Cart} alt="" className="mt-1"/>
                        </Link>
                    </button>
                </div>
                <div className="w-[50%] h-auto flex justify-end   pt-[60px] lg:mt-[40px]">
                    <img src={Coffee} alt="" className="w-[465px] h-[346px]   mr-28 sm:hidden lg:block lg:mr-[-2px] lg:w-[370px] " data-aos="fade-right"      data-aos-delay="400"
                         data-aos-offset="100" data-aos-duration="500"
                         data-aos-easing="ease-in-sine"/>
                </div>

            </div>
            <div
                className={"w-[95%] h-[325px] mt-[-20px] rounded-[55px] bg-[#F9D9AA] flex justify-center pb-20 mx-auto gap-16 sm:flex-wrap sm:mt-[400px] sm:h-auto sm:gap-[200px] sm:bg-transparent sm:justify-center sm:items-center lg:flex-wrap lg:h-auto lg:gap-[20px] lg:mt-[00px] "}>
                <div
                    className={"w-[355px] h-[385px] border-[5px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px] mt-[-150px] sm:w-[90%] lg:w-[30%] "} data-aos="fade-down"      data-aos-delay="200">
                    <img src={Cup} alt="" className="rounded-[10px]"/>
                    <div>
                        <div className={"flex  px-2 justify-between"}>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px]"}>Vanilla Latte</h2>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px]"}>21 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>

                            <Link to='/Coffee'><img src={Cart1} alt="" className={"w-[30px] mt-1"}/></Link>
                        </div>
                    </div>
                </div   >
                <div
                    className={"w-[355px] h-[385px] border-[5px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px] mt-[-150px] sm:w-[90%] lg:w-[30%]"} data-aos="fade-down"      data-aos-delay="300">
                    <img src={Coffee2} alt="" className="rounded-[10px]"/>
                    <div>
                        <div className={"flex  px-2 justify-between"}>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px]"}>Espresso</h2>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px]"}>12 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>
                            <Link to='/Coffe1'> <img src={Cart1} alt="" className={"w-[30px] mt-1"}/></Link>
                        </div>
                    </div>
                </div>
                <div
                    className={"w-[355px] h-[385px] border-[5px] border-[#FDF0DD] flex flex-col gap-3 bg-white p-5 rounded-[10px] mt-[-150px] sm:w-[90%] lg:w-[30%] "} data-aos="fade-down"      data-aos-delay="400">
                    <img src={Coffe1} alt="" className="rounded-[10px]"/>
                    <div>
                        <div className={"flex  px-2 justify-between lg:justify-evenly sm:gap-[70px]"}>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px] "}>Hazelnut Latte</h2>
                            <h2 className={"text-[24px] font-[600] lg:text-[20px]"}>23 K</h2>
                        </div>
                        <div className={"flex items-center justify-between mt-2"}>
                            <div className={"mt-2 flex gap-4 px-2"}>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                                </button>
                                <button
                                    className={"w-[64px] h-[32px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                                </button>
                            </div>
                            <Link to='/Coffee2'> <img src={Cart1} alt="" className={"w-[30px] mt-1"}/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Delivery/>
        </div>


    );
}

export default Home;