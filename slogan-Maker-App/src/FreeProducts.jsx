import React from 'react';
import { Constants } from './Constants';

export default function FreeProducts() {
    return (
        <div className='freeProducts__container'>
            <div className='freeProducts__title'>{Constants.freeProductsTitle}</div>
            <div className='freeProducts__section'>
                <div><img/><div>Privacy Policy Generator</div></div>
                <div><img/><div>Terms & Conditions Generator</div></div>
                <div><img/><div>Domain Name Generator</div></div>
                <div><img/><div>Privacy Policy Generator</div></div>
            </div>
        </div>
    )
}