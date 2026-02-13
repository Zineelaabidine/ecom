import { Link, useSearchParams } from 'react-router-dom'
import { useSearchForProd } from '../hooks/useSearchForProd';
import { Product } from '../../../components/ui/Product';
import { generatePath } from '../../../routes/config';
export const Search = () => {
    const [param] = useSearchParams()
    const { products, loading, error } = useSearchForProd(param.get("q")!)
    if (error) {
        return <p className='min-h-screen'>Error: {error}</p>
    }
    return (
        <div className='container mx-auto pt-7'>
            <h2 className='text-2xl text-main font-bold w-fit capitalize mx-auto sm:mx-14 md:mx-0 xl:mx-25'>
                {loading ? "loading..." : products ? products.length > 0 ? products?.length : 'No' : 'No'}   Products for: {param.get("q")}
            </h2>
            <div className='mx-auto min-h-screen grid gap-6 py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-self-center'>
                {loading ?
                    <p>Loading...</p> : error ? <p>error: refresh the page</p> : products?.map((product) => (
                        <Link
                            key={product.id}
                            to={generatePath.productDetails(product.id)} >
                            <Product
                                id={product.id}
                                discountPercentage={product.discountPercentage}
                                price={product.price}
                                rating={product.rating}
                                title={product.title}
                                thumbnail={product.thumbnail} />

                        </Link>

                    ))}
            </div>

        </div>

    )
}
