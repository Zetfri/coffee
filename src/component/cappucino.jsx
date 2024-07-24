import Coffee from "../assets/img_product.png";

function Cappucino() {
    return (
        <div>
            <div
                className="w-[900px] border h-[500px] p-[20px] rounded-lg mx-auto mt-[10px] flex bg-[#F9D9AA]  justify-between items-center">
                <div className="left w-[50%] h-[100%]">
                    <img src={Coffee} alt="" className="w-[90%] h-[100%] rounded-lg"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col">
                    <div className="top flex justify-between">
                        <h2 className={"text-[24px] font-[600]"}>Hot Milk</h2>

                    </div>
                    <div className="top1 text-[24px] mt-2 text-justify  tracking-[-1px]">
                        <p>Pop your cup with milk in the microwave for a few seconds before adding the coffee! Have a
                            steam wand on your machine and fancy a classic milky coffee, like a latte or a cappuccino?
                            You ideally want the milk somewhere between 60-70°C (140-160°F) - this is the optimum
                            temperature to bring out milks natural sweetness.
                        </p>
                    </div>
                    <div className="btn mt-6 ">
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

export default Cappucino;