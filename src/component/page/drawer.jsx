import React from 'react';
import { Button, Drawer } from 'antd';
import Burger from '../../assets/hamburger icon.webp';
import { Link } from "react-router-dom";
import Logo from "../../assets/logo_coffe.svg"
const App = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <Button  onClick={showLoading} className={"hidden sm:block bg-transparent border-none   h-auto"}>
                <img src={Burger} alt="" className="w-[40px]"/>
            </Button>
            <Drawer
                closable
                destroyOnClose
                title={<p><img src={Logo} alt=""/></p>}
                placement="right"
                open={open}
                width={200}  // Drawer енін 500 пиксель етіп қойдық
                onClose={() => setOpen(false)}
            >
               <div className={"drawer flex flex-col gap-4 text-[18px]"}>
                   <Link to='/' className="lg:mx-2">Home</Link>
                   <Link to='/About' className="lg:mx-2">About us</Link>
                   <Link to='/Product' className="lg:mx-2">Our Product</Link>
                   <Link to='/Delivery' className="lg:mx-2">Delivery</Link>
                   <Link to='/Say' className="lg:mx-2">Comments</Link>
                   <Link to='/Footer' className="lg:mx-2">Feedback</Link>
               </div>
            </Drawer>
        </>
    );
};

export default App;