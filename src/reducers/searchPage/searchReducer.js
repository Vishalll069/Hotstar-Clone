import { GET_POP, SEARCH_ERROR, SEARCH_LOAD, SEARCH_RES } from "../../constants/searchPage/ActionTypes";

const initialSearch = {
    searchRes : [], 
    isLoading : false,
    isError : false,
    populars :[]   
}


const SearchReducer =(state = initialSearch, action)=>{
    const {type, payload} = action;
    switch(type){
        case SEARCH_RES:
            return {...state , searchRes:payload, isLoading:false, isError:false}
        case GET_POP:
            return {...state , populars:payload, isLoading:false, isError:false}
        case SEARCH_LOAD:
            return {...state ,isLoading:true}
        case SEARCH_ERROR:
            return {...state ,isError:true}
        default:
            return state
    }


}
export {SearchReducer}