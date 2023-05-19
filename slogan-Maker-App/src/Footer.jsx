import React from 'react';
import './footer.css'
import { footerContent } from './Constants';

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__info'>
                <div className='footer__logo'><img src="./assets/white.svg" /></div>
                <div className='footer__link__container'>
                    {footerContent?.footerLinks?.map((link, index) => <div className='individual__link' key={index} >{link}</div>)}
                </div>
            </div>
            <hr className='hr_ruler'/>
            <div className='footer__extra__info'>
                <span>{footerContent.allRightsReserved}</span>
                <div className='footer__made__in'>
                    <span>
                        {footerContent.madeInIndia}
                    </span>
                    <img src="./assets/icons/IndianFlag.png" />
                </div>

            </div>
        </div>);
}