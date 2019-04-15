import React from 'react'
//import './city.css'


const BeerListItem = ({ beer }) => {
    return (
        <div className='card horizontal small' >
            <div className="card-stacked">
                <div className="card-content">
                    <span className="card-title">{beer.name}</span>
                </div>
                <div className="card-action">
                    <p>ABV : {beer.abv}</p>
                </div>
            </div>
            <div className='card-image'>
                {beer.labels && <img src={beer.labels.medium} alt="" />}
            </div>

        </div>


    )
}

export default BeerListItem
