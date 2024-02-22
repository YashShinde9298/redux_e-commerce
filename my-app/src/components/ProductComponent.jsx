import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {

    const products = useSelector(state => state.allProducts.products);
    console.log(products);

    const renderList = products.map((product) => {
        const { id, title, price, images } = product;
        // console.log("id : ", id);
        // console.log("title : ", title);
        // console.log("price : ", price);
        // console.log("image : ", category.image);
        return (<div key={id}>
            <div className="box-border border-solid border-2 border-gray-400 w-[280px] h-[400px] rounded-lg shadow-xl">
                <Link to={`/product/${id}`}>
                    <div className="flex justify-center p-5 h-[270px]">
                        <img src={images[0]} alt={title} className="h-[250px] w-[200px]" />
                    </div>
                    <div className="flex flex-col bg-slate-300 mt-2 h-[119px] rounded-br-lg rounded-bl-lg px-3 justify-start gap-y-[2px] relative">
                        <h2 className="text-[18px] font-semibold text-pretty">{title}</h2>
                        <h3 className="text-[20px] font-bold absolute bottom-6">$ {price}</h3>
                    </div>
                </Link>
            </div>
        </div>)
    })

    return (<>
        {renderList}
    </>);
}

export default ProductComponent;