import Coffe1e from "../assets/hazelnut latte.png";
import {Link} from "react-router-dom";
import React from "react";

function Coffee2(props) {
    return (<div>
        <div
            className="w-[100%] border h-[84.4vh] p-[20px]  mx-auto flex bg-[#F9D9AA]  justify-between items-center sm:flex-col lg:flex-col lg:h-[1000px] xl:w-full xl:h-[630px]  xl:px-4">
            <div className="left w-[50%] h-[100%] sm:w-[94%]  sm:pr-[10px] lg:w-[54%] lg:ml-[54px]">
                <img src={Coffe1e} alt="" className="w-[90%] h-[100%] rounded-lg" data-aos="fade-up"/>
            </div>
            <div className="right w-[50%] h-[100%] flex p-[10px] flex-col sm:w-full sm:p-10">
                <div className="top flex justify-between sm:gap-[100px]">
                    <h2 className={"text-[24px] font-[600] sm:w-[100%]"}>Hazelnut Latte</h2>
                    <h2 className={"text-[24px] font-[600] sm:w-[100%]"}>23 K</h2>
                </div>
                <div className="top1 text-[24px] text-justify  tracking-[-1px]">
                    <p>How To Make Hazelnut Flavored Latte. Press 1 oz (30 ml) espresso coffee into a mug or
                        heatproof glass. Froth 5 oz (150 ml) hot milk using a milk frother or your espresso machine.
                        Add 1 oz (30 ml) hazelnut syrup to the espresso coffee and stir to combine.
                    </p>
                </div>
                <div className="btns flex mt-8 gap-[30px]">
                    <Link to='/' className="lg:mx-2">
                        <button
                            className={"w-[120px] h-[40px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                        </button>
                    </Link>
                    <button
                        className={"w-[120px] h-[40px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                    </button>
                </div>
                <div className="btn mt-8 ">
                    <Link to='/Product' className="">
                        <button
                            className="w-[400px] h-[40px]  flex justify-center items-center text-white bg-[#2F2105] active:bg-transparent active:border active:border-[#2F2105] active:text-[#2F2105] rounded-lg cursor-pointer sm:w-full">BUY
                            RIGHT NOW
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    </div>);
}

export default Coffee2;