import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { navbarData } from "../assets/sliderData";



function Navbar() {


    return (<>
        <div className="flex w-full h-[100px] bg-[#0d376a] px-10">
            <div className="flex items-center w-[20%]">
                <Link to='/'>
                    <h1 className="text-[40px] font-semibold text-white">Platzi Store</h1>
                </Link>
            </div>

            <div className="flex items-center justify-center mx-6 gap-10 w-[80%]">
                {navbarData.map((category) => (
                    <div key={category.id}>
                        <Link to={`/category/${category.id}`}>
                            <h1 className="text-xl text-white">{category.name}</h1>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='flex items-center'>
                <Link to={'/cart'}>
                    <div className='flex items-center gap-1'>
                        <PiShoppingCartLight className='font-extrabold text-2xl text-white' /><span className="text-white">Cart</span>
                    </div>
                </Link>
            </div>
        </div>

    </>);
}

export default Navbar;