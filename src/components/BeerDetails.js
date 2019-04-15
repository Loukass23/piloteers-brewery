import React from 'react'
//import './city.css'


const BeerListItem = ({ beer }) => {
    return (
        <div className="col s12 m6">
            <div className="card small red lighten-2">
                <div className="card-content white-text">
                    <span className="card-title">{beer.name}</span>
                </div>
                <div className='card-image'>
                    {beer.labels && <img src={beer.labels.large} alt="" />}
                </div>
                <div className="card-action">
                    <p>ABV : {beer.abv}</p>
                </div>
            </div>
        </div>

    )
}

export default BeerListItem
