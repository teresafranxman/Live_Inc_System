import { Route, Routes } from "react-router";
import { Home } from "../../features/landing/Home";
import { ProductPage } from "../../features";
import { Login } from "../../features/login/Login";
import { Signup } from "../../features/Signup/Signup";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/signin" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
        </Routes>
    );
};