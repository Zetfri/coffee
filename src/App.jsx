import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./component/page/home.jsx";
import Ouroffer from "./component/page/ouroffer.jsx";
import Pages from "./component/page/pages.jsx";
import PRICING from "./component/page/PRICING.jsx";
import SHOP from "./component/page/SHOP.jsx";
import Nav from "./component/page/nav.jsx";

function App(props) {
	return (
		<div className={"w-[100%]"}>

			<Nav/>
			<Routes>
				<Route path="/home" element={<Home/>}/>
				<Route path="/ouroffer" element={<Ouroffer/>}/>
				<Route path="/pages" element={<Pages/>}/>
				<Route path="/pricing" element={<PRICING/>}/>
				<Route path="/shop" element={<SHOP/>}/>
			</Routes>
		</div>
	);
}

export default App;