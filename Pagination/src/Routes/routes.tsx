import { Routes, Route } from "react-router-dom"

import About from "../Pages/About/AboutPage";
import Contact from "../Pages/Contact/ContactPage";
import Error from "../Pages/Error/EroorPage";
import Home from "../Pages/Home/HomePage";
import Service from "../Pages/Services/ServicesPage";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}