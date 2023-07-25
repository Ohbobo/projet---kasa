import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage/HomePage"
import About from "../../pages/About/About"
import AccommodationDetailSheet from "../../pages/AccommodationDetailSheet/Article"
import Error from "../../pages/Error/Error"

const Router = () => {
    return(
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/logement/:id" element={<AccommodationDetailSheet />}/>
        <Route path="*" element={<Error />}/>
    </Routes>
    )
}

export default Router;