import {Route, Routes, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Subscriptions from "./pages/Subscriptions";
import Home from "./pages/Home"
import Users from "./pages/Users"

export default function Router() {
	return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/Subscriptions" element={<Subscriptions/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Users" element={<Users/>}/>
            </Routes>
        </BrowserRouter>
    )
}