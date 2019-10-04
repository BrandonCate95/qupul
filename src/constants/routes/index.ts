import Home from "../../components/Home";
import { Route } from "../../types/Routes";
import SignIn from "../../components/AuthFlow/SignIn";
import SignUp from "../../components/AuthFlow/SignUp";

export const HOME: Route = {
    exact: true,
    path: "/",
    component: Home
}

export const SIGNIN: Route = {
    exact: false,
    path: '/signin',
    component: SignIn
}

export const SIGNUP: Route = {
    exact: false,
    path: '/signup',
    component: SignUp
}