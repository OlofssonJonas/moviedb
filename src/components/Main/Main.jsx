
import About from "../About/About"
import Contact from "../Contact/Contact"
import MovieDetails from "../MovieDetails/MovieDetails"
import MovieList from "../MovieList/MovieList"
//import "./Main.css"
import { Route, Routes } from "react-router-dom"



function Main () {
    return (
        <main>
            <Routes>
            <Route path='/' element={<MovieList />} />
            <Route path=":id" element={<MovieDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            </Routes>
        </main>
    )
}
export default Main
