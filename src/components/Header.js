import React,{useState} from 'react'

import  Logo from '.././images/as21logo.png';

const Header = () => {

    const [dropNav, setdropNav] = useState(false)

    function toggleNav(){


        (dropNav) ? setdropNav(false) : setdropNav(true);

        
    }


    return (
        <>
            <nav id="navigation" className="h-16 nav-main">
        <div className="nav-left">
            <div className="logo">
                <img src={Logo} className="h-8" alt="academiasteph21 logo"/>
                <span className="ml-2 text-lg">AcademiaSteph21</span>
            </div>
        </div>

        <div className="toggler" onClick={(e) => toggleNav()}>
            <span className="menu-line-one"></span>
            <span className="menu-line-two"></span>
            <span className="menu-line-three"></span>
        </div>

        <div className=" nav-right">
            <li className=" navlink hover:border-b-2">
                <a href="#navigation">Home</a>
            </li>
            <li className="navlink hover:border-b-2">
                <a href="#services">Services</a>
            </li>
            <li className="navlink hover:border-b-2">
                <a href="#contact">Contact</a>
            </li>
           
            
        </div>
    </nav>

   {(dropNav) && (
         <div id="mobmenu" className="flex items-center justify-center mobile-nav sm:hidden">
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
