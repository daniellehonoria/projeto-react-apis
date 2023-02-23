import { BrowserRouter, Routes, Route } from "react-router-dom"
import { datasResults } from "../data/data"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import HomePage from "../pages/HomePage/HomePage"
import PokedexPage from "../pages/PokedexPage/PokedexPage"
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage
                datasResults ={datasResults}/>}/>
                <Route path="pokedex" element={<PokedexPage/>}/>
                <Route path="/pokemon/:Id" element={<DetailsPage/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Router