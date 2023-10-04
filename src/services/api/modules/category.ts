import axios from "axios"

export default {
    findAll: async function(){
        return await axios.get(import.meta.env.VITE_SV_HOST + "categories" )
    },
    
    findByCategotyId: async function(categoryId: string) {
        return await axios.get(import.meta.env.VITE_SV_HOST + "categories/" + categoryId)
    },
}