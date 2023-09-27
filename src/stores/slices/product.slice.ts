import { createSlice } from "@reduxjs/toolkit";
import { Product } from "~/utils/Interfaces/Product";

const initialState: {data: null | Product[]} = {data: null}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        insertProduct: function(state, action){
            state.data?.push(action.payload)
        },
        setDataApi: function(state, action) {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})

export const productAction = {
    ...productSlice.actions
}

export const productReducer = productSlice.reducer