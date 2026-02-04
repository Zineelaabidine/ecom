import { useState, useEffect } from "react";
import { getProductsCategories  } from "../services/category";
import type { categoriesType } from "../types/category";

export function useProductsCategories() {
    const [categories, setCategories] = useState<categoriesType>();
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        getProductsCategories()
            .then(setCategories)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [])
    return { categories, error, loading }
}