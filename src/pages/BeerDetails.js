import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'




const BeerListItem = ({ beer, history }) => {
    console.log(beer)
    if (!beer) {
        return <Redirect to='/beer' />
    }
    const handleReturn = (e) => {
        e.preventDefault();
        history.push('/beer')
    }
    if (!beer) handleReturn()
    return (
        <div className="container">

            <div className="row valign-wrapper">
                <div style={{ paddingTop: '10px' }} className="col s1" >
                    <button className="btn-floating btn-medium  waves-effect waves-light">
                        <i onClick={handleReturn} className=" white-text lighten-3 fas fa-2x fa-arrow-left " /></button>
                </div>
            </div>
            <div class="card large teal lighten-2">
                <div className='card-image'>
                    {beer.labels && <img src={beer.labels.large} alt="" />}
                    <span id="city-card"
                        className='itinerary-list-item-title activator card-title black-text lighten-2 '>
                        {beer.name}
                        <i className='material-icons right'>more_vert</i>
                    </span>
                </div>
                <div className='itinerary-list-item-details red-text text-lighten-2'>
                    {beer.abv && <p>  ABV : {beer.abv}<i className='far fa-clock small red-text text-lighten-2' /></p>}
                    <i className='fas fa-2x fa-euro-sign small red-text text-lighten-2' />
                    {beer.ibu && <p>IBU : {beer.ibu}</p>}

                </div>
                <div className='card-reveal white-text' id='card-reveal'>
                    <span className='center-align itinerary-list-item-title activator card-title'>
                        <i className='material-icons right '>close</i>
                    </span>
                    <p className='itinerary-list-item-summary'>{beer.description}</p>

                    <div className='explore-itinerary-btn center-align'>

                    </div>
                </div>






                {/* <div class="card-image">
                    {beer.labels && <img src={beer.labels.large} alt="" />}
                </div>
                <span class="card-title">{beer.name}</span>
                <div class="card-content">
                    <p>{beer.description}</p>
                </div>
                <div class="card-action">
                    {beer.abv && <p>ABV : {beer.abv}</p>}
                    {beer.ibu && <p>IBU : {beer.ibu}</p>}
                </div> */}
            </div>

        </div>

    )
}
const mapStateToProps = (state, ownProps) => {
    if (Object.getOwnPropertyNames(state.beers.beers).length === 0) {
        return <Redirect to='/beer' />
    }
    else {
        const beerId = ownProps.match.params.id
        const beerList = state.beers.beers
        return {
            beer: beerList.find((beer) => beer.id === beerId),
            beers: state.beers,
        }
    }

}

export default connect(mapStateToProps)(BeerListItem)
