import React from 'react';
import Coffe1e from "../assets/img_product.png";
import {Link} from "react-router-dom";

function Coffee1(props) {
    return (

        <div>
            <div
                className="w-[100%] border h-[100%] py-[20px]  mx-auto flex bg-[#F9D9AA]  justify-between items-center sm:flex-col lg:flex-col lg:h-[1000px] xl:w-full xl:h-[630px]  xl:px-4">
                <div className="left w-[50%] h-[100%] sm:w-[94%] sm:pr-[10px] lg:w-[54%] lg:ml-[54px]">
                    <img src={Coffe1e} alt="" className="w-[90%] h-[100%] rounded-lg" data-aos="fade-up"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col sm:w-full sm:p-10">
                    <div className="top flex justify-between sm:gap-40">
                        <h2 className={"text-[24px] font-[600] sm:w-[100%]"}>Espresso</h2>
                        <h2 className={"text-[24px] font-[600] sm:w-[100%]"}>12 K</h2>
                    </div>
                    <div className="top1 text-[24px] text-justify  tracking-[-1px]">
                        <p>A standard recommendation is to use around 10 to 12 grams (2 tablespoons) of coffee grounds
                            with 2 to 3 ounces of water (60-80 mL). Tamping the coffee grounds in the filter basket can
                            also help increase the pressure during extraction, making the final product
                        </p>
                    </div>
                    <div className="btns flex mt-4 gap-[30px]">
                        <Link to='/' className="lg:mx-2">
                            <button
                                className={"w-[120px] h-[40px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                            </button>
                        </Link>

                        <button
                            className={"w-[120px] h-[40px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                        </button>
                    </div>
                    <div className="btn mt-[40px] ">
                        <button
                            className="w-[400px] h-[40px]  flex justify-center items-center text-white bg-[#2F2105] active:bg-transparent active:border active:border-[#2F2105] active:text-[#2F2105] rounded-lg cursor-pointer sm:w-full">BUY
                            RIGHT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coffee1;