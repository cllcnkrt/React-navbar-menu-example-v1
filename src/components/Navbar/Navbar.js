import React, { useState } from "react";
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import './Navbar.css'


function Navbar() {

    const [clicked, setclicked] = useState(false)

   const  handleClick =()=>{
    setclicked(!clicked)

   }
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React <i class="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url} >
                    {item.title}
                </a>
              </li>
            );
          })}
        </ul>
            <Button>Sign Up</Button>
      </nav>
    </>
  );
}

export default Navbar;
