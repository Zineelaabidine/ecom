import { FaCartPlus, FaRegHeart, FaShare } from "react-icons/fa";
import { renderStars } from '../../utils/renderStars';
interface ProductProps {
    id: number
    title: string
    price: number
    discountPercentage: number
    rating: number
    thumbnail: string
}

import './Product.css'
import { useCart } from "../../context/cart/useCart";
export const Product = ({
    id,
    title,
    price,
    discountPercentage,
    rating,
    thumbnail,
}: ProductProps) => {
    const { addToCart, removeFromCart, isItemInCart } = useCart();
    return (
        <div className='product-card'>
            <div className="img">
                <img src={thumbnail} alt="" />
                <div className={`icons ${isItemInCart(id) ? "in-cart" : ""} z-10`}>
                    <span onClick={(e) => {
                         e.stopPropagation();
                        e.preventDefault();
                        if (isItemInCart(id)) {
                            removeFromCart(id)
                        } else {
                            addToCart({ id, thumbnail, name: title, price, quantity: 1 })
                        }

                    }}>
                        <FaCartPlus />
                    </span>
                    <span onClick={(e) => { e.stopPropagation() }}><FaRegHeart /></span>
                    <span onClick={(e) => { e.stopPropagation() }}><FaShare /></span>
                </div>
            </div>
            <div className="product-card-content">
                <div className="product-name" title={title}>
                    {title}
                </div>
                <div className="product-rating">
                    {renderStars(rating)}
                </div>
                <div className="product-price">
                    <span className='price'>$ {price}</span>
                    <span className="discount line-through"> $ {discountPercentage}</span>
                </div>

            </div>

        </div>
    )
}
