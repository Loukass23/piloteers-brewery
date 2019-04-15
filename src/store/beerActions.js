import axios from 'axios';
import { config } from '../config/breweryDB_config'
//const URL = `/proxy/${config.url + config.key}`;
const _url = `https://cors-anywhere.herokuapp.com/${config.url + config.key}`;


export const getBeers = () => {
    return (dispatch) => {
        return axios.get(_url, {
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        })
            .then((res) => {
                console.log(res.data.data)
                dispatch({
                    type: 'GET_BEERS',
                    beers: res.data.data
                })
            }).catch((err) => {
                console.log(err)
                dispatch({
                    type: 'GET_BEERS_ERROR',
                    err
                })
            })
    }

}