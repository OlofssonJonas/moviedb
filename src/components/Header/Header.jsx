
import React from "react";
import MyMovies from "../MyMovies/MyMovies";
import NavLinks from "../NavLinks/NavLinks";
import './Header.css';


function Header () {
    return (

        <header>
            <h1>Movie<span>DB</span></h1>
            <div>
            <NavLinks /> 
           <MyMovies />
            </div>
        </header>
        
      
    
    )
}
export default Header;