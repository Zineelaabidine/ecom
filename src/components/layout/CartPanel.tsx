interface propsType {
    isOpen: boolean
    onClose: () => void
}
import { IoClose } from 'react-icons/io5'
import './styles/CartPanel.css'
import { FaMinus, FaPlus } from "react-icons/fa";
import { useCart } from '../../context/cart/useCart';
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from 'react-router-dom';
import { generatePath } from '../../routes/config';
import { formatPrice } from '../../utils/formatPrice';
export const CartPanel = ({ isOpen, onClose }: propsType) => {
    const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity, subtotal } = useCart();

    return (
        <>
            <div
                onClick={onClose}
                className={`overlay ${isOpen ? "open" : "closed"}`}
            />

            <div className={`cart-panel ${isOpen ? "open" : "closed"}`}>
                <div className="cart-header">
                    <TiShoppingCart className='text-main text-3xl' />
                    <h2 >Your Cart <span>{cartItems.length}</span></h2>
                    <button onClick={onClose}><IoClose /></button>
                </div>
                <div className="cart-body">
                    {cartItems.map((item, i) => (
                        <div key={i} className="cart-item">
                            <Link to={generatePath.productDetails(item.id)} className="img">
                                <img src={item.thumbnail} alt={item.name} />
                            </Link>
                            <div className="info">
                                <button onClick={() => removeFromCart(item.id)} className='close'>
                                    <IoClose />
                                </button>
                                <span className='text-gray-500 '>{item.name}</span>
                                <span className='font-extrabold text-main'>${item.price}</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => { increaseQuantity(item.id) }}
                                        className="border p-[5px] rounded-full cursor-pointer hover:scale-[1.1] transition-transform duration-100 active:scale-100 text-whitee bg-main">
                                        <FaPlus />
                                    </button>
                                    <span className="px-2 font-bold text-lg ">{item.quantity}</span>
                                    <button
                                        onClick={() => { decreaseQuantity(item.id) }}
                                        className="border p-[5px] rounded-full cursor-pointer hover:scale-[1.1] transition-transform duration-100 active:scale-100 text-main">
                                        <FaMinus />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-footer">
                    <div className="subtotal">
                        <h2>SUBTOTAL:</h2>
                        <h2>{formatPrice(subtotal)}</h2>
                    </div>
                    <div className="BUTTONS">
                        {/* using inline css to override global css */}
                        <button style={{
                            fontSize: "15px",
                            color: "var(--color-whitee)",
                            width: "calc(100% - 20px)",
                            margin: "auto",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            borderRadius: "20px",
                        }}
                            className="main-btn">CHECKOUT</button>
                        <button style={{
                            fontSize: "15px",
                            color: "var(--color-main)",
                            borderRadius: "20px",
                            width: "calc(100% - 20px)",
                            marginLeft: "auto",
                            marginRight: "auto"
                        }} className="sec-btn"
                            onClick={() => clearCart()}>CLEAR</button>
                    </div>
                </div>
            </div>

        </>
    )
}
