import { Component } from "react";

interface Route {
    exact?: boolean,
    path: string,
    component: React.SFC // this is a stateless component i.e not defined as a class
}