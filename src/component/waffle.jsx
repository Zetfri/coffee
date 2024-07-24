import React from 'react';
import Coffee from "../assets/img_product (4).png";

function Waffle(props) {
    return (
        <div>
            <div
                className="w-[900px] border h-[500px] p-[20px] rounded-lg mx-auto mt-[10px] flex bg-[#F9D9AA]  justify-between items-center">
                <div className="left w-[50%] h-[100%]">
                    <img src={Coffee} alt="" className="w-[90%] h-[100%] rounded-lg"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col">
                    <div className="top flex justify-between">
                        <h2 className={"text-[24px] font-[600]"}>Waffle Ice Crem</h2>

                    </div>
                    <div className="top1 text-[24px] mt-2 text-justify  tracking-[-1px]">
                        <p>To make ice cream in a jar, simply add ½ cup chilled heavy cream. ¼ condensed milk tin
                            (chilled), and 1 teaspoon vanilla extract to a cold-resistant glass Mason jar. Screw the lid
                            on tightly and shake it for 5 minutes or until the mixture doubles in size. Add mix-ins, put
                            the lid back on, and freeze for about 3 hours.
                        </p>
                    </div>
                    <div className="btn mt-14 ">
                        <button
                            className="w-[400px] h-[40px]  flex justify-center items-center text-white bg-[#2F2105] active:bg-transparent active:border active:border-[#2F2105] active:text-[#2F2105] rounded-lg cursor-pointer">BUY
                            RIGHT NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>);
}

export default Waffle;