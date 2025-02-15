import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header/Header"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
const Router = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="pokedex" element={<PokedexPage/>}/>
                <Route path="/pokemon/:id" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router