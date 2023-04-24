import { LOGIN_SUCCESS ,LOGED_IN} from "../constants/LoginTypes";

const initialState ={
    isSubs : false,
    islog :false
}


const LoginReducer =(state= initialState, action)=>{
    const {type, payload} = action;
    switch(type){
        case LOGIN_SUCCESS:
            return {...state, isSubs:payload};

        case LOGED_IN:
            return {...state, islog:payload};

        default:
            return state;
    }

}

export {LoginReducer}