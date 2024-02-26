import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {

    const products = useSelector(state => state.allProducts.products);
    console.log(products);

    const renderList = products.map((product) => {
        const { id, title, price, images, category } = product;
        const truncatedTitle = title.length > 20 ? title.substring(0, 20) + '...' : title;
        // console.log("id : ", id);
        // console.log("title : ", title);
        // console.log("price : ", price);
        // console.log("image : ", category.image);
        return (<div key={id}>
            <div className="box-border w-[278px] h-[387px] rounded-lg shadow-xl shadow-gray-400">
                <Link to={`/product/${id}`}>
                    <div className="flex justify-center h-[270px]">
                        <img src={images[0]} alt={title} className="w-[278px] rounded-t-lg" />
                    </div>
                    <div className="flex flex-col bg-slate-300 h-[119px] rounded-br-lg rounded-bl-lg px-3 justify-start gap-y-[2px] relative">
                        <h2 className="text-[18px] font-semibold text-pretty">{truncatedTitle}</h2>
                        <h4>{category.name}</h4>
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