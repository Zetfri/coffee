import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '/src/assets/fast-food-logo-design-vector_18099-221-removebg-preview 1.png';
function Nav(props) {
    return (
        <div>
            <div className={"w-[100%] flex justify-center items-center "}></div>
            <img src={Logo} alt=""/>
            <Link to="/home" >Home</Link>
            <Link to="/ouroffer">Our offer</Link>
            <Link to="/pages">Pages</Link>
            <Link to="/pricing">PRICING</Link>
            <Link to="/shop">Shop</Link>
        </div>
    );
}

export default Nav;