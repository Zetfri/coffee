import React from 'react';
import Coffe1e from "../assets/img_product.png";

function Coffee1(props) {
    return (

        <div>
            <div
                className="w-[900px] border h-[500px] p-[20px] rounded-lg mx-auto mt-[10px] flex bg-[#F9D9AA]  justify-between items-center">
                <div className="left w-[50%] h-[100%]">
                    <img src={Coffe1e} alt="" className="w-[90%] h-[100%] rounded-lg"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col">
                    <div className="top flex justify-between">
                        <h2 className={"text-[24px] font-[600]"}>Espresso</h2>
                        <h2 className={"text-[24px] font-[600]"}>12 K</h2>
                    </div>
                    <div className="top1 text-[24px] text-justify  tracking-[-1px]">
                        <p>A standard recommendation is to use around 10 to 12 grams (2 tablespoons) of coffee grounds
                            with 2 to 3 ounces of water (60-80 mL). Tamping the coffee grounds in the filter basket can
                            also help increase the pressure during extraction, making the final product
                        </p>
                    </div>
                    <div className="btns flex mt-4 gap-[30px]">
                        <button
                            className={"w-[120px] h-[40px] active:bg-[#FF902B] active:text-white border-[#FF902B] border-[2px] rounded-[5px] text-[#FF902B]"}>HOT
                        </button>
                        <button
                            className={"w-[120px] h-[40px] active:bg-[#FFD28F] active:text-white border-[#FFD28F] border-[2px] rounded-[5px] text-[#FFD28F]"}>COLD
                        </button>
                    </div>
                    <div className="btn mt-[40px] ">
                        <button
                            className="w-[400px] h-[40px]  flex justify-center items-center text-white bg-[#2F2105] active:bg-transparent active:border active:border-[#2F2105] active:text-[#2F2105] rounded-lg cursor-pointer">BUY
                            RIGHT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coffee1;