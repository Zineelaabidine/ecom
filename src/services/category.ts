import type { categoriesType } from "../types/category";
 
export async function getProductsCategories(): Promise<categoriesType>{
    const response = await fetch('https://dummyjson.com/products/categories');
    if(!response.ok){
        throw new Error('Failed to fetch categories')
    }
    return response.json();
}
 