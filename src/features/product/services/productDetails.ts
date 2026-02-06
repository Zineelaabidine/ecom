import type { ProductType } from "../../../types/Product";

export async function getProductDetailsById (id: number): Promise<ProductType>{
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if(!res.ok){
        throw new Error('failed to get product by id');
    }
    return res.json();
}