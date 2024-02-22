import axios from "axios";
import { useEffect, useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories')
            .catch(err => {
                console.log(err);
            });
        // console.log("Categories : ", response.data.slice(0, 5));
        setCategories(response.data.slice(0, 5));
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    // console.log(categories);

    return (<>
        <div className="flex w-full h-[60px] bg-slate-100 px-2">
            <div className="flex items-center">
                <Link to='/'>
                    <h1 className="text-3xl font-semibold">Platzi Store</h1>
                </Link>
            </div>

            <div className="flex items-center mx-6 gap-5 w-[80%]">
                {categories && categories.map((category) => (<div key={category.id}>
                    <Link to={`category/${category.id}`}>
                        <h1 className='text-xl'>{category.name}</h1>
                    </Link>
                </div>))}
            </div>

            <div className='flex items-center'>
                <Link to={'/cart'}>
                    <div className='flex items-center gap-1'>
                        <PiShoppingCartLight className='font-extrabold text-2xl' /> Cart
                    </div>
                </Link>
            </div>
        </div>
    </>);
}

export default Navbar;