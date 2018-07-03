import {AUTH_SUCCESS, AUTH_FAILED, AUTH_ERROR, AUTH_REQUESTED} from '../Actions/Actions';

const initailstate = {
    auth:(localStorage.getItem('trustedsource')) ? true : false,
    token:(localStorage.getItem('trustedsource')) ? localStorage.getItem('trustedsource') : '',
    authmessage:'',
}

const authendication = (state = initailstate, action) =>{
    switch(action.type){

        case AUTH_REQUESTED:
        return {...state, authmessage:action.payload};

        case AUTH_SUCCESS:
        return Object.assign({}, state, action.payload);

        case AUTH_FAILED:
        return {...state, authmessage:action.payload};

        case AUTH_ERROR:
        return {...state, authmessage:action.payload};

        default :
        return Object.assign({}, state)

    }
}


export default authendication;

