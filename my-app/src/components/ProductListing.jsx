import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSlide, setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import { IoShirt } from "react-icons/io5";
import { GiSofa, GiConsoleController, GiRunningShoe } from "react-icons/gi";
import { sliderData } from "../assets/sliderData";
import { IoIosSend, IoMdRefresh } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";

function ProductListing() {

    // const products = useSelector(state => state);

    const slideIndex = useSelector(state => state.slider.value);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            .catch(err => {
                console.log("Err : ", err);
            })

        // console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            dispatch(nextSlide(slideIndex + 1));
        }, 5000)
        return () => clearInterval(interval);
    }, [dispatch, slideIndex])

    // console.log(products);


    useEffect(() => {
        fetchProducts();
    }, [])

    return (<>
        <div className="bg-white flex items-center justify-around h-[60px] border">
            <div className="flex items-center justify-center gap-2">
                <IoIosSend className="text-2xl text-[#0d376a]" /><span className="tracking-normal text-gray-500">Worldwide Free Shipping</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <IoMdRefresh className="text-2xl text-[#0d376a]" /><span className="tracking-normal text-gray-500">7 Days Moneyback Guaranteed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
                <AiOutlineSafety className="text-2xl text-[#0d376a]" /><span className="tracking-normal text-gray-500">We Never Share Your Individual Info</span>
            </div>
        </div>
        <div className="h-[580px] border w-full" >
            {sliderData.map((item) => (
                <div key={item.id} className={parseInt(item.id) === slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
                    <div className="flex justify-center">
                        {parseInt(item.id) === slideIndex && (
                            <img src={item.img} alt="img" className="h-[580px]" />
                        )}
                    </div>
                </div>
            ))}
        </div>
        <div className=" h-[300px] flex flex-col items-center w-full justify-center">
            <h1 className="font-extrabold text-3xl text-[#0d376a]">SHOP BY CATEGORIES</h1>
            <div className="flex items-center justify-evenly w-full mt-10">
                <div className="flex flex-col justify-center items-center w-full mt-5">
                    <div className="bg-[#0d376a] h-[60px] w-[60px] rounded-full flex items-center justify-center">
                        <IoShirt className="text-white text-[30px]" />
                    </div>
                    <h1 className="font-bold text-[#0d376a]">Clothes</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-5">
                    <div className="bg-[#0d376a] h-[60px] w-[60px] rounded-full flex items-center justify-center">
                        <GiSofa className="text-white text-[30px]" />
                    </div>
                    <h1 className="font-bold text-[#0d376a]">Furniture</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-5">
                    <div className="bg-[#0d376a] h-[60px] w-[60px] rounded-full flex items-center justify-center">
                        <GiConsoleController className="text-white text-[30px]" />
                    </div>
                    <h1 className="font-bold text-[#0d376a]">Electronics</h1>
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-5">
                    <div className="bg-[#0d376a] h-[60px] w-[60px] rounded-full flex items-center justify-center">
                        <GiRunningShoe className="text-white text-[30px]" />
                    </div>
                    <h1 className="font-bold text-[#0d376a]">Shoes</h1>
                </div>
            </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center mx-auto w-[80%] mt-5 mb-5">
            <ProductComponent />
        </div>
    </>);
}

export default ProductListing;