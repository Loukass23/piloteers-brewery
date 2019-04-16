import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerListItem from './BeerListItem'
import Loader from 'react-loader-spinner'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';





class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredBeers: [],
            search: "",
            loading: true
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state.search)
    }
    handleSearch = e => {

        this.setState({ search: e.target.value })
        let filtered = this.props.beers.filter(beer => beer.name.toUpperCase().match(e.target.value.toUpperCase()))
        this.setState({ filteredBeers: filtered })
    }

    render() {
        const { beers, loading } = this.props

        console.log(this.props)
        let beerList;

        if (loading) {
            beerList = <Loader
                type="Puff"
                color="#00BFFF"
                height="100"
                width="100"
            />;
        } else {
            let beersFilter = beers.filter(beer => beer.name.toUpperCase().match(this.state.search.toUpperCase()))
            return (
                <div className="container">
                    <div>
                        <input type="text" name="search" value={this.state.search} onChange={this.handleChange} className="input" placeholder="Search by name..." />

                    </div>
                    <BootstrapTable data={beersFilter} striped hover>
                        <TableHeaderColumn width={'60%'} isKey dataField='name' dataSort={true}>Name</TableHeaderColumn>
                        <TableHeaderColumn width={'10%'} dataField='abv' dataSort={true}>ABV</TableHeaderColumn>
                        <TableHeaderColumn width={'10%'} dataField='ibu' dataSort={true}>IBU</TableHeaderColumn>
                    </BootstrapTable>
                    {/* {beersFilter.map(beer => {
                        return (
                            <Link to={'/beer/' + beer.name} key={beer.id}>
                                <ul className="collection with-header">

                                    <BeerListItem beer={beer} />
                                </ul>
                            </Link>
                        )
                    })
                    } */}


                </div>
            )
        }


        return (
            <>

                <div>
                    {beerList}
                </div>

            </>
        )
    }
}
export default BeerList

