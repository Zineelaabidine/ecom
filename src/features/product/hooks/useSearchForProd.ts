import type { ProductType } from "../../../types/Product";
import { searchProduct } from "../services/searchProduct";
import { useEffect, useState } from "react";
export function useSearchForProd(query: string) {
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
        searchProduct(query)
            .then((data) => {
                console.log(data)
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
