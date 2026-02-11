import { Product } from '../../../components/ui/Product'
import { Link, useParams } from 'react-router-dom'
import { useProducsByCateg } from '../../../hooks/useProducsByCateg'
import { useEffect } from 'react'
import { generatePath } from '../../../routes/config'

export const ProductsByCategory = () => {
    const { category } = useParams()
    const { products, loading, error } = useProducsByCateg(category!)
    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [category])
    return (
        <div className='container mx-auto pt-7'>
            <h2 className='text-2xl text-main font-bold w-fit capitalize mx-auto sm:mx-14 md:mx-0 xl:mx-25'>{category} Products:</h2>
            <div className='mx-auto grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-self-center'>
                {loading ?
                    <p>Loading...</p> : error ? <p>error: refresh the page</p> : products?.map((product) => (
                        <Link to={ generatePath.productDetails(product.id) } >
                            <Product
                                id={product.id}
                                discountPercentage={product.discountPercentage}
                                price={product.price}
                                rating={product.rating}
                                key={product.id}
                                title={product.title}
                                thumbnail={product.thumbnail} />

                        </Link>

                    ))}
            </div>

        </div>

    )
}
