import {Product} from "../types.ts"; 

let products: Product[] = [
    {
        id: "1",
        name: "Melvin", 
        description: "My name", 
        price: 13
    }, 
    {
        id: "2",
        name: "Thomas", 
        description: "My name", 
        price: 31
    } 
]

export const getProducts = ({response}: {response:any}) => {
    response.body = {
        success: true,
        data: products
    }
}