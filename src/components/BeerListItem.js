import React from 'react'
//import './city.css'


const BeerListItem = ({ beer }) => {
    return (
        <li className="collection-item avatar">
            <div className="row ">
                <div className="col ">
                    {beer.labels && <img className="circle" src={beer.labels.medium} alt="" />}

                </div>
                <div className="col title valign-wrapper">
                    {beer.name}
                </div>
                <div className="col valign-wrapper ">
                    ABV : {beer.abv}
                </div>
                <div className="col valign-wrapper">
                    IBU : {beer.ibu}
                </div>
            </div>
        </li>



    )
}

export default BeerListItem
