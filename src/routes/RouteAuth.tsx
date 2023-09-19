import { Route } from "react-router-dom";
import Lazy from '../utils/lazies/Lazy';

export default

    <>
        <Route path="/register" element={Lazy(() => import("@pages/homes/auths/Registers/Register"))()}></Route>
        <Route path="/login" element={Lazy(() => import("@pages/homes/auths/Logins/Login"))()}></Route>
    </>




