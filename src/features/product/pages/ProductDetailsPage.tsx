import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductById } from '../hooks/useProductById';
import './productDetailsPage.css'
export const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product, error, loading } = useProductById(Number(id));
  console.log(product)
  if (loading) {
    return <div>
      Loading...
    </div>
  }
  if (error) {
    return <div>
      Error
    </div>
  }
  return (<div className='container'>
      {product?.title}
  </div>

  )
}
