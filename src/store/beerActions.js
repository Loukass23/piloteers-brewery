import axios from 'axios';
import { config } from '../config/breweryDB_config'

//this is a workaround to bypass breweryDB CORS policy. 
const _url = `https://cors-anywhere.herokuapp.com/${config.url + config.key}&p=`;

export const setBeersLoading = () => {
    return {
        type: 'BEERS_LOADING'
    };
};
export const getBeers = (page) => {
    return (dispatch) => {
        return axios.get(_url + page, {
            headers: {
                'Access-Control-Allow-Origin': true,
            },
        })
            .then((res) => {
                dispatch({
                    type: 'GET_BEERS',
                    payload: res.data.data
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