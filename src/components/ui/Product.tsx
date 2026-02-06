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
export const Product = ({
     title,
    price,
    discountPercentage,
    rating,
    thumbnail,
}: ProductProps) => {
    return (
        <div className='product-card'>
            <div className="img">
                <img src={thumbnail} alt="" />
                <div className="icons">
                    <span><FaCartPlus /></span>
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
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
