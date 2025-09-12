import {Routes, Route } from "react-router-dom"

import Home from "../Pages/Home/homePage"
import About from "../Pages/About/aboutPage"
import News from "../Pages/News/newsPage"
import Contact from "../Pages/Contect/contactPage"
import Project from "../Pages/Projects/projectPage"

export default function myRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Project />} />
    </Routes>
  )
}
