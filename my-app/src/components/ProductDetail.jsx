import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, removeSelectedProduct, selectedProduct } from "../redux/actions/productActions";
import { Bars } from "react-loader-spinner";
import { GrNext, GrPrevious } from "react-icons/gr";

function ProductDetail() {

    const { productId } = useParams();
    const product = useSelector(state => state.product);
    const { images, title, price, description, category } = product;
    // console.log("images : ", images);
    // console.log("title : ", title);
    // console.log("price : ", price);
    // console.log("Description : ", description);
    // console.log("Category : ", category);
    // console.log("product : ", product);
    const dispatch = useDispatch();
    const [imageIndex, setImageIndex] = useState(0);


    const fetchProductDetail = async () => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${productId}`)
            .catch(err => {
                return err;
            })
        // console.log(response.data);
        dispatch(selectedProduct(response.data));
    }

    const forwardImage = () => {
        setImageIndex((imageIndex + 1) % images.length);
    }

    const backwardImage = () => {
        setImageIndex((imageIndex + images.length - 1) % images.length);
    }

    useEffect(() => {
        if (productId && productId !== '') {
            fetchProductDetail();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])

    if (!product || Object.keys(product).length === 0) {
        return <div className="flex justify-center items-center h-screen"><Bars
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></div>
    }

    return (<>
        <div className="flex justify-center mt-20 mb-20">
            <div className="w-[48%] flex justify-center items-center">
                <button onClick={backwardImage} className="p-1 rounded-full shadow-lg mx-2 shadow-gray-300"><GrPrevious className="font-bold text-2xl" /></button>
                <img src={images[imageIndex]} alt={title} className="h-[500px] transition duration-500 ease-in-out rounded" />
                <button onClick={forwardImage} className="p-1 rounded-full shadow-lg mx-2 shadow-gray-300"><GrNext className="font-bold text-2xl" /></button>
            </div>
            <div className="flex flex-col justify-center gap-y-3 w-[48%] ps-9">
                <h1 className="font-bold text-3xl">{title}</h1>
                <h2 className="font-bold text-red-600 text-2xl">$ {price}</h2>
                <h2 className="font-bold text-xl text-slate-400">{category.name}</h2>
                <p className="text-gray-500">{description}</p>
                <button className="bg-green-600 w-[200px] h-[40px] text-white font-bold rounded-lg" onClick={() => dispatch(addToCart({
                    id: productId,
                    name: title,
                    price: price,
                    category: category.name,
                    quantity: 1,
                    image: images[imageIndex],
                    totalPrice: price
                }))}>Add To Cart</button>
            </div>
        </div>
    </>);
}

export default ProductDetail;