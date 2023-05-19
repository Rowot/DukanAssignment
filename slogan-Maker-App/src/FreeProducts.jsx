import React from 'react';
import { Constants } from './Constants';
import './freeProducts.css';

export default function FreeProducts() {
    return (
        <section className='freeProducts__container'>
            <div className='freeProducts__title'>{Constants.freeProductsTitle}</div>
            <div className='freeProducts__section'>
                <div className='freeProduct__card'>
                <img src='./assets/icons/freeProduct1.png' alt="Privacy_Policy_Generator" />
                <div className='freeproductCard__title'>Privacy Policy Generator</div>
                <div className='freeproductCard__description'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>
                <div className='freeProduct__card'>
                <img src='./assets/icons/freeProduct2.png' alt="Terms_Conditions_Generator" />
                <div className='freeproductCard__title'>Terms & Conditions Generator</div>
                <div className='freeproductCard__description'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>
                <div className='freeProduct__card'>
                <img src='./assets/icons/freeProduct3.png' alt="Domain_Name_Generator" />
                <div className='freeproductCard__title'>Domain Name Generator</div>
                <div className='freeproductCard__description'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>
                <div className='freeProduct__card'>
                <img src='./assets/icons/freeProduct4.png' alt="Invoice_Generator" />
                <div className='freeproductCard__title'>Invoice Generator</div>
                <div className='freeproductCard__description'>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</div>
                </div>
            </div>
        </section>
    )
}