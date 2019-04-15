import React, { Component } from 'react'
import BeerList from '../components/BeerList'
import { Link } from 'react-router-dom'
import { getBeers } from '../store/beerActions'
import { connect } from 'react-redux'

import { compose } from 'redux'
import { Redirect } from 'react-router-dom'


class Beer extends Component {
    componentDidMount() {
        this.props.getBeers()
    }
    render() {
        const { beers } = this.props;
        return (
            <div className="cities container">
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
                <div className="">
                    <BeerList beers={beers} />
                </div>
                <div className="row">
                    <Link to='/createCity'><div className="btn-floating btn-large waves-effect waves-light red lighten-3">
                        <i className="material-icons">add</i></div></Link>
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
        getBeers: () => dispatch(getBeers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)