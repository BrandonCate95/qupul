import Home from "../../components/Home";
import { Route } from "../../types/Routes";
import SignIn from "../../components/AuthFlow/SignIn";
import SignUp from "../../components/AuthFlow/SignUp";
import SearchPage from "../../components/SearchPage";
import DocumentPage from "../../components/DocumentPage";

export const HOME: Route = {
    exact: true,
    path: '/',
    component: Home
}

export const SEARCH: Route = {
    exact: false,
    path: '/search',
    component: SearchPage
}

export const DOCUMENT: Route = {
    exact: false,
    path: '/document',
    component: DocumentPage
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