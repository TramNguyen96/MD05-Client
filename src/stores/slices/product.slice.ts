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
        },

        insertOptionProduct: function(state, action) {
            return {
                ...state,
                data: state.data?.map((product) => {
                    if (product.id === action.payload.productId) {
                        return {
                            ...product,
                            options: [...product.options, action.payload]
                        };
                    }
                    return product;
                })
            };
        },

         insertPictureOptionProduct: function(state, action) {
            return {
                ...state,
                data: state.data?.map((product) => {
                    if (product.id === action.payload.productId) {
                        return {
                            ...product,
                            options: product.options.map(item => {
                                if(item.id == action.payload.optionId) {
                                    // console.log("action.payload.pictures", action.payload.pictures)
                                    return {
                                        ...item,
                                        pictures: [...(action.payload.pictures)]
                                    }
                                }
                                return item
                            })
                        };
                    }
                    return product;
                })
            };
        },

       
    }
})

export const productAction = {
    ...productSlice.actions
}

export const productReducer = productSlice.reducer