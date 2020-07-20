import {CHANGE_SEARCH_FIELD} from './constants';

const intialstate = {
    searchField: ''
}

export const searchRobots = (state=intialstate, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload}
        default:
            return state;    
    }
}