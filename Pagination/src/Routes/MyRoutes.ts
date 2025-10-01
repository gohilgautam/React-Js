import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Home/HomePage";
import AboutPage from "../Pages/About/AboutPage";
import ContactPage from "../Pages/Contact/ContactPage";
import ServicesPage from "../Pages/Services/ServicesPage";
import BlogPage from "../Pages/Blog/BlogPage";
import ProjectPage from "../Pages/Project/ProjectPage";
import ErrorPage from "../Pages/Error/EroorPage";


export const router = createBrowserRouter([
    {
        path : "/",
        Component : App,
        children : [
            {
                path : "/",
                index : true,
                Component : HomePage 
            },
            { 
                path : "/about", 
                Component : AboutPage 
            },
            { 
                path : "/contact", 
                Component : ContactPage 
            },
            { 
                path : "/services", 
                Component : ServicesPage 
            },
            {
                path : "/blog",
                Component : BlogPage
            },
            {
                path : "/projects",
                Component : ProjectPage
            },
            {
                path : "*", 
                Component : ErrorPage
            }
        ]
    }
])