import React from 'react';
import Sandwich from "../../assets/unsplash_SqYmTDQYMjo.png"
import Cart from "../../assets/Group 2.png"
import Milk from "../../assets/img_product.png"
import Ice from "../../assets/img_product (1).png"
import Capuchino from "../../assets/img_product (2).png"
import Moccacino from "../../assets/img_product (3).png"
import Waffle from "../../assets/img_product (4).png"
import Say from "../../component/page/say.jsx"
import Footer from "./Footer.jsx";
import {Link} from "react-router-dom";

function Product(props) {
    return (
        <div>


            <div className="w-[100%] h-screen p-16 mb-[400px] sm:mt-[140px] sm:h-auto sm:mb-[0px]">
                <h1 className="text-[32px] mb-[50px]">Special menu for you</h1>
                <div className="cards flex justify-center items-center gap-16 flex-wrap">
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px] ">
                        <img src={Sandwich} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[150px] sm:gap-20">
                            <h4 className="text-[24px] font-medium">Sandwich</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-14">
                            <p className="text-[#7E7D7A]">bread with meat and <br/> vegetables</p>
                            <Link to='/Menu'><img src={Cart} alt=""/></Link>

                        </div>
                    </div>
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                        <img src={Milk} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[150px] sm:gap-20">
                            <h4 className="text-[24px] font-medium">Hot Milk</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-14">
                            <p className="text-[#7E7D7A]">Hot Milk with less <br/> sugar</p>
                            <Link to='/Milk'><img src={Cart} alt=""/></Link>
                        </div>
                    </div>
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                        <img src={Ice} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[80px] sm:gap-2">
                            <h4 className="text-[24px] font-medium sm:w-[180px]">Coffee Ice Cream</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-14">
                            <p className="text-[#7E7D7A]">Coffee with ice cream <br/> vanilla</p>
                            <Link to='/Icecream'><img src={Cart} alt=""/></Link>
                        </div>
                    </div>
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                        <img src={Capuchino} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[140px] sm:gap-14">
                            <h4 className="text-[24px] font-medium">Cappucino</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-20 ">
                            <p className="text-[#7E7D7A]">Hot Cappucino</p>
                            <Link to='/Cappucino'>
                                <img src={Cart} alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                        <img src={Moccacino} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[130px] sm:gap-14">
                            <h4 className="text-[24px] font-medium">Moccacinno</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-[105px]">
                            <p className="text-[#7E7D7A]">Hot Moccacino </p>
                            <Link to='/Moccacinno'><img src={Cart} alt=""/></Link>
                        </div>
                    </div>
                    <div
                        className="card w-[356px] h-[385px] shadow-lg rounded-[10px] flex flex-col justify-center items-center gap-[10px]">
                        <img src={Waffle} alt="" className=" rounded-[10px]"/>
                        <div className="top flex  gap-[80px] sm:gap-6">
                            <h4 className="text-[24px] font-medium">Waffle Ice Crem</h4>
                            <h4 className="text-[24px] font-medium">12 K</h4>
                        </div>
                        <div className="bottom flex justify-center items-center gap-[130px] sm:gap-14">
                            <p className="text-[#7E7D7A]">Wafle with Ice cream</p>
                            <Link to='/Waffle'>
                                <img src={Cart} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Say/>
        </div>
    );
}

export default Product;