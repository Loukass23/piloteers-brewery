import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'




const BeerListItem = ({ beer, history }) => {
    if (!beer) {
        return <Redirect to='/beer' />
    }
    const handleReturn = (e) => {
        e.preventDefault();
        history.push('/beer')
    }


    return (
        <div className="container">

            <div className="row valign-wrapper ">
                <button id="beer-button" style={{ margin: 5 }} className="btn-floating btn-medium  waves-effect waves-light ">
                    <i onClick={handleReturn} className=" white-text lighten-3 fas fa-2x fa-arrow-left  " /></button>
                <p >Back to the beer list</p>
            </div>
            <div style={{ padding: 10 }} className="z-depth-4 card white ">
                <h2 className='teal-text text-lighten-2'>
                    {beer.name}</h2>
                {beer.labels && <img height="100px" className='circle' src={beer.labels.large} alt="" />}
                <div className="card-content">
                    <p className=''>{beer.description}</p></div>


                <div className='row teal-text text-lighten-2'>
                    <div className="col s3">{beer.abv && <p>  ABV : {beer.abv}</p>}</div>
                    <div className="col s3"> {beer.ibu && <p>IBU : {beer.ibu}</p>}</div>
                    <div className="col s3">
                        {beer.isOrganic === "Y" && <img height="60px" className='circle' src="https://res.cloudinary.com/ds3w3iwbk/image/upload/v1555491522/organic.png" alt="" />}
                        {beer.isOrganic === "N" && <p>Not Organic</p>}

                    </div>
                    <div className="col s1"></div>
                    <div style={{ paddingTop: 12 }} className='col s1 activator card-title teal-text lighten-2 valign-wrapper'>
                        <i className='material-icons right '>more_vert</i></div>
                </div>
                <br />

                <div className='card-reveal black-text' id='card-reveal'>
                    <span className='center-align itinerary-list-item-title activator card-title'>
                        <i className='material-icons right '>close</i>
                    </span>
                    {beer.glass &&
                        <div className="card-content">
                            <h4 className="teal-text text-lighten-2">Glass details</h4>
                            <p>{beer.glass.name}</p>
                        </div>
                    }
                    {beer.style &&
                        <div className="card-content">
                            <h4 className="teal-text text-lighten-2">Style</h4>
                            <p>{beer.style.description}</p>
                        </div>
                    }

                </div>
            </div>

        </div >

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
        }
    }
}

export default connect(mapStateToProps)(BeerListItem)
