import type { ProductType } from "../types/Product";
import { getProductsByCategory } from "../services/productsByCategory";
import { useEffect, useState } from "react";

export function useProducsByCateg(categ: string) {
    const [products, setProducts] = useState<ProductType[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(
        () => {
            getProductsByCategory(categ)
            .then(setProducts)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
        }, [categ]
    )

    return { products, error, loading }
}