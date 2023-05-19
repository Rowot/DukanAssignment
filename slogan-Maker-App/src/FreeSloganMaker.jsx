import React from 'react';
import { useState, useEffect } from 'react';
import { Constants } from './Constants';
import data from './data'
import './freesloganmaker.css'

export default function Freesloganmaker() {
    const [sloganData, setSloganData] = useState([]);
    const [page, setpage] = useState(1);
    const [typedInput,setTypedInput] = useState("");

    async function fetchSlogans() {
        // const response = await fetch('https://dummyjson.com/quotes?limit=100');
        // const data = await response.json();
        // Api data no longer fetched due to rate limiting of api.
        const response = data;
        setSloganData(data?.quotes)
    }

    useEffect(() => {
        fetchSlogans();
    }, [])

    function pageHandler(pageNum) {
        setpage(pageNum)
    }

    return (
        <section className='freesloganmaker__main__container'>
            <div className='sloganmaker__container'>
                <div className='freesloganmaker__heading'>{Constants.freesloganmakerHeading}</div>
                <div className='freesloganmaker__sub__heading'>{Constants.freesloganmakerSubHeading}</div>
                <div className='slogan__search'>
                    <div className='slogan__search__heading'>{Constants.sloganSearchHeading}</div>
                    <div className='slogan__search__input'>
                        <input onChange={(e)=>setTypedInput(e.target.value)} value={typedInput} type='text'></input>
                        {typedInput && <span onClick={()=>setTypedInput("")}>x</span>}</div>
                    <div className='sloganButton'><button>{Constants.sloganButtonText}</button></div>
                </div>
            </div>
            <div className='hr_ruler'>
                <hr />
            </div>

            <section className='slogans__section'>
                <div className='slogan__count'>{Constants.sloganCountText}
                    <button>{Constants.downloadAllSlogansText}</button></div>
                <div className="slogans__list">
                    {[...sloganData].slice(page * 10 - 10, page * 10)
                        .map((slogan, index) =>
                            <div key={slogan.id} className="individual__slogan__card">
                                {slogan?.quote}
                            </div>
                        )}
                </div>
                <hr className='hr_ruler' />
                <div className='pagination__section'>
                    <div>
                    {
                        page !== 1 &&
                        <span onClick={() => { page > 1 && pageHandler(page - 1) }} className='prev__button'>
                            <img src='./assets/icons/arrow.png' alt="nextButton" />Prev
                        </span>
                    }
                    </div>

                    <div className="pagination__btn__container">{[...Array(Math.ceil(sloganData.length / 10))].map((_, index) =>
                        <span onClick={() => { pageHandler(index + 1) }}
                            className={page === index + 1 ? 'pagination__buttons_active' : 'pagination__buttons_inactive'}
                            key={index}>
                            {index + 1}</span>
                    )}
                    </div>
                    <div>
                    {
                        page !== Math.ceil(sloganData.length / 10) &&
                        <span onClick={() => { page < Math.ceil(sloganData.length / 10) && pageHandler(page + 1) }} className='next__button'>
                            Next
                            <img src='./assets/icons/arrow.png' alt="nextButton" />
                        </span>
                    }
                    </div>
                </div>
            </section>
        </section>
    );

}

