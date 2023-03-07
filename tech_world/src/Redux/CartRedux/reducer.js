import * as types from "./actionType";

const couponDis = localStorage.getItem("couponDiscount")
const couponCode = localStorage.getItem("couponCode")

const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    couponDiscount: 0 || couponDis ,
    CartLength:0,
    myCoupon: "" || couponCode
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case types.CART_REQUEST:
            return { ...state, isLoading: true };
        case types.CART_SUCCESS:
            return { ...state, isLoading: false, isError:false,data:payload,CartLength:payload.length };
        case types.CART_ERROR:
            return { ...state, isLoading: false, isError: true };

        case types.REDUCE_REQUEST:
            return { ...state, isLoading: true };
        case types.REDUCE_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case types.REDUCE_ERROR:
            return { ...state, isLoading: false, isError: true };

        case types.ADD_REQUEST:
            return { ...state, isLoading: true };
        case types.ADD_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case types.ADD_ERROR:
            return { ...state, isLoading: false, isError: true };

        case types.DELETE_REQUEST:
            return { ...state, isLoading: true };
        case types.DELETE_SUCCESS:
            return { ...state, isLoading: false, data: payload };
        case types.DELETE_ERROR:
            return { ...state, isLoading: false, isError: true };

     case types.ADD_COUPON_DIS:
                return {...state, myDiscount:payload}
        case types.ADD_COUPON:
                return {...state, myCoupon:payload}

        default:
            return state
    }
}

export { reducer }