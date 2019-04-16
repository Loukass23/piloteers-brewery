
const initState = {
    beers: {},
    loading: true
}

const beerReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_BEERS':
            return {
                ...state,
                beers: action.payload,
                loading: false
            }
        case 'BEERS_LOADING':
            return {
                ...state,
                loading: true
            };
        case 'GET_BEERS_ERROR':
            console.log('Get Beers error', action.err)
            return state;
        default:
            return state;
    }
}
export default beerReducer