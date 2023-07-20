import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import About from "../pages/About"
import Error from "../pages/Error"

const Router = () => {
    return(
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
    )
}

export default Router;