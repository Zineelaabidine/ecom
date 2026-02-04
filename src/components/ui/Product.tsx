import React from 'react'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus, FaRegHeart, FaShare } from "react-icons/fa";
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
    id,
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
                <div className="product-name">
                    {title}
                </div>
                <div className="product-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />

                </div>
                <div className="product-price">
                    <span className='price'>$ {price}</span>
                    <span className="discount"> $ {discountPercentage}</span>
                </div>

            </div>

        </div>
    )
}
