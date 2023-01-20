import * as types from "./actionType";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case types.REDUCE_REQUEST:
            return {...state, isLoading: true};
        case types.REDUCE_SUCCESS:
            return {...state, isLoading: false, data:payload};
        case types.REDUCE_ERROR:
            return {...state, isLoading: false, isError: true};
        default:
            return state
    }
}

export {reducer}