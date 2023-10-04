import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { Receipt } from "~/utils/Interfaces/Receipt";
import { User } from "~/utils/Interfaces/User";

interface UserState {
    data: User | null;
    reload: boolean;
    socket: Socket | null;
    receipt: Receipt[] | null;
    cart: Receipt | null;    
    cartPayQr: null | string;
}

const initialState: UserState = {
    data :null,
    reload: false,
    socket: null,
    receipt: null,
    cart: null,
    cartPayQr: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        allUser: function(state, action) {
            return {
                ...state ,
                data: action.payload
            }
        },
        setData: function(state, action) {
            return {
                ...state ,
                data: action.payload
            }
        },
        setSocket: function(state, action) {
            return {
                ...state ,
                socket: action.payload
            }
        },
        setReceipt: function(state, action) {
            return {
                ...state ,
                receipt: action.payload
            }
        },
        setCart: function(state, action) {
            return {
                ...state ,
                cart: action.payload
            }
        },
        setCartPayQr: function (state, action) {
            return {
                ...state,
                cartPayQr: action.payload
            }
        },
        reload: function(state) {
            return {
                ...state ,
                reload: !state.reload
            }
        }
    }
})

export const userAction = {
    ...userSlice.actions
}

export const userReducer = userSlice.reducer