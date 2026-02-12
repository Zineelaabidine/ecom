import type { ProductType } from "../../../types/Product";
import { searchProduct } from "../services/searchProduct";
import { useEffect, useState } from "react";
export function useSearchForProd(query: string) {
    const [counter, setCounter ] = useState(0)
    const [error, setError] = useState<string>()
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState<boolean>()
    useEffect(() => {
        setLoading(true)
        if (query.trim() === '') {
            setLoading(false)
            setProducts([])
            setError("")
            return
        }
        console.log("calling api for the " + counter + " time")
        setCounter(counter + 1)
        searchProduct(query)
            .then((data) => {
                setProducts(data)
            })
            .catch((error) => {
                console.log(error)
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }, [query])
    return { products, loading, error }
}
