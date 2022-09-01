import Link from 'next/link';
import React from 'react';
import { navRoutesData, supportInfo_nav } from '../../../DataSet/CommonData/navRoutesData';
import { ImHeadphones } from 'react-icons/im';
import { IconContext } from "react-icons";

import navStyles from "./Navbar.module.scss";
import { useRouter } from 'next/router';

const {_container,_ctg,_links,_link,_active,_contact,_contactInfo} = {
    _container: "nav_container",

    get _ctg(){ return `${this._container}__ctg` },   // links: "nav_container__links"

    get _links(){ return `${this._container}__links` },   // links: "nav_container__links"
        get _link(){ return `${this._links}__link` },   
        get _active(){ return `${this._links}__active` },   

    get _contact(){ return `${this._container}__contact` },   // contact: "nav_container__contact"
        get _contactInfo(){ return `${this._contact}__contactInfo` },
}


const NavBar = () => {
    const router = useRouter();
    
    
    return (
        <nav className={navStyles[_container]}>
            <div className={navStyles[_ctg]}>
                <button>Browse Categories</button>
            </div>
            <div className={navStyles[_links]}>
                {
                    navRoutesData.map(navUrl => <Link href={navUrl.path} key={navUrl.path}><a className={router.pathname === navUrl.path? `${navStyles[_link]} ${navStyles[_active]}`:navStyles[_link]}>{navUrl.title}</a></Link>)
                }
            </div>
            <div className={navStyles[_contact]}>
                <IconContext.Provider value={{ size:"40",color: "yellowgreen", className: "global-class-name" }}>
                    <ImHeadphones />
                </IconContext.Provider>
                <div className={navStyles[_contactInfo]}>
                    <h3>{supportInfo_nav.phone}</h3>
                    <p>{supportInfo_nav.support_time}</p>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;