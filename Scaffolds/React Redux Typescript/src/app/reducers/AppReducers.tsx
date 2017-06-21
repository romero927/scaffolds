//Connect the actions
import { combineReducers } from 'redux';
import ActionTypes from '../constants/AppConstants'; //Linked to Action via ActionType

const initialState = { count: 0, data: {} };

export default function App(state = initialState, action){
    switch (action.type){
        case ActionTypes.ADD:
            return Object.assign({}, state, {count: state.count + 1});
        case ActionTypes.FETCH.API.SUCCESS:
            return Object.assign({}, state, {data: action.data});
        case ActionTypes.FETCH.API.ERROR:
            return state;
        case ActionTypes.FETCH.API.PENDING:
            return state;
        default:
            return state
    }
}