import * as types from "./actionType";

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    
    OrderLoading: false,
    OrderError: false,
    OrderSuccess: false
}

const reducer = (state = initialState, action)=>{
    const {type, payload} = action;
    switch (type) {
        case types.ADD_REQUEST:
            return {...state, isLoading: true};
        case types.ADD_SUCCESS:
            return {...state, isLoading: false, data:payload};
        case types.ADD_ERROR:
            return {...state, isLoading: false, isError: true};
        case types.ORDER_REQUEST:
            return {...state, OrderLoading: true};
        case types.ORDER_SUCCESS:
            return {...state, OrderSuccess: true,OrderLoading:false,OrderError:false};
        case types.ORDER_ERROR:
            return {...state, isLoading: false, OrderError: true};
        default:
            return state
    }
}

export {reducer}