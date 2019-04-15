import axios from 'axios';
import { config } from '../config/breweryDB_config'


export const getBeers = () => {
    return (dispatch) => {
        return axios.get(config.url + config.key, {
        headers: {
          'Access-Control-Allow-Origin': true,
        },
        })
            .then((res) => {
                console.log(res.data)
                dispatch({
                    type: 'GET_BEERS',
                    beers: res.data
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