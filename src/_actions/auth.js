import * as types from "./../_constants/auth";

export const setDataUser = (dataUser)=>{
    return {
        type: types.AUTH_DATA_USER,
        dataUser: dataUser,
    };
};