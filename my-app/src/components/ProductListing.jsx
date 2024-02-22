import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

function ProductListing() {

    // const products = useSelector(state => state);

    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            .catch(err => {
                console.log("Err : ", err);
            })

        // console.log(response.data);
        dispatch(setProducts(response.data));
    }

    // console.log(products);


    useEffect(() => {
        fetchProducts();
    }, [])

    return (<>
        <div className="flex gap-5 flex-wrap justify-center mt-5 mb-5">
            <ProductComponent />
        </div>
    </>);
}

export default ProductListing;