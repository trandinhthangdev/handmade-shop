import * as types from "./../_constants/auth";
import {HANDMADE_SHOP_DATA_USER} from "../constants/constants";

let dataUser = null;


if (localStorage.getItem(HANDMADE_SHOP_DATA_USER) !== null) {
    try {
        dataUser = JSON.parse(localStorage.getItem(HANDMADE_SHOP_DATA_USER));
    } catch(e) {
        localStorage.removeItem(HANDMADE_SHOP_DATA_USER);
    }
}
const initState = {
    dataUser: dataUser,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.AUTH_DATA_USER:
            if (action.dataUser !== null) {
                localStorage.setItem(HANDMADE_SHOP_DATA_USER, JSON.stringify(action.dataUser));
            } else {
                localStorage.removeItem(HANDMADE_SHOP_DATA_USER);
            }
            return {
                ...state,
                dataUser: action.dataUser,
            };
        default:
            return state;
    }
};

export default authReducer;
