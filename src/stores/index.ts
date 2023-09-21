import { userReducer } from "./slices/user.slice";
import { configureStore, combineReducers} from '@reduxjs/toolkit';

const RootReducer = combineReducers({
    userStore: userReducer
})

export type StoreType = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})