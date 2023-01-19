import * as types from "./actionType";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case types.DELETE_REQUEST:
            return {...state, isLoading: true};
        case types.DELETE_SUCCESS:
            return {...state, isLoading: false, data:payload};
        case types.DELETE_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state
    }
}

export {reducer}