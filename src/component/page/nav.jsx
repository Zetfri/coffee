import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "/src/assets/logo_coffe.svg"
import Drawer from "./drawer.jsx";

function Nav(props) {
    return (
        <div className="w-[100%] h-[100px  pb-10 bg-[#F6EBDA] sm:w-full lg:w-full z-10">
            <div
                className="flex items-center justify-center pt-11 gap-96 sm:gap-16  sm:justify-start lg:justify-center lg:gap-[50px] sm:pl-[-20px]">
                <Link to='/' className="lg:mx-2">
                    <img src={Logo} alt="" className="sm:pl-[40px] lg:pl-[0]"/>
                </Link>
                <div className="flex gap-16 sm:gap-0 sm:hidden lg:block ">
                    <Link to='/' className="lg:mx-2">Home</Link>
                    <Link to='/About' className="lg:mx-2">About us</Link>
                    <Link to='/Product' className="lg:mx-2">Our Product</Link>
                    <Link to='/Delivery' className="lg:mx-2">Delivery</Link>
                    <Link to='/Say' className="lg:mx-2">Comments</Link>
                    <Link to='/Footer' className="lg:mx-2">Feedback</Link>
                </div>
                <Drawer/>
            </div>
        </div>
    );
}

export default Nav;