import axios from "axios"
import { User } from "~/utils/Interfaces/User"

export default {
    register: async function(newUser: User){
        return await axios.post(import.meta.env.VITE_SV_HOST + "users", newUser )
    },
    findAll: async function(){
        return await axios.get(import.meta.env.VITE_SV_HOST + "users" )
    },
    findById: async function(userId: string) {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}users/` + userId)
    },

    login: async function(data: any){
        return await axios.post(import.meta.env.VITE_SV_HOST + "users" + "/login", data )
    },

    authen: async function(data: any){
        return await axios.post(import.meta.env.VITE_SV_HOST + "authen", data)
    },

    resendMail: async function() {
        return await axios.get(`${import.meta.env.VITE_SV_HOST}users/` + "resend-email", {
            headers: {
                token: localStorage.getItem("token")
            }
        } )
    },

    googleLogin: async function (data: any) {
         return await axios.post(import.meta.env.VITE_SV_HOST + "users" + "/google-login", data )
    },

    changePassword: async function (data: any) {
         return await axios.post(import.meta.env.VITE_SV_HOST + "users" + "/change-password", data,  {
            headers: {
                "token": localStorage.getItem("token")
            }
        } )
    },

    resetPassword: async function (email: any) {
        return await axios.post(import.meta.env.VITE_SV_HOST + "users/reset-password", email)
    },

    receiptFindAll: async function () {
        return await axios.get(import.meta.env.VITE_SV_HOST + "receipt")
    },

    findReceiptById: async (receiptId: string) => {
        return await axios.get(import.meta.env.VITE_SV_HOST + "receipt/" + receiptId )

    },
}