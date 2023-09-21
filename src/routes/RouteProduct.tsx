import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/product/:productId" element={Lazy(() => import("@pages/products/ProductDetails/ProductDetail"))()}></Route>
    </>




