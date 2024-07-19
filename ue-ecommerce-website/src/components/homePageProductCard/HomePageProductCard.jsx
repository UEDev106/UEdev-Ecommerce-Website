// HomePageProductCard.jsx

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";

const HomePageProductCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { getAllProduct } = context;

    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Deleted from cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <div className="mt-10">
            {/* Heading */}
            <div className="">
                <h1 className="text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* Main */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {getAllProduct.slice(0, 32).map((item, index) => (
                            <div key={index} className="p-4 w-full md:w-1/4">
                                <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-transform hover:scale-105">
                                    {/* Zoom effect on hover */}
                                    <img
                                        onClick={() => navigate(`/productinfo/${item.id}`)}
                                        className="lg:h-80 h-96 w-full object-cover"
                                        src={item.productImageUrl}
                                        alt="product"
                                    />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                            UE Shopping Mall
                                        </h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            {item.title.substring(0, 25)}
                                        </h1>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                            ₹{item.price}
                                        </h1>
                                        <div className="flex justify-center">
                                            {cartItems.some(p => p.id === item.id) ?
                                                <button
                                                    onClick={() => deleteCart(item)}
                                                    className="bg-red-700 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Delete From Cart
                                                </button>
                                                :
                                                <button
                                                    onClick={() => addCart(item)}
                                                    className="bg-blue-500 hover:bg-blue-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePageProductCard;
