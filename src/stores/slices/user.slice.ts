import { createSlice } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { User } from "~/utils/Interfaces/User";

interface UserState {
    data: User | null;
    reload: boolean;
    socket: Socket | null;
}

const initialState: UserState = {
    data :null,
    reload: false,
    socket: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
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