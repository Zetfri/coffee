import React, {useEffect} from 'react';
import  {Route, Routes} from "react-router-dom";
import Home from "./component/page/home.jsx";
import Nav from "./component/page/nav.jsx";
import About from "./component/page/about.jsx";
import Product from "./component/page/product.jsx";
import Delivery from "./component/page/delivery.jsx";
import Say from "./component/page/say.jsx"
import Footer from "./component/page/Footer.jsx"
import Aos from"aos"
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
            </Routes>

        </div>
    );
}

export default App;