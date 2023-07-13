import React from "react";
import assem from '../img/Rectangle (4).png'

function Header(){
    return(
        <div id="header"> 
             <div className="container">
                <div className="header">
                        <img src={assem}></img>
                      <div className="header-nav">
                        <a href="">Home</a>
                        <a href="">Recipes</a>
                        <a href="">Meat</a>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Support</a>
                      </div>
                     <div className="header-btn">
                        <button className="right">Sign in</button>
                        <button className="left">Request demo</button>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default Header;




















