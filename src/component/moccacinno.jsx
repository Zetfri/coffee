import Coffe1e from "../assets/img_product (3).png";

function Moccacinno() {
    return (
        <div>
            <div
                className="w-[900px] border h-[500px] p-[20px] rounded-lg mx-auto mt-[10px] flex bg-[#F9D9AA]  justify-between items-center">
                <div className="left w-[50%] h-[100%]">
                    <img src={Coffe1e} alt="" className="w-[90%] h-[100%] rounded-lg"/>
                </div>
                <div className="right w-[50%] h-[100%] flex p-[10px] flex-col">
                    <div className="top flex justify-between">
                        <h2 className={"text-[24px] font-[600]"}>Moccacinno</h2>

                    </div>
                    <div className="top1 text-[24px] mt-2 text-justify  tracking-[-1px]">
                        <p>This drink is similar to mocha—it includes espresso shots, steamed milk, and chocolate and
                            cream as well. However, here, the inclusion of chocolate is the bare minimum. Typically,
                            cocoa powder or chocolate syrup is sprinkled on the top, and that's all the chocolate you
                            get in mochaccino.
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
        </div>
    );
}

export default Moccacinno;