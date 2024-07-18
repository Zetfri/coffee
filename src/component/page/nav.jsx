import React from 'react';
import {Link} from 'react-router-dom';
function Nav(props) {
    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/About'>About us</Link>
                <Link to='/Product'>Our Product</Link>
                <Link to='/Delivery'>Delivery</Link>
            </div>
    
            <div>
                <input type=" " name="" id=""/>
            </div>
        </div>
    );
}

export default Nav;