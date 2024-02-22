import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function CategoryComponent() {

    const { categoryId } = useParams();
    console.log("CategoryId : ", categoryId);

    const products = useSelector(state => state.allProducts.products);
    console.log("products : ", products);

    const filteredProducts = products.filter(product => product.category.id === categoryId);

    console.log("filteredProducts : ", filteredProducts);

    return (<>

    </>);
}

export default CategoryComponent;