import React,{useState} from 'react'
import "./navbar.css"
import menuIcon from"../../imges/menuIcon.png"
import closeIcon from"../../imges/closeIcon.png"

 const Navbar=()=>{

    const[menuOpen,setMenuOpen]= useState(false);

    return(
        <nav className='navbar'>
            <a className='title1' href="/">Portfolio</a>
            <div className='menu'>
                <img className='menuBtn' 
                src={menuOpen ? closeIcon : menuIcon} 
                alt='menu-button'
                onClick={()=>setMenuOpen(!menuOpen)}/>
                <ul className={`menuItems ${menuOpen && 'menuOpen'}`}
                onClick={()=> setMenuOpen(false)}>
                    <li>
                        <a href="#about"> About</a>
                    </li>
                    <li>
                        <a href="#experience">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Project</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;