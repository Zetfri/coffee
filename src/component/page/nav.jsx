import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '/src/assets/fast-food-logo-design-vector_18099-221-removebg-preview 1.png';
function Nav(props) {
    return (
        <div className="w-[100%]">

            <div className="flex gap-60  justify-center items-center ">
                <img src={Logo} alt="" className={""}/>
                <div className={"flex gap-[55px]  justify-center items-center "}>
                    <Link to='/home'>Home</Link>
                    <Link to='/ouroffer'>Our offer</Link>
                    <Link to='/pages'>Pages</Link>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/shop'>Hhop</Link>
                </div>
                <button className={"w-[150px] text-white h-[50px] bg bg-[#F6762C] rounded-[5px] text-[16px]"}>ORDER NOW</button>

            </div>
        </div>
    );
}

export default Nav;