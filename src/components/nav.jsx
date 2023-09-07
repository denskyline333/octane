import React from 'react'
import apexwhite from '../img/icons/apex-white-nav-logo.svg'
function Nav(){

return(
    <nav className="nav-menu">
    <a href="#" className="logo"><img src={apexwhite} alt="logo"/></a>
    <div className="nav-items">
        <a href="#" className="nav-item">Инфо</a>
        <a href="#" className="nav-item">Способности</a>
        <a href="#" className="nav-item">Издание</a>
    </div>
    </nav>
)

}

export default Nav