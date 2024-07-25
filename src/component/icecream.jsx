import Coffe1e from "../assets/img_product (1).png";

function Milk() {
    return (
        <div>
            <div
                className="w-[100%] border h-[82vh] p-[20px]  mx-auto flex bg-[#F9D9AA]  justify-between items-center sm:flex-col lg:flex-col lg:h-[1000px] xl:w-full xl:h-[630px]  xl:px-4">
                <div className="left w-[50%] h-[100%] sm:w-[94%]  sm:pr-[10px] lg:w-[54%] lg:ml-[54px]">
                    <img src={Coffe1e} alt="" className="w-[90%] h-[100%] rounded-lg" data-aos="fade-up"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col sm:w-full sm:p-10">
                    <div className="top flex justify-between sm:gap-40">
                        <h2 className={"text-[24px] font-[600] sm:w-[100%]"}>Coffee Ice Cream</h2>

                    </div>
                    <div className="top1 text-[24px] mt-2 text-justify  tracking-[-1px]">
                        <p>Once you have your ingredients and supplies together: Whisk together the cream, espresso,
                            vanilla and sugar, heat in a heavy bottomed pan over medium low heat. While the mixture is
                            heating over the stove, separate your egg whites from egg yolks and whip the egg yolks.
                        </p>
                    </div>
                    <div className="btn mt-24 ">
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

export default Milk;