import axios from "axios"
import { Product } from "~/utils/Interfaces/Product"

export default {
    create: async function(newProduct: any) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "products", newProduct )
    },

    findAll: async function(){
        return await axios.get(import.meta.env.VITE_SV_HOST + "products" )
    },
    
}