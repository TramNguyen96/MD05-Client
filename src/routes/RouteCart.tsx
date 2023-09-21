import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/carts" element={Lazy(() => import("@pages/carts/Cart"))()}></Route>
        {/* <Route path="/login" element={Lazy(() => import("@pages/homes/auths/Logins/Login"))()}></Route> */}
    </>




