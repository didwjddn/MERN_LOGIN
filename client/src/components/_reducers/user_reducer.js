import {
LOGIN_USER,
REGISTER_USER
}
from '../_actions/types'


export default function(state={}, action){

    
        switch(action.type) {
           
            case LOGIN_USER:
                return {...state,loginSucess:action.payload}
                case REGISTER_USER:
                    return {...state,loginSucess:action.payload}
           
            default:
                return state;
        }
}