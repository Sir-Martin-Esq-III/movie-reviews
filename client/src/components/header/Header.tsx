import React from 'react'
import {Link} from "react-router-dom";
import './header.css'

interface Props {
    
}
/*
Header component will display:
    -SearchBar
    -Link to home
    -Link to login

Will become hambuger-menu on mobile view
*/
const Header = (props: Props) => {
    return (
        <div className="header-container">
            
            <div className="searchbar">
                <input type="text" name="text" id="text"/>
            </div>
            <div className="Home">
                <h1>
                    <Link to="/">
                        Home
                    </Link>
                </h1>
            </div>
            <div className="Login">
                <h1>
                    <Link to="/login/addmovie">
                        Login
                    </Link>
                    </h1>
            </div>
            

            
        </div>
    )
}

export default Header
