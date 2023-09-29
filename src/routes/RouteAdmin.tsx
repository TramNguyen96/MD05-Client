import { Route, Router, Routes } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default
    <>

        <Route path="/admin" element={Lazy(() => import("@pages/admin/Admin"))()}>
            <Route path="dashboard" element={Lazy(() => import("@pages/admin/managers/dashboard/Dashboard"))()} />
            <Route path="products" element={Lazy(() => import("@pages/admin/managers/products/Products"))()} />
            <Route path="products/pictures" element={Lazy(() => import("@pages/admin/managers/products/listProducts/optionPictures/OptionPicture"))()} />
        </Route>

    </>





