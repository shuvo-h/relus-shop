import Link from 'next/link';
import React from 'react';
import { navRoutesData, supportInfo_nav } from '../../../DataSet/CommonData/navRoutesData';
import { ImHeadphones } from 'react-icons/im';
import { IconContext } from "react-icons";

import navStyles from "./Navbar.module.scss";

const navBindCLS = {
    container: "nav_container",
    get contact(){ return this.container + "__contact" }   // contact: "nav_container__contact"
}


const NavBar = () => {
    
    return (
        <nav className={navStyles[navBindCLS.container]}>
            <div>
                Trending Category Component
            </div>
            <div>
                {
                    navRoutesData.map(navUrl => <Link href={navUrl.path} key={navUrl.path}>{navUrl.title}</Link>)
                }
            </div>
            <div className={navStyles[navBindCLS.contact]}>
                <div>
                    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                        <ImHeadphones />
                    </IconContext.Provider>
                    <h2>{supportInfo_nav.phone}</h2>
                    <p>{supportInfo_nav.support_time}</p>
                </div>

            </div>
        </nav>
    );
};

export default NavBar;