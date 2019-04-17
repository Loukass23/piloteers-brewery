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
            lastPage: 23,
        }

    }
    componentDidMount() {
        if (Object.getOwnPropertyNames(this.props.beers.beers).length === 0) {
            this.props.getBeers(this.state.page)
            this.props.setBeersLoading()
        }

    }
    refreshList = (page) => {

        this.props.getBeers(page)
        this.props.setBeersLoading()
    }
    handleNext = () => {
        let page = this.state.page
        if (page !== this.state.lastPage) page++
        this.setState({ page })
        this.refreshList(page)
    }
    handleLast = () => {
        let page = 23
        this.setState({ page })
        this.refreshList(page)
    }
    handleFirst = () => {
        let page = 1
        this.setState({ page })
        this.refreshList(page)
    }
    handlePrevious = () => {
        let page = this.state.page
        if (page !== 1) page--
        this.setState({ page })
        this.refreshList(page)
    }

    handlePage = (e) => {
        let page = parseInt(e.target.id)
        this.setState({ page })
        this.refreshList(page)

    }
    pages() {
        const page = this.state.page
        let pages = [page - 2, page - 1, page, page + 1, page + 2]
        return pages.map(p => {
            if (p < 1 || p > 23) return p = null
            else return p
        })

    }
    render() {
        const { beers } = this.props;

        return (
            <>
                <div className="row teal lighten-2 mt-0">

                    <h1 id="header" className="white-text"> Beer List</h1>

                </div>

                <div style={{ padding: 5 }} className="container">
                    <div style={{ marginRight: "0px" }} className="row center-align">
                        <div className="col s6 valign-wrapper">
                            <Link to='/'>
                                <button style={{ margin: 5 }} id="beer-button" className="btn-floating btn-medium waves-effect waves-light flat"><i className="material-icons">home</i></button>
                            </Link>
                            <p > Back Home</p>
                        </div>
                        <div style={{ margin: 0, padding: 0 }} className="col s6">
                            <ul className="pagination">
                                <li id="beer" className="waves-effect"><a onClick={this.handleFirst} href="#!"><i className="material-icons">fast_rewind</i></a></li>
                                <li id="beer" className="waves-effect"><a onClick={this.handlePrevious} href="#!"><i className="material-icons">chevron_left</i></a></li>
                                {this.pages()[0] && <li id="beer" className="waves-effect"><a id={this.pages()[0]} onClick={this.handlePage} href="#!">{this.pages()[0]}</a></li>}
                                {this.pages()[1] && <li id="beer" className="waves-effect"><a id={this.pages()[1]} onClick={this.handlePage} href="#!">{this.pages()[1]}</a></li>}
                                <li id="beer" className="active teal lighten-2"><a href="#!">{this.pages()[2]}</a></li>
                                {this.pages()[3] && <li id="beer" className="waves-effect"><a id={this.pages()[3]} onClick={this.handlePage} href="#!">{this.pages()[3]}</a></li>}
                                {this.pages()[4] && <li id="beer" className="waves-effect"><a id={this.pages()[4]} onClick={this.handlePage} href="#!">{this.pages()[4]}</a></li>}
                                <li id="beer" className="waves-effect"><a onClick={this.handleNext} href="#!"><i className="material-icons">chevron_right</i></a></li>
                                <li id="beer" className="waves-effect"><a onClick={this.handleLast} href="#!"><i className="material-icons">fast_forward</i></a></li>
                            </ul>
                        </div>

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