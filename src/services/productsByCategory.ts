import type { ProductType } from "../types/Product";
 interface ProductsResponse {
  products: ProductType[]
}
export async function getProductsByCategory(category: string): Promise<ProductType[]> {
    const res = await fetch(`https://dummyjson.com/products/category/${category}`);
    if(!res.ok){
        throw new Error(`Failed to fetch products of category: ${category}`)
    }
    const data: ProductsResponse = await res.json();
    return data.products
}