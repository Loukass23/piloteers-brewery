import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BeerListItem from './BeerListItem'


class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            filtered: [],
            search: ""
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
   componentDidMount() {
       console.log(this.props)
  this.setState({
    beers: this.props.beers
  });
}
handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
     console.log(this.state.search)
  }
handleSearch = e => {
 
    this.setState({ search: e.target.value })
 let filtered =  this.props.beers.filter(beer => beer.name.toUpperCase().match(e.target.value.toUpperCase()) )
     this.setState({ beers : filtered })
    }

    render() {
        const  beers  = this.state.beers
        return (
            <>
            <div>
                <input type="text" name="search" value={this.state.search} onChange={this.handleSearch} className="input" placeholder="Search..." />
            
            </div>
            <div className="row">
                {beers && beers.map(beer => {
                    return (

                        <Link to={'/beers/' + beer.id} key={beer.id}>
                            <BeerListItem beer={beer} />
                        </Link>

                    )
                })}
            </div>
            </>
        )
    }
}
export default BeerList

