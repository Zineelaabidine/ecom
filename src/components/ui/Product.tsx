import React from 'react'
import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartPlus , FaRegHeart, FaShare} from "react-icons/fa";

import './Product.css'
export const Product = () => {
    return (
        <div className='product-card'>
            <div className="img">
                <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="" />
                <div className="icons">
                    <span><FaCartPlus /></span>
                    <span><FaRegHeart /></span>
                    <span><FaShare /></span>
                </div>
            </div>
            <div className="product-card-content">
                <div className="product-name">
                    Realme C35
                </div>
                <div className="product-rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStarHalfStroke />

                </div>
                <div className="product-price">
                    <span className='price'>$ 145.99</span>
                    <span className="discount"> $ 25</span>
                </div>

            </div>

        </div>
    )
}
