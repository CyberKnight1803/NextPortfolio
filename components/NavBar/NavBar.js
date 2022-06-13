import { useState, useEffect } from "react";

import NavBarHome from "./NavBarHome";
import NavItems from "./NavItems";
import ResumeButton from "./ResumeButton";


const NavBar = (props) => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY || window.pageYOffset === 0) { // if scroll down hide the navbar
                setShow(false); 
            } else { // if scroll up show the navbar
                setShow(true);  
            }
    
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY); 
            }
        };

        if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
        }
    }, [lastScrollY]);

    return (
        <header className={`w-full p-8 ${show && 'sticky top-0 z-10 bg-opacity-75 shadow-xl backdrop-blur-md'}`}>
            <div className="flex justify-between text-xl font-light" >
                <NavBarHome></NavBarHome>
                <NavItems></NavItems>
            </div>
        </header>
    );
};

export default NavBar;