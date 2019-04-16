import React, { Component } from 'react'
import BeerList from '../components/BeerList'
import { getBeers, setBeersLoading } from '../store/beerActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './beer.css'


class Beer extends Component {
    componentDidMount() {
        console.log(this.props.beers.beers)
        if (Object.getOwnPropertyNames(this.props.beers.beers).length === 0) {
            this.props.getBeers()
            this.props.setBeersLoading()
        }

    }
    render() {
        const { beers } = this.props;

        return (
            <>
                <div className="row teal lighten-2 mt-0">

                    <h1 id="header" className="white-text mt-0"> Beer List</h1>

                </div>
                <div className="col s1 valign-wrapper">
                    <Link to='/'>
                        <div className="btn-floating btn-medium waves-effect waves-light flat"><i className="material-icons">home</i></div>
                    </Link>
                </div>
                <div className="container">
                    <BeerList beers={beers.beers} loading={beers.loading} />
                </div>
            </>

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