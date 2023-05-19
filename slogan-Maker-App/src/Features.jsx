import React from 'react';
import { Constants } from './Constants';

export default function Features() {
    return (
        <section className='features__container'>
            <div className='feature__search'>
                <div className='feature__search__icon'></div>
                <div className='feature__search__title'>{Constants.searchFeatureText}</div>
                <div className='feature__search__content'>{Constants.searchFeature}</div>
            </div>
            <div className='feature__select'>
                <div className='feature__select__icon'></div>
                <div className='feature__select__title'>{Constants.selectFeature}</div>
                <div className='feature__select__content'>{Constants.selectFeatureContent}</div>
            </div>
            <div className='feature__standout'>
                <div className='feature__standout__icon'></div>
                <div className='feature__standout__title'>{Constants.standOutFeature}</div>
                <div className='feature__standout__content'>{Constants.standOutFeatureContent}</div>
            </div>
        </section>
    )
} 