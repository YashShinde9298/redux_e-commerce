import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, placeOrder, removeFromCart } from "../redux/actions/productActions";
import { PiShoppingCartDuotone } from "react-icons/pi";

function Cart() {

    const cart = useSelector(state => state.cart.cart);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    console.log(cart);
    console.log(totalPrice);

    const dispatch = useDispatch();

    return (<>
        {cart.length > 0 ?
            (<>
                <div className='flex w-full'>
                    <div className='h-[665px] w-[900px] overflow-y-auto'>
                        {cart.map((item, index) => (
                            <div className='mt-5 w-full flex items-center px-[20px]' key={index}>
                                <div className='flex justify-center'>
                                    <img src={item.image} alt={item.name} className='h-[250px] rounded-md' />
                                    <div className='flex flex-col  mx-10 w-[70%]'>
                                        <div className="flex flex-col items-start">
                                            <h4 className="text-black text-[20px] font-bold tracking-normal leading-none pt-4">{item.name}</h4>
                                        </div>
                                        <div className="max-w-xs">
                                            <p className="text-black text-base tracking-normal leading-none pt-4">{item.category}</p>
                                        </div>
                                        <p className='text-black flex items-center text-base tracking-normal leading-none pt-2'>
                                            Quantity : <span className='ml-2 flex items-center'>
                                                <button
                                                    className='bg-slate-300 border border-gray-300 mx-1 w-7 p-0 text-2xl rounded-lg'
                                                    onClick={() => dispatch(removeFromCart(item))}
                                                >-</button>
                                                {item.quantity}
                                                <button
                                                    className='bg-slate-300 border border-gray-300 mx-1 w-7 p-0 text-2xl rounded-lg'
                                                    onClick={() => {
                                                        dispatch(addToCart({
                                                            id: item.id,
                                                            name: item.name,
                                                            price: item.price,
                                                            category: item.category,
                                                            quantity: 1,
                                                            image: item.image,
                                                            totalPrice: item.totalPrice
                                                        }))
                                                    }}
                                                >+</button>
                                            </span>
                                        </p>
                                        <p className="text-black text-base tracking-normal leading-none pt-4 mb-2">
                                            Single Item Price : {" "} <span className='ml-2'>{item.price}</span>
                                        </p>
                                        <p className="text-black text-base tracking-normal leading-none pt-4 mb-4">
                                            Total Item Price : {" "} <span className='ml-2'>{item.totalPrice}</span>
                                        </p>
                                        <button className='bg-red-600 text-white font-bold p-1 rounded w-[100px]' onClick={() => dispatch(deleteFromCart(item))}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1 w-[600px]'>
                        <p className='text-black text-xl tracking-normal leading-none pt-4'>
                            Total Amount : {" "} <span className='ml-2'>{totalPrice}</span>
                        </p>
                        <p className='text-black text-xl tracking-normal leading-none pt-4 mb-4'>
                            Total Quantity : {" "} <span className='ml-2'>{totalQuantity}</span>
                        </p>
                        <button
                            className='font-bold text-xl bg-green-500 rounded text-white p-1 w-[150px]'
                            onClick={() => dispatch(placeOrder(cart))}
                        >Place Order</button>
                    </div>
                </div>

            </>)
            : (<div className='flex flex-col items-center justify-center h-[650px]'>
                <PiShoppingCartDuotone className='text-[350px] text-gray-400' />
                <h1 className='font-bold text-3xl'>Your cart is empty</h1>
            </div>)
        }
    </>);
}

export default Cart;