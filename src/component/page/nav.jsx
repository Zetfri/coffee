import React from 'react';
import {Link} from 'react-router-dom';
import Logo from "/src/assets/logo_coffe.svg"

function Nav(props) {
    return (
        <div className="w-[100%] h-[100px flex justify-center items-center pb-10 bg-[#F6EBDA]">
            <div className="flex items-center justify-center pt-11 gap-96 ">
                <img src={Logo} alt=""/>
                <div className="flex gap-16">
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About us</Link>
                    <Link to='/Product'>Our Product</Link>
                    <Link to='/Delivery'>Delivery</Link>
                    <Link to='/Say'>Comments</Link>
                    <Link to='/Footer'>Feedback</Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;