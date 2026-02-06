
import { useEffect, useState } from "react";
import { getProductDetailsById } from "../services/productDetails";
import type { ProductType } from "../../../types/Product";

export function useProductById(id: number) {
    const [error, setError] = useState()
    const [loading, setLoading] = useState<boolean>();
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        setLoading(true)
        getProductDetailsById(id)
            .then(setProduct)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])
    return { product, images: product?.images, error, loading }
}