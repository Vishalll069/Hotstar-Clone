import { LOGIN_SUCCESS } from "../constants/LoginTypes";

const initialState ={
    isSubs : false,
}


const LoginReducer =(state= initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case LOGIN_SUCCESS:
            return {...state, isSubs:payload};

        default:
            return state;
    }

}

export {LoginReducer}