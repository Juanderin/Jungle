import csrfFetch from "./csrf"


export const GET_SEARCH_RESULTS = 'search/GET_SEARCH_RESULTS';
export const CLEAR_SEARCH_REULTS = 'search/CLEAR_SEARCH_RESULTS'

export const receiveSearchReults = (searchResults) => ({

    type: GET_SEARCH_RESULTS,
    searchResults

})

export const fetchSearchResults = (query) => async dispatch => {
    
    const res = await csrfFetch(`/api/products/search?query=${query}`)
    const data = await res.json()
    dispatch(receiveSearchReults(data))

}


export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_REULTS
})


const searhReducer = (state = {}, action) => {


    const newState = {...state}


    switch(action.type) {
        case GET_SEARCH_RESULTS:
            return {...action.searchResults.products};
        case CLEAR_SEARCH_REULTS:
            return {};
        default: 
            return newState;
    }

}

export default searhReducer;