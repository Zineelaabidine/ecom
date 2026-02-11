import type { ProductType } from "../../../types/Product";
export async function searchProduct(query: string):Promise<ProductType[]> {
    const rest= await fetch(`https://dummyjson.com/products/search?q=${query}`)
    if(!rest.ok){
        throw new Error('failed to fetch')
    }
    const data= await rest.json()
    return data.products
    
}