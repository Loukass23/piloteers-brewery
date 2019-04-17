import React, { Component } from 'react'
import BeerList from '../components/BeerList'
import { getBeers, setBeersLoading } from '../store/beerActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './beer.css'


class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            beers: {},
        }

    }
    componentDidMount() {
        if (Object.getOwnPropertyNames(this.props.beers.beers).length === 0) {
            this.props.getBeers(this.state.page)
            this.props.setBeersLoading()
        }

    }
    refreshList = () => {

        let page = this.state.page + 1
        console.log(page)
        this.setState({ page })
        this.props.getBeers(page)
        this.props.setBeersLoading()
    }
    render() {
        const { beers } = this.props;

        return (
            <>
                <div className="row teal lighten-2 mt-0">

                    <h1 id="header" className="white-text mt-0"> Beer List</h1>

                </div>

                <div style={{ padding: 5 }} className="container">
                    <div className="col s1 valign-wrapper">
                        <Link to='/'>
                            <button style={{ margin: 5 }} id="beer-button" className="btn-floating btn-medium waves-effect waves-light flat"><i className="material-icons">home</i></button>
                        </Link>
                        <p > Back Home</p>
                    </div>
                    <div className="col s1 valign-wrapper">
                        <h2>{this.state.page}</h2>

                        <button style={{ margin: 5 }} onClick={this.refreshList} id="beer-button" className="btn-floating btn-medium waves-effect waves-light flat"><i className="material-icons">add</i></button>

                        <p > Next page</p>
                    </div>
                    <div style={{ marginTop: 10, padding: 10 }} className="z-depth-4">
                        <BeerList beers={beers.beers} loading={beers.loading} />
                    </div>
                </div>
            </>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        beers: state.beers,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        getBeers: (page) => dispatch(getBeers(page)),
        setBeersLoading: () => dispatch(setBeersLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Beer)