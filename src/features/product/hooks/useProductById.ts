
import { useEffect, useState } from "react";
import { getProductDetailsById } from "../services/productDetails";
import type { ProductType } from "../../../types/Product";

export function useProductById(id: number) {
    const [error, setError] = useState()
    const [loading, setLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<ProductType>();
    useEffect(() => {
        getProductDetailsById(id)
            .then(setProduct)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [id])

    return { product, error, loading }
}