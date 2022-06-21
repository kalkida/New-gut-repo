import {REGISTER_FAIL,LOGIN_REQUEST, REGISTER_SUCCESS} from './types';
import axios from 'axios';
import {registers} from '../services/auth_services'

const API_URL = "http://172.20.23.187:8000/api/user/"

export const  register = (fullname ,email ,phone)  => (dispatch)=>{
    dispatch(login_request())
    console.log("start") 
    return registers(fullname , email ,phone).then((response) => 
       {
         dispatch(
           {
              type : REGISTER_SUCCESS ,
              payload: response
           }
         )
         return console.log("success :" + response)
       }).catch((error) =>
        {
          dispatch({
            type : REGISTER_FAIL,
            payload:error
          })
          return error
        })
    

      }

export const  login_request =() =>{
    return {
        type: LOGIN_REQUEST ,
     }
}


export const  register_success =() =>{
    return {
        type: REGISTER_SUCCESS ,
        payload: userData
     }
}
      

export const  register_failure =() =>{
    return {
        type: REGISTER_FAIL
     }
}

// export const  logout =() =>{
//     return {
//         type: LOGOUT ,
//         payload: null
//      }
// }

