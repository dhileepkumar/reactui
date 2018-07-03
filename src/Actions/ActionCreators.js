import {AUTH_ERROR, AUTH_FAILED, AUTH_REQUESTED, AUTH_SUCCESS, 
        COMPANY_NAME_REQUESTED, COMPANY_NAME_RECIEVED, COMPANY_NAME_ERROR} from './Actions';
import WebApi from '../Apis/index';
const ActionCreators = {
    userLogin(values){
        return (dispatch) =>{
            dispatch({type:AUTH_REQUESTED, success:true, payload:'Authendicating...'})
            WebApi.UserLogin(values).then(
                (logincredits) => {
                    if(logincredits.code){
                        console.log('login', logincredits)
                        localStorage.setItem('trustedsource', logincredits.response.token   );
                        dispatch({type:AUTH_SUCCESS, success:true,  payload:{
                            auth:true,
                            token:logincredits.response.token,
                            success:true,
                            authmessage:'User Authendicated Successfully'
                        }})
                    }
                    else{
                        
                        dispatch({type:AUTH_FAILED, success:false,  payload:logincredits.status})
                    }
                },
                (error)=>dispatch({type:AUTH_FAILED, success:false,  payload:error.message})
            )
            .catch(
                error =>{
                    (error) => dispatch({type:AUTH_ERROR, success:false, payload:error.message})
                }
            )
        }
    },


    userRegister(values){
        return (dispatch) =>{
            dispatch({type:AUTH_REQUESTED, success:true, payload:'Authendicating...'})
            WebApi.UserRegister(values).then(
                (registercredits) => {
                    if(registercredits.code){
                       
                        localStorage.setItem('trustedsource', registercredits.response.token   );
                        dispatch({type:AUTH_SUCCESS, success:true,  payload:{
                            auth:true,
                            token:registercredits.response.token,
                            success:true,
                            authmessage:'User Authendicated Successfully'
                        }})
                    }
                    else{
                        console.log('register', registercredits)
                        dispatch({type:AUTH_FAILED, success:false,  payload:registercredits.status})
                    }
                },
                (error)=>dispatch({type:AUTH_FAILED, success:false,  payload:error.message})
            )
            .catch(
                error =>{
                    (error) => dispatch({type:AUTH_ERROR, success:false, payload:error.message})
                }
            )
        }
    },

    CompanyName(){
        return (dispatch) =>{
            dispatch({type:COMPANY_NAME_REQUESTED, success:true, payload:'Fetching Company Name...'})
            WebApi.CompnayName().then(
                (companyname) => {
                    console.log('companyname',companyname);
                    dispatch({type:COMPANY_NAME_RECIEVED, success:false, payload:{
                    companyname:companyname,
                    authmessage:'Company Name Fetched Successfully'
                }})},
                (error) => dispatch({type:COMPANY_NAME_ERROR, success:false,  payload:error.message})
            )
            .catch(
                error=>{
                    (error)=>dispatch({type:COMPANY_NAME_ERROR, success:false, payload:error.message})
                } 
            )
        }
    }
}

export default ActionCreators;