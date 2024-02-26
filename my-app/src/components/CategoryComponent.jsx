import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

function CategoryComponent() {

    const { categoryId } = useParams();
    console.log("CategoryId : ", categoryId);
    const dispatch = useDispatch()


    const fetchProducts = async () => {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
            .catch(err => {
                console.log("Err : ", err);
            })
        console.log(response.data);
        dispatch(setProducts(response.data));
    }

    useEffect(() => {
        fetchProducts();
    }, [categoryId])



    return (<>
        <div className="flex gap-5 flex-wrap justify-center mx-auto w-[80%] mt-5 mb-5">
            <ProductComponent />
        </div>
    </>);
}

export default CategoryComponent;