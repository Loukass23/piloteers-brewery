import React, { Component } from 'react'
import BeerList from '../components/BeerList'
import { Link } from 'react-router-dom'
import { getBeers, setBeersLoading } from '../store/beerActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Beer extends Component {
    componentDidMount() {
        this.props.getBeers()
        this.props.setBeersLoading()
    }
    render() {
        const { beers } = this.props;

        return (
            <div className="container">
                <h1>Piloteers Beer List</h1>
                <div className="">
                    <BeerList beers={beers.beers} loading={beers.loading} />
                </div>

            </div>

        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        beers: state.beers,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getBeers: () => dispatch(getBeers()),
        setBeersLoading: () => dispatch(setBeersLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)