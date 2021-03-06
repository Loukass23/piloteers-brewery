import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
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
    }
    handleSearch = e => {

        this.setState({ search: e.target.value })
        let filtered = this.props.beers.filter(beer => beer.name.toUpperCase().match(e.target.value.toUpperCase()))
        this.setState({ filteredBeers: filtered })
    }
    redirect(beer) {
        return (
            <Redirect push to={'/beer/' + beer.id} />
        );
    }

    render() {
        const { beers, loading } = this.props
        let beerList;

        if (loading) {
            beerList = <Loader
                type="Puff"
                color="#4db6ac"
                height="100"
                width="100"
            />;
        } else {
            let beersFilter = beers.filter(beer => beer.name.toUpperCase().match(this.state.search.toUpperCase()))
            let options = {
                onRowClick: (beer) => {
                    return <Redirect push to={'/beer/' + beer.id} />
                }
            }
            function numericSortFuncIBU(a, b, order) {
                if (order === 'desc') {
                    return Number(b.ibu) - Number(a.ibu);
                } else {
                    return Number(a.ibu) - Number(b.ibu);
                }
            }
            function numericSortFuncABV(a, b, order) {
                if (order === 'desc') {
                    return Number(b.abv) - Number(a.abv);
                } else {
                    return Number(a.abv) - Number(b.abv);
                }
            }
            function buttonFormatter(cell, row) {
                return <Link to={'/beer/' + row.id}> <button id="beer-button" className="btn-floating btn-medium  waves-effect waves-light">
                    <i className="material-icons">info</i></button></Link>;
            }
            return (
                <div className="container-fluid">
                    <div>
                        <input type="text" name="search" value={this.state.search} onChange={this.handleChange} className="input" placeholder="Search by name..." />
                    </div>
                    <BootstrapTable options={options} data={beersFilter} striped hover expandComponent={this.expandComponent}>
                        <TableHeaderColumn width={'70%'} isKey dataField='name' dataSort={true}>Name</TableHeaderColumn>
                        <TableHeaderColumn width={'10%'} sortFunc={numericSortFuncABV} dataField='abv' dataSort={true}>ABV</TableHeaderColumn>
                        <TableHeaderColumn width={'10%'} sortFunc={numericSortFuncIBU} dataField='ibu' dataSort={true}>IBU</TableHeaderColumn>
                        <TableHeaderColumn dataField="button" dataFormat={buttonFormatter}></TableHeaderColumn>
                    </BootstrapTable>
                </div>
            )
        }

        return (
            <div>
                {beerList}
            </div>
        )
    }
}
export default BeerList

