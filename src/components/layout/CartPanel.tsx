interface propsType {
    isOpen: boolean
    onClose: () => void
}
import { IoClose } from 'react-icons/io5'
import './styles/CartPanel.css'
import { FaMinus, FaPlus } from "react-icons/fa";

import { TiShoppingCart } from 'react-icons/ti'
export const CartPanel = ({ isOpen, onClose }: propsType) => {
    return (
        <>
            <div
                onClick={onClose}
                className={`overlay ${isOpen ? "open" : "closed"}`}
            />

            <div className={`cart-panel ${isOpen ? "open" : "closed"}`}>
                <div className="cart-header">
                    <TiShoppingCart className='text-main text-3xl' />
                    <h2>Your Cart</h2>
                    <button onClick={onClose}><IoClose /></button>
                </div>
                <div className="cart-body">
                    <div className="cart-item">
                        <div className="img">
                            <img src="https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/1.webp" alt="" />
                        </div>
                        <div className="info">
                            <button className='close'>
                                <IoClose />
                            </button>
                            <span className='text-gray-500 '>Iphone 15pro max</span>
                            <span className='font-extrabold text-main'>$1000</span>
                            <div className="flex items-center gap-2">
                                <button className="border p-[5px] rounded-full cursor-pointer hover:scale-[1.1] transition-transform duration-100 active:scale-100 text-whitee bg-main">
                                    <FaPlus />
                                </button>
                                <span className="px-2 font-bold text-lg ">1</span>
                                <button className="border p-[5px] rounded-full cursor-pointer hover:scale-[1.1] transition-transform duration-100 active:scale-100 text-main">
                                    <FaMinus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-footer">
                    <div className="subtotal">
                        <h2>SUBTOTAL:</h2>
                        <h2>$1000.00</h2>
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
                        }} className="sec-btn">CLEAR</button>
                    </div>
                </div>
            </div>

        </>
    )
}
