import { lazy } from 'react'

import { Route } from "../../types/Routes"

export const HOME: Route = {
    exact: true,
    path: '/',
    component: lazy(() => import('../../components/HomePage'))
}

export const SEARCH: Route = {
    exact: false,
    path: '/search',
    component: lazy(() => import('../../components/SearchPage'))
}

export const DOCUMENT: Route = {
    exact: false,
    path: '/document',
    component: lazy(() => import('../../components/DocumentPage'))
}

export const SIGNIN: Route = {
    exact: false,
    path: '/signin',
    component: lazy(() => import('../../components/AuthFlow/SignIn'))
}

export const SIGNUP: Route = {
    exact: false,
    path: '/signup',
    component: lazy(() => import('../../components/AuthFlow/SignUp'))
}