import { combineReducers } from 'redux'
import beerReducer from './beerReducer'


const rootReducer = combineReducers({
    beers: beerReducer,
})


export default rootReducer