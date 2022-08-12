import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { React} from 'react';
import GlobalStyle from './Style.css/GlobalStyle.js';
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SubscriptionID from "./pages/SubscriptionID";
import Subscriptions from "./pages/Subscriptions";
//import {LoginUser} from './Contexts';

export default function App() {

    return ( <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/subscription" element={<Subscriptions />} />
                <Route path="/subscription:subscriptionID" element={<SubscriptionID />} />
            </Routes>
        </BrowserRouter>
        </>)
}