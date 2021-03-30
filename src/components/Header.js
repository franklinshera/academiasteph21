import React,{useState} from 'react'

import  Logo from '.././images/as21logo.png';

const Header = () => {

    const [dropNav, setdropNav] = useState(false)

  


    return (
        <>
            <nav id="navigation" className="h-16 nav-main">
        <div className="nav-left">
            <div className="logo">
                <img src={Logo} className="h-8" alt="academiasteph21 logo"/>
                <span className="ml-2 text-lg">AcademiaSteph21</span>
            </div>
        </div>

        <div className={(dropNav) ? 'toggler justify-center' : 'toggler justify-between'} onClick={(e) => setdropNav(!dropNav)}>
                        
            <span className={(dropNav) ? 'menu-line frwdslash' : 'menu-line'}></span>
            <span className={(dropNav) ? 'menu-line backslash' : 'menu-line'}></span>
            {(!dropNav) && <span className="menu-line"></span>}

            
        </div>

        <div className=" nav-right">
            <li className=" navlink hover:border-b-2" onClick={(e) => setdropNav(false)}>
                <a href="#navigation">Home</a>
            </li>
            <li className="navlink hover:border-b-2" onClick={(e) => setdropNav(false)}>
                <a href="#services">Services</a>
            </li>
            <li className="navlink hover:border-b-2" onClick={(e) => setdropNav(false)}>
                <a href="#contact">Contact</a>
            </li>
           
            
        </div>
    </nav>

   {(dropNav) && (
         <div id="mobmenu" className="flex items-center justify-center mobile-nav sm:hidden animate__animated animate__slideInDown">
         <div className="flex flex-col items-center justify-center mid">
             <li className="my-8 navlink hover:border-b-2">
                 <a href="#navigation">Home</a>
             </li>
             <li className="my-8 navlink hover:border-b-2">
                 <a href="#services">Services</a>
             </li>
             <li className="my-8 navlink hover:border-b-2">
                 <a href="#contact">Contact</a>
             </li>
             
             
         </div>
     </div>
   )}
        </>
    )
}

export default Header
