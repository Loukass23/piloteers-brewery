import React from 'react'
import { Link } from 'react-router-dom'

//import './city.css'


const BeerListItem = ({ beer }) => {
    return (
        <div className="col s12 m6">
            <div className="row valign-wrapper">
                <div style={{ paddingTop: '10px' }} className="col s1" >
                    <Link to='/'>
                        <div className="btn-floating btn-medium waves-effect waves-light red lighten-3"><i className="material-icons">home</i></div>
                    </Link>
                </div>
                <h4 className="col s11" >
                    Beers
                        </h4>

            </div>
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
