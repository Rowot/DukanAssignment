import React from 'react';
import {useState,useEffect} from 'react';
import { Constants } from './Constants';
import './freesloganmaker.css'

export default function Freesloganmaker(){


return (
    <section className='freesloganmaker__main__container'>
    <div className='sloganmaker__container'>
        <div className='freesloganmaker__heading'>{Constants.freesloganmakerHeading}</div>
        <div className='freesloganmaker__sub__heading'>{Constants.freesloganmakerSubHeading}</div>
        <div className='slogan__search'>
        <div className='slogan__search__heading'>{Constants.sloganSearchHeading}</div>
        <div className='slogan__search__input'><input type='text'></input><span>x</span></div>
        <div className='sloganButton'><button>{Constants.sloganButtonText}</button></div>
        </div>
        </div>
        <hr />
        <section className='slogans__section'>
        <div className='slogan__count'>{Constants.sloganCountText}
        <button>{Constants.downloadAllSlogansText}</button>
        <div className="slogans__list">sample</div>
        <hr />
        <div className='pagination__section'>122345</div>
        </div>
        </section>
    </section>
);

}

