import axios from "axios"
import { Product } from "~/utils/Interfaces/Product"

export default {
    create: async function(newProduct: any) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "products", newProduct )
    },

    search: async function(searchKey: string){
        return await axios.get(`${import.meta.env.VITE_SV_HOST}products/search?q=${searchKey}`)
    },
    
    findAll: async function(){
        return await axios.get(import.meta.env.VITE_SV_HOST + "products" )
    },

    findById: async function(productId: string){
        return await axios.get(import.meta.env.VITE_SV_HOST + "products/" +  productId)
    },


    
}