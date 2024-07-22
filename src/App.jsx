import React, {useEffect} from 'react';
import  {Route, Routes} from "react-router-dom";
import Home from "./component/page/home.jsx";
import Nav from "./component/page/nav.jsx";
import About from "./component/page/about.jsx";
import Product from "./component/page/product.jsx";
import Delivery from "./component/page/delivery.jsx";
import Say from "./component/page/say.jsx"
import Footer from "./component/page/Footer.jsx"
import Coffee from "./component/coffee.jsx"
import Coffe1 from "./component/coffee1.jsx"
import Coffee2 from "./component/coffee2.jsx"
import Aos from"aos"
import Coffee1 from "./component/coffee1.jsx";
import Menu from "./component/menu.jsx"
import Milk from "./component/milk.js"
function App(props) {
    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/Delivery" element={<Delivery /> } />
                    <Route path="/Product" element={<Product/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Say" element={<Say/>}></Route>
                    <Route path="/Footer" element={<Footer/>} />
                    <Route path="/Coffee" element={<Coffee />} />
                    <Route path="/Coffe1" element={<Coffe1/>} />
                    <Route path="/Coffee2" element={<Coffee2 />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route
            </Routes>

        </div>
    );
}

export default App;