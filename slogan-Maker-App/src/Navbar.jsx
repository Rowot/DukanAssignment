import React from 'react';
import './navbar.css'
import { Constants } from './Constants';



export default function Navbar() {
    return (
        <section className='navbar__container'>
            <div className='navbar__main__header'>
                <div className='navbar__logo'>
                    <img src="./assets/white.svg" />
                </div>
                <div className='navbar__login'><span className='navbar__signin'>Sign In</span><button className='navbar__pc__download'>{Constants.downloadPcVersion}</button></div>
            </div>
        </section>
    )
}