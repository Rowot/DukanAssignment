import React from 'react';
import { Constants } from './Constants';
import './features.css'

export default function Features() {
    return (
        <section className='features__container'>
            <div className='features'>
                <div className='feature__search'>
                    <div className='feature__search__icon'><img src='./assets/icons/searchFeature.png' alt="Search_Feature" /></div>
                    <div className='feature__search__title'>{Constants.searchFeatureText}</div>
                    <div className='feature__search__content'>{Constants.searchFeature}</div>
                </div>
                <div className='feature__select'>
                    <div className='feature__select__icon'><img src='./assets/icons/selectFeature.png' alt="Select_Feature" /></div>
                    <div className='feature__select__title'>{Constants.selectFeature}</div>
                    <div className='feature__select__content'>{Constants.selectFeatureContent}</div>
                </div>
                <div className='feature__standout'>
                    <div className='feature__standout__icon'><img src='./assets/icons/standOutFeature.png' alt="Standout_Feature" /></div>
                    <div className='feature__standout__title'>{Constants.standOutFeature}</div>
                    <div className='feature__standout__content'>{Constants.standOutFeatureContent}</div>
                </div>

            </div>

        </section>
    )
} 