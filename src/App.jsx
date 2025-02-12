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
import Milk from "./component/Milk.jsx"
import Icecream from "./component/icecream.jsx";
import Cappucino from "./component/cappucino.jsx"
import Moccacinno from "./component/moccacinno.jsx";
import Waffle from "./component/waffle.jsx";
import Drawer from "./component/page/drawer.jsx";
function App() {
    useEffect(() => {
        Aos.init()
    }, []);
    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/Delivery" element={<Delivery /> } />
                    <Route path="/Product" element={<Product/>} />
                    <Route path="/About" element={<About/>} />
                    <Route path="/Say" element={<Say/>}></Route>
                    <Route path="/Footer" element={<Footer/>} />
                    <Route path="/Coffee" element={<Coffee />} />
                    <Route path="/Coffe1" element={<Coffe1/>} />
                    <Route path="/Coffee2" element={<Coffee2 />} />
                    <Route path="/Menu" element={<Menu />} />
                    <Route path="/Milk" element={<Milk />} />
                    <Route path="/Icecream" element={<Icecream/>} />
                    <Route path="/Cappucino" element={<Cappucino/>} />
                    <Route path="/Moccacinno" element={<Moccacinno/>} />
                    <Route path="/Waffle" element={<Waffle/>} />
                    <Route path="Drawer" element={<Drawer/>} />
            </Routes>

        </div>
    );
}

export default App;