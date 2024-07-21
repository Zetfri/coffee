import React from 'react';
import Sandwich from "../../assets/unsplash_SqYmTDQYMjo.png"
import Cart from "../../assets/Group 2.png"
import Milk from "../../assets/img_product.png"
import Ice from "../../assets/img_product (1).png"
import Capuchino from "../../assets/img_product (2).png"
import Moccacino from "../../assets/img_product (3).png"
import Waffle from "../../assets/img_product (4).png"
import  Say from "../../component/page/say.jsx"
import Footer from "./Footer.jsx";
function Product(props) {
    return (
        <div className="w-[100%] h-screen p-16 mb-[400px] ">
                <h1 className="text-[32px] mb-[50px]">Special menu for you</h1>
            <div className="cards flex justify-center items-center gap-16 flex-wrap">
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Sandwich} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[150px]">
                        <h4 className="text-[24px] font-medium">Sandwich</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">bread with meat and <br/> vegetables</p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Milk} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[150px]">
                        <h4 className="text-[24px] font-medium">Hot Milk</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">Hot Milk with less <br/> sugar</p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Ice} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[80px]">
                        <h4 className="text-[24px] font-medium">Coffee Ice Cream</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">Coffee with ice cream <br/> vanilla</p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Capuchino} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[140px]">
                        <h4 className="text-[24px] font-medium">Cappucino</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">Hot Cappucino</p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Moccacino} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[130px]">
                        <h4 className="text-[24px] font-medium">Moccacinno</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">Hot Moccacino </p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
                <div
                    className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <img src={Waffle} alt="" className=" rounded-[10px]"/>
                    <div className="top flex  gap-[80px]">
                        <h4 className="text-[24px] font-medium">Waffle Ice Crem</h4>
                        <h4 className="text-[24px] font-medium">12 K</h4>
                    </div>
                    <div className="bottom flex justify-center items-center gap-[130px]">
                        <p className="text-[#7E7D7A]">Wafle with Ice cream</p>
                        <img src={Cart} alt=""/>
                    </div>
                </div>
            </div>
            <Say/>
        </div>
    );
}

export default Product;