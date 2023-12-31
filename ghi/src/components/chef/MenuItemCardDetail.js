import { ShoppingCartContext } from '../../features/shopping-cart/shoppingCartContext';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MenuItemCardDetail(props) {
    const product = props.product;
    const shoppingCart = useContext(ShoppingCartContext);
    const productQuantity = shoppingCart.getProductQuantity(product.menu_item_id);

    return (
        <div className="bg-white hover:cursor-pointer max-w-sm rounded overflow-hidden shadow-lg">
            <img alt={product.photo} className="w-full h-48 md:h-50 rounded object-cover" src={product.photo}/>
            <div className="px-6 pt-3 pb-3">
                {/* NAME/DESCRIPTION */}
                <div className="font-semibold text-xl mb-2 capitalize">{product.name}</div>
                <p className="text-gray-700 text-base mb-0">
                {product.description}
                </p>
                {/* INGREDIENTS */}
                <hr className="mt-2 mb-2"></hr>
                <h6 className="text-left font-light text-m mb-1">Ingredients</h6>
                <p className="text-left text-gray-700 mb-0 text-xs capitalize">
                    {product.ingredients}
                </p>
                {/* SPICY/CALORIES/TAGS */}
                <hr className="mt-2 mb-2"></hr>
                <div className="flex items-center mb-0">
                    <h6 className="text-left font-light text-xs mb-0">Spicy Level:</h6>
                    <p className="text-gray-700 ml-1 mb-0 text-xs capitalize">
                        {product.spicy_level === 0 ? 'No spice' :
                        product.spicy_level === 1 ? 'Mild' :
                        product.spicy_level === 2 ? 'Medium' :
                        product.spicy_level === 3 ? 'Hot' :
                        product.spicy_level === 4 ? 'Very hot' :
                        'Extremely hot'}
                    </p>
                </div>
                <div className="flex items-center mb-0">
                    <h6 className="text-left font-light text-xs mb-0">Calories:</h6>
                    <p className="text-gray-700 ml-1 mb-0 text-xs capitalize">
                        {product.calories}
                    </p>
                </div>
                {product.tags && (
                    <>
                        <div className="flex items-center mb-2">
                            <h6 className="text-left font-light text-xs mb-0">Tags:</h6>
                            <p className="text-gray-700 ml-1 mb-0 text-xs capitalize">
                                {product.tags}
                            </p>
                        </div>
                    </>
                )}
            </div>
            <div className="flex justify-between">
                <h6 className="font-medium text-left ml-5">${product.price}</h6>
                { productQuantity > 0 && (
                <h6 className="font-medium text-right mr-5">In Cart: {productQuantity}</h6>
                )}
            </div>
            <div className= "px-6 pt-0 pb-2">
                <hr className="mt-0"></hr>
                { productQuantity > 0 ? (
                    <>
                        <div className="flex justify-between">
                            <button onClick={() => {
                                shoppingCart.removeOneFromCart(product.menu_item_id)
                                toast.error(`Removed ${product.name.charAt(0).toUpperCase() + product.name.slice(1)} from Cart`)
                                }} className="bg-gray-200 font-semibold text-xl hover:opacity-80 py-2 px-3 border mb-2 mt-2 rounded-full">-</button>
                            <button onClick={() => {
                                shoppingCart.addOneToCart(product.menu_item_id)
                                toast.success(`Added ${product.name.charAt(0).toUpperCase() + product.name.slice(1)} to Cart`)
                            }} className="bg-gray-200 font-semibold text-xl hover:opacity-80 py-2 px-3 border mb-2 mt-2 rounded-full">+</button>
                        </div>
                    </>
                ) :
                    <button className="bg-[#9db2a3] font-normal text-xl text-right hover:opacity-80 py-2 px-3 border mb-2 rounded-full mt-3"
                            onClick={() => {
                                shoppingCart.addOneToCart(product.menu_item_id, product.price, product.chef_id, product.photo, product.name)
                                toast.success(`Added ${product.name.charAt(0).toUpperCase() + product.name.slice(1)} to Cart`)
                            }}>Add to Cart</button>
                }
            </div>
            <ToastContainer position="bottom-right"/>
        </div>
    )
}

export default MenuItemCardDetail;
