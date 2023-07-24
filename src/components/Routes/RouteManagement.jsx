import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import Article from "../../pages/Article/Article"
import Error from "../../pages/Error/Error"

const Router = () => {
    return(
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logement/:id" element={<Article />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
    )
}

export default Router;